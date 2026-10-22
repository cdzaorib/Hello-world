import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { treatmentsWithPage } from "@/content/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/politica-de-privacidade`, changeFrequency: "yearly", priority: 0.2 },
    ...treatmentsWithPage.map((t) => ({ url: `${site.url}/tratamentos/${t.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
