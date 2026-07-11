"use client";

import { useState } from "react";
import { Eyebrow, PrimaryButton } from "@/components/ui/ui_components";
import { ArrowRight, PenLine } from "lucide-react";

const CATEGORIES = [
  "All",
  "Local SEO",
  "Google Business Profile",
  "Reviews",
  "AI Search",
  "Case Studies",
];

export default function BlogPage() {
  const [active, setActive] = useState("All");

  return (
    <main className="bg-[#fffcf2]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#ccc5b9]/60">
        <div
          className="absolute -right-24 top-10 hidden h-[320px] w-[320px] rounded-full opacity-50 lg:block"
          style={{ background: "#ccc5b9" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="text-center">
            <Eyebrow>THE BLOG</Eyebrow>
            <h1 className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl">
              Roofing SEO, in plain English
            </h1>
            <p className="sub-heading mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-[#403d39]/90">
              Practical writing on reviews, local SEO, web design, and AI
              search visibility — built for roofing contractors, not for
              other marketers.
            </p>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto max-w-6xl px-6 py-6 lg:px-10">
          <div className="flex flex-wrap gap-2">
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
      </section>

      {/* Empty state — per doc, ship with 0 posts */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf2]">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
            style={{ background: "#eb5e28" }}
          >
            <PenLine className="h-7 w-7 text-[#fffcf2]" />
          </div>
          <h2 className="font-heading text-2xl font-black italic leading-tight tracking-tight sm:text-3xl">
            Posts are coming soon
          </h2>
          <p className="sub-heading mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-[#403d39]/85">
            We&apos;re building out a practical library on roofing-specific
            reputation, local SEO, web design, and AI search — written for
            contractors, not for other marketers. No filler, no recycled
            listicles.
          </p>
          <p className="sub-heading mx-auto mt-3 max-w-xl text-sm font-light leading-relaxed text-[#403d39]/70">
            In the meantime, the fastest way to get roofing-specific
            answers for your business is a free audit or a quick strategy
            call.
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
      </section>

      {/* Final CTA */}
      <section className="bg-[#252422]">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
          <h2 className="font-heading text-3xl font-black italic leading-tight text-[#fffcf2] sm:text-4xl">
            Ready to Boost Your Rankings?
          </h2>
          <p className="sub-heading mx-auto mt-4 max-w-lg text-sm font-light text-[#ccc5b9]">
            Get more 5-star reviews, more visibility, and more roofing jobs
            — with a system built only for roofers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton as="a" href="/book-a-call">
              Book a Call
            </PrimaryButton>
            <a
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#fffcf2] px-6 py-3.5 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#fffcf2] hover:text-[#252422]"
            >
              Get a Free Audit
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
