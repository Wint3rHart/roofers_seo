import ServiceHero from "@/components/services/shared/service_hero";
import ServiceContentLayout from "@/components/services/shared/service_content_layout";
import ContentBody, {
  TOC_ITEMS,
} from "@/components/services/ai_search_visibility/content_body";
import { getService } from "@/data/services";
import { notFound } from "next/navigation";

export const metadata = {
  title: "AI Search Visibility — Roofer SEO Co.",
  description:
    "Show up when homeowners ask AI tools like ChatGPT and Google AI Overviews 'who's the best roofer near me' — structured to be pulled into real answers.",
};

export default function AiSearchVisibilityPage() {
  const data = getService("ai-search-visibility");
  if (!data) return notFound();

  return (
    <main className="bg-[#fffcf2]">
      <ServiceHero eyebrow={data.eyebrow} h1={data.h1} subheading={data.subheading} />
      <ServiceContentLayout
        tocItems={TOC_ITEMS}
        formTitle="Get Your Free AI Visibility Audit"
        formSubtitle="Find out whether AI tools even know your business exists."
        formAction="/thank-you?type=ai-search-visibility-audit"
      >
        <ContentBody />
      </ServiceContentLayout>
    </main>
  );
}
