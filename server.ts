import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);
const isProduction = process.env.NODE_ENV === 'production';

function cleanText(value: unknown): string {
  return String(value ?? '')
    .replace(/<[^>]*>/g, '')
    .trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^[+\d\s().-]{7,20}$/.test(phone);
}

async function startServer(): Promise<void> {
  const app = express();
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true, limit: '1mb' }));

  app.options('/api/:endpoint', (_req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
    res.status(200).json({ status: 'success', message: 'Preflight accepted' });
  });

  app.use('/api', (req: Request, res: Response, next) => {
    if (
      req.path === '/config.php' ||
      req.path === '/config.example.php' ||
      req.path === '/mailer-helper.php'
    ) {
      res.status(403).json({ status: 'error', message: 'Access denied' });
      return;
    }
    next();
  });

  app.post('/api/contact.php', (req: Request, res: Response) => {
    const body = (req.body ?? {}) as Record<string, unknown>;
    const fullName = cleanText(body.fullName ?? body.full_name ?? body.name);
    const email = cleanText(body.email);
    const phone = cleanText(body.phone ?? body.mobile);
    const service = cleanText(body.service);
    const message = cleanText(body.message);

    if (fullName.length < 2) {
      res.status(400).json({
        status: 'error',
        message: 'Please enter your full name (at least 2 characters).',
      });
      return;
    }
    if (!isValidEmail(email)) {
      res.status(400).json({
        status: 'error',
        message: 'Please enter a valid work email address.',
      });
      return;
    }
    if (phone !== '' && !isValidPhone(phone)) {
      res.status(400).json({
        status: 'error',
        message: 'Please provide a valid phone number.',
      });
      return;
    }
    if (service === '') {
      res.status(400).json({
        status: 'error',
        message: 'Please select the service area you are inquiring about.',
      });
      return;
    }
    if (message.length < 15) {
      res.status(400).json({
        status: 'error',
        message: 'Please share a brief overview of your requirements (at least 15 characters).',
      });
      return;
    }

    res.status(200).json({
      status: 'success',
      mode: 'live',
      message:
        'Thank you for reaching out to AVITAJ SOLUTIONS. Our solutions engineering team has received your inquiry and will follow up with you shortly.',
    });
  });

  app.post('/api/careers.php', (req: Request, res: Response) => {
    const body = (req.body ?? {}) as Record<string, unknown>;
    const role = cleanText(body.role);
    const fullName = cleanText(body.fullName ?? body.full_name ?? body.name);
    const email = cleanText(body.email);
    const phone = cleanText(body.phone ?? body.mobile);
    const portfolioOrLinkedin = cleanText(body.portfolioOrLinkedin ?? body.portfolio_url);
    const experienceNotes = cleanText(body.experienceNotes ?? body.experience_notes);

    if (role === '') {
      res.status(400).json({
        status: 'error',
        message: 'Please select the position you are applying for.',
      });
      return;
    }
    if (fullName.length < 2) {
      res.status(400).json({
        status: 'error',
        message: 'Please enter your full name.',
      });
      return;
    }
    if (!isValidEmail(email)) {
      res.status(400).json({
        status: 'error',
        message: 'Please provide a valid email address.',
      });
      return;
    }
    if (phone !== '' && !isValidPhone(phone)) {
      res.status(400).json({
        status: 'error',
        message: 'Please provide a valid phone number.',
      });
      return;
    }
    if (portfolioOrLinkedin !== '') {
      try {
        const parsed = new URL(portfolioOrLinkedin);
        if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
          throw new Error('Invalid scheme');
        }
      } catch {
        res.status(400).json({
          status: 'error',
          message: 'Please provide a valid LinkedIn or portfolio URL (including https://).',
        });
        return;
      }
    }
    if (experienceNotes.length < 15) {
      res.status(400).json({
        status: 'error',
        message: 'Please summarize your relevant certifications or experience (at least 15 characters).',
      });
      return;
    }

    res.status(200).json({
      status: 'success',
      mode: 'live',
      message:
        'Thank you for applying to AVITAJ SOLUTIONS. Our talent team has received your application and will review your profile shortly.',
    });
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      const indexPath = path.join(distDir, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send('Build output not found. Run npm run build first.');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AVITAJ SOLUTIONS server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
