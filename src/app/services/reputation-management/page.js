import ReputationManagementHero from "@/components/services/reputation_management/hero";
import ServiceContentLayout from "@/components/services/shared/service_content_layout";
import ContentBody, {
  TOC_ITEMS,
} from "@/components/services/reputation_management/content_body";
import { getService } from "@/data/services";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Reputation Management — Roofer SEO Co.",
  description:
    "Get more 5-star Google reviews on autopilot, route negative feedback privately, and turn happy customers into your strongest ranking signal.",
};

export default function ReputationManagementPage() {
  const data = getService("reputation-management");
  if (!data) return notFound();

  return (
    <main className="bg-[#fffcf2]">
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
