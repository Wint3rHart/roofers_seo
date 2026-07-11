"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CheckCircle, ArrowRight, Mail, Clock } from "lucide-react";
import { Eyebrow, PrimaryButton, SecondaryButton } from "@/components/ui/ui_components";

const VARIANTS = {
  "free-audit": {
    eyebrow: "AUDIT REQUEST RECEIVED",
    heading: "Your free audit is on the way",
    body: "Thanks for sending your details. We personally review every submission — no automated reports — so you\u2019ll get your audit by email within 2 business days. No sales pressure, no obligation.",
    bullet: {
      icon: Mail,
      label: "Delivered by email within 2 business days",
    },
    primaryLabel: "Book a Call Instead",
    primaryHref: "/book-a-call",
    secondaryLabel: "Back to Homepage",
    secondaryHref: "/",
  },
  contact: {
    eyebrow: "MESSAGE RECEIVED",
    heading: "Thanks for reaching out",
    body: "We\u2019ve got your message and will get back to you within 1\u20132 business days. If you mentioned something time-sensitive, we\u2019ll prioritize it.",
    bullet: {
      icon: Clock,
      label: "We typically respond within 1\u20132 business days",
    },
    primaryLabel: "Get a Free Audit",
    primaryHref: "/free-audit",
    secondaryLabel: "Back to Homepage",
    secondaryHref: "/",
  },
  default: {
    eyebrow: "GOT IT",
    heading: "Thanks \u2014 we\u2019ll be in touch",
    body: "Your submission has been received. We\u2019ll get back to you shortly.",
    bullet: {
      icon: Mail,
      label: "We typically respond within 1\u20132 business days",
    },
    primaryLabel: "Back to Homepage",
    primaryHref: "/",
    secondaryLabel: "See Services",
    secondaryHref: "/services/reputation-management",
  },
};

function ThankYouContent() {
  const params = useSearchParams();
  const type = params.get("type");
  const variant = VARIANTS[type] || VARIANTS.default;

  return (
    <main className="bg-[#fffcf2]">
      <section className="relative overflow-hidden border-b border-[#ccc5b9]/60">
        <div
          className="absolute -right-24 top-10 hidden h-[320px] w-[320px] rounded-full opacity-50 lg:block"
          style={{ background: "#ccc5b9" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
            style={{ background: "#eb5e28" }}
          >
            <CheckCircle className="h-8 w-8 text-[#fffcf2]" />
          </div>
          <Eyebrow>{variant.eyebrow}</Eyebrow>
          <h1 className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl">
            {variant.heading}
          </h1>
          <p className="sub-heading mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-[#403d39]/90">
            {variant.body}
          </p>

          <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-[#ccc5b9] bg-white/60 px-5 py-2.5">
            <variant.bullet.icon
              className="h-4 w-4"
              style={{ color: "#eb5e28" }}
            />
            <span className="sub-heading text-sm font-medium text-[#403d39]">
              {variant.bullet.label}
            </span>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PrimaryButton as="a" href={variant.primaryHref}>
              {variant.primaryLabel} <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton as="a" href={variant.secondaryHref}>
              {variant.secondaryLabel}
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
          <p className="eyebrow text-center text-xs font-bold uppercase tracking-[0.18em] text-[#eb5e28]">
            While you’re here
          </p>
          <h2 className="mt-3 text-center font-heading text-2xl font-black italic tracking-tight sm:text-3xl">
            Explore our roofing services
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Reputation Management", href: "/services/reputation-management" },
              { label: "Local SEO", href: "/services/local-seo" },
              { label: "Web Design", href: "/services/web-design" },
              { label: "AI Search Visibility", href: "/services/ai-search-visibility" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="group rounded-xl border border-[#ccc5b9]/70 bg-white/50 p-5 transition-all hover:shadow-lg"
              >
                <h3 className="font-heading text-base font-bold">{s.label}</h3>
                <p className="mt-2 inline-flex items-center gap-1 text-xs font-bold transition-transform group-hover:translate-x-1" style={{ color: "#eb5e28" }}>
                  Learn More <ArrowRight className="h-3 w-3" />
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <ThankYouContent />
    </Suspense>
  );
}
