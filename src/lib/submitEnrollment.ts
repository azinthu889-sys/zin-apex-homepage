// Website forms post straight into the ZAE Google Sheet through an Apps Script
// web app, so leads land where the team already works instead of in a console
// nobody opens. No admin token lives here — this endpoint only accepts new
// leads and is protected by a honeypot, a timing check and rate limiting.
const ENDPOINT =
  'https://script.google.com/macros/s/AKfycbyJRCb-wHMKMsdF6q1NJF2LW2t-kJ5m7IzSKvNkhLIYlhu5OICNN9QQQov7A9UAE0ee/exec'

export async function submitEnrollment(data: Record<string, unknown>) {
  const { source, ...rest } = data
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    // text/plain keeps this a "simple" request so the browser skips the CORS
    // preflight that Apps Script cannot answer.
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action: 'web_lead', form: source, ...rest }),
    redirect: 'follow',
  })
  const out = (await res.json()) as { ok: boolean; error?: string; data?: unknown }
  if (!out.ok) throw new Error(out.error || 'Submission failed')
  return out.data
}
