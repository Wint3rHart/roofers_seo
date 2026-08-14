import { getService } from "@/data/services";
import JsonLdScript from "@/components/shared/json_ld_script";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/data/json_ld";
import { SITE_URL } from "@/data/site_config";
import LocalSeoHero from "@/components/services/local_seo/hero";
import LocalSeoContentLayout from "@/components/services/local_seo/content_layout";

export const metadata = {
  title: "SEO for Roofers | No Contracts, Roofing-Specific Strategy",
  description:
    "SEO for roofers that books jobs, not just rankings. Roofing-specific strategy, month-to-month terms, and a 90-day guarantee in smaller markets.",
  openGraph: {
    title: "SEO for Roofers | No Contracts, Roofing-Specific Strategy",
    description:
      "SEO for roofers that books jobs, not just rankings. Month-to-month terms, no long-term contracts.",
    url: `${SITE_URL}/services/seo-for-roofers`,
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO for Roofers | No Contracts, Roofing-Specific Strategy",
    description:
      "SEO for roofers that books jobs, not just rankings.",
    images: ["/og-image.svg"],
  },
};

export default function LocalSeoPage() {
  // Data entry is keyed "local-seo" but this route lives at
  // /services/seo-for-roofers — override slug so schema URLs match the real route.
  const data = { ...getService("local-seo"), slug: "seo-for-roofers" };

  return (
    <main className="bg-[#fffcf2]">
      <JsonLdScript
        schema={[
          serviceSchema(data),
          breadcrumbSchema(data),
          faqSchema(data.faqs),
        ]}
      />
      <LocalSeoHero />
      <LocalSeoContentLayout />
      {/* <FinalCTA
        heading="Ready to Rank in the Map Pack?"
        subheading="Get more calls from homeowners searching for a roofer in your service area — with month-to-month terms and no long-term contracts."
      /> */}
    </main>
  );
}