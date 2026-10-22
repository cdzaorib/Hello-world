import { site } from "@/content/site";

/** Somente dados verificados: campos pendentes são omitidos. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    sameAs: [site.instagram.url],
    ...(site.whatsappNumber ? { telephone: `+${site.whatsappNumber}` } : {}),
    ...(site.email ? { email: site.email } : {}),
    ...(site.address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            addressLocality: site.address.city,
            addressRegion: site.address.state,
            ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
            addressCountry: "BR",
          },
        }
      : {}),
  };
}
