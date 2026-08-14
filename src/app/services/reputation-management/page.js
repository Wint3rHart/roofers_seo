import ReputationManagementHero from "@/components/services/reputation_management/hero";
import ServiceContentLayout from "@/components/services/shared/service_content_layout";
import ContentBody, {
  TOC_ITEMS,
} from "@/components/services/reputation_management/content_body";
import { getService } from "@/data/services";
import { notFound } from "next/navigation";
import JsonLdScript from "@/components/shared/json_ld_script";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/data/json_ld";
import { SITE_URL } from "@/data/site_config";

export const metadata = {
  title: " Reputation Management for Roofers | Roofer SEO Co",
  description:
    "Automated review requests, dispute protection, and AI-powered replies for roofing companies. Turn every completed job into a 5-star review. Get a free proposal.",
  openGraph: {
    title: "Reputation Management for Roofers | Roofer SEO Co",
    description:
      "Automated review requests, dispute protection, and AI-powered replies for roofing companies. Turn every completed job into a 5-star review.",
    url: `${SITE_URL}/services/reputation-management`,
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reputation Management for Roofers | Roofer SEO Co",
    description:
      "Automated review requests, dispute protection, and AI-powered replies for roofing companies.",
    images: ["/og-image.svg"],
  },
};

export default function ReputationManagementPage() {
  const data = getService("reputation-management");
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
      <ReputationManagementHero />
      <ServiceContentLayout
        tocItems={TOC_ITEMS}
        formTitle="Get Your Free Reputation Audit"
        formSubtitle="Find out where your review count, rating, and response time stand today."
        formAction="/thank-you?type=reputation-management-audit"
      >
        <ContentBody />
      </ServiceContentLayout>
    </main>
  );
}
