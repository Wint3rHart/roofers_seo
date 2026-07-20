"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PrimaryButton, OrangeBar } from "../ui/ui_components";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

export const CTA = () => {
  const reduce = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your API route / email handler.
    setSubmitted(true);
  };

  return (
    <section className="bg-[#252422]">
      <motion.div
        className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10"
        variants={staggerContainer(0.14)}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : viewportOnce}
      >
        {/* Left: heading, copy, buttons */}
        <div className="text-center lg:text-left">
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-black italic leading-tight text-[#fffcf2] sm:text-4xl lg:text-5xl"
          >
            Ready to Boost Your Rankings?
          </motion.h2>
          <motion.div variants={fadeUp}>
            <OrangeBar className="mt-5 lg:mx-0" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="sub-heading mx-auto mt-5 max-w-lg text-sm font-light text-[#ccc5b9] lg:mx-0"
          >
            Get more 5-star reviews, more visibility, and more roofing jobs —
            with a system built only for roofers.
          </motion.p>
          <motion.div
            variants={fadeScale}
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <PrimaryButton as="a" href="/book-a-call">
              Book a Call
            </PrimaryButton>
            <a
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#fffcf2] px-6 py-3.5 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#fffcf2] hover:text-[#252422]"
            >
              Get a Free Audit
            </a>
          </motion.div>
        </div>

        {/* Right: form */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border border-[#403d39] bg-[#2c2a27] p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] sm:p-10"
        >
          <h3 className="font-heading text-lg font-bold text-[#fffcf2]">
            Free SEO Consultation
          </h3>
          <p className="sub-heading mt-1 text-sm font-light text-[#ccc5b9]">
            Tell us a bit about your business and we&apos;ll be in touch.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-lg border border-[#eb5e28]/40 bg-[#eb5e28]/10 px-5 py-4 text-sm text-[#fffcf2]">
              Thanks — we&apos;ve got your info and will reach out shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full rounded-md border border-[#403d39] bg-[#252422] px-4 py-3 text-sm text-[#fffcf2] placeholder:text-[#8a8580] outline-none transition-colors focus:border-[#eb5e28]"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full rounded-md border border-[#403d39] bg-[#252422] px-4 py-3 text-sm text-[#fffcf2] placeholder:text-[#8a8580] outline-none transition-colors focus:border-[#eb5e28]"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full rounded-md border border-[#403d39] bg-[#252422] px-4 py-3 text-sm text-[#fffcf2] placeholder:text-[#8a8580] outline-none transition-colors focus:border-[#eb5e28]"
                />
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your business"
                rows={4}
                className="w-full resize-none rounded-md border border-[#403d39] bg-[#252422] px-4 py-3 text-sm text-[#fffcf2] placeholder:text-[#8a8580] outline-none transition-colors focus:border-[#eb5e28]"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-[#eb5e28] px-6 py-3 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#d94f1c]"
              >
                Submit
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};