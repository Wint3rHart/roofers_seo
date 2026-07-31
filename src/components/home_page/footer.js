"use client";

import { useState } from "react";
import Image from "next/image";

export const Footer = () => {
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
    // Hook up to your form handler / API route here.
    setSubmitted(true);
  };

  return (
    <footer id="site-footer" className="bg-[#252422] text-[#fffcf2]">
      {/* Top row: intro + form */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: heading + copy + CTAs */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#eb5e28]">
              Roofing SEO Specialists
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#fffcf2] sm:text-4xl lg:text-5xl">
              Ready to Boost Your
              <br />
              <span className="text-[#eb5e28]">Rankings?</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#ccc5b9]">
              Get more 5-star reviews, more visibility, and more roofing jobs
              — with a system built only for roofers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/book-a-call"
                className="inline-flex items-center justify-center rounded-md bg-[#eb5e28] px-6 py-3 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#d94f1c]"
              >
                Book a Call
              </a>
              <a
                href="/free-audit"
                className="inline-flex items-center justify-center rounded-md border border-[#ccc5b9]/40 px-6 py-3 text-sm font-bold text-[#fffcf2] transition-colors hover:border-[#eb5e28] hover:text-[#eb5e28]"
              >
                Get a Free Audit
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-[#403d39] bg-[#2c2a27] p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] sm:p-10">
            <h3 className="text-lg font-bold text-[#fffcf2]">
              Free SEO Consultation
            </h3>
            <p className="mt-1 text-sm text-[#ccc5b9]">
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
          </div>
        </div>
      </div>

      {/* Faded divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#ccc5b9]/25 to-transparent" />

      {/* Bottom row: logo + centered legal */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 lg:px-6">
        <Image
          src="/Logo_Footer.svg"
          alt="Roofer SEO Co."
          width={140}
          height={44}
          className="h-10 w-auto object-contain opacity-90"
        />
        <div className="text-center text-xs text-[#ccc5b9]/80">
          <p>© 2026 Roofer SEO Co. All Rights Reserved.</p>
          <a
            href="/privacy-policy"
            className="mt-1 inline-block transition-colors hover:text-[#eb5e28]"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};