/**
 * Contact and Job Application submission service.
 * Targets `/api/contact.php` and `/api/careers.php` (PHPMailer SMTP endpoints) by default,
 * and supports overriding via `VITE_CONTACT_API_URL` and `VITE_CAREERS_API_URL`.
 */

export const CONTACT_CONFIG = {
  endpointUrl: import.meta.env.VITE_CONTACT_API_URL || '/api/contact.php',
  careersEndpointUrl: import.meta.env.VITE_CAREERS_API_URL || '/api/careers.php',
};

async function postJsonForm(url, payload, fallbackErrorMessage) {
  const enrichedPayload = {
    ...payload,
    pageUrl: payload.pageUrl || (typeof window !== 'undefined' ? window.location.href : ''),
    submittedAt: payload.submittedAt || new Date().toISOString(),
  };

  let response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify(enrichedPayload),
    });
  } catch {
    throw new Error('Network error while connecting to the mail server. Please try again or email info@avitajsolutions.com.');
  }

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error(fallbackErrorMessage);
  }

  const data = await response.json();
  if (!response.ok || data?.status !== 'success') {
    throw new Error(data?.message || fallbackErrorMessage);
  }

  return {
    mode: data.mode || 'live',
    message: data.message,
  };
}

export async function submitContactInquiry(payload) {
  const result = await postJsonForm(
    CONTACT_CONFIG.endpointUrl,
    payload,
    'Unable to send your consultation request right now. Please try again or email info@avitajsolutions.com.'
  );

  return {
    mode: result.mode,
    message:
      result.message ||
      'Thank you. Your consultation request has been sent to our solutions engineering desk.',
  };
}

export async function submitCareerApplication(payload) {
  const result = await postJsonForm(
    CONTACT_CONFIG.careersEndpointUrl,
    payload,
    'Unable to submit your application right now. Please try again or email info@avitajsolutions.com.'
  );

  return {
    mode: result.mode,
    message:
      result.message ||
      'Application submitted successfully to the AVITAJ SOLUTIONS talent team.',
  };
}
