"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce, useReducedMotion } from "../../ui/motion";

/**
 * Main article content for the Local SEO page.
 * Every sentence below is copied verbatim from
 * seo-for-roofers-service-page.md — nothing paraphrased, nothing added.
 * Sections included: "Why SEO for Roofers Matters Right Now",
 * "Local SEO for Roofing Companies" (+ its 3 H3s), "Why a Roofing-Specific
 * SEO Company", and "Getting Started" (rendered as a premium FAQ accordion).
 */

function Section({ id, title, children, reduce }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-28 border-b border-[#ccc5b9]/60 pb-10 pt-10 first:pt-0"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={reduce ? false : viewportOnce}
    >
      <motion.h2
        variants={fadeUp}
        className="font-heading text-2xl font-black leading-tight text-[#252422] sm:text-3xl"
      >
        {title}
      </motion.h2>
      <div className="mt-4">{children}</div>
    </motion.section>
  );
}

function P({ children }) {
  return (
    <motion.p
      variants={fadeUp}
      className="sub-heading mt-4 text-base font-light leading-relaxed text-[#403d39]/90 first:mt-0"
    >
      {children}
    </motion.p>
  );
}

function H3({ children }) {
  return (
    <motion.h3
      variants={fadeUp}
      className="font-heading mt-8 text-xl font-bold leading-tight text-[#252422]"
    >
      {children}
    </motion.h3>
  );
}

function Bullets({ items }) {
  return (
    <motion.ul variants={staggerContainer(0.06)} className="mt-4 space-y-3">
      {items.map((it, i) => (
        <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#eb5e28]" />
          <span className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
            {it}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

// bold lead-in + rest of sentence, matching the doc's **bold.** pattern
function LeadBullets({ items }) {
  return (
    <motion.ul variants={staggerContainer(0.06)} className="mt-4 space-y-3">
      {items.map(([lead, rest], i) => (
        <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#eb5e28]" />
          <span className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
            <strong className="font-bold text-[#252422]">{lead}</strong>
            {rest}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

// Premium FAQ-style accordion for "Getting Started"
function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <motion.div variants={staggerContainer(0.08)} className="mt-6 space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={i}
            variants={fadeUp}
            className={`overflow-hidden rounded-xl border transition-colors ${
              isOpen
                ? "border-[#eb5e28] bg-[#fffcf7]"
                : "border-[#ccc5b9]/70 bg-white/40"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-heading text-base font-bold leading-snug text-[#252422] sm:text-lg">
                {it.q}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isOpen ? "bg-[#eb5e28]" : "bg-[#252422]/10"
                }`}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? "rotate-180 text-[#fffcf2]" : "text-[#252422]"
                  }`}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="sub-heading px-5 pb-5 text-sm font-light leading-relaxed text-[#403d39]/90">
                    {it.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function ContentBody() {
  const reduce = useReducedMotion();

  return (
    <div>
      <Section id="why-seo-matters" title="Why SEO for Roofers Matters Right Now" reduce={reduce}>
        <P>
          98% of consumers research local businesses online before hiring
          one — roofing included. A homeowner with a leak or a failed
          inspection doesn&rsquo;t open a phone book; they search
          &ldquo;roof repair near me&rdquo; or &ldquo;roofing contractor
          [city],&rdquo; and the first few results get the call. Everyone
          else gets skipped.
        </P>
        <P>
          Roofing demand isn&rsquo;t steady, either. Search volume for
          &ldquo;roof repair&rdquo; and &ldquo;emergency roofer&rdquo;
          spikes 300&ndash;400% after a hailstorm or major weather event,
          and that spike doesn&rsquo;t wait for a marketing plan — it
          happens in a matter of hours. The roofing companies already
          ranking when that spike hits capture the bulk of the new
          business. The ones still working on their website find out too
          late.
        </P>
        <P>
          The top three results on Google capture the majority of clicks
          for local searches. SEO for roofing companies is how a business
          earns that position — not for one storm, but for every search
          cycle after it.
        </P>
      </Section>

      <Section id="local-seo-for-roofing-companies" title="Local SEO for Roofing Companies" reduce={reduce}>
        <P>
          Roofing is a local business by nature — homeowners hire local
          contractors, and Google&rsquo;s algorithm treats local roofing
          searches differently from general organic queries. That
          distinction is what separates local SEO for roofers from
          standard SEO: it weighs distance, relevance, and prominence, not
          just keyword optimization.
        </P>

        <H3>Google Business Profile & the Map Pack</H3>
        <P>
          The Local Map 3-Pack is the small cluster of businesses shown at
          the top of a local search — and it captures the majority of
          clicks for &ldquo;near me&rdquo; roofing searches. Appearing
          there takes an optimized Google Business Profile, accurate
          service-area data, and consistent posting activity.
        </P>

        <H3>Reviews & Reputation Signals</H3>
        <P>
          Review volume and recency directly affect map pack placement. A
          roofing company with steady, recent reviews consistently
          outranks a competitor with more reviews that stopped coming in a
          year ago.
        </P>
        <Bullets
          items={[
            "Consistent review generation, not a one-time push",
            "Public response to reviews — positive and negative",
            "Review content that reinforces the services actually offered",
          ]}
        />

        <H3>NAP Consistency & Citations</H3>
        <P>
          Name, address, and phone number need to match exactly across
          every directory a roofing company appears in. Inconsistent
          listings confuse search engines and quietly suppress local
          rankings — a technical detail that&rsquo;s easy to overlook and
          expensive to ignore.
        </P>
      </Section>

      <Section id="why-roofing-specific" title="Why a Roofing-Specific SEO Company" reduce={reduce}>
        <P>
          Roofing SEO is not the same as SEO for a law firm or a dentist.
          Search demand for roofing is driven by weather events and
          seasonality in a way most industries never deal with — a single
          hailstorm can generate thousands of &ldquo;roof repair&rdquo;
          searches in a day. Roofing keywords are also some of the most
          expensive in Google Ads, which makes organic SEO a more
          cost-effective long-term channel than most roofing companies
          realize. A generalist marketing agency without roofing
          experience misses these dynamics entirely.
        </P>
        <P>
          <strong className="font-bold text-[#252422]">
            A roofing SEO company should be evaluated the same way a
            roofing contractor would be
          </strong>{" "}
          — on specialization, transparency, and whether the terms are
          fair.
        </P>
        <LeadBullets
          items={[
            [
              "Specialization matters. ",
              "Roofer SEO Co. works exclusively with roofing companies — understanding the difference between a \u201croof replacement cost\u201d research query and a \u201croofing contractor near me\u201d buying-intent query is part of the job, not an afterthought.",
            ],
            [
              "DIY SEO is possible, but rarely efficient. ",
              "SEO involves metadata, technical architecture, link building, and constant algorithm adaptation — it\u2019s not a side project most roofing business owners have time for alongside running jobs.",
            ],
            [
              "The best-fit client is growth-focused. ",
              "Roofer SEO Co. works best with roofing companies ready to invest consistently and willing to let a strategy build over months, not days.",
            ],
            [
              "Results are never promised overnight",
              " — but in smaller, less competitive markets, a 90-day ranking guarantee applies. Larger, more competitive metro markets take longer to move, and no agency that\u2019s being honest will guarantee a fixed timeline there.",
            ],
            [
              "No long-term contracts. ",
              "Every roofing client stays month-to-month — the work has to earn continued business, not a signature.",
            ],
          ]}
        />
      </Section>

      <Section id="getting-started" title="Getting Started" reduce={reduce}>
        <FaqAccordion
          items={[
            {
              q: "What does SEO for roofers cost?",
              a: "Packages start at $750/month and scale based on market competitiveness — a roofing company in a small market needs less investment to compete than one in a saturated metro area. A quick audit determines which tier fits.",
            },
            {
              q: "How long until results show?",
              a: "SEO is not instant. Most roofing clients start seeing meaningful movement by month 3, with momentum building steadily from there. Anyone promising page-one rankings in 30 days isn\u2019t being straight with you.",
            },
            {
              q: "Do I need a new website, or can I keep mine?",
              a: "SEO requires a website, but not a new one — Roofer SEO Co. works with existing sites. If technical issues are holding a site back, that gets flagged in the initial audit and addressed as part of the process.",
            },
            {
              q: "Who owns the website and content?",
              a: "The roofing company does — always. Every page, every article, every asset created belongs to the client, with full access at all times.",
            },
          ]}
        />
      </Section>
    </div>
  );
}