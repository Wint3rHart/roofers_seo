"use client";

import { motion } from "framer-motion";
import { Home, BarChart3, MapPin, Target } from "lucide-react";
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
    icon: Home,
    heading: "Roofing SEO Experts",
  },
  {
    icon: BarChart3,
    heading: "Proven Strategies That Rank",
  },
  {
    icon: MapPin,
    heading: "Local SEO That Dominates",
  },
  {
    icon: Target,
    heading: "Results That Drive Roofing Jobs",
  },
];

const Why = () => {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] text-[#252422]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <SectionHeading
          eyebrow="WHY ROOFERS CHOOSE US"
          title="SEO That Drives Real Roofing Business Growth"
          subtitle="We help roofing companies show up where it matters, attract more qualified leads, and turn searches into high-value roofing jobs."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          {/* Left column — feature rows + goal box */}
          <motion.div
            className="space-y-3"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            {WHY_ROWS.map(({ icon: Icon, heading }) => (
              <motion.div
                key={heading}
                variants={fadeUp}
                className="flex items-center gap-4 rounded-lg border border-[#ccc5b9]/70 bg-white/40 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                  <Icon
                    className="h-6 w-6"
                    style={{ color: "#eb5e28" }}
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="font-heading text-base font-bold">{heading}</h3>
              </motion.div>
            ))}

            <motion.div
              variants={fadeScale}
              className="rounded-lg bg-[#252422] p-6 text-center"
            >
              <p className="text-xs text-[#ccc5b9]">Our goal is simple:</p>
              <p
                className="mt-1 font-heading text-lg font-black italic"
                style={{ color: "#eb5e28" }}
              >
                More visibility. More leads. More jobs.
              </p>
              <p className="mt-1 text-xs text-[#ccc5b9]">
                Sustainable growth for your roofing business.
              </p>
            </motion.div>
          </motion.div>

          {/* Right column — form card */}
          <motion.div
            variants={fadeScale}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
            className="overflow-hidden rounded-lg bg-white shadow-xl"
          >
            <div className="bg-[#252422] px-6 py-4">
              <h3 className="font-heading text-lg font-bold text-[#fffcf2]">
                Get Your Free Roofing SEO Strategy
              </h3>
            </div>

            <form
              className="space-y-3 p-6"
              action="/thank-you?type=free-strategy"
              method="post"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#252422]">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="First name"
                    className="w-full rounded-md border border-[#ccc5b9] px-3 py-2 text-sm placeholder:text-[#a8a29a] focus:border-[#eb5e28] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#252422]">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="Last name"
                    className="w-full rounded-md border border-[#ccc5b9] px-3 py-2 text-sm placeholder:text-[#a8a29a] focus:border-[#eb5e28] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-[#252422]">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-md border border-[#ccc5b9] px-3 py-2 text-sm placeholder:text-[#a8a29a] focus:border-[#eb5e28] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#252422]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(555) 123-4567"
                    className="w-full rounded-md border border-[#ccc5b9] px-3 py-2 text-sm placeholder:text-[#a8a29a] focus:border-[#eb5e28] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#252422]">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    placeholder="Your company name"
                    className="w-full rounded-md border border-[#ccc5b9] px-3 py-2 text-sm placeholder:text-[#a8a29a] focus:border-[#eb5e28] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-md py-3 text-sm font-bold text-[#fffcf2] transition-opacity hover:opacity-90"
                style={{ background: "#eb5e28" }}
              >
                Get My Free Strategy
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Why;