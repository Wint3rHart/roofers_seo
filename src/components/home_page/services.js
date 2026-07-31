"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Globe, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/ui_components";
import {
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

const SERVICES = [
  {
    icon: Star,
    title: "Reputation Management",
    href: "/services/reputation-management",
    copy:
      "Get more 5-star Google reviews on autopilot, route negative feedback privately before it goes public, and turn happy customers into your strongest ranking signal — because review count and review velocity are two of the biggest factors homeowners and Google both use to decide who’s trustworthy.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    href: "/services/local-seo",
    copy:
      "Rank higher in the Google Map Pack and local search results for “roofer near me” and storm-related searches in your service area, with Google Business Profile optimization, citation building, and local content built around the neighborhoods you actually work in.",
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
      "Show up when homeowners ask AI tools like ChatGPT and Google AI Overviews “who’s the best roofer near me” — by structuring your reviews, content, and business data in the format these tools actually pull answers from.",
  },
];

export const Services = () => {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] text-[#252422]">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-6">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Built to Get Roofers Found, Trusted, and Hired"
          subtitle="Four services, one goal — more homeowners choosing your roofing company over the competition."
        />

        {/* Cards grid — 3 per row, last card centered on its own row */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:justify-items-center"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          {SERVICES.map(({ icon: Icon, title, copy, href }, i) => (
            <motion.div
              key={title}
              variants={fadeScale}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.25 }}
              className={`flex w-full max-w-xs flex-col rounded-xl border border-[#ccc5b9]/70 bg-white/40 p-6 text-left transition-shadow hover:shadow-lg ${
                i === 3 ? "lg:col-start-2" : ""
              }`}
            >
           <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg "
                style={{ borderColor: "#eb5e28" }}
              >
                <Icon className="h-8 w-8" style={{ color: "#eb5e28" }} strokeWidth={1.65} />
              </div>
              <h3 className="font-heading text-lg font-bold">{title}</h3>
              <p className="sub-heading mt-2 flex-1 text-sm font-light leading-relaxed text-[#403d39]/85">
                {copy}
              </p>
              
               <a href={href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold transition-transform hover:translate-x-1"
                style={{ color: "#eb5e28" }}
              >
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};