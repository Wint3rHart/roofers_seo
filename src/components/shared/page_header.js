"use client";

import { motion } from "framer-motion";
import { Eyebrow, PrimaryButton, SecondaryButton, OrangeBar } from "../ui/ui_components";
import { ArrowRight } from "lucide-react";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  useReducedMotion,
} from "../ui/motion";

/**
 * Shared inner-page hero header.
 * Used on About, Contact, Free Audit, Book a Call, Blog, Privacy, Thank You.
 */
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  align = "center",
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-[#ccc5b9]/60 bg-[#fffcf2]">
      <motion.div
        aria-hidden
        className="absolute -right-24 -top-10 hidden h-[320px] w-[320px] rounded-full opacity-50 lg:block"
        style={{ background: "#ccc5b9" }}
        animate={
          reduce
            ? undefined
            : { x: [0, -24, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-16 text-center lg:px-6 lg:py-20">
        <motion.div
          className="text-center"
          variants={staggerContainer(0.14)}
          initial="hidden"
          animate="show"
        >
          {eyebrow && (
            <motion.div variants={fadeUp}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </motion.div>
          )}
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl"
          >
            {title}
          </motion.h1>
          <motion.div variants={fadeUp}>
            <OrangeBar className="mt-6" />
          </motion.div>
          {subtitle && (
            <motion.p
              variants={fadeUp}
              className="sub-heading mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-[#403d39]/90"
            >
              {subtitle}
            </motion.p>
          )}
          {(primaryCta || secondaryCta) && (
            <motion.div
              variants={fadeScale}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              {primaryCta && (
                <PrimaryButton as="a" href={primaryHref}>
                  {primaryCta} <ArrowRight className="h-4 w-4" />
                </PrimaryButton>
              )}
              {secondaryCta && (
                <SecondaryButton as="a" href={secondaryHref}>
                  {secondaryCta}
                </SecondaryButton>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
