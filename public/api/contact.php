<?php
require_once __DIR__ . '/mailer-helper.php';

initApiRequest();

$payload = getRequestPayload();
$config = getMailConfig();

$fullName = cleanInput($payload['fullName'] ?? ($payload['full_name'] ?? ($payload['name'] ?? '')));
$email = cleanInput($payload['email'] ?? '');
$phone = cleanInput($payload['phone'] ?? ($payload['mobile'] ?? ''));
$company = cleanInput($payload['company'] ?? '');
$service = cleanInput($payload['service'] ?? '');
$message = cleanInput($payload['message'] ?? '');
$pageUrl = cleanInput($payload['pageUrl'] ?? ($payload['page_url'] ?? ''));

if (mb_strlen($fullName) < 2) {
    sendJsonResponse(400, [
        'status' => 'error',
        'message' => 'Please enter your full name (at least 2 characters).',
    ]);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendJsonResponse(400, [
        'status' => 'error',
        'message' => 'Please enter a valid work email address.',
    ]);
}

if ($phone !== '' && !preg_match('/^[+\d\s().-]{7,20}$/', $phone)) {
    sendJsonResponse(400, [
        'status' => 'error',
        'message' => 'Please provide a valid phone number.',
    ]);
}

if ($service === '') {
    sendJsonResponse(400, [
        'status' => 'error',
        'message' => 'Please select the service area you are inquiring about.',
    ]);
}

if (mb_strlen($message) < 15) {
    sendJsonResponse(400, [
        'status' => 'error',
        'message' => 'Please share a brief overview of your requirements (at least 15 characters).',
    ]);
}

$submittedAt = date('d M Y, h:i A') . ' IST';

$rows = [
    'Full Name' => $fullName,
    'Work Email' => $email,
    'Phone Number' => $phone,
    'Company / Organization' => $company,
    'Primary Service Interest' => $service,
    'Project Scope & Timeline' => $message,
    'Submitted Page URL' => $pageUrl,
];

sendAvitajMail([
    'to_email' => $config['admin_email'],
    'to_name' => $config['from_name'],
    'reply_to_email' => $email,
    'reply_to_name' => $fullName,
    'subject' => 'New Consultation Inquiry: ' . $service . ' - ' . $fullName,
    'doc_title' => 'New AVITAJ SOLUTIONS Consultation Inquiry',
    'badge_label' => 'New Consultation Request',
    'headline' => 'A prospective client requested a technical consultation.',
    'subtext' => 'Review the infrastructure or digital scope below and follow up directly via Reply.',
    'details_rows' => renderDetailsRows($rows),
    'submitted_at' => $submittedAt,
    'footer_note' => 'Submitted via the AVITAJ SOLUTIONS website contact desk.',
    'plain_intro' => 'New Consultation Request - AVITAJ SOLUTIONS',
    'plain_details' => buildPlainDetails($rows),
]);

sendJsonResponse(200, [
    'status' => 'success',
    'mode' => 'live',
    'message' => 'Thank you. Your consultation request has been sent to our solutions engineering desk.',
]);
