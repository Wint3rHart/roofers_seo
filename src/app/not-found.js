"use client";

import { motion } from "framer-motion";
import { Eyebrow, PrimaryButton, SecondaryButton } from "@/components/ui/ui_components";
import { ArrowRight, Home } from "lucide-react";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  useReducedMotion,
} from "@/components/ui/motion";

const QUICK_LINKS = [
  { label: "Reputation Management", href: "/services/reputation-management" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Web Design", href: "/services/web-design" },
  { label: "AI Search Visibility", href: "/services/ai-search-visibility" },
  { label: "About Us", href: "/about" },
  { label: "Book a Call", href: "/book-a-call" },
];

export default function NotFound() {
  const reduce = useReducedMotion();

  return (
    <main className="bg-[#fffcf2]">
      <section className="relative overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -right-24 top-10 hidden h-[420px] w-[420px] rounded-full opacity-50 lg:block"
          style={{ background: "#ccc5b9" }}
          animate={
            reduce
              ? undefined
              : { x: [0, -30, 0], y: [0, 24, 0], scale: [1, 1.06, 1] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>404 — PAGE NOT FOUND</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-7xl font-black italic leading-none tracking-tight sm:text-8xl"
            >
              <span style={{ color: "#eb5e28" }}>404</span>
            </motion.h1>
            <motion.h2
              variants={fadeUp}
              className="mt-6 font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl"
            >
              This page took a wrong turn on the way to the roof
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="sub-heading mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-[#403d39]/90"
            >
              The page you’re looking for doesn’t exist — or it was moved.
              Let’s get you back somewhere useful instead of leaving you
              on a dead end.
            </motion.p>

            <motion.div
              variants={fadeScale}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <PrimaryButton as="a" href="/">
                <Home className="h-4 w-4" /> Back to Homepage
              </PrimaryButton>
              <SecondaryButton as="a" href="/free-audit">
                Get a Free Audit <ArrowRight className="h-4 w-4" />
              </SecondaryButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 rounded-xl border border-[#ccc5b9]/70 bg-white/50 p-6 text-center"
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : { once: true, margin: "-80px" }}
          >
            <p className="eyebrow mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#eb5e28]">
              Or pick a service
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {QUICK_LINKS.map((l) => (
                <motion.li key={l.href} variants={fadeUp}>
                  <a
                    href={l.href}
                    className="sub-heading inline-flex items-center justify-center gap-1 text-sm font-bold transition-transform hover:translate-x-1"
                    style={{ color: "#eb5e28" }}
                  >
                    {l.label} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
