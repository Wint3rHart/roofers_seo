"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PrimaryButton, SecondaryButton, OrangeBar } from "../../ui/ui_components";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.32,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.55, 0.5, 1] },
  },
};

const TRUST_STRIP = [
  "No long-term contracts",
  "Nationwide coverage",
  "Roofing-specific strategy",
];

/**
 * Generic hero for the ai-search-visibility, reputation-management, and
 * web-design pages — same eyebrow / italic two-tone heading / orange bar /
 * subheading / dual-CTA / trust-strip layout as local_seo/hero.js, driven
 * by props instead of hardcoded copy. local_seo keeps its own hero
 * untouched (it also has a right-side image the other 3 pages don't have
 * source imagery for).
 */
export default function ServiceHero({ eyebrow, h1, subheading }) {
  return (
    <section className="relative overflow-hidden border-b border-[#ccc5b9]/60 bg-[#fffcf2]">
      <div className="relative z-[1] mx-auto max-w-4xl px-6 pt-16 pb-12 text-center lg:px-10 lg:pt-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Eyebrow className="text-[11px]">{eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-heading text-4xl font-black italic leading-[1.08] tracking-tight sm:text-5xl"
          >
            {h1}
          </motion.h1>

          <motion.div variants={item}>
            <OrangeBar className="mx-auto mt-6" />
          </motion.div>

          <motion.p
            variants={item}
            className="sub-heading mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-[#403d39]/90"
          >
            {subheading}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton as="a" href="/book-a-call">
              Book a Call <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton as="a" href="/free-audit">
              Get a Free Audit
            </SecondaryButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="relative overflow-hidden border-y border-[#252422] bg-[#fffcf2]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl px-6 py-4 text-sm font-bold text-[#252422] lg:px-10">
          <motion.div
            className="flex min-w-full shrink-0 items-center justify-around gap-6 pr-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {TRUST_STRIP.map((t, i) => (
              <span key={`orig-${t}-${i}`} className="flex items-center gap-6 whitespace-nowrap">
                {t}
                <span className="text-[#eb5e28]">•</span>
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex min-w-full shrink-0 items-center justify-around gap-6 pr-6"
            aria-hidden="true"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {TRUST_STRIP.map((t, i) => (
              <span key={`dup-${t}-${i}`} className="flex items-center gap-6 whitespace-nowrap">
                {t}
                <span className="text-[#eb5e28]">•</span>
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
