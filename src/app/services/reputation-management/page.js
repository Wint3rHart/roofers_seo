import ServicePageTemplate from "@/components/shared/service_page_template";
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
  return <ServicePageTemplate data={data} />;
}
