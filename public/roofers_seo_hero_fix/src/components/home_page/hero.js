"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PrimaryButton, SecondaryButton } from "../ui/ui_components";
import HeroBackground from "../shared/hero_background";

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

// Entrance for the hero image: fades in, scales up slightly.
const imageEntrance = {
  hidden: { opacity: 0, scale: 1.04 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.2, ease: [0.22, 0.55, 0.5, 1] },
  },
};

// Gentle continuous float once the entrance finishes, for a premium ambient feel.
const imageFloat = {
  y: [0, -10, 0],
  transition: {
    duration: 6,
    delay: 1.4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-[#ccc5b9]/60 bg-[#fffcf2]">
      {/* <HeroBackground /> */}

      {/*
        Viewport-fit wrapper: on every screen size the hero (through the CTA
        buttons) fits within the first viewport, no scroll needed.
        `4.5rem` approximates the sticky navbar height so hero + navbar
        together never exceed 100svh. The [@media(max-height:...)] variants
        tighten spacing further on short viewports (small laptops/netbooks,
        landscape phones) without touching anything above 1300px width.
      */}
      <div className="relative z-[1] mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl flex-col justify-center px-6 py-8 [@media(max-height:700px)]:py-4 lg:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT — copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex max-w-xl flex-col items-start text-left"
          >
            <motion.div variants={item}>
              <Eyebrow className="text-[8px] lg:text-[11px]">
                ROOFING SEO SPECIALISTS
              </Eyebrow>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-heading text-3xl font-black leading-[1.1] tracking-soft sm:text-4xl lg:text-5xl [@media(max-height:700px)]:text-3xl"
            >
              <motion.span variants={item}>Roofing SEO</motion.span>
              <br />
              <motion.span variants={item}>Company for</motion.span>
              <br />
              <motion.span variants={item} style={{ color: "#eb5e28" }}>
                Growth-Focused
              </motion.span>
              <br />
              <motion.span variants={item} style={{ color: "#eb5e28" }}>
                Roofing Businesses
              </motion.span>
            </motion.h1>

            <motion.div variants={item} className="w-full">
              <motion.p className="sub-heading mt-4 max-w-lg text-sm font-semibold leading-tight text-[#403d39] lg:mt-6">
                Get found in Google Search, Google Maps, and AI Search before
                your competitors and turn more local searches into qualified
                roofing leads.
              </motion.p>

              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.5, ease: [0.22, 0.55, 0.5, 1] }}
                className="mt-4 block h-[3px] w-20 origin-left bg-[#eb5e28] lg:mt-6"
              />

              {/* Dropped below sm on very short viewports to keep CTAs on-screen */}
              <motion.p className="mt-4 hidden max-w-lg text-sm font-light leading-relaxed text-[#403d39] sm:block lg:mt-6 [@media(max-height:640px)]:sm:hidden">
                Our roofing SEO services combine technical SEO, Google Business
                Profile optimization, reputation management, and
                conversion-focused websites to help roofing companies generate
                more qualified leads and grow their business.
              </motion.p>
            </motion.div>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-4 lg:mt-8">
              <PrimaryButton as="a" href="/book-a-call">
                Book a Call <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton as="a" href="/free-audit">
                Get a Free Audit
              </SecondaryButton>
            </motion.div>
          </motion.div>

          {/* RIGHT — hero image. Hidden on tablet/mobile (<lg), height-driven
              so it stays tall rather than shrinking on short viewports. */}
          <motion.div
            variants={imageEntrance}
            initial="hidden"
            animate="show"
            className="relative mx-auto hidden items-center justify-center lg:flex lg:h-[clamp(220px,44vh,480px)] lg:w-auto"
          >
            <motion.div className="relative h-full" animate={imageFloat}>
              <Image
                src="/roofer homepage.jpeg"
                alt="Aerial view of a roof with local service radius pin"
                width={1200}
                height={1200}
                priority
                className="h-full w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
