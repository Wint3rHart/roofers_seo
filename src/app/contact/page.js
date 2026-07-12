"use client";

import { motion } from "framer-motion";
import { Eyebrow, OrangeBar, PrimaryButton, SectionHeading } from "@/components/ui/ui_components";
import { ArrowRight, Mail, Clock } from "lucide-react";
import FinalCTA from "@/components/shared/final_cta";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "@/components/ui/motion";

export default function ContactPage() {
  const reduce = useReducedMotion();

  return (
    <main className="bg-[#fffcf2]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#ccc5b9]/60">
        <motion.div
          aria-hidden
          className="absolute -right-24 top-10 hidden h-[320px] w-[320px] rounded-full opacity-50 lg:block"
          style={{ background: "#ccc5b9" }}
          animate={
            reduce
              ? undefined
              : { x: [0, -24, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center lg:px-10 lg:py-20">
          <motion.div
            variants={staggerContainer(0.14)}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>CONTACT</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl"
            >
              Get In Touch
            </motion.h1>
            <motion.div variants={fadeUp}>
              <OrangeBar className="mt-6" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="sub-heading mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-[#403d39]/90"
            >
              Questions, partnership inquiries, or anything else — send us
              a message and we’ll get back to you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Send us a message
            </h2>
            <OrangeBar className="mt-5" />
          </div>

          <motion.div
            className="mx-auto mt-10 max-w-2xl"
            variants={fadeScale}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            <div className="rounded-2xl border border-[#ccc5b9]/70 bg-white/60 p-8 text-center shadow-sm">
              <form
                action="/thank-you?type=contact"
                method="post"
                className="space-y-4 text-left"
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name *"
                    className="rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email *"
                    className="rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
                  />
                </div>
                <select
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm text-[#403d39]/80 focus:border-[#eb5e28] focus:outline-none"
                >
                  <option value="" disabled>
                    Select a subject *
                  </option>
                  <option value="general">General Question</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Message *"
                  className="w-full rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
                />
                <div className="text-center">
                  <PrimaryButton as="button" type="submit">
                    Send Message
                  </PrimaryButton>
                </div>
              </form>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={reduce ? false : viewportOnce}
              className="mt-6 flex items-start justify-center gap-3 rounded-xl border border-dashed border-[#eb5e28]/60 bg-[#fffcf7] p-5 text-center"
            >
              <p className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
                <strong className="font-semibold text-[#252422]">
                  Looking for a free SEO audit instead?
                </strong>{" "}
                <a
                  href="/free-audit"
                  className="inline-flex items-center gap-1 font-bold transition-transform hover:translate-x-1"
                  style={{ color: "#eb5e28" }}
                >
                  Get one here <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </p>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            <motion.div variants={fadeUp} className="rounded-2xl bg-[#252422] p-6 text-center text-[#fffcf2]">
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-5 w-5" style={{ color: "#eb5e28" }} />
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
                  Response time
                </h3>
              </div>
              <p className="sub-heading mt-3 text-sm font-light leading-relaxed text-[#ccc5b9]">
                We typically respond within 1–2 business days.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-[#ccc5b9]/70 bg-white/60 p-6 text-center"
            >
              <div className="flex items-center justify-center gap-3">
                <Clock className="h-5 w-5" style={{ color: "#eb5e28" }} />
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
                  Prefer to talk?
                </h3>
              </div>
              <p className="sub-heading mt-3 text-sm font-light leading-relaxed text-[#403d39]/90">
                If you’d rather have a real conversation about your
                roofing business, book a free strategy call.
              </p>
              <a
                href="/book-a-call"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold transition-transform hover:translate-x-1"
                style={{ color: "#eb5e28" }}
              >
                Book a Call <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FinalCTA
        heading="Ready to see where you're losing leads?"
        subheading="Get a free, manually-reviewed audit delivered by email within 2 business days."
        primaryLabel="Get a Free Audit"
        primaryHref="/free-audit"
        secondaryLabel="See Services"
        secondaryHref="/services/reputation-management"
      />
    </main>
  );
}
