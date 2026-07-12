"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

const CtaRibbon = () => {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#eb5e28] text-[#252422]">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 text-center lg:flex-row lg:px-10 lg:text-left"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : viewportOnce}
      >
        <motion.div variants={fadeUp} className="text-center lg:text-left">
          <h3 className="font-heading text-2xl font-black italic text-[#fffcf2] sm:text-3xl">
            Proven Strategy. Real Roofing Growth.
          </h3>
          <p className="sub-heading mt-2 max-w-md text-sm font-light text-[#fffcf2]/90 lg:mx-0 mx-auto">
            See how reputation management and local SEO work together to
            get your phone ringing.
          </p>
        </motion.div>
        <motion.a
          href="/book-a-call"
          variants={fadeScale}
          whileHover={reduce ? undefined : { scale: 1.05 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#252422] px-7 py-3.5 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#403d39]"
        >
          Book a Call <ArrowRight className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CtaRibbon;
