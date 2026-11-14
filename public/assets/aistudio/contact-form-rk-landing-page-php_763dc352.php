<?php
use PHPMailer\PHPMailer\PHPMailer;

require 'libs/PHPMailer/PHPMailer.php';
require 'libs/PHPMailer/SMTP.php';
require 'libs/PHPMailer/Exception.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    echo json_encode(["status" => "success", "message" => "Preflight accepted"]);
    exit;
}

date_default_timezone_set('Asia/Kolkata');

$email_host = getenv('RK_SMTP_HOST') ?: 'smtp.hostinger.com';
$email_username = getenv('RK_SMTP_USERNAME') ?: 'contact@rkshairandskinclinics.com';
$email_password = getenv('RK_SMTP_PASSWORD') ?: 'f6WGfY^.j5qmEnF';
$email_port = getenv('RK_SMTP_PORT') ?: 465;
$email_encryption = getenv('RK_SMTP_ENCRYPTION') ?: 'ssl';
$admin_email = getenv('RK_ADMIN_EMAIL') ?: 'rkshairandskinclinics@gmail.com';
$from_email = getenv('RK_FROM_EMAIL') ?: $email_username;

$response = ["status" => "error", "message" => "Invalid request"];

function cleanInput($value)
{
    return trim(strip_tags($value ?? ''));
}

function escapeHtml($value)
{
    return htmlspecialchars($value ?? '', ENT_QUOTES, 'UTF-8');
}

function displayValue($value)
{
    $value = trim($value ?? '');
    return $value !== '' ? nl2br(escapeHtml($value)) : '<span style="color:#7d8793;">Not provided</span>';
}

function renderDetailsRows($rows)
{
    $html = '';

    foreach ($rows as $label => $value) {
        $html .= "
            <tr>
                <td style='width:34%;padding:14px 16px;border-bottom:1px solid #e5eaf1;color:#0B1F3A;font-weight:700;vertical-align:top;background:#f8fafc;'>" . escapeHtml($label) . "</td>
                <td style='padding:14px 16px;border-bottom:1px solid #e5eaf1;color:#334155;vertical-align:top;'>" . displayValue($value) . "</td>
            </tr>
        ";
    }

    return $html;
}

function buildPlainDetails($rows)
{
    $lines = [];

    foreach ($rows as $label => $value) {
        $value = trim($value ?? '');
        $lines[] = $label . ': ' . ($value !== '' ? $value : 'Not provided');
    }

    return implode("\n", $lines);
}

function getLogoSrc(PHPMailer $mail)
{
    $logoCandidates = [
        __DIR__ . '/../images/rk-logo.png' => 'rk-logo.png',
        __DIR__ . '/../images/logo.png' => 'rk-logo.png',
        __DIR__ . '/../images/rks-logo.png' => 'rk-logo.png',
    ];

    foreach ($logoCandidates as $path => $filename) {
        if (file_exists($path)) {
            $mail->addEmbeddedImage($path, 'rkClinicLogo', $filename);
            return 'cid:rkClinicLogo';
        }
    }

    return '';
}

function renderLogo($logoSrc)
{
    if ($logoSrc) {
        return "<img src='$logoSrc' width='190' alt=\"RK's Hair & Skin Clinic\" style='display:block;margin:0 auto 22px;max-width:190px;height:auto;background:#ffffff;border-radius:10px;padding:10px 14px;'>";
    }

    return "
        <div style='margin:0 auto 22px;width:188px;background:#ffffff;border-radius:12px;padding:14px 16px;text-align:center;'>
            <div style='color:#0B1F3A;font-size:28px;line-height:1;font-weight:800;letter-spacing:0;'>RK's</div>
            <div style='margin-top:5px;color:#0B1F3A;font-size:11px;line-height:1.35;font-weight:700;text-transform:uppercase;'>Hair & Skin Clinic</div>
        </div>
    ";
}

function configureMailer(PHPMailer $mail, $host, $username, $password, $port, $encryption)
{
    $mail->isSMTP();
    $mail->Host = $host;
    $mail->SMTPAuth = true;
    $mail->Username = $username;
    $mail->Password = $password;
    $mail->SMTPSecure = strtolower($encryption) === 'ssl'
        ? PHPMailer::ENCRYPTION_SMTPS
        : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = (int) $port;
}

function buildAdminEmail($logoSrc, $detailsRows, $submittedAt)
{
    $logo = renderLogo($logoSrc);

    return "
<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<title>New RK's Hair & Skin Clinic Lead</title>
</head>
<body style='margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;'>
<table width='100%' cellpadding='0' cellspacing='0' role='presentation' style='background:#eef2f7;padding:36px 12px;'>
<tr>
<td align='center'>
<table width='680' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;max-width:680px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 18px 45px rgba(11,31,58,0.16);'>
<tr>
<td style='background:#0B1F3A;padding:32px 34px 28px;text-align:center;'>
    $logo
    <div style='display:inline-block;background:#F5B400;color:#0B1F3A;border-radius:999px;padding:8px 18px;font-size:12px;letter-spacing:1.2px;text-transform:uppercase;font-weight:800;'>New Consultation Lead</div>
    <h1 style='margin:18px 0 8px;color:#ffffff;font-size:32px;line-height:1.2;font-weight:800;'>A patient requested a free hair consultation.</h1>
    <p style='margin:0;color:rgba(255,255,255,0.78);font-size:15px;line-height:1.7;'>Please contact the lead as soon as possible.</p>
</td>
</tr>
<tr>
<td style='padding:34px;'>
    <p style='margin:0 0 20px;color:#475569;font-size:14px;line-height:1.7;'><strong style='color:#0B1F3A;'>Submitted:</strong> $submittedAt</p>
    <table width='100%' cellpadding='0' cellspacing='0' role='presentation' style='border:1px solid #e5eaf1;border-radius:10px;overflow:hidden;border-collapse:separate;border-spacing:0;font-size:14px;'>
        $detailsRows
    </table>
    <p style='margin:26px 0 0;color:#475569;font-size:14px;line-height:1.7;'>This lead was sent from the RK's Hair & Skin Clinic landing page.</p>
</td>
</tr>
<tr>
<td align='center' style='background:#f8fafc;padding:20px;color:#64748b;font-size:12px;'>
RK's Hair & Skin Clinic | Advanced Hair Treatments in Hyderabad
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

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $fullName = cleanInput($_POST['name'] ?? ($_POST['fullName'] ?? ''));
    $mobile = cleanInput($_POST['mobile'] ?? ($_POST['phone'] ?? ''));
    $email = cleanInput($_POST['email'] ?? '');
    $concern = cleanInput($_POST['concern'] ?? '');
    $formType = cleanInput($_POST['form_type'] ?? 'Website Consultation Form');
    $pageUrl = cleanInput($_POST['page_url'] ?? '');

    if (!$fullName || !$mobile || !$concern) {
        echo json_encode(["status" => "error", "message" => "Please fill in your name, mobile number, and hair concern."]);
        exit;
    }

    if (!preg_match('/^[0-9]{10}$/', $mobile)) {
        echo json_encode(["status" => "error", "message" => "Please enter a valid 10-digit mobile number."]);
        exit;
    }

    $submittedAt = date('d M Y, h:i A');
    $submissionRows = [
        'Full Name' => $fullName,
        'Mobile Number' => $mobile,
        'Hair Concern' => $concern,
        'Form Type' => $formType,
        'Page URL' => $pageUrl,
    ];

    $detailsRows = renderDetailsRows($submissionRows);
    $plainDetails = buildPlainDetails($submissionRows);

    try {
        $adminMail = new PHPMailer(true);
        configureMailer($adminMail, $email_host, $email_username, $email_password, $email_port, $email_encryption);
        $adminLogoSrc = getLogoSrc($adminMail);

        $adminMail->setFrom($from_email, "RK's Hair & Skin Clinic");
        $adminMail->addAddress($admin_email, "RK's Hair & Skin Clinic");
        $adminMail->addReplyTo($from_email, "RK's Hair & Skin Clinic");
        $adminMail->Subject = "New Hair Consultation Lead - RK's Hair & Skin Clinic";
        $adminMail->isHTML(true);
        $adminMail->Body = buildAdminEmail($adminLogoSrc, $detailsRows, $submittedAt);
        $adminMail->AltBody = "New RK's Hair & Skin Clinic consultation lead\n\n" . $plainDetails;
        $adminMail->send();

        $response = ["status" => "success", "message" => "Thank you! Your consultation request has been sent."];
    } catch (\Exception $e) {
        $response["message"] = "Failed to send email. Please try again later.";
        error_log("RK contact mail error: " . $e->getMessage());
    }
}

echo json_encode($response);
