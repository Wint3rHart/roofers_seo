"use client";

import { motion } from "framer-motion";
import { PrimaryButton, OrangeBar } from "../ui/ui_components";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

/**
 * Final CTA bookend — same pattern as homepage Final CTA.
 * Used at the bottom of every service page and most inner pages.
 */
export default function FinalCTA({
  heading = "Ready to Boost Your Rankings?",
  subheading = "Get more 5-star reviews, more visibility, and more roofing jobs — with a system built only for roofers.",
  primaryLabel = "Book a Call",
  primaryHref = "/book-a-call",
  secondaryLabel = "Get a Free Audit",
  secondaryHref = "/free-audit",
}) {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#252422]">
      <motion.div
        className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-6"
        variants={staggerContainer(0.14)}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : viewportOnce}
      >
        <motion.h2
          variants={fadeUp}
          className="font-heading text-3xl font-black italic leading-tight text-[#fffcf2] sm:text-4xl lg:text-5xl"
        >
          {heading}
        </motion.h2>
        <motion.div variants={fadeUp}>
          <OrangeBar className="mt-5" />
        </motion.div>
        <motion.p
          variants={fadeUp}
          className="sub-heading mx-auto mt-5 max-w-lg text-sm font-light text-[#ccc5b9]"
        >
          {subheading}
        </motion.p>
        <motion.div
          variants={fadeScale}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <PrimaryButton as="a" href={primaryHref}>
            {primaryLabel}
          </PrimaryButton>
          <a
            href={secondaryHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#fffcf2] px-6 py-3.5 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#fffcf2] hover:text-[#252422]"
          >
            {secondaryLabel}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
