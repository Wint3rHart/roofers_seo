"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "../../ui/ui_components";
import { fadeScale, viewportOnce, useReducedMotion } from "../../ui/motion";

/**
 * CTA card — right sidebar, above the lead form. Offset-shadow dark card
 * matching the reference design.
 */
export default function CtaCard() {
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
        className="absolute inset-0 translate-x-0 translate-y-1 rounded-2xl bg-[#eb5e28]"
      />
      <div className="relative rounded-2xl bg-[#252422] p-6 text-center">
        <h2 className="font-heading text-xl font-black italic leading-tight text-[#fffcf2]">
          Consultations Are
          <br />
          Always Free
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