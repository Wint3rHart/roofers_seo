"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PrimaryButton, SecondaryButton, OrangeBar } from "../ui/ui_components";
import { fadeUp, fadeScale, staggerContainer } from "../ui/motion";

const TRUST_STRIP = [
  "Organic leads solution for all your roofing services",
  "Month-to-Month, No Contracts",
  "Built Exclusively for Roofers",
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-[#ccc5b9]/60 bg-[#fffcf2]">
      {/* Animated background circle — slow drift loop */}
      <motion.div
        aria-hidden
        className="absolute -right-24 top-10 hidden h-[420px] w-[420px] rounded-full opacity-60 lg:block"
        style={{ background: "#ccc5b9" }}
        animate={
          reduce
            ? undefined
            : { x: [0, -30, 0], y: [0, 24, 0], scale: [1, 1.06, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 py-16 text-center lg:px-10 lg:py-24">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>ROOFING SEO &amp; REPUTATION SPECIALISTS</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-black italic leading-[1.08] tracking-tight sm:text-5xl"
          >
            Get More Roofing
            <br />
            <span style={{ color: "#eb5e28" }}>Leads. Better Reviews.</span>
            <br />
            Grow Your Business.
          </motion.h1>

          {/* Orange expanding bar under hero H1 */}
          <motion.div variants={fadeUp}>
            <OrangeBar className="mt-6" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="sub-heading mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-[#403d39]/90"
          >
            We help roofing contractors build a five-star reputation, rank
            higher in local search, and turn more homeowners into booked
            calls — with a system built only for roofers.
          </motion.p>

          <motion.div
            variants={fadeScale}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <PrimaryButton as="a" href="/book-a-call">
              Book a Call <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton as="a" href="/free-audit">
              Get a Free Audit
            </SecondaryButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust strip — staggered fade-in after the hero */}
      <motion.div
        className="border-t border-[#ccc5b9]/60 bg-[#fffcf2]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-6 text-center text-sm font-semibold text-[#403d39] sm:flex-row sm:justify-center sm:gap-6 sm:text-left lg:px-10">
          {TRUST_STRIP.map((item, i) => (
            <motion.span
              key={item}
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 1.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {item}
              {i < TRUST_STRIP.length - 1 && (
                <span className="hidden text-[#eb5e28] sm:inline">·</span>
              )}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
