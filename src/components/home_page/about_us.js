"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Sparkles } from "lucide-react";
import { Eyebrow, PrimaryButton } from "../ui/ui_components";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

const ABOUT_PARAGRAPHS = [
  "Roofing-only strategy means no time wasted explaining storm season or insurance claims — so your plan is right from month one, not month four.",
  "Reviews come before rankings, because homeowners check stars before they check a website — so fixing your reputation first makes every visitor after that convert better.",
  "Reporting tracks calls and ranked keywords, not raw traffic — so the numbers you see are the numbers that actually turn into booked jobs.",
];

const ABOUT_STATS = [
  { icon: Star, label: "Roofing-Only Focus" },
  { icon: MapPin, label: "Month-to-Month Agreements" },
  { icon: Sparkles, label: "Reviews-First Approach" },
];

const AboutUs = () => {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] text-[#252422]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        {/* Header — centered */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>WHO WE ARE</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading mx-auto text-3xl font-black italic leading-tight tracking-tight sm:text-4xl"
          >
            SEO and Reputation Management Built for Roofing Businesses
          </motion.h2>
        </motion.div>

        {/* Body paragraphs — centered */}
        <motion.div
          className="mx-auto mt-8 max-w-3xl space-y-4 text-center"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          {ABOUT_PARAGRAPHS.map((p) => (
            <motion.p
              key={p}
              variants={fadeUp}
              className="sub-heading mx-auto max-w-2xl text-sm font-light leading-relaxed text-[#403d39]/90"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

        {/* Stats — centered */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          {ABOUT_STATS.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex items-center gap-2"
            >
              <Icon className="h-5 w-5" style={{ color: "#eb5e28" }} />
              <span className="text-sm font-bold">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact form card — centered */}
        <motion.div
          className="mx-auto mt-12 max-w-xl"
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
    </section>
  );
};

export default AboutUs;
