"use client";

import { motion } from "framer-motion";
import { Eyebrow, OrangeBar, PrimaryButton, SectionHeading } from "@/components/ui/ui_components";
import { ArrowRight, Star, MapPin, Globe, Sparkles } from "lucide-react";
import FinalCTA from "@/components/shared/final_cta";
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "@/components/ui/motion";

const APPROACH_LADDER = [
  {
    icon: Star,
    label: "01 — Reviews First",
    copy:
      "Homeowners check stars before they check a website. Fixing the reputation first means every visitor after that converts better — so reviews come before rankings.",
  },
  {
    icon: MapPin,
    label: "02 — Local SEO Second",
    copy:
      "Once the reputation is climbing, the next move is making sure those reviews show up where homeowners are actually searching — the Google Map Pack and local search.",
  },
  {
    icon: Globe,
    label: "03 — Website Third",
    copy:
      "Ranking higher only helps if the site visitors land on actually converts them. A fast, mobile-friendly site is the foundation everything else builds on.",
  },
  {
    icon: Sparkles,
    label: "04 — AI Visibility Fourth",
    copy:
      "Once reviews, local SEO, and the website are solid, the last layer is making sure your business shows up inside AI-generated answers — the new frontier of search.",
  },
];

export default function AboutPage() {
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
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center lg:px-6 lg:py-20">
          <motion.div
            variants={staggerContainer(0.14)}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>WHO WE ARE</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl"
            >
              Built Only for Roofing Companies
            </motion.h1>
            <motion.div variants={fadeUp}>
              <OrangeBar className="mt-6" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="sub-heading mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-[#403d39]/90"
            >
              Roofer SEO Co. is an SEO and reputation management company
              that works exclusively with roofing contractors — not
              plumbers, not dentists, not “any local business.” Roofers,
              period.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-6">
          <SectionHeading eyebrow="OUR STORY" title="Why roofing, specifically" />

          <motion.div
            className="mt-8 max-w-3xl space-y-5"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            <motion.p
              variants={fadeUp}
              className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90"
            >
              Roofing is a high-stakes, high-stress purchase. Homeowners
              research fast, often under pressure after a storm, and they
              decide based on signals they can scan in seconds — star
              count, recency, whether the business shows up on the map,
              and whether the website loads on their phone.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90"
            >
              Generalist SEO agencies miss most of that. They spend months
              learning the industry, apply generic playbooks built for
              dentists or lawyers, and bill for traffic that doesn’t turn
              into calls. Roofing is different — storm season spikes,
              insurance claim cycles, and homeowner search behavior here
              are specific, and the work has to be built around them from
              day one.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90"
            >
              That’s the entire premise of Roofer SEO Co.: no learning
              curve, no wasted months, no generic templates. A system
              built only for roofers, in the right order, on
              month-to-month agreements so the work has to keep earning
              its place every single month.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf2]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-6">
          <SectionHeading
            eyebrow="WHO WE WORK WITH"
            title="Roofing contractors across the United States"
          />

          <motion.div
            className="mt-8 max-w-3xl space-y-5"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            <motion.p
              variants={fadeUp}
              className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90"
            >
              We work with roofing contractors across the entire United
              States — not limited to specific states or regions. Whether
              you’re a solo contractor running one crew or a multi-roof
              operation with several service areas, the same
              roofing-specific system applies.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90"
            >
              Where you start in the ladder depends on where you actually
              are today — some companies need reviews fixed first, some
              are invisible in the map pack, some have a website actively
              losing them leads. The combination is what moves the
              business, not a one-size-fits-all package.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-6">
          <SectionHeading
            eyebrow="OUR APPROACH"
            title="A real system, not a grab-bag of services"
            subtitle="Four services, in a specific order, because the order is what makes them work."
          />

          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            {APPROACH_LADDER.map(({ icon: Icon, label, copy }) => (
              <motion.div
                key={label}
                variants={fadeScale}
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl border border-[#ccc5b9]/70 bg-white/50 p-7 text-center"
              >
                <div
                  className="mb-4 mx-auto flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ background: "#eb5e28" }}
                >
                  <Icon className="h-5 w-5 text-[#fffcf2]" />
                </div>
                <h3 className="font-heading text-base font-bold uppercase tracking-wider">
                  {label}
                </h3>
                <p className="sub-heading mt-3 text-sm font-light leading-relaxed text-[#403d39]/85">
                  {copy}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeScale}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
            className="mt-10 text-center"
          >
            <PrimaryButton as="a" href="/book-a-call">
              Book a Call <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
