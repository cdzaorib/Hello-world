import { site } from "@/content/site";

/** Somente dados verificados: campos pendentes são omitidos. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/images/logo.png`,
    sameAs: [site.instagram.url],
    areaServed: { "@type": "City", name: site.location.city },
    address: {
      "@type": "PostalAddress",
      ...(site.street ? { streetAddress: site.street } : {}),
      addressNeighborhood: site.location.neighborhood,
      addressLocality: site.location.city,
      addressRegion: site.location.state,
      addressCountry: "BR",
    },
    ...(site.whatsappNumber ? { telephone: `+${site.whatsappNumber}` } : {}),
    ...(site.email ? { email: site.email } : {}),
  };
}
