/** Sends a conversion event to GA4 / GTM when they are installed. Safe to call anywhere on the client. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
  try {
    w.dataLayer?.push({ event, ...params })
    w.gtag?.('event', event, params)
  } catch {}
}
