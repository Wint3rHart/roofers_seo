"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PrimaryButton, SecondaryButton } from "../../ui/ui_components";
import Image from "next/image";

/**
 * Hero — Reputation Management service page.
 *
 * Layout mirrors the homepage hero and the Local SEO hero (eyebrow →
 * two-tone bold heading → two paragraphs split by an orange divider →
 * dual CTAs), placed in a left-text / right-image split.
 */

// Same stagger timing as the homepage / local_seo hero
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.32,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.55, 0.5, 1] },
  },
};

// Entrance for the hero image — fades in, scales down slightly (same as homepage/local_seo)
const imageEntrance = {
  hidden: { opacity: 0, scale: 1.04 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.2, ease: [0.22, 0.55, 0.5, 1] },
  },
};

const TRUST_STRIP = [
  "No long-term contracts",
  "Nationwide coverage",
  "Roofing-specific strategy",
];

export default function ReputationManagementHero() {
  // Gentle continuous float once the entrance finishes (same as homepage)
  const imageFloat = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      delay: 1.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative bg-[#fbf4ea] border-b border-[#ccc5b9]/60">
      {/*
        Viewport-fit wrapper: content through the CTA button fits within the
        first viewport on every screen size (short laptops, tablets,
        phones), without touching the >=1300px look. `4.5rem` approximates
        the sticky navbar height.
      */}
      <div className="relative z-[1] mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl flex-col justify-center px-6 py-8 [@media(max-height:700px)]:py-4 lg:px-14 lg:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT — copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex w-full max-w-full min-w-0 flex-col items-start text-left"
          >
            <motion.div variants={item} className="w-full">
              <Eyebrow className="text-[8px] lg:text-[11px]">
                Turns Every Job Into a 5-Star Review
              </Eyebrow>
            </motion.div>

            <motion.h1
              variants={item}
              className="w-full break-words font-heading text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl [@media(max-height:700px)]:text-3xl"
            >
              <motion.span variants={item} className="text-[#252422]">
                Reputation Management
              </motion.span>{" "}
              <motion.span variants={item} style={{ color: "#eb5e28" }}>
                for Roofers
              </motion.span>
            </motion.h1>

            <motion.div variants={item} className="w-full">
              <motion.p className="sub-heading mt-4 text-sm font-semibold leading-tight text-[#403d39] max-w-[85%] sm:max-w-full lg:mt-6">
                A roofing company&rsquo;s online reputation shapes who
                calls and who scrolls past, often before a single
                conversation happens.
              </motion.p>

              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.5, ease: [0.22, 0.55, 0.5, 1] }}
                className="mt-4 block h-[3px] w-20 origin-left bg-[#eb5e28] lg:mt-6"
              />

              {/* Dropped on very short viewports so the CTA stays on-screen */}
              <motion.p className="mt-4 text-sm font-light leading-relaxed text-[#403d39] max-w-[85%] sm:max-w-full lg:mt-6 [@media(max-height:640px)]:hidden">
                Reputation management for roofing companies means
                building a system around that moment: getting good
                experiences turned into visible reviews, and catching
                bad ones before they go public. No long-term contract,
                roofing-specific setup, live within 24 hours, working
                nationwide.
              </motion.p>
            </motion.div>

            <motion.div variants={item} className="mt-6 flex w-full flex-wrap gap-4 lg:mt-8">
              <PrimaryButton as="a" href="/contact">
                Get your 7 days free trial <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              {/* <SecondaryButton as="a" href="/free-audit">
                Get a Free Audit
              </SecondaryButton> */}
            </motion.div>
          </motion.div>

          {/* RIGHT — hero image. Hidden on tablet/mobile (<lg); height-driven
              at lg+ so it stays tall instead of shrinking on short viewports. */}
          <motion.div
            variants={imageEntrance}
            initial="hidden"
            animate="show"
            className="relative mx-auto hidden items-center justify-center lg:flex lg:h-[clamp(220px,42vh,460px)] lg:w-auto"
          >
            <motion.div className="relative h-full" animate={imageFloat}>
              <Image
                src="/WhatsApp Image 2026-08-01 at 7.53.06 AM-Photoroom.png"
                alt="Reputation Management for roofers"
                width={1200}
                height={900}
                priority
                className="h-full w-auto object-contain drop-shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* trust strip — same fade-in + infinite marquee as the homepage/local_seo trust strip */}
      <motion.div
        className="relative overflow-hidden border-y border-[#252422] bg-[#fffcf2]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl px-6 py-4 text-sm font-bold text-[#252422] lg:px-6">
          <motion.div
            className="flex min-w-full shrink-0 items-center justify-around gap-6 pr-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {TRUST_STRIP.map((t, i) => (
              <span key={`orig-${t}-${i}`} className="flex items-center gap-6 whitespace-nowrap">
                {t}
                <span className="text-[#eb5e28]">•</span>
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex min-w-full shrink-0 items-center justify-around gap-6 pr-6"
            aria-hidden="true"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {TRUST_STRIP.map((t, i) => (
              <span key={`dup-${t}-${i}`} className="flex items-center gap-6 whitespace-nowrap">
                {t}
                <span className="text-[#eb5e28]">•</span>
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
