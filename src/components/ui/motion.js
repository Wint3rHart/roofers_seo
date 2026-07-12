"use client";

/**
 * Shared framer-motion variants + helpers.
 *
 * Usage pattern:
 *   import { fadeUp, staggerContainer, viewportOnce, useMotionReady } from "@/components/ui/motion";
 *
 *   const reduce = useReducedMotion();
 *   const v = useMotionReady(reduce);  // returns viewport or false
 *
 *   <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={v}>
 *     <motion.h2 variants={fadeUp}>Heading</motion.h2>
 *     <motion.p variants={fadeUp}>Body text</motion.p>
 *   </motion.div>
 *
 * All variants respect prefers-reduced-motion automatically via `useMotionReady`.
 */

import { useReducedMotion } from "framer-motion";

// Single fade-up — the workhorse for headings, paragraphs, cards, etc.
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// Smaller, faster fade for tight stagger chains (lists, small items)
export const fadeUpSm = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

// Fade-in scale — for cards, badges, images
export const fadeScale = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Stagger container — orchestrates children with fadeUp
export const staggerContainer = (stagger = 0.12, delay = 0.05) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

// Standard viewport config — play once, when 80px into view
export const viewportOnce = { once: true, margin: "-80px" };

// Reduced-motion-safe viewport: pass `false` to disable whileInView entirely
export function useMotionReady(reduce) {
  return reduce ? false : viewportOnce;
}

// Re-export the hook for convenience
export { useReducedMotion };
