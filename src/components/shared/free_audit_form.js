"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "../ui/ui_components";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

/**
 * Free Audit form — used on Free Audit landing page and on the homepage About section.
 * Fields: Name, Business Name, Website URL, City, Email (Phone optional).
 */
export default function FreeAuditForm({ buttonLabel = "Send Me My Free Audit" }) {
  const reduce = useReducedMotion();

  return (
    <motion.form
      action="/thank-you?type=free-audit"
      method="post"
      className="space-y-4 text-left"
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={reduce ? false : viewportOnce}
    >
      <motion.div variants={fadeUp} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          required
          placeholder="Name *"
          className="rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
        />
        <input
          type="text"
          name="business_name"
          required
          placeholder="Business Name *"
          className="rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
        />
      </motion.div>
      <motion.input
        variants={fadeUp}
        type="url"
        name="website_url"
        placeholder="Website URL"
        className="w-full rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
      />
      <motion.input
        variants={fadeUp}
        type="text"
        name="city"
        required
        placeholder="City *"
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
          {buttonLabel}
        </PrimaryButton>
      </motion.div>
      <motion.p
        variants={fadeUp}
        className="sub-heading text-center text-xs font-light text-[#403d39]/70"
      >
        We personally review every submission — no automated reports.
      </motion.p>
    </motion.form>
  );
}
