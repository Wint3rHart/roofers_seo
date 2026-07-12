"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Check,
  AlertTriangle,
  ArrowRightCircle,
  Star,
  MapPin,
  Globe,
  Sparkles,
} from "lucide-react";
import { Eyebrow, PrimaryButton, SecondaryButton } from "../ui/ui_components";
import FinalCTA from "./final_cta";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

const ICON_MAP = {
  star: Star,
  "map-pin": MapPin,
  globe: Globe,
  sparkles: Sparkles,
};

/**
 * Shared template for all 4 service pages.
 * Follows the exact 8-section structure from the documentation:
 *   1. Hero (H1 + value prop + single CTA)
 *   2. The Problem (3-4 pain points)
 *   3. What's Included (work breakdown)
 *   4. How It Works (3-step process)
 *   5. Why It Matters for Roofers (roofing-specific context)
 *   6. Next Step / Cross-Sell (links to next service in ladder)
 *   7. FAQ (4-5 service-specific objections)
 *   8. Final CTA (bookend pattern)
 *
 * All text is center-aligned. Each section animates in with framer-motion
 * whileInView, staggered children. Reduced-motion respected.
 *
 * Cross-sell ladder forms a loop:
 *   Reputation Management → Local SEO → Web Design → AI Search Visibility → Reputation Management
 */
export default function ServicePageTemplate({ data }) {
  const {
    eyebrow,
    h1,
    subheading,
    icon: iconKey,
    problems,
    included,
    howItWorks,
    whyItMatters,
    nextStep,
    faqs,
  } = data;

  const Icon = ICON_MAP[iconKey] || Star;
  const [openFaq, setOpenFaq] = useState(0);
  const reduce = useReducedMotion();

  return (
    <main className="bg-[#fffcf2]">
      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-[#ccc5b9]/60 bg-[#fffcf2]">
        <motion.div
          aria-hidden
          className="absolute -right-24 top-10 hidden h-[420px] w-[420px] rounded-full opacity-50 lg:block"
          style={{ background: "#ccc5b9" }}
          animate={
            reduce
              ? undefined
              : { x: [0, -30, 0], y: [0, 24, 0], scale: [1, 1.06, 1] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
          <motion.div
            variants={staggerContainer(0.14)}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-black italic leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              {h1}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="sub-heading mt-6 max-w-lg text-base font-light leading-relaxed text-[#403d39]/90"
            >
              {subheading}
            </motion.p>
            <motion.div variants={fadeScale} className="mt-8">
              <PrimaryButton as="a" href="/book-a-call">
                Book a Call <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#403d39] to-[#252422] shadow-xl"
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {Icon && (
                <motion.div
                  animate={
                    reduce ? undefined : { rotate: [0, 5, -5, 0] }
                  }
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Icon className="h-24 w-24 text-[#eb5e28]" strokeWidth={1.5} />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>THE PROBLEM</Eyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl"
            >
              What’s quietly costing you roofing leads right now
            </motion.h2>
          </motion.div>

          <motion.ul
            className="mt-10 space-y-5"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            {problems.map((p, i) => (
              <motion.li
                key={i}
                variants={fadeScale}
                whileHover={reduce ? undefined : { y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-3 rounded-xl border border-[#ccc5b9]/70 bg-white/40 p-5 text-center sm:flex-row sm:text-left"
              >
                <AlertTriangle
                  className="h-5 w-5 shrink-0"
                  style={{ color: "#eb5e28" }}
                />
                <p className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
                  {p}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* 3. WHAT'S INCLUDED */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf2]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>WHAT’S INCLUDED</Eyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl"
            >
              The actual work, broken down
            </motion.h2>
          </motion.div>

          <motion.ul
            className="mt-10 grid gap-5 sm:grid-cols-2"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            {included.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeScale}
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-3 rounded-xl border border-[#ccc5b9]/70 bg-white/50 p-5 text-center sm:flex-row sm:text-left"
              >
                <div
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "#eb5e28" }}
                >
                  <Check className="h-4 w-4 text-[#fffcf2]" />
                </div>
                <p className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
                  {item}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>HOW IT WORKS</Eyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl"
            >
              A short, service-specific 3-step process
            </motion.h2>
          </motion.div>

          <motion.ol
            className="mt-10 grid gap-6 sm:grid-cols-3"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            {howItWorks.map((step, i) => (
              <motion.li
                key={i}
                variants={fadeScale}
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl border border-[#ccc5b9]/70 bg-white/40 p-6 text-center"
              >
                <span
                  className="font-heading text-3xl font-black italic"
                  style={{ color: "#eb5e28" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="sub-heading mt-3 text-sm font-medium leading-relaxed text-[#252422]">
                  {step}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* 5. WHY IT MATTERS FOR ROOFERS */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#252422]">
        <motion.div
          className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10"
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>WHY IT MATTERS FOR ROOFERS</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-black italic leading-tight tracking-tight text-[#fffcf2] sm:text-4xl"
          >
            Roofing-specific context, not generic SEO advice
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="sub-heading mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-[#ccc5b9]"
          >
            {whyItMatters}
          </motion.p>
        </motion.div>
      </section>

      {/* 6. NEXT STEP / CROSS-SELL */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#eb5e28]">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-14 text-center lg:flex-row lg:px-10 lg:text-left"
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          <motion.div variants={fadeUp} className="max-w-xl text-center lg:text-left">
            <p className="eyebrow mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#fffcf2]/80">
              NEXT STEP
            </p>
            <p className="sub-heading text-base font-light leading-relaxed text-[#fffcf2]">
              {nextStep.copy}
            </p>
          </motion.div>
          <motion.a
            href={nextStep.href}
            variants={fadeScale}
            whileHover={reduce ? undefined : { scale: 1.05 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#252422] px-7 py-3.5 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#403d39]"
          >
            {nextStep.label} <ArrowRightCircle className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </section>

      {/* 7. FAQ */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf2]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl"
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            className="mt-10 text-left"
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            {faqs.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="border-b border-[#ccc5b9]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="sub-heading font-semibold text-[#252422]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#eb5e28] transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="sub-heading pb-5 text-center text-sm font-light leading-relaxed text-[#403d39]/80">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeScale}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
            className="mt-10 text-center"
          >
            <SecondaryButton as="a" href="/free-audit">
              Get a Free Audit
            </SecondaryButton>
          </motion.div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <FinalCTA />
    </main>
  );
}
