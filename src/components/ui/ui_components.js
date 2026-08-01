"use client";

import { motion } from "framer-motion";
import { Logo } from "./logo";
import SectionHeading, { OrangeBar } from "./section_heading";
import { useReducedMotion } from "./motion";
export { Logo, SectionHeading, OrangeBar };

// Snappy, premium spring used for hover/press feedback on buttons
const buttonSpring = { type: "spring", stiffness: 420, damping: 18, mass: 0.6 };

function PrimaryButton({ children, className = "", as = "button", href, ...props }) {
  const reduce = useReducedMotion();
  const MotionComp = as === "a" ? motion.a : motion.button;

  return (
    <MotionComp
      href={href}
      whileHover={reduce ? undefined : { scale: 1.045, y: -3 }}
      whileTap={reduce ? undefined : { scale: 0.96, y: 0 }}
      transition={buttonSpring}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-[#eb5e28] px-6 py-3.5 text-sm font-bold text-[#fffcf2] shadow-[0_6px_16px_-4px_rgba(235,94,40,0.5)] transition-[background-color,box-shadow] duration-300 ease-out hover:bg-[#d94f1c] hover:shadow-[0_16px_34px_-6px_rgba(235,94,40,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eb5e28] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffcf2] ${className}`}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {/* premium light-sweep shine on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/30 blur-[6px] transition-transform duration-700 ease-out group-hover:translate-x-[350%]"
      />
    </MotionComp>
  );
}

function SecondaryButton({ children, className = "", as = "button", href, ...props }) {
  const reduce = useReducedMotion();
  const MotionComp = as === "a" ? motion.a : motion.button;

  return (
    <MotionComp
      href={href}
      whileHover={reduce ? undefined : { scale: 1.045, y: -3 }}
      whileTap={reduce ? undefined : { scale: 0.96, y: 0 }}
      transition={buttonSpring}
      className={`relative inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#252422] px-6 py-3.5 text-sm font-bold text-[#252422] shadow-[0_3px_10px_-3px_rgba(37,36,34,0.2)] transition-[background-color,color,border-color,box-shadow] duration-300 ease-out hover:bg-[#252422] hover:text-[#fffcf2] hover:shadow-[0_16px_32px_-6px_rgba(37,36,34,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#252422] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffcf2] ${className}`}
      {...props}
    >
      {children}
    </MotionComp>
  );
}

function Eyebrow({ children, className = "" }) {
  return (
    <div
      className={`inline-flex mb-2 items-center gap-1.5 rounded-full border border-[#eb5e28]/20 bg-[#eb5e28]/10 px-3 py-1 ${className}`}
    >
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#eb5e28]" />
      <span className={`${className} font-bold uppercase tracking-[0.18em] text-[#eb5e28]`}>
        {children}
      </span>
    </div>
  );
}

export { PrimaryButton, SecondaryButton, Eyebrow };