"use client";

import { useState } from "react";
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

  return (
    <main className="bg-[#fffcf2]">
      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-[#ccc5b9]/60 bg-[#fffcf2]">
        <div
          className="absolute -right-24 top-10 hidden h-[420px] w-[420px] rounded-full opacity-50 lg:block"
          style={{ background: "#ccc5b9" }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="font-heading text-4xl font-black italic leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {h1}
            </h1>
            <p className="sub-heading mt-6 max-w-lg text-base font-light leading-relaxed text-[#403d39]/90">
              {subheading}
            </p>
            <div className="mt-8">
              <PrimaryButton as="a" href="/book-a-call">
                Book a Call <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </div>
          </div>

          <div className="relative">
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#403d39] to-[#252422] shadow-xl">
              {Icon && (
                <Icon className="h-24 w-24 text-[#eb5e28]" strokeWidth={1.5} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <Eyebrow>THE PROBLEM</Eyebrow>
            <h2 className="font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl">
              What&apos;s quietly costing you roofing leads right now
            </h2>
          </div>
          <ul className="mt-10 space-y-5">
            {problems.map((p, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-xl border border-[#ccc5b9]/70 bg-white/40 p-5"
              >
                <AlertTriangle
                  className="h-5 w-5 shrink-0"
                  style={{ color: "#eb5e28" }}
                />
                <p className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
                  {p}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. WHAT'S INCLUDED */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf2]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <Eyebrow>WHAT&apos;S INCLUDED</Eyebrow>
            <h2 className="font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl">
              The actual work, broken down
            </h2>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {included.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-xl border border-[#ccc5b9]/70 bg-white/50 p-5"
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
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <Eyebrow>HOW IT WORKS</Eyebrow>
            <h2 className="font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl">
              A short, service-specific 3-step process
            </h2>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {howItWorks.map((step, i) => (
              <li
                key={i}
                className="rounded-xl border border-[#ccc5b9]/70 bg-white/40 p-6"
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
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. WHY IT MATTERS FOR ROOFERS */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#252422]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
          <Eyebrow>WHY IT MATTERS FOR ROOFERS</Eyebrow>
          <h2 className="font-heading text-3xl font-black italic leading-tight tracking-tight text-[#fffcf2] sm:text-4xl">
            Roofing-specific context, not generic SEO advice
          </h2>
          <p className="sub-heading mt-5 max-w-2xl text-base font-light leading-relaxed text-[#ccc5b9]">
            {whyItMatters}
          </p>
        </div>
      </section>

      {/* 6. NEXT STEP / CROSS-SELL */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#eb5e28]">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-14 text-center lg:flex-row lg:px-10 lg:text-left">
          <div className="max-w-xl">
            <p className="eyebrow mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#fffcf2]/80">
              NEXT STEP
            </p>
            <p className="sub-heading text-base font-light leading-relaxed text-[#fffcf2]">
              {nextStep.copy}
            </p>
          </div>
          <a
            href={nextStep.href}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#252422] px-7 py-3.5 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#403d39]"
          >
            {nextStep.label} <ArrowRightCircle className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf2]">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
          <h2 className="text-center font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10">
            {faqs.map((item, i) => (
              <div key={i} className="border-b border-[#ccc5b9]">
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
                {openFaq === i && (
                  <p className="sub-heading pb-5 text-sm font-light leading-relaxed text-[#403d39]/80">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <SecondaryButton as="a" href="/free-audit">
              Get a Free Audit
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <FinalCTA />
    </main>
  );
}
