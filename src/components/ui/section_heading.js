"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "./ui_components";
import { useReducedMotion } from "./motion";

/**
 * Orange expanding bar — the signature visual element under every heading.
 *
 * A short horizontal line (72px wide, 3px tall, Spicy Paprika #eb5e28) that
 * scales from 0 → 1 on the X axis when the heading scrolls into view.
 * Centered under the heading. Respects prefers-reduced-motion.
 */
export function OrangeBar({ className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={`mx-auto h-[3px] w-[72px] rounded-full ${className}`}
      style={{ background: "#eb5e28", transformOrigin: "center" }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={reduce ? false : { once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

/**
 * Shared section heading — eyebrow + heading + orange expanding bar.
 *
 * Pattern (per user spec):
 *   - Center-aligned
 *   - Heading at text-5xl (NOT text-6xl) on large screens
 *   - Orange bar underneath, expanding from 0 → full width on scroll into view
 *
 * Usage:
 *   <SectionHeading eyebrow="OUR SERVICES" title="Built to Get Roofers Found" />
 *   <SectionHeading eyebrow="WHY US" title="Built Only for Roofers" subtitle="Here's what that focus does." />
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = "",
  dark = false,
}) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      {eyebrow && <Eyebrow className="text-[8px] xl:text-[11px]">{eyebrow}</Eyebrow>}
      <h2
        className={`font-heading text-3xl font-black  leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-[#fffcf2]" : "text-[#252422]"
        }`}
      >
        {title}
      </h2>
      <OrangeBar className="mt-5" />
      {subtitle && (
        <p
          className={`sub-heading mx-auto mt-5 max-w-xl text-sm font-light ${
            dark ? "text-[#ccc5b9]" : "text-[#403d39]/80"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
