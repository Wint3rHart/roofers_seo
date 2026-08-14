import ServiceHero from "@/components/services/shared/service_hero";
import ServiceContentLayout from "@/components/services/shared/service_content_layout";
import ContentBody, {
  TOC_ITEMS,
} from "@/components/services/web_design/content_body";
import { getService } from "@/data/services";
import { notFound } from "next/navigation";
import JsonLdScript from "@/components/shared/json_ld_script";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/data/json_ld";
import { SITE_URL } from "@/data/site_config";

export const metadata = {
  title: "Web Design — Roofer SEO Co.",
  description:
    "A fast, mobile-friendly website built to turn visitors into booked calls — structured the way search engines need to rank roofing pages.",
  openGraph: {
    title: "Web Design for Roofing Companies | Roofer SEO Co.",
    description:
      "A fast, mobile-friendly website built to turn visitors into booked calls — structured the way search engines need to rank roofing pages.",
    url: `${SITE_URL}/services/web-design`,
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design for Roofing Companies | Roofer SEO Co.",
    description:
      "A fast, mobile-friendly website built to turn visitors into booked calls.",
    images: ["/og-image.svg"],
  },
};

export default function WebDesignPage() {
  const data = getService("web-design");
  if (!data) return notFound();

  return (
    <main className="bg-[#fffcf2]">
      <JsonLdScript
        schema={[
          serviceSchema(data),
          breadcrumbSchema(data),
          faqSchema(data.faqs),
        ]}
      />
      <ServiceHero eyebrow={data.eyebrow} h1={data.h1} subheading={data.subheading} />
      <ServiceContentLayout
        tocItems={TOC_ITEMS}
        formTitle="Get Your Free Website Audit"
        formSubtitle="Find out where your site is losing leads before homeowners even pick up the phone."
        formAction="/thank-you?type=web-design-audit"
      >
        <ContentBody />
      </ServiceContentLayout>
    </main>
  );
}
