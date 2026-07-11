import ServicePageTemplate from "@/components/shared/service_page_template";
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
  return <ServicePageTemplate data={data} />;
}
