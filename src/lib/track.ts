/**
 * Mensuração de cliques sem instalar pixels. Dispara um CustomEvent
 * ("conceito:track") e, se existir, empurra para window.dataLayer.
 * Conecte um provedor (GA4/GTM) apenas após configurar consentimento.
 */
export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("conceito:track", { detail: { name, ...params } }));
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer?.push({ event: name, ...params });
}
