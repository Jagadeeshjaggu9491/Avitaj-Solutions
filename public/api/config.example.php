<?php
/**
 * SMTP Configuration Template for AVITAJ SOLUTIONS Forms (Hostinger / cPanel / PHP Hosting)
 *
 * Instructions for deployment:
 * 1. Copy this file to `config.php` in the same `/api/` directory (do NOT commit `config.php`).
 * 2. Enter your Hostinger email mailbox password in `smtp_password` (or set `AVITAJ_SMTP_PASSWORD` env var).
 */

return [
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_username' => 'info@avitajsolutions.com',
    'smtp_password' => '',
    'smtp_port' => 465,
    'smtp_encryption' => 'ssl',
    'admin_email' => 'info@avitajsolutions.com',
    'careers_email' => 'info@avitajsolutions.com',
    'from_email' => 'info@avitajsolutions.com',
    'from_name' => 'AVITAJ SOLUTIONS',
];
