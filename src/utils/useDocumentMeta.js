import { useEffect } from 'react';

function upsertMeta(selector, attrs) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    Object.entries(attrs).forEach(([k, v]) => {
      if (k !== 'content') el.setAttribute(k, v);
    });
    document.head.appendChild(el);
  }
  if (attrs.content !== undefined) {
    el.setAttribute('content', attrs.content);
  }
}

export function formatSeoTitle(rawTitle, maxLen = 60) {
  if (!rawTitle) return 'AVITAJ SOLUTIONS | Managed IT & Digital Growth Services';
  if (rawTitle.length <= maxLen) return rawTitle;
  return `${rawTitle.slice(0, maxLen - 1).trimEnd()}…`;
}

export function formatSeoDescription(rawDesc, maxLen = 158) {
  if (!rawDesc) {
    return 'AVITAJ SOLUTIONS delivers 24/7 managed IT support, cybersecurity, Cisco networking, data center smart hands, and technical SEO from Bengaluru.';
  }
  const clean = rawDesc.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  const sliced = clean.slice(0, maxLen - 1);
  const lastSpace = sliced.lastIndexOf(' ');
  return `${(lastSpace > 100 ? sliced.slice(0, lastSpace) : sliced).trimEnd()}.`;
}

export function useDocumentMeta(title, description, options = {}) {
  const { schema = null, ogType = 'website' } = options;

  useEffect(() => {
    const finalTitle = formatSeoTitle(title);
    const finalDescription = formatSeoDescription(description);
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`;

    document.title = finalTitle;

    upsertMeta('meta[name="description"]', { name: 'description', content: finalDescription });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: ogType });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: finalTitle });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: finalDescription,
    });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: finalTitle });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: finalDescription,
    });

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    const scriptId = 'route-structured-data';
    const existingScript = document.getElementById(scriptId);
    if (schema) {
      const scriptEl = existingScript || document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      scriptEl.textContent = JSON.stringify(schema);
      if (!existingScript) {
        document.head.appendChild(scriptEl);
      }
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [title, description, ogType, schema]);
}
