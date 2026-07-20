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
    <section className="relative overflow-hidden bg-[#252422]  lg:mt-2 text-[#fffcf2]">
      {/* top accent bar */}
      <div className="h-2 w-full bg-[#eb5e28]" />

      <motion.div
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-14 lg:flex-row lg:px-10"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : viewportOnce}
      >
        {/* text block */}
       <motion.div variants={fadeUp} className="text-center lg:text-left">
          <h3 className="font-heading text-3xl font-black uppercase italic leading-tight text-[#fffcf2] sm:text-4xl">
            Proven Strategy. Real Roofing{" "}
            <span className="relative isolate inline-block px-2">
              <svg
                viewBox="0 0 200 70"
                className="pointer-events-none absolute -inset-x-2 -inset-y-2 -z-10 h-[calc(100%+16px)] w-[calc(100%+16px)] -rotate-2"
                preserveAspectRatio="none"
              >
                <path
                  d="M6,44 C4,28 8,14 18,10 C60,2 140,0 182,8 C194,10 196,24 194,38 C196,52 192,62 180,64 C130,70 50,68 14,60 C4,58 4,52 6,44 Z"
                  fill="#eb5e28"
                />
              </svg>
              <span className="relative">Growth.</span>
            </span>
          </h3>
          <p className="sub-heading mt-4 max-w-md text-sm font-bold text-[#fffcf2]/90 lg:mx-0 mx-auto">
            See how reputation management and local SEO work together to
            get your phone ringing.
          </p>
        </motion.div>

        {/* button */}
        <motion.a
          href="/book-a-call"
          variants={fadeScale}
          whileHover={reduce ? undefined : { scale: 1.05 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg px-8 py-4 text-sm font-black uppercase tracking-wide text-[#252422] shadow-lg transition-colors"
          style={{ background: "#eb5e28" }}
        >
          Book a Call <ArrowRight className="h-4 w-4" />
        </motion.a>
      </motion.div>

      {/* bottom accent bar */}
      <div className="h-2 w-full bg-[#eb5e28]" />
    </section>
  );
};

export default CtaRibbon;