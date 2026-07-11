import {
  ArrowRight,
  Star,
  MapPin,
  Globe,
  Sparkles,
} from "lucide-react";
import { Eyebrow } from "../ui/ui_components";

const SERVICES = [
  {
    icon: Star,
    title: "Reputation Management",
    href: "/services/reputation-management",
    copy:
      "Get more 5-star Google reviews on autopilot, route negative feedback privately before it goes public, and turn happy customers into your strongest ranking signal — because review count and review velocity are two of the biggest factors homeowners and Google both use to decide who\u2019s trustworthy.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    href: "/services/local-seo",
    copy:
      "Rank higher in the Google Map Pack and local search results for \u201croofer near me\u201d and storm-related searches in your service area, with Google Business Profile optimization, citation building, and local content built around the neighborhoods you actually work in.",
  },
  {
    icon: Globe,
    title: "Web Design",
    href: "/services/web-design",
    copy:
      "A fast, mobile-friendly website designed to convert visitors into calls — built with the on-page SEO structure (titles, headers, schema, internal linking) that search engines need to rank roofing pages, not just a pretty template.",
  },
  {
    icon: Sparkles,
    title: "AI Search Visibility",
    href: "/services/ai-search-visibility",
    copy:
      "Show up when homeowners ask AI tools like ChatGPT and Google AI Overviews \u201cwho\u2019s the best roofer near me\u201d — by structuring your reviews, content, and business data in the format these tools actually pull answers from.",
  },
];

export const Services = () => {
  return (
    <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] text-[#252422]">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10">
        <Eyebrow>OUR SERVICES</Eyebrow>
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl">
          Built to Get Roofers Found, Trusted, and Hired
        </h2>
        <p className="sub-heading mx-auto mt-4 max-w-xl text-sm font-light text-[#403d39]/80">
          Four services, one goal — more homeowners choosing your roofing
          company over the competition.
        </p>

        <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, copy, href }) => (
            <div
              key={title}
              className="flex flex-col rounded-xl border border-[#ccc5b9]/70 bg-white/40 p-7 transition-shadow hover:shadow-lg"
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ background: "#eb5e28" }}
              >
                <Icon className="h-5 w-5 text-[#fffcf2]" />
              </div>
              <h3 className="font-heading text-lg font-bold">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#403d39]/85">
                {copy}
              </p>
              <a
                href={href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold transition-transform hover:translate-x-1"
                style={{ color: "#eb5e28" }}
              >
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
