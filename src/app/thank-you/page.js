"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Mail, Clock } from "lucide-react";
import { Eyebrow, OrangeBar, PrimaryButton, SecondaryButton } from "@/components/ui/ui_components";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  useReducedMotion,
} from "@/components/ui/motion";

const VARIANTS = {
  "free-audit": {
    eyebrow: "AUDIT REQUEST RECEIVED",
    heading: "Your free audit is on the way",
    body: "Thanks for sending your details. We personally review every submission — no automated reports — so you’ll get your audit by email within 2 business days. No sales pressure, no obligation.",
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
    body: "We’ve got your message and will get back to you within 1–2 business days. If you mentioned something time-sensitive, we’ll prioritize it.",
    bullet: {
      icon: Clock,
      label: "We typically respond within 1–2 business days",
    },
    primaryLabel: "Get a Free Audit",
    primaryHref: "/free-audit",
    secondaryLabel: "Back to Homepage",
    secondaryHref: "/",
  },
  default: {
    eyebrow: "GOT IT",
    heading: "Thanks — we’ll be in touch",
    body: "Your submission has been received. We’ll get back to you shortly.",
    bullet: {
      icon: Mail,
      label: "We typically respond within 1–2 business days",
    },
    primaryLabel: "Back to Homepage",
    primaryHref: "/",
    secondaryLabel: "See Services",
    secondaryHref: "/services/reputation-management",
  },
};

const SERVICE_LINKS = [
  { label: "Reputation Management", href: "/services/reputation-management" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Web Design", href: "/services/web-design" },
  { label: "AI Search Visibility", href: "/services/ai-search-visibility" },
];

function ThankYouContent() {
  const params = useSearchParams();
  const type = params.get("type");
  const variant = VARIANTS[type] || VARIANTS.default;
  const reduce = useReducedMotion();

  return (
    <main className="bg-[#fffcf2]">
      {/* Hero Section forced into a single viewport using min-h-[100dvh] */}
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-b border-[#ccc5b9]/60 py-6 sm:py-8 md:py-12 lg:py-16">
        <motion.div
          aria-hidden
          className="absolute -right-24 top-10 hidden h-[220px] w-[220px] rounded-full opacity-50 sm:h-[260px] sm:w-[260px] lg:block lg:h-[320px] lg:w-[320px]"
          style={{ background: "#ccc5b9" }}
          animate={
            reduce
              ? undefined
              : { x: [0, -24, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto my-auto w-full max-w-3xl px-4 text-center sm:px-6">
          <motion.div
            variants={staggerContainer(0.14)}
            initial="hidden"
            animate="show"
          >
            {/* Success Icon */}
            <motion.div
              variants={fadeScale}
              className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full sm:mb-4 sm:h-12 sm:w-12 md:mb-5 md:h-14 md:w-14 lg:mb-6 lg:h-14 lg:w-14"
              style={{ background: "#eb5e28" }}
            >
              <CheckCircle className="h-5 w-5 text-[#fffcf2] sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-7 lg:w-8" />
            </motion.div>

            {/* Eyebrow */}
            <motion.div variants={fadeUp}>
              <Eyebrow className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-sm">
                {variant.eyebrow}
              </Eyebrow>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="mt-2 font-heading text-2xl font-black italic leading-[1.1] tracking-tight sm:mt-3 sm:text-3xl md:text-4xl lg:mt-4 lg:text-4xl"
            >
              {variant.heading}
            </motion.h1>

            {/* Divider Line */}
            <motion.div variants={fadeUp}>
              <OrangeBar className="mt-3 sm:mt-4 md:mt-5 lg:mt-6" />
            </motion.div>

            {/* Body */}
            <motion.p
              variants={fadeUp}
              className="sub-heading mx-auto mt-3 max-w-xs text-xs font-light leading-relaxed text-[#403d39]/90 sm:mt-4 sm:max-w-md sm:text-sm md:mt-5 md:max-w-lg md:text-base lg:text-xs lg:mt-4 lg:max-w-4xl"
            >
              {variant.body}
            </motion.p>

            {/* Delivery / Response Time Pill */}
            <motion.div
              variants={fadeUp}
              className="mx-auto mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#ccc5b9] bg-white/60 px-3 py-1.5 sm:mt-5 sm:gap-2 sm:px-4 sm:py-2 md:mt-6 lg:mt-8 lg:px-5 lg:py-2.5"
            >
              <variant.bullet.icon
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                style={{ color: "#eb5e28" }}
              />
              <span className="sub-heading text-[11px] font-medium text-[#403d39] sm:text-xs md:text-sm">
                {variant.bullet.label}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeScale}
              className="mt-5 flex flex-wrap justify-center gap-2.5 sm:mt-6 sm:gap-3 md:mt-8 md:gap-4 lg:mt-10"
            >
              <PrimaryButton as="a" href={variant.primaryHref}>
                {variant.primaryLabel} <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </PrimaryButton>
              <SecondaryButton as="a" href={variant.secondaryHref}>
                {variant.secondaryLabel}
              </SecondaryButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cross-links section */}
      <motion.section
        className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]"
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : { once: true, margin: "-80px" }}
      >
        <div className="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-12 md:py-14 lg:py-16">
          <motion.p
            variants={fadeUp}
            className="eyebrow text-[10px] font-bold uppercase tracking-[0.18em] text-[#eb5e28] sm:text-xs"
          >
            While you’re here
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-2 font-heading text-xl font-black italic tracking-tight sm:mt-3 sm:text-2xl md:text-3xl lg:text-4xl"
          >
            Explore our roofing services
          </motion.h2>
          <motion.div variants={fadeUp}>
            <OrangeBar className="mt-3 sm:mt-4 lg:mt-5" />
          </motion.div>
          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:mt-10 lg:grid-cols-4">
            {SERVICE_LINKS.map((s) => (
              <motion.a
                key={s.href}
                href={s.href}
                variants={fadeScale}
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ duration: 0.25 }}
                className="group rounded-xl border border-[#ccc5b9]/70 bg-white/50 p-4 text-center transition-all hover:shadow-lg sm:p-5"
              >
                <h3 className="font-heading text-sm font-bold sm:text-base">{s.label}</h3>
                <p
                  className="mt-1.5 inline-flex items-center justify-center gap-1 text-[11px] font-bold transition-transform group-hover:translate-x-1 sm:mt-2 sm:text-xs"
                  style={{ color: "#eb5e28" }}
                >
                  Learn More <ArrowRight className="h-3 w-3" />
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>
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