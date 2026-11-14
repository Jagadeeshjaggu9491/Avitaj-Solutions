<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

require_once __DIR__ . '/libs/PHPMailer/Exception.php';
require_once __DIR__ . '/libs/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/libs/PHPMailer/SMTP.php';

function sendJsonResponse(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function initApiRequest(): void
{
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
    header('Content-Type: application/json; charset=UTF-8');

    date_default_timezone_set('Asia/Kolkata');

    $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

    if ($method === 'OPTIONS') {
        sendJsonResponse(200, ['status' => 'success', 'message' => 'Preflight accepted']);
    }

    if ($method !== 'POST') {
        sendJsonResponse(405, ['status' => 'error', 'message' => 'Method not allowed. Use POST.']);
    }
}

function getMailConfig(): array
{
    $fileConfig = [];
    $configFile = __DIR__ . '/config.php';
    if (is_file($configFile)) {
        $loaded = require $configFile;
        if (is_array($loaded)) {
            $fileConfig = $loaded;
        }
    }

    $smtpUsername = getenv('AVITAJ_SMTP_USERNAME') ?: ($fileConfig['smtp_username'] ?? 'info@avitajsolutions.com');
    $adminEmail = getenv('AVITAJ_ADMIN_EMAIL') ?: ($fileConfig['admin_email'] ?? 'info@avitajsolutions.com');

    return [
        'smtp_host' => getenv('AVITAJ_SMTP_HOST') ?: ($fileConfig['smtp_host'] ?? 'smtp.hostinger.com'),
        'smtp_username' => $smtpUsername,
        'smtp_password' => getenv('AVITAJ_SMTP_PASSWORD') ?: ($fileConfig['smtp_password'] ?? ''),
        'smtp_port' => (int) (getenv('AVITAJ_SMTP_PORT') ?: ($fileConfig['smtp_port'] ?? 465)),
        'smtp_encryption' => strtolower((string) (getenv('AVITAJ_SMTP_ENCRYPTION') ?: ($fileConfig['smtp_encryption'] ?? 'ssl'))),
        'admin_email' => $adminEmail,
        'careers_email' => getenv('AVITAJ_CAREERS_EMAIL') ?: ($fileConfig['careers_email'] ?? $adminEmail),
        'from_email' => getenv('AVITAJ_FROM_EMAIL') ?: ($fileConfig['from_email'] ?? $smtpUsername),
        'from_name' => getenv('AVITAJ_FROM_NAME') ?: ($fileConfig['from_name'] ?? 'AVITAJ SOLUTIONS'),
    ];
}

function getRequestPayload(): array
{
    $rawBody = file_get_contents('php://input');
    $jsonBody = [];

    if (is_string($rawBody) && trim($rawBody) !== '') {
        $decoded = json_decode($rawBody, true);
        if (is_array($decoded)) {
            $jsonBody = $decoded;
        }
    }

    return array_merge($_POST ?? [], $jsonBody);
}

function cleanInput($value): string
{
    return trim(strip_tags((string) ($value ?? '')));
}

function sanitizeHeaderText($value): string
{
    return trim(str_replace(["\r", "\n"], ' ', cleanInput($value)));
}

function escapeHtml($value): string
{
    return htmlspecialchars((string) ($value ?? ''), ENT_QUOTES, 'UTF-8');
}

function displayValue($value): string
{
    $trimmed = trim((string) ($value ?? ''));
    return $trimmed !== ''
        ? nl2br(escapeHtml($trimmed))
        : '<span style="color:#64748b;">Not provided</span>';
}

function renderDetailsRows(array $rows): string
{
    $html = '';

    foreach ($rows as $label => $value) {
        $html .= "
            <tr>
                <td style='width:34%;padding:14px 16px;border-bottom:1px solid #e2e8f0;color:#0B1F3A;font-weight:700;vertical-align:top;background:#f8fafc;'>" . escapeHtml($label) . "</td>
                <td style='padding:14px 16px;border-bottom:1px solid #e2e8f0;color:#334155;vertical-align:top;'>" . displayValue($value) . "</td>
            </tr>
        ";
    }

    return $html;
}

function buildPlainDetails(array $rows): string
{
    $lines = [];

    foreach ($rows as $label => $value) {
        $trimmed = trim((string) ($value ?? ''));
        $lines[] = $label . ': ' . ($trimmed !== '' ? $trimmed : 'Not provided');
    }

    return implode("\n", $lines);
}

function getAvitajLogoSrc(PHPMailer $mail): string
{
    $logoCandidates = [
        __DIR__ . '/../assets/aistudio/avitaj-logo-official_91131e8d.jpeg' => 'avitaj-logo.jpeg',
        __DIR__ . '/../favicon.png' => 'avitaj-favicon.png',
    ];

    foreach ($logoCandidates as $path => $filename) {
        if (is_file($path)) {
            try {
                $mail->addEmbeddedImage($path, 'avitajBrandLogo', $filename);
                return 'cid:avitajBrandLogo';
            } catch (PHPMailerException $e) {
                return '';
            }
        }
    }

    return '';
}

function renderAvitajLogo(string $logoSrc): string
{
    if ($logoSrc !== '') {
        return "<img src='$logoSrc' width='180' alt='AVITAJ SOLUTIONS' style='display:block;margin:0 auto 20px;max-width:180px;height:auto;background:#ffffff;border-radius:10px;padding:10px 14px;'>";
    }

    return "
        <div style='margin:0 auto 20px;width:210px;background:#ffffff;border-radius:12px;padding:14px 16px;text-align:center;'>
            <div style='color:#0B1F3A;font-size:22px;line-height:1.1;font-weight:800;letter-spacing:0.6px;'>AVITAJ</div>
            <div style='margin-top:4px;color:#0052CC;font-size:11px;line-height:1.3;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;'>SOLUTIONS</div>
        </div>
    ";
}

function buildAvitajEmailHtml(
    string $logoSrc,
    string $docTitle,
    string $badgeLabel,
    string $headline,
    string $subtext,
    string $detailsRows,
    string $submittedAt,
    string $footerNote
): string {
    $logo = renderAvitajLogo($logoSrc);

    return "
<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<title>" . escapeHtml($docTitle) . "</title>
</head>
<body style='margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;'>
<table width='100%' cellpadding='0' cellspacing='0' role='presentation' style='background:#eef2f7;padding:36px 12px;'>
<tr>
<td align='center'>
<table width='680' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;max-width:680px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 18px 45px rgba(11,31,58,0.14);'>
<tr>
<td style='background:#0B1F3A;padding:32px 34px 28px;text-align:center;'>
    $logo
    <div style='display:inline-block;background:#0052CC;color:#ffffff;border-radius:999px;padding:8px 18px;font-size:12px;letter-spacing:1.1px;text-transform:uppercase;font-weight:800;'>" . escapeHtml($badgeLabel) . "</div>
    <h1 style='margin:18px 0 8px;color:#ffffff;font-size:26px;line-height:1.25;font-weight:800;'>" . escapeHtml($headline) . "</h1>
    <p style='margin:0;color:rgba(255,255,255,0.8);font-size:15px;line-height:1.6;'>" . escapeHtml($subtext) . "</p>
</td>
</tr>
<tr>
<td style='padding:32px 34px;'>
    <p style='margin:0 0 18px;color:#475569;font-size:14px;line-height:1.6;'><strong style='color:#0B1F3A;'>Submitted (IST):</strong> " . escapeHtml($submittedAt) . "</p>
    <table width='100%' cellpadding='0' cellspacing='0' role='presentation' style='border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;border-collapse:separate;border-spacing:0;font-size:14px;'>
        $detailsRows
    </table>
    <p style='margin:24px 0 0;color:#475569;font-size:13px;line-height:1.6;'>" . escapeHtml($footerNote) . "</p>
</td>
</tr>
<tr>
<td align='center' style='background:#f8fafc;padding:20px;color:#64748b;font-size:12px;border-top:1px solid #e2e8f0;'>
AVITAJ SOLUTIONS · No. 29, MR Plaza, Kammanahalli, Bengaluru - 560084 · +91 97415 80987
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>
";
}

function sendAvitajMail(array $options): void
{
    $config = getMailConfig();

    if (trim((string) $config['smtp_password']) === '') {
        sendJsonResponse(500, [
            'status' => 'error',
            'message' => 'Mail server SMTP password is not configured on the server. Add it in api/config.php or AVITAJ_SMTP_PASSWORD.',
        ]);
    }

    try {
        $mail = new PHPMailer(true);
        $mail->CharSet = PHPMailer::CHARSET_UTF8;
        $mail->isSMTP();
        $mail->Host = $config['smtp_host'];
        $mail->SMTPAuth = true;
        $mail->Username = $config['smtp_username'];
        $mail->Password = $config['smtp_password'];
        $mail->SMTPSecure = $config['smtp_encryption'] === 'ssl'
            ? PHPMailer::ENCRYPTION_SMTPS
            : PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = $config['smtp_port'];

        $logoSrc = getAvitajLogoSrc($mail);

        $mail->setFrom($config['from_email'], $config['from_name']);
        $mail->addAddress($options['to_email'], $options['to_name'] ?? $config['from_name']);

        if (!empty($options['reply_to_email']) && filter_var($options['reply_to_email'], FILTER_VALIDATE_EMAIL)) {
            $mail->addReplyTo(
                $options['reply_to_email'],
                sanitizeHeaderText($options['reply_to_name'] ?? $options['reply_to_email'])
            );
        } else {
            $mail->addReplyTo($config['from_email'], $config['from_name']);
        }

        $mail->Subject = sanitizeHeaderText($options['subject']);
        $mail->isHTML(true);
        $mail->Body = buildAvitajEmailHtml(
            $logoSrc,
            $options['doc_title'],
            $options['badge_label'],
            $options['headline'],
            $options['subtext'],
            $options['details_rows'],
            $options['submitted_at'],
            $options['footer_note']
        );
        $mail->AltBody = $options['plain_intro'] . "\n\nSubmitted (IST): " . $options['submitted_at'] . "\n" . $options['plain_details'];

        $mail->send();
    } catch (\Throwable $e) {
        error_log('AVITAJ mail dispatch error: ' . $e->getMessage());
        sendJsonResponse(500, [
            'status' => 'error',
            'message' => 'Unable to send email right now. Please try again shortly or email info@avitajsolutions.com directly.',
        ]);
    }
}
