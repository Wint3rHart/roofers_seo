"use client";

import { motion } from "framer-motion";
import { Eyebrow, OrangeBar } from "@/components/ui/ui_components";
import { Check, Clock, PhoneCall } from "lucide-react";
import FinalCTA from "@/components/shared/final_cta";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "@/components/ui/motion";

const WHAT_WE_COVER = [
  "Where you’re losing leads right now (reviews, rankings, or your website)",
  "What a realistic plan looks like for your market and budget",
  "Whether we’re actually a fit — no pressure either way",
];

export default function BookACallPage() {
  const reduce = useReducedMotion();
  const CALENDLY_URL = "https://calendly.com/roofer-seo-co/strategy-call";

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
              <Eyebrow>BOOK A CALL</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl"
            >
              Book a Free Strategy Call
            </motion.h1>
            <motion.div variants={fadeUp}>
              <OrangeBar className="mt-6" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="sub-heading mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-[#403d39]/90"
            >
              A quick call to understand your business and figure out
              what’s actually worth fixing first — no pitch, just a real
              conversation.
            </motion.p>
          </motion.div>

          <motion.div
            className="mx-auto mt-10 max-w-2xl rounded-xl border border-[#ccc5b9]/70 bg-white/50 p-6"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            <motion.p
              variants={fadeUp}
              className="eyebrow mb-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#eb5e28]"
            >
              What we’ll cover
            </motion.p>
            <ul className="space-y-3">
              {WHAT_WE_COVER.map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-center justify-center gap-3 text-center sm:justify-start sm:text-left"
                >
                  <div
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "#eb5e28" }}
                  >
                    <Check className="h-3.5 w-3.5 text-[#fffcf2]" />
                  </div>
                  <span className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Calendly embed */}
      <motion.section
        className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]"
        variants={fadeScale}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : viewportOnce}
      >
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-6">
          <div className="mb-6 flex items-center justify-center gap-3 text-center">
            <PhoneCall className="h-5 w-5" style={{ color: "#eb5e28" }} />
            <h2 className="font-heading text-2xl font-black italic tracking-tight sm:text-3xl lg:text-4xl">
              Pick a time that works for you
            </h2>
          </div>
          <div className="mx-auto mb-6 h-[3px] w-[72px] rounded-full" style={{ background: "#eb5e28" }} />
          <div className="overflow-hidden rounded-xl border border-[#ccc5b9]/70 bg-white shadow-sm">
            <iframe
              src={CALENDLY_URL}
              title="Schedule a strategy call"
              className="h-[700px] w-full"
              frameBorder="0"
            />
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-[#403d39]/80">
            <Clock className="h-4 w-4" style={{ color: "#eb5e28" }} />
            <span className="sub-heading font-light">
              Calls run about 20 minutes. No contracts, no obligation to
              move forward.
            </span>
          </div>
        </div>
      </motion.section>

      <FinalCTA
        heading="Not ready for a call yet?"
        subheading="Get a free audit by email first — same honest assessment, just on your timeline."
        primaryLabel="Get a Free Audit"
        primaryHref="/free-audit"
        secondaryLabel="See Services"
        secondaryHref="/services/reputation-management"
      />
    </main>
  );
}
