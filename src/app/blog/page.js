"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow, OrangeBar, PrimaryButton } from "@/components/ui/ui_components";
import { ArrowRight, PenLine } from "lucide-react";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "@/components/ui/motion";

const CATEGORIES = [
  "All",
  "Local SEO",
  "Google Business Profile",
  "Reviews",
  "AI Search",

];

export default function BlogPage() {
  const [active, setActive] = useState("All");
  const reduce = useReducedMotion();

  return (
    <main className="bg-[#fffcf2]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#ccc5b9]/60">
        <motion.div
          aria-hidden
          className="absolute -right-24 top-10 hidden h-[320px] w-[320px] rounded-full opacity-50 lg:block"
          style={{ background: "#ccc5b9" }}
          animate={
            reduce
              ? undefined
              : { x: [0, -24, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center lg:px-6 lg:py-20">
          <motion.div
            variants={staggerContainer(0.14)}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>THE BLOG</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl"
            >
              Roofing SEO, in plain English
            </motion.h1>
            <motion.div variants={fadeUp}>
              <OrangeBar className="mt-6" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="sub-heading mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-[#403d39]/90"
            >
              Practical writing on reviews, local SEO, web design, and AI
              search visibility — built for roofing contractors, not for
              other marketers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category filters */}
      <motion.section
        className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : viewportOnce}
      >
        <div className="mx-auto max-w-6xl px-6 py-6 lg:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  active === cat
                    ? "border-[#eb5e28] bg-[#eb5e28] text-[#fffcf2]"
                    : "border-[#ccc5b9] bg-white/50 text-[#403d39] hover:border-[#eb5e28] hover:text-[#eb5e28]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Empty state */}
      <motion.section
        className="border-b border-[#ccc5b9]/60 bg-[#fffcf2]"
        variants={fadeScale}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : viewportOnce}
      >
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-6">
          <motion.div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
            style={{ background: "#eb5e28" }}
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <PenLine className="h-7 w-7 text-[#fffcf2]" />
          </motion.div>
          <h2 className="font-heading text-2xl font-black italic leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Posts are coming soon
          </h2>
          <OrangeBar className="mt-5" />
          <p className="sub-heading mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-[#403d39]/85">
            We’re building out a practical library on roofing-specific
            reputation, local SEO, web design, and AI search — written
            for contractors, not for other marketers. No filler, no
            recycled listicles.
          </p>
          <p className="sub-heading mx-auto mt-3 max-w-xl text-sm font-light leading-relaxed text-[#403d39]/70">
            In the meantime, the fastest way to get roofing-specific
            answers for your business is a free audit or a quick
            strategy call.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton as="a" href="/free-audit">
              Get a Free Audit <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <a
              href="/book-a-call"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#252422] px-6 py-3.5 text-sm font-bold text-[#252422] transition-colors hover:bg-[#252422] hover:text-[#fffcf2]"
            >
              Book a Call
            </a>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="bg-[#252422]"
        variants={staggerContainer(0.14)}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : viewportOnce}
      >
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-6">
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-black italic leading-tight text-[#fffcf2] sm:text-4xl lg:text-5xl"
          >
            Ready to Boost Your Rankings?
          </motion.h2>
          <motion.div variants={fadeUp}>
            <OrangeBar className="mt-5" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="sub-heading mx-auto mt-5 max-w-lg text-sm font-light text-[#ccc5b9]"
          >
            Get more 5-star reviews, more visibility, and more roofing
            jobs — with a system built only for roofers.
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
        </div>
      </motion.section>
    </main>
  );
}
