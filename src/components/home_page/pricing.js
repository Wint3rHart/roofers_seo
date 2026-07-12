"use client";

import { motion } from "framer-motion";
import { Eyebrow, PrimaryButton } from "../ui/ui_components";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

export const Pricing = () => {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-[#ccc5b9]/60 bg-white/40 text-[#252422]">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>PRICING</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl"
          >
            Custom Plans for Your Roofing Business
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="sub-heading mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed text-[#403d39]/85"
          >
            Every roofing company starts in a different place — some need
            reviews fixed first, some are invisible in the map pack, some
            have a website actively losing them leads. Pricing follows
            whichever combination of services actually moves your business
            forward, not a one-size-fits-all package.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="sub-heading mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-[#403d39]/85"
          >
            A plan built around reputation management alone costs less than
            one that combines reviews, local SEO, web design, and AI search
            visibility — so the price reflects what your business actually
            needs, not what’s easiest to sell.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base font-bold"
          >
            Most projects range between{" "}
            <span style={{ color: "#eb5e28" }}>$250</span> and{" "}
            <span style={{ color: "#eb5e28" }}>$3,000</span> per month.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <PrimaryButton as="a" href="/book-a-call">
              Book a Call for a Custom Plan
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
