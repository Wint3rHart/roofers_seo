"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Globe, Sparkles } from "lucide-react";
import { Eyebrow } from "../ui/ui_components";
import {
  fadeUp,
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
      <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10">
        {/* Heading block */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>OUR SERVICES</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading mx-auto max-w-2xl text-3xl font-black italic leading-tight tracking-tight sm:text-4xl"
          >
            Built to Get Roofers Found, Trusted, and Hired
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="sub-heading mx-auto mt-4 max-w-xl text-sm font-light text-[#403d39]/80"
          >
            Four services, one goal — more homeowners choosing your roofing
            company over the competition.
          </motion.p>
        </motion.div>

        {/* Cards grid — staggered */}
        <motion.div
          className="mt-12 grid gap-6 text-center sm:grid-cols-2"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          {SERVICES.map(({ icon: Icon, title, copy, href }) => (
            <motion.div
              key={title}
              variants={fadeScale}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col rounded-xl border border-[#ccc5b9]/70 bg-white/40 p-7 text-center transition-shadow hover:shadow-lg"
            >
              <div
                className="mb-4 mx-auto flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ background: "#eb5e28" }}
              >
                <Icon className="h-5 w-5 text-[#fffcf2]" />
              </div>
              <h3 className="font-heading text-lg font-bold">{title}</h3>
              <p className="sub-heading mt-2 flex-1 text-sm font-light leading-relaxed text-[#403d39]/85">
                {copy}
              </p>
              <a
                href={href}
                className="mt-4 inline-flex items-center justify-center gap-1 text-sm font-bold transition-transform hover:translate-x-1"
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
