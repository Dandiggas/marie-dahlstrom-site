// Receives sign-ups from signup/index.html and appends one row per fan to the
// "Signups" tab of the sheet below. Deployed as a web app: execute as the sheet
// owner (dandiggasmusic@gmail.com), access "Anyone".
const SHEET_ID = '1thFSkwC7L9vfB3nzk3QpTCMtQZwhriPnPEM8nfuNuuY';
const TAB = 'Signups';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function doPost(e) {
  const p = (e && e.parameter) || {};
  // Honeypot: real people never see or fill the "website" field.
  if (p.website) return reply_({ ok: true });

  const email = String(p.email || '').trim().toLowerCase().slice(0, 254);
  const city = String(p.city || '').trim().replace(/\s+/g, ' ').slice(0, 80);
  const source = String(p.source || '').trim().slice(0, 80);
  if (!EMAIL_RE.test(email)) return reply_({ ok: false, error: 'email' });
  if (!city) return reply_({ ok: false, error: 'city' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    // Leading apostrophe stops a city like "=HYPERLINK(...)" running as a formula.
    const safe = (s) => (/^[=+\-@]/.test(s) ? "'" + s : s);
    SpreadsheetApp.openById(SHEET_ID).getSheetByName(TAB)
      .appendRow([new Date(), safe(email), safe(city), safe(source)]);
  } finally {
    lock.releaseLock();
  }
  return reply_({ ok: true });
}

function doGet() {
  return reply_({ ok: true, service: 'marie-signups' });
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
