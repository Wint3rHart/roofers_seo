"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "../../ui/ui_components";
import { fadeScale, viewportOnce, useReducedMotion } from "../../ui/motion";

/**
 * CTA card — right sidebar, above the lead form. Same offset-shadow dark
 * card as local_seo/cta_card.js, with the two heading lines parametrized
 * so every service page can reuse the exact same structure.
 */
export default function CtaCard({
  headingLine1 = "Consultations Are",
  headingLine2 = "Always Free",
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={fadeScale}
      initial="hidden"
      whileInView="show"
      viewport={reduce ? false : viewportOnce}
      className="relative"
    >
      <div
        aria-hidden
        className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-[#eb5e28]"
      />
      <div className="relative rounded-2xl bg-[#252422] p-8 text-center">
        <h2 className="font-heading text-2xl font-black italic leading-tight text-[#fffcf2]">
          {headingLine1}
          <br />
          {headingLine2}
        </h2>
        <div className="mt-6">
          <PrimaryButton as="a" href="/book-a-call" className="w-full">
            Book a Call <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
        </div>
      </div>
    </motion.div>
  );
}
