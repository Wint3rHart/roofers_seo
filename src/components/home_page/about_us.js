"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Trophy } from "lucide-react";
import { PrimaryButton, SectionHeading } from "../ui/ui_components";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

const ABOUT_PARAGRAPHS = [
  "We specialize exclusively in SEO for roofing contractors. That means we understand your industry, your customers, and what it takes to rank and get real leads.",
  "Our data-driven strategies are built to increase visibility, generate qualified calls, and help you grow in your local market.",
  "We don't just focus on rankings—we focus on results that drive revenue.",
];

const ABOUT_STATS = [
  { icon: Users, value: "250+", label: "Roofing Companies Served" },
  { icon: MapPin, value: "50", label: "States Covered" },
  { icon: Trophy, value: "5+", label: "Years of Focused SEO Experience" },
];

const AboutUs = () => {
  const reduce = useReducedMotion();

  return (
    <section className="border-b flex justify-evenly border-[#ccc5b9]/60 bg-[#fffcf7] text-[#252422]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left column — text + stats */}
          <div>
            <SectionHeading
              eyebrow="WHO WE ARE"
              title="SEO That Builds Roofing Businesses"
              align="left"
            />

            <motion.div
              className="mt-6 max-w-2xl space-y-4 text-left"
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={reduce ? false : viewportOnce}
            >
              {ABOUT_PARAGRAPHS.map((p) => (
                <motion.p
                  key={p}
                  variants={fadeUp}
                  className="sub-heading max-w-2xl text-sm font-light leading-relaxed text-[#403d39]/90"
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap justify-start gap-x-10 gap-y-6"
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={reduce ? false : viewportOnce}
            >
              {ABOUT_STATS.map(({ icon: Icon, value, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex items-start gap-2"
                >
                  <Icon className="h-6 w-6 shrink-0" style={{ color: "#eb5e28" }} />
                  <div className="leading-tight">
                    <div className="text-lg font-black">{value}</div>
                    <div className="max-w-[110px] text-xs font-semibold text-[#403d39]/80">
                      {label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column — contact form card (unchanged dark styling) */}
          <motion.div
            className="mx-auto w-full max-w-xl"
            variants={fadeScale}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            <div className="rounded-2xl bg-[#252422] p-8 text-center text-[#fffcf2] shadow-xl">
              <h3 className="font-heading text-xl font-bold italic">
                Let&apos;s Talk About Your Rankings
              </h3>
              <form
                className="mt-6 space-y-4 text-left"
                action="/thank-you?type=free-audit"
                method="post"
              >
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="col-span-1 rounded-md border border-[#403d39] bg-[#fffcf2]/5 px-4 py-3 text-sm placeholder:text-[#ccc5b9] focus:border-[#eb5e28] focus:outline-none"
                  />
                  <input
                    type="text"
                    name="business_name"
                    required
                    placeholder="Business Name"
                    className="col-span-1 rounded-md border border-[#403d39] bg-[#fffcf2]/5 px-4 py-3 text-sm placeholder:text-[#ccc5b9] focus:border-[#eb5e28] focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  name="website_url"
                  placeholder="Website URL"
                  className="w-full rounded-md border border-[#403d39] bg-[#fffcf2]/5 px-4 py-3 text-sm placeholder:text-[#ccc5b9] focus:border-[#eb5e28] focus:outline-none"
                />
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="City"
                  className="w-full rounded-md border border-[#403d39] bg-[#fffcf2]/5 px-4 py-3 text-sm placeholder:text-[#ccc5b9] focus:border-[#eb5e28] focus:outline-none"
                />
                <input
                  type="text"
                  name="email_or_phone"
                  required
                  placeholder="Email or Phone"
                  className="w-full rounded-md border border-[#403d39] bg-[#fffcf2]/5 px-4 py-3 text-sm placeholder:text-[#ccc5b9] focus:border-[#eb5e28] focus:outline-none"
                />
                <PrimaryButton as="button" type="submit" className="w-full">
                  Get My Free Audit
                </PrimaryButton>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;