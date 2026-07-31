"use client";

import { motion } from "framer-motion";
import { Eyebrow, OrangeBar } from "@/components/ui/ui_components";
import { Check, ShieldCheck } from "lucide-react";
import FreeAuditForm from "@/components/shared/free_audit_form";
import FinalCTA from "@/components/shared/final_cta";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "@/components/ui/motion";

const WHAT_THEY_GET = [
  "A review of your Google Business Profile, map pack ranking, and review count",
  "A look at how your website currently performs for local roofing searches",
  "A plain-English summary of what’s costing you leads, and what to fix first",
];

export default function FreeAuditPage() {
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
              <Eyebrow>FREE AUDIT</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl"
            >
              Get Your Free Roofing SEO Audit
            </motion.h1>
            <motion.div variants={fadeUp}>
              <OrangeBar className="mt-6" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="sub-heading mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-[#403d39]/90"
            >
              See exactly where your business is losing visibility — and
              what it would take to fix it.
            </motion.p>

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={reduce ? false : viewportOnce}
              className="mx-auto mt-10 max-w-2xl space-y-4 text-left"
            >
              <motion.p
                variants={fadeUp}
                className="eyebrow text-xs font-bold uppercase tracking-[0.18em] text-[#eb5e28]"
              >
                What you get
              </motion.p>
              <ul className="space-y-3">
                {WHAT_THEY_GET.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex items-center gap-3"
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
          </motion.div>

          <motion.div
            className="mx-auto mt-12 max-w-xl"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={reduce ? false : viewportOnce}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl bg-[#252422] p-8 text-center text-[#fffcf2] shadow-xl">
              <h2 className="font-heading text-xl font-bold italic">
                Send Me My Free Audit
              </h2>
              <p className="sub-heading mt-2 text-xs font-light text-[#ccc5b9]">
                Manual review — delivered by email within 2 business days.
              </p>
              <div className="mt-6">
                <FreeAuditForm buttonLabel="Send Me My Free Audit" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust signal */}
      <motion.section
        className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]"
        variants={fadeScale}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : viewportOnce}
      >
        <div className="mx-auto max-w-3xl px-6 py-14 text-center lg:px-6">
          <div
            className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
            style={{ background: "#eb5e28" }}
          >
            <ShieldCheck className="h-6 w-6 text-[#fffcf2]" />
          </div>
          <p className="sub-heading text-base font-light leading-relaxed text-[#403d39]/90">
            We personally review every submission — no automated reports.
            You’ll get your audit by email within 2 business days. No sales
            pressure, no obligation.
          </p>
        </div>
      </motion.section>

      <FinalCTA
        heading="Prefer to talk it through live?"
        subheading="Book a free 20-minute strategy call instead — same honest assessment, just in real time."
        primaryLabel="Book a Call"
        primaryHref="/book-a-call"
        secondaryLabel="See Services"
        secondaryHref="/services/reputation-management"
      />
    </main>
  );
}
