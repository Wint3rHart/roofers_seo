import ServicePageTemplate from "@/components/shared/service_page_template";
import { getService } from "@/data/services";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Local SEO — Roofer SEO Co.",
  description:
    "Show up in the Google Map Pack when homeowners search 'roofer near me.' Google Business Profile optimization and local search strategy built around the neighborhoods you actually serve.",
};

export default function LocalSeoPage() {
  const data = getService("local-seo");
  if (!data) return notFound();
  return <ServicePageTemplate data={data} />;
}
