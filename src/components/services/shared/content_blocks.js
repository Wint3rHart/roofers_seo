"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "../../ui/motion";

/**
 * Shared building blocks for service page content bodies.
 * Extracted from local_seo/content_body.js so the 3 other service pages
 * (reputation-management, web-design, ai-search-visibility) can reuse the
 * exact same look — headings, paragraphs, bullets, and FAQ accordion —
 * without duplicating markup per page. local_seo/content_body.js itself is
 * left untouched and keeps its own inline copies.
 */

export function Section({ id, title, children, reduce }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-28 border-b border-[#ccc5b9]/60 pb-10 pt-10 first:pt-0"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={reduce ? false : viewportOnce}
    >
      <motion.h2
        variants={fadeUp}
        className="font-heading text-[42px] font-black leading-tight tracking-tight text-[#252422]"
      >
        {title}
      </motion.h2>
      <div className="mt-4">{children}</div>
    </motion.section>
  );
}

export function P({ children }) {
  return (
    <motion.p
      variants={fadeUp}
      className="sub-heading mt-4 text-[18px] font-light leading-relaxed text-[#403d39]/90 first:mt-0"
    >
      {children}
    </motion.p>
  );
}

export function H3({ children }) {
  return (
    <motion.h3
      variants={fadeUp}
      className="font-heading mt-8 text-[38px] font-bold leading-tight text-[#252422]"
    >
      {children}
    </motion.h3>
  );
}

export function H4({ children }) {
  return (
    <motion.h4
      variants={fadeUp}
      className="font-heading mt-6 text-[18px] font-bold leading-snug text-[#252422]"
    >
      {children}
    </motion.h4>
  );
}

// Title + description card grid (e.g. "Everything Included" feature lists)
export function FeatureGrid({ items }) {
  return (
    <motion.div
      variants={staggerContainer(0.06)}
      className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2"
    >
      {items.map((it, i) => (
  <motion.div key={i} variants={fadeUp} >
    <h4 className="font-heading text-[18px] font-bold leading-snug text-[#252422] flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-[#eb5e28] shrink-0"></span>
      {it.title}
    </h4> 
    <p className="sub-heading mt-2 text-[18px] font-light leading-relaxed text-[#403d39]/90">
      {it.description}
    </p>
  </motion.div>
))}
    </motion.div>
  );
}

export function Bullets({ items }) {
  return (
    <motion.ul variants={staggerContainer(0.06)} className="mt-4 space-y-3">
      {items.map((it, i) => (
        <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#eb5e28]" />
          <span className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
            {it}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export function NumberedSteps({ items }) {
  return (
    <motion.ol
      variants={staggerContainer(0.08)}
      className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-3"
    >
      {items.map((step, i) => (
        <motion.li key={i} variants={fadeUp}>
          <span
            className="font-heading text-4xl font-black italic"
            style={{ color: "#eb5e28" }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="sub-heading mt-3 text-sm font-medium leading-relaxed text-[#403d39]/90">
            {step}
          </p>
        </motion.li>
      ))}
    </motion.ol>
  );
}

export function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <motion.div variants={staggerContainer(0.08)} className="mt-6 space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={i}
            variants={fadeUp}
            className={`overflow-hidden rounded-xl border transition-colors ${
              isOpen
                ? "border-[#eb5e28] bg-[#fffcf7]"
                : "border-[#ccc5b9]/70 bg-white/40"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-heading text-base font-bold leading-snug text-[#252422] sm:text-lg">
                {it.q}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isOpen ? "bg-[#eb5e28]" : "bg-[#252422]/10"
                }`}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? "rotate-180 text-[#fffcf2]" : "text-[#252422]"
                  }`}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="sub-heading px-5 pb-5 text-sm font-light leading-relaxed text-[#403d39]/90">
                    {it.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
