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
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <motion.div
            variants={staggerContainer(0.14)}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={fadeScale}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: "#eb5e28" }}
            >
              <CheckCircle className="h-8 w-8 text-[#fffcf2]" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Eyebrow>{variant.eyebrow}</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl"
            >
              {variant.heading}
            </motion.h1>
            <motion.div variants={fadeUp}>
              <OrangeBar className="mt-6" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="sub-heading mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-[#403d39]/90"
            >
              {variant.body}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-[#ccc5b9] bg-white/60 px-5 py-2.5"
            >
              <variant.bullet.icon
                className="h-4 w-4"
                style={{ color: "#eb5e28" }}
              />
              <span className="sub-heading text-sm font-medium text-[#403d39]">
                {variant.bullet.label}
              </span>
            </motion.div>

            <motion.div
              variants={fadeScale}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <PrimaryButton as="a" href={variant.primaryHref}>
                {variant.primaryLabel} <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton as="a" href={variant.secondaryHref}>
                {variant.secondaryLabel}
              </SecondaryButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cross-links */}
      <motion.section
        className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]"
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : { once: true, margin: "-80px" }}
      >
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-10">
          <motion.p
            variants={fadeUp}
            className="eyebrow text-xs font-bold uppercase tracking-[0.18em] text-[#eb5e28]"
          >
            While you’re here
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-heading text-2xl font-black italic tracking-tight sm:text-3xl lg:text-4xl"
          >
            Explore our roofing services
          </motion.h2>
          <motion.div variants={fadeUp}>
            <OrangeBar className="mt-5" />
          </motion.div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_LINKS.map((s) => (
              <motion.a
                key={s.href}
                href={s.href}
                variants={fadeScale}
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ duration: 0.25 }}
                className="group rounded-xl border border-[#ccc5b9]/70 bg-white/50 p-5 text-center transition-all hover:shadow-lg"
              >
                <h3 className="font-heading text-base font-bold">{s.label}</h3>
                <p
                  className="mt-2 inline-flex items-center justify-center gap-1 text-xs font-bold transition-transform group-hover:translate-x-1"
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
