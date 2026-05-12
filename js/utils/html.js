// Shared HTML safety and text conversion helpers.
// Keep this file dependency-free because it is loaded as a plain browser script
// and also evaluated inside Node smoke tests.

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function decodeBasicHtmlEntities(value) {
  return String(value ?? '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'");
}

function htmlToPlainText(html) {
  return decodeBasicHtmlEntities(
    String(html ?? '')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/\s*(p|div|li|tr|h[1-6])\s*>/gi, '\n')
      .replace(/<\s*li(?:\s[^>]*)?>/gi, '• ')
      .replace(/<[^>]*>/g, '')
  )
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function safeExternalUrl(value, fallback = '#') {
  const url = String(value ?? '').trim();
  if (/^https:\/\//i.test(url) || /^http:\/\//i.test(url)) return url;
  return fallback;
}
