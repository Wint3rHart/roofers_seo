"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/ui_components";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

const WHY_ROWS = [
  {
    label: "EXPERIENCE",
    heading: "No Learning Curve, No Wasted Months",
    copy: "Roofing-only focus means storm season spikes and insurance claim cycles are already understood — so your strategy is right the first month, not the fourth.",
  },
  {
    label: "SERVICES",
    heading: "Covering Every Place Homeowners Actually Search",
    copy: "Google, Google Maps, and AI search tools all get asked the same question — “who’s a good roofer near me” — so optimizing for all three closes the gap most agencies leave open.",
  },
  {
    label: "TRANSPARENCY",
    heading: "Month-to-Month, So Results Have to Speak for Themselves",
    copy: "No contract means nothing locks you in — so the work has to keep earning its place every single month, on results alone.",
  },
  {
    label: "COMMUNICATION",
    heading: "Fast, Plain-English Updates, So You Always Know Where You Stand",
    copy: "Running a roofing business leaves no time for marketing jargon or slow replies — so updates come fast and in plain English, built for decisions, not delays.",
  },
];

const Why = () => {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] text-[#252422]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="WHY ROOFER SEO CO."
          title="Built Only for Roofing Companies"
          subtitle="Here’s what that focus actually does for your business."
        />

        {/* Alternating rows */}
        <div className="mt-14 space-y-14">
          {WHY_ROWS.map((row, i) => (
            <motion.div
              key={row.heading}
              className={`flex flex-col items-center gap-8 text-center lg:flex-row lg:gap-16 lg:text-left ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              variants={staggerContainer(0.15)}
              initial="hidden"
              whileInView="show"
              viewport={reduce ? false : viewportOnce}
            >
              <motion.div
                variants={fadeScale}
                className="aspect-video w-full flex-1 rounded-xl"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(135deg, #403d39, #252422)"
                      : "linear-gradient(135deg, #ccc5b9, #403d39)",
                }}
              />
              <motion.div variants={fadeUp} className="flex-1">
                <p
                  className="eyebrow mb-2 text-xs font-bold tracking-[0.18em]"
                  style={{ color: "#eb5e28" }}
                >
                  {row.label}
                </p>
                <h3 className="font-heading text-2xl font-black italic leading-snug">
                  {row.heading}
                </h3>
                <p className="sub-heading mt-3 text-sm font-light leading-relaxed text-[#403d39]/85">
                  {row.copy}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
