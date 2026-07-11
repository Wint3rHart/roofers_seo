import ServicePageTemplate from "@/components/shared/service_page_template";
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
  return <ServicePageTemplate data={data} />;
}
