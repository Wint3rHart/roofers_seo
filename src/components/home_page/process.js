"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "../ui/ui_components";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

const PROCESS_STEPS = [
  { n: "01", title: "Discovery", copy: "We learn about your business, your service area, and your goals." },
  { n: "02", title: "Audit", copy: "We analyze your reviews, your site, your competitors, and your current visibility." },
  { n: "03", title: "Strategy", copy: "We build a custom plan — reputation, local SEO, and web, in the right order." },
  { n: "04", title: "Implementation", copy: "We execute the plan with precision and roofing-industry best practices." },
  { n: "05", title: "Reporting", copy: "You get clear reports showing real reviews, rankings, and traffic progress." },
  { n: "06", title: "Growth", copy: "We refine, optimize, and scale to keep leads coming month after month." },
];

const Process = () => {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] text-[#252422]">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>OUR PROCESS</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading mx-auto max-w-xl text-3xl font-black italic leading-tight tracking-tight sm:text-4xl"
          >
            A Simple 6-Step Process That Works
          </motion.h2>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          className="mt-14 grid gap-x-8 gap-y-12 text-center sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.n}
              variants={fadeScale}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <span
                className="font-heading text-3xl font-black italic"
                style={{ color: "#eb5e28" }}
              >
                {step.n}
              </span>
              <h3 className="font-heading mt-2 text-lg font-bold">{step.title}</h3>
              <p className="sub-heading mx-auto mt-1 max-w-xs text-sm font-light leading-relaxed text-[#403d39]/85">
                {step.copy}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
