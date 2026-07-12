"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "../ui/ui_components";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

export const CTA = () => {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#252422]">
      <motion.div
        className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10"
        variants={staggerContainer(0.14)}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : viewportOnce}
      >
        <motion.h2
          variants={fadeUp}
          className="font-heading text-3xl font-black italic leading-tight text-[#fffcf2] sm:text-4xl"
        >
          Ready to Boost Your Rankings?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="sub-heading mx-auto mt-4 max-w-lg text-sm font-light text-[#ccc5b9]"
        >
          Get more 5-star reviews, more visibility, and more roofing jobs —
          with a system built only for roofers.
        </motion.p>
        <motion.div
          variants={fadeScale}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <PrimaryButton as="a" href="/book-a-call">
            Book a Call
          </PrimaryButton>
          <a
            href="/free-audit"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#fffcf2] px-6 py-3.5 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#fffcf2] hover:text-[#252422]"
          >
            Get a Free Audit
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
