"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PrimaryButton, SecondaryButton } from "../ui/ui_components";

const TRUST_STRIP = [
  "Organic leads solution for all your roofing services",
  "Month-to-Month, No Contracts",
  "Built Exclusively for Roofers",
];

// Staggered container — children fade/slide up in sequence
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

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
            : {
                x: [0, -30, 0],
                y: [0, 24, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
        {/* Left column — staggered text block */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Eyebrow>ROOFING SEO &amp; REPUTATION SPECIALISTS</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-heading text-4xl font-black italic leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Get More Roofing
            <br />
            <span style={{ color: "#eb5e28" }}>Leads. Better Reviews.</span>
            <br />
            Grow Your Business.
          </motion.h1>

          <motion.p
            variants={item}
            className="sub-heading mt-6 max-w-lg text-base font-light leading-relaxed text-[#403d39]/90"
          >
            We help roofing contractors build a five-star reputation, rank
            higher in local search, and turn more homeowners into booked
            calls — with a system built only for roofers.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-4"
          >
            <PrimaryButton as="a" href="/book-a-call">
              Book a Call <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton as="a" href="/free-audit">
              Get a Free Audit
            </SecondaryButton>
          </motion.div>
        </motion.div>

        {/* Right column — card + badge */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#403d39] to-[#252422] shadow-xl"
            animate={
              reduce
                ? undefined
                : { y: [0, -8, 0] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed text-center text-[10px] font-bold uppercase leading-tight shadow-lg sm:h-32 sm:w-32"
            style={{
              background: "#eb5e28",
              color: "#fffcf2",
              borderColor: "#fffcf2",
            }}
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: reduce ? 0 : [0, 8, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 1.0 },
              scale: { duration: 0.6, delay: 1.0, type: "spring", stiffness: 180 },
              rotate: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.6,
              },
            }}
          >
            Roofing SEO That Delivers
          </motion.div>
        </motion.div>
      </div>

      {/* Trust strip — staggered fade-in after the hero */}
      <motion.div
        className="border-t border-[#ccc5b9]/60 bg-[#fffcf2]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
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
                delay: 1.3 + i * 0.1,
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
