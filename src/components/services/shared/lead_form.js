"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "../../ui/ui_components";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../../ui/motion";

/**
 * Lead form — right sidebar, below the CTA card. Same fields/markup as
 * local_seo/lead_form.js, with title, subtitle, form action, and submit
 * label parametrized so every service page can reuse the same structure.
 */
export default function LeadForm({
  title = "Get Your Free Local SEO Audit",
  subtitle = "Find out where your Google Business Profile and map pack rankings stand today.",
  action = "/thank-you?type=local-seo-audit",
  submitLabel = "Get My Free Audit",
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={reduce ? false : viewportOnce}
      className="relative"
    >
      <div
        aria-hidden
        className="absolute inset-0 translate-x-0 translate-y-1 rounded-2xl bg-[#eb5e28]"
      />
      <div className="relative rounded-2xl border border-[#ccc5b9]/70 bg-[#252422] p-6">
        <h3 className="font-heading text-lg font-black italic leading-tight text-[#fffcf2]   ">
          {title}
        </h3>
        <p className="sub-heading mt-1 text-xs font-light leading-relaxed text-[#fffcf2]">
          {subtitle}
        </p>

        <motion.form
          action={action}
          method="post"
          className="mt-5 space-y-2 xl:space-y-3 text-left"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          <motion.input
            variants={fadeUp}
            type="text"
            name="name"
            required
            placeholder="Name *"
            className="w-full rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
          />
          <motion.input
            variants={fadeUp}
            type="text"
            name="business_name"
            required
            placeholder="Roofing Company *"
            className="w-full rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-1 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
          />
          <motion.input
            variants={fadeUp}
            type="text"
            name="service_area"
            required
            placeholder="City / Service Area *"
            className="w-full rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
          />
          <motion.div variants={fadeUp} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input
              type="email"
              name="email"
              required
              placeholder="Email *"
              className="rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              className="rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
            />
          </motion.div>
          <motion.div variants={fadeScale}>
            <PrimaryButton as="button" type="submit" className="w-full">
              {submitLabel}
            </PrimaryButton>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
}