"use client";

import { motion } from "framer-motion";
import { SectionHeading, PrimaryButton } from "../ui/ui_components";
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
        {/* Main heading left exactly as it was */}
        <SectionHeading eyebrow="PRICING" title="Ready To Get Started ?" />

        <motion.div
          className="mt-8"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          {/* Bold sub-heading under the title */}
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-2xl text-lg font-bold text-[#252422]"
          >
            Pricing built around where your business actually stands
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="sub-heading mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-[#403d39]/85"
          >
            Every roofing company is starting from a different spot. Some
            are invisible in the map pack. Some rank fine in one
            neighborhood but nowhere else. Some have reviews holding them
            back, or a website that's actively costing them leads. Your
            price depends on where your business stands in search today,
            not a package built for someone else's problem.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="sub-heading mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-[#403d39]/85"
          >
            A plan focused on reputation management alone costs less than
            one that combines local SEO, web design, ads, and AI search
            visibility. You only pay for what your business actually
            needs to move forward.
          </motion.p>

          {/* Price pill */}
          <motion.div variants={fadeUp} className="mt-8 flex justify-center">
            <div className="rounded-2xl bg-[#f8dccb] px-10 py-5">
              <p className="text-base font-bold text-[#252422]">
                Plans start at{" "}
                <span style={{ color: "#eb5e28" }}>$297</span> per month
              </p>
            </div>
          </motion.div>

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