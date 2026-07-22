import ServiceHero from "@/components/services/shared/service_hero";
import ServiceContentLayout from "@/components/services/shared/service_content_layout";
import ContentBody, {
  TOC_ITEMS,
} from "@/components/services/web_design/content_body";
import { getService } from "@/data/services";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Web Design — Roofer SEO Co.",
  description:
    "A fast, mobile-friendly website built to turn visitors into booked calls — structured the way search engines need to rank roofing pages.",
};

export default function WebDesignPage() {
  const data = getService("web-design");
  if (!data) return notFound();

  return (
    <main className="bg-[#fffcf2]">
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
