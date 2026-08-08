"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PrimaryButton, SecondaryButton } from "../../ui/ui_components";
import HeroBackground from "../../shared/hero_background";

/**
 * Hero — Local SEO service page.
 *
 * Layout mirrors the homepage hero (eyebrow → two-tone italic heading →
 * orange bar → two paragraphs → dual CTAs), placed in a left-text /
 * right-image split like the reference design. Animation timings/variants
 * are copied 1:1 from components/home_page/hero.js so both heroes feel
 * identical.
 */

// Same stagger timing as the homepage hero
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

// Entrance for the hero image — fades in, scales down slightly (same as homepage)
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

export default function LocalSeoHero() {
  return (
    <section className="relative overflow-hidden bg-[#fbf4ea] border-b border-[#ccc5b9]/60">
      {/* <HeroBackground /> */}
      <div className="relative z-[1]  mx-auto max-w-7xl px-6 pt-12 md:pt-14 lg:pt-6 pb-12 md:pb-12 lg:pb-12 xl:pb-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* LEFT — copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start text-left"
          >
            <motion.div variants={item} className="pt-1 md:pt-2 lg:pt-0">
              <Eyebrow className="text-[8px] xl:text-[11px]">LOCAL SEO FOR ROOFERS</Eyebrow>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-heading break-words font-heading text-4xl font-black leading-[1.08] tracking-tight mt-4 md:mt-5 lg:mt-0 lg:text-4xl xl:text-6xl max-w-lg sm:max-w-lg lg:max-w-7xl"
            >
              <motion.span variants={item} style={{ color: "#eb5e28" }}>
                SEO for Roofers
              </motion.span>
              <br />
              <motion.span variants={item} className="text-[#252422]">
                That Gets Your Phone Ringing
              </motion.span>
            </motion.h1>

            <motion.div variants={item}>
              <motion.p className="sub-heading mt-5 md:mt-6 lg:mt-6 text-xs xl:text-sm font-semibold leading-relaxed text-[#403d39] max-w-md sm:max-w-lg md:max-w-lg lg:max-w-[90%] xl:max-w-[90%]">
                Homeowners search Google before they call anyone. The
                roofing company that ranks gets the job — the one that
                doesn&rsquo;t gets skipped.
              </motion.p>

              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.5, ease: [0.22, 0.55, 0.5, 1] }}
                className="mt-5 md:mt-6 block h-[3px] w-20 origin-center bg-[#eb5e28]"
              />

              <motion.p className="mt-5 md:mt-6 text-xs xl:text-sm font-light leading-relaxed text-[#403d39] max-w-sm md:max-w-lg lg:max-w-[90%] xl:max-w-[90%]">
                Roofer SEO Co. builds SEO for roofers that turns local
                search into booked jobs, not just traffic, with
                month-to-month terms and no long-term contracts.
              </motion.p>
            </motion.div>

            <motion.div variants={item} className="mt-8 md:mt-9 lg:mt-8 flex flex-wrap gap-4">
              <PrimaryButton as="a" href="/book-a-call">
                Book a Call <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton as="a" href="/free-audit">
                Get a Free Audit
              </SecondaryButton>
            </motion.div>
          </motion.div>

          {/* RIGHT — hero image (lg and up only) */}
     <motion.div
  variants={imageEntrance}
  initial="hidden"
  animate="show"
  /* Bumped desktop width from max-w-md (448px) to lg:max-w-xl (576px) */
  className="hidden lg:flex relative mx-auto w-full max-w-md lg:max-w-lg items-center justify-center rounded-2xl lg:translate-y-12 xl:translate-y-15"
>
  <motion.div animate={imageFloat} className="relative w-full">
    <Image
      src="/Bob with nail gun@1x.png"
      alt="Local SEO for roofers"
      width={1200}
      height={1600}
      priority
      className="w-full h-auto object-contain drop-shadow-xl"
    />
  </motion.div>
</motion.div>
        </div>
      </div>

      {/* trust strip — same fade-in + infinite marquee as the homepage trust strip */}
      <motion.div
        className="relative overflow-hidden border-y border-[#252422] bg-[#fffcf2]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl px-6 py-4 text-sm font-bold  text-[#252422] lg:px-6">
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