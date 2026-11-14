<?php
require_once __DIR__ . '/mailer-helper.php';

initApiRequest();

$payload = getRequestPayload();
$config = getMailConfig();

$role = cleanInput($payload['role'] ?? '');
$fullName = cleanInput($payload['fullName'] ?? ($payload['full_name'] ?? ($payload['name'] ?? '')));
$email = cleanInput($payload['email'] ?? '');
$phone = cleanInput($payload['phone'] ?? ($payload['mobile'] ?? ''));
$portfolioOrLinkedin = cleanInput($payload['portfolioOrLinkedin'] ?? ($payload['portfolio_url'] ?? ''));
$experienceNotes = cleanInput($payload['experienceNotes'] ?? ($payload['experience_notes'] ?? ''));
$pageUrl = cleanInput($payload['pageUrl'] ?? ($payload['page_url'] ?? ''));

if ($role === '') {
    sendJsonResponse(400, [
        'status' => 'error',
        'message' => 'Please select the position you are applying for.',
    ]);
}

if (mb_strlen($fullName) < 2) {
    sendJsonResponse(400, [
        'status' => 'error',
        'message' => 'Please enter your full name.',
    ]);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendJsonResponse(400, [
        'status' => 'error',
        'message' => 'Please provide a valid email address.',
    ]);
}

if ($phone !== '' && !preg_match('/^[+\d\s().-]{7,20}$/', $phone)) {
    sendJsonResponse(400, [
        'status' => 'error',
        'message' => 'Please provide a valid phone number.',
    ]);
}

if ($portfolioOrLinkedin !== '' && !filter_var($portfolioOrLinkedin, FILTER_VALIDATE_URL)) {
    sendJsonResponse(400, [
        'status' => 'error',
        'message' => 'Please provide a valid LinkedIn or portfolio URL (including https://).',
    ]);
}

if (mb_strlen($experienceNotes) < 15) {
    sendJsonResponse(400, [
        'status' => 'error',
        'message' => 'Please summarize your relevant certifications or experience (at least 15 characters).',
    ]);
}

$submittedAt = date('d M Y, h:i A') . ' IST';

$rows = [
    'Position Applying For' => $role,
    'Candidate Name' => $fullName,
    'Email Address' => $email,
    'Phone Number' => $phone,
    'LinkedIn / Portfolio URL' => $portfolioOrLinkedin,
    'Certifications & Experience Summary' => $experienceNotes,
    'Submitted Page URL' => $pageUrl,
];

sendAvitajMail([
    'to_email' => $config['careers_email'] ?: $config['admin_email'],
    'to_name' => $config['from_name'] . ' Talent Desk',
    'reply_to_email' => $email,
    'reply_to_name' => $fullName,
    'subject' => 'New Job Application: ' . $role . ' - ' . $fullName,
    'doc_title' => 'New AVITAJ SOLUTIONS Job Application',
    'badge_label' => 'New Candidate Application',
    'headline' => 'A candidate applied for ' . $role . '.',
    'subtext' => 'Candidate qualifications and contact details are listed below.',
    'details_rows' => renderDetailsRows($rows),
    'submitted_at' => $submittedAt,
    'footer_note' => 'Submitted via the AVITAJ SOLUTIONS Careers portal.',
    'plain_intro' => 'New Job Application - AVITAJ SOLUTIONS',
    'plain_details' => buildPlainDetails($rows),
]);

sendJsonResponse(200, [
    'status' => 'success',
    'mode' => 'live',
    'message' => 'Application submitted successfully to the AVITAJ SOLUTIONS talent team.',
]);
