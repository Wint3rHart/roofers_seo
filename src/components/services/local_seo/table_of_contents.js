"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  fadeUp,
  fadeUpSm,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../../ui/motion";

export const TOC_ITEMS = [
  { id: "why-seo-matters", label: "Why SEO for Roofers Matters Right Now" },
  { id: "local-seo-for-roofing-companies", label: "Local SEO for Roofing Companies" },
  { id: "why-roofing-specific", label: "Why a Roofing-Specific SEO Company" },
  { id: "getting-started", label: "Getting Started" },
];

/**
 * Table of Contents card — left sidebar, below the author card (desktop).
 * On mobile it's rendered right after the hero section and is
 * collapsible ("Show more" / "Show less"). Desktop always shows the
 * full list, uncollapsed, regardless of this state.
 */
export default function TableOfContents({ items = TOC_ITEMS }) {
  const reduce = useReducedMotion();
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={reduce ? false : viewportOnce}
      className="overflow-hidden rounded-2xl border-b-4 border-[#eb5e28] bg-[#252422] p-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-xl font-black italic leading-tight text-[#fffcf2]">
          Table of Contents
        </h2>

        {/* Toggle button — mobile only, hidden on lg+ */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="flex items-center gap-1 rounded-full border border-[#403d39] px-3 py-1 text-xs font-bold text-[#fffcf2] transition-colors hover:border-[#eb5e28] hover:text-[#eb5e28] lg:hidden"
        >
          {expanded ? "Show less" : "Show more"}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        className="mt-3 h-[2px] w-16"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #eb5e28 0 8px, transparent 8px 12px)",
        }}
      />

      {/* Collapsible wrapper: collapsed height only applies below lg;
          lg+ always shows full, uncollapsed list. */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out lg:!max-h-none ${
          expanded ? "max-h-[999px]" : "max-h-0"
        }`}
      >
        <motion.ul
          className="mt-5 space-y-4"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          {items.map((it, i) => (
            <motion.li
              key={it.id}
              variants={fadeUpSm}
              className={i > 0 ? "border-t border-[#403d39] pt-4" : ""}
            >
              <a
                href={`#${it.id}`}
                className="group flex items-center justify-between gap-3 text-left"
              >
                <span className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#eb5e28]" />
                  <span className="sub-heading text-sm font-bold leading-snug text-[#fffcf2] transition-colors group-hover:text-[#eb5e28]">
                    {it.label}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#fffcf2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}