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

// Entrance for the hero image: fades in, slides from the right, scales up slightly.
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
    <section className="relative pt-6 md:pt-4 lg:pt-0 bg-[#fffcf2] pb-4 md:pb-0 lg:pb-8">
      {/* <HeroBackground /> */}

      {/*
        Wrapper is now pinned to the SAME max-w-7xl container as the text
        column (mx-auto inset-x-0) instead of the raw viewport, so on very
        wide screens it stops growing past the content column and stays
        anchored near the copy instead of drifting off to the right edge.
      */}
      <div className="hidden lg:block absolute inset-0 mx-auto max-w-7xl">
        <motion.div
          className="absolute right-0 top-4 xl:top-4 h-full w-full max-w-[900px] xl:max-w-[1000px]"
          variants={imageEntrance}
          initial="hidden"
          animate="show"
        >
          <motion.div className="relative h-full w-full" animate={imageFloat}>
            <Image
              src="/roofer homepage.jpeg"
              alt="Aerial view of a roof with local service radius pin"
              fill
              priority
              className="object-contain object-top-right"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#fffcf2] via-[#fffcf2]/0 to-transparent " />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl  px-6 pb-12 md:pb-14 lg:pb-0 lg:pt-8 xl:pt-11  ">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-full md:max-w-xl lg:max-w-[55%] xl:max-w-xl flex-col items-start text-left"
        >
          <motion.div variants={item} className="pt-2 md:pt-4 lg:pt-0">
            <Eyebrow className="text-[8px] xl:text-[11px]">ROOFING SEO SPECIALISTS</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className=" font-heading break-words font-heading text-3xl font-black leading-[1.08] tracking-tight mt-4 md:mt-5 lg:mt-0 lg:text-4xl xl:text-5xl"
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
          <motion.div variants={item}>
            <motion.p
              // variants={item}
              className="sub-heading mt-5 md:mt-4  text-xs xl:text-sm font-semibold leading-relaxed text-[#403d39] max-w-md md:max-w-md lg:max-w-[65%] xl:max-w-lg"
            >
              Get found in Google Search, Google Maps, and AI Search before
              your competitors and turn more local searches into qualified
              roofing leads.
            </motion.p>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 1.5, ease: [0.22, 0.55, 0.5, 1] }}
              className="mt-5 md:mt-6 block h-[3px] w-20 origin-center bg-[#eb5e28]"
            />

            <motion.p className="mt-5 md:mt-6 lg:mt-4 xl:mt-4  text-xs xl:text-sm font-light leading-relaxed text-[#403d39] max-w-md md:max-w-md lg:max-w-[65%] xl:max-w-full">
              Our roofing SEO services combine technical SEO, Google Business
              Profile optimization, reputation management, and
              conversion-focused websites to help roofing companies generate
              more qualified leads and grow their business.
            </motion.p>
          </motion.div>
          <motion.div variants={item} className="mt-8 md:mt-9 lg:mt-4 xl:mt-8 flex flex-wrap gap-4">
            <PrimaryButton as="a" href="/book-a-call">
              Book a Call <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton as="a" href="/free-audit">
              Get a Free Audit
            </SecondaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}