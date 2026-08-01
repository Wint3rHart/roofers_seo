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
 * dual CTAs), placed in a left-text / right-image split. Copy is the
 * doc's exact H1 ("Reputation Management for Roofers") and its "Body
 * Text" paragraph, split into two paragraphs around the divider exactly
 * as shown in the reference design image — nothing paraphrased.
 *
 * Right-side image is left as an empty placeholder for now — swap the
 * placeholder div below for an <Image> once the asset is provided.
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
    <section className="relative  bg-[#fbf4ea] border-b border-[#ccc5b9]/60">
      <div className="relative z-[1] mx-auto max-w-7xl px-6 pt-16 pb-12 lg:px-14 lg:pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
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
    className="w-full break-words font-heading text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
  >
    <motion.span variants={item} className="text-[#252422]">
      Reputation Management
    </motion.span>{" "}
    <motion.span variants={item} style={{ color: "#eb5e28" }}>
      for Roofers
    </motion.span>
  </motion.h1>

  <motion.div variants={item} className="w-full">
  <motion.p className="sub-heading mt-6 text-sm font-semibold leading-tight text-[#403d39] max-w-[85%] sm:max-w-full">
    A roofing company&rsquo;s online reputation shapes who
    calls and who scrolls past, often before a single
    conversation happens.
  </motion.p>

  <motion.span
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 0.5, delay: 1.5, ease: [0.22, 0.55, 0.5, 1] }}
    className="mt-6 block h-[3px] w-20 origin-left bg-[#eb5e28]"
  />

  <motion.p className="mt-6 text-sm font-light leading-relaxed text-[#403d39] max-w-[85%] sm:max-w-full">
    Reputation management for roofing companies means
    building a system around that moment: getting good
    experiences turned into visible reviews, and catching
    bad ones before they go public. No long-term contract,
    roofing-specific setup, live within 24 hours, working
    nationwide.
  </motion.p>
</motion.div>

  <motion.div variants={item} className="mt-8 flex w-full flex-wrap gap-4">
    <PrimaryButton as="a" href="/contact">
      Get your 7 days free trial <ArrowRight className="h-4 w-4" />
    </PrimaryButton>
    {/* <SecondaryButton as="a" href="/free-audit">
      Get a Free Audit
    </SecondaryButton> */}
  </motion.div>
</motion.div>
        
{/* RIGHT — hero image */}

                   {/* RIGHT — hero image */}
<motion.div
  variants={imageEntrance}
  initial="hidden"
  animate="show"
  className="relative mx-auto w-full max-w-2xl lg:max-w-none lg:w-[125%] lg:-ml-16 xl:-ml-32 lg:translate-y-12"
>
  <motion.div animate={imageFloat} className="relative w-[100vw] -translate-x-20 sm:-translate-x-0 lg:w-full  flex justify-center">
    <Image
      src="/WhatsApp Image 2026-08-01 at 7.53.06 AM-Photoroom.png"
      alt="Reputation Management for roofers"
      width={1200}
      height={900}
      priority
      className="w-full h-auto object-contain drop-shadow-xl"
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
