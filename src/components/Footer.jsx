import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SERVICE_CATEGORIES, getServicesByCategory } from '../data/servicesData';

export default function Footer() {
  const itServices = getServicesByCategory(SERVICE_CATEGORIES.IT_SUPPORT).slice(0, 6);
  const dmServices = getServicesByCategory(SERVICE_CATEGORIES.DIGITAL_MARKETING);

  return (
    <footer className="site-footer">
      <div className="container-avitaj">
        <div className="row g-5">
          {/* Brand Column */}
          <div className="col-lg-4">
            <Link to="/" className="d-inline-block mb-4" aria-label="AVITAJ SOLUTIONS Home">
              <img
                src="/assets/aistudio/avitaj-logo-official_91131e8d.jpeg"
                alt="AVITAJ SOLUTIONS"
                style={{
                  height: '92px',
                  width: 'auto',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  display: 'block',
                }}
                width="92"
                height="92"
              />
            </Link>
            <p className="mb-4" style={{ color: '#B4C9E4', maxWidth: '340px', fontSize: '0.9375rem' }}>
              Enterprise IT infrastructure support, cybersecurity operations, and digital growth
              consulting designed for uninterrupted business performance.
            </p>
            <div className="d-flex flex-column gap-2" style={{ fontSize: '0.9rem', color: '#D2E4FF' }}>
              <div className="d-flex align-items-center gap-2">
                <Mail size={16} style={{ color: '#50B5E5', flexShrink: 0 }} aria-hidden="true" />
                <a href="mailto:info@avitajsolutions.com" className="footer-link py-0" style={{ color: '#D2E4FF' }}>
                  info@avitajsolutions.com
                </a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Phone size={16} style={{ color: '#50B5E5', flexShrink: 0 }} aria-hidden="true" />
                <a href="tel:+919741580987" className="footer-link py-0" style={{ color: '#D2E4FF' }}>
                  +91 97415 80987
                </a>
              </div>
              <div className="d-flex align-items-start gap-2">
                <MapPin size={16} style={{ color: '#50B5E5', flexShrink: 0, marginTop: '4px' }} aria-hidden="true" />
                <span>
                  No. 29, MR Plaza, Second Floor, Bescom Road, Kullapa Circle, Kammanahalli, Bengaluru - 560084
                </span>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="mt-4 pt-2">
              <div
                className="small fw-semibold mb-2"
                style={{ color: '#8DABD0', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.75rem' }}
              >
                Connect With Us
              </div>
              <div className="footer-social-list" aria-label="AVITAJ SOLUTIONS Social Media Links">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Follow AVITAJ SOLUTIONS on LinkedIn"
                  title="LinkedIn"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Follow AVITAJ SOLUTIONS on X"
                  title="X (Twitter)"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Follow AVITAJ SOLUTIONS on Facebook"
                  title="Facebook"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Follow AVITAJ SOLUTIONS on Instagram"
                  title="Instagram"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Subscribe to AVITAJ SOLUTIONS on YouTube"
                  title="YouTube"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* IT Support Links */}
          <div className="col-6 col-md-4 col-lg-3">
            <h3 className="footer-heading">IT Support Services</h3>
            <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
              {itServices.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} className="footer-link">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="footer-link fw-semibold" style={{ color: '#78D1FF' }}>
                  All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Digital Marketing Links */}
          <div className="col-6 col-md-4 col-lg-3">
            <h3 className="footer-heading">Digital Marketing</h3>
            <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
              {dmServices.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} className="footer-link">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-md-4 col-lg-2">
            <h3 className="footer-heading">Company</h3>
            <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">
                  Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <p className="mb-0 small" style={{ color: '#8DABD0' }}>
            © {new Date().getFullYear()} AVITAJ SOLUTIONS. All rights reserved.
          </p>
          <div className="d-flex align-items-center gap-4 small">
            <Link to="/contact" className="footer-link py-0">
              SLA Support Desk
            </Link>
            <Link to="/about" className="footer-link py-0">
              Security &amp; Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
