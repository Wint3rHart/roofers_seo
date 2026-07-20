"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce, useReducedMotion } from "../../ui/motion";
import { PrimaryButton } from "../../ui/ui_components";

/**
 * Main article content for the Local SEO page.
 * Every sentence below is copied verbatim from
 * seo-for-roofers-service-page.md — nothing paraphrased, nothing added
 * (except the hero eyebrow line, which has no source text and is a
 * short relevant label).
 * Sections included, in doc order: Hero (H1), "Why SEO for Roofers
 * Matters Right Now", "What Our SEO for Roofers Includes" (+ its 6 H3s),
 * "A Simple 6-Step Process That Works", "Local SEO for Roofing
 * Companies" (+ its 3 H3s), "Showing Up in AI Search Results", "Why a
 * Roofing-Specific SEO Company", "Where We Work", "Getting Started"
 * (rendered as a premium FAQ accordion), and the closing CTA.
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
        className="font-heading text-3xl font-black leading-tight tracking-tight text-[#252422] sm:text-4xl lg:text-5xl"
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

// Same 6 steps/copy as the homepage process graphic — reused here as a
// simpler numbered list: 01 → heading → copy → orange bar, 2 per row.
const PROCESS_STEPS = [
  {
    n: "01",
    title: "Discovery",
    copy: "We learn your business, your service area, and the jobs you want more of — repairs, replacements, storm damage, or insurance work — so every step after this is built on your real market.",
  },
  {
    n: "02",
    title: "Audit",
    copy: "We run a deep audit of your website, Google Business Profile, rankings, reviews, and competitors to find opportunities and prioritize what will move the needle.",
  },
  {
    n: "03",
    title: "Strategy",
    copy: "We create a custom SEO strategy and roadmap tailored to your goals, service area, and target jobs to generate the highest quality leads.",
  },
  {
    n: "04",
    title: "Implementation",
    copy: "We implement everything — on-page, technical, content, Google Business Profile optimization, and more — with precision and best practices.",
  },
  {
    n: "05",
    title: "Reporting",
    copy: "You get clear, easy-to-understand reports that show rankings, traffic, leads, and what's driving real results for your roofing business.",
  },
  {
    n: "06",
    title: "Growth",
    copy: "We continuously optimize, refine, and scale your SEO so you stay ahead of competitors and keep growing your business month after month.",
  },
];

function ProcessSteps() {
  return (
    <motion.div
      variants={staggerContainer(0.08)}
      className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2"
    >
      {PROCESS_STEPS.map((step) => (
        <motion.div key={step.n} variants={fadeUp}>
          <span
            className="font-heading text-4xl font-black italic"
            style={{ color: "#eb5e28" }}
          >
            {step.n}
          </span>
          <h3 className="font-heading mt-2 text-xl font-bold leading-tight text-[#252422]">
            {step.title}
          </h3>
          <p className="sub-heading mt-2 text-sm font-light leading-relaxed text-[#403d39]/90">
            {step.copy}
          </p>
          <span className="mt-4 block h-[3px] w-16 bg-[#eb5e28]" />
        </motion.div>
      ))}
    </motion.div>
  );
}

/**
 * Hero / H1 block. Eyebrow line has no source text in the doc — it's a
 * short relevant label added since none was specified.
 */
function Hero({ reduce }) {
  return (
    <motion.section
      className="pb-10"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={reduce ? false : viewportOnce}
    >
      <motion.span
        variants={fadeUp}
        className="sub-heading inline-block text-xs font-semibold uppercase tracking-widest text-[#eb5e28]"
      >
        SEO for Roofing Companies
      </motion.span>
      <motion.h1
        variants={fadeUp}
        className="font-heading mt-3 text-3xl font-black leading-tight tracking-tight text-[#252422] sm:text-4xl lg:text-5xl"
      >
        SEO for Roofers That Gets Your Phone Ringing
      </motion.h1>
      <P>
        Homeowners search Google before they call anyone. The roofing
        company that ranks gets the job — the one that doesn&rsquo;t
        gets skipped. Roofer SEO Co. builds SEO for roofers that turns
        local search into booked jobs, not just traffic, with
        month-to-month terms and no long-term contracts.
      </P>
      <motion.p
        variants={fadeUp}
        className="sub-heading mt-4 text-sm font-semibold uppercase tracking-wide text-[#252422]"
      >
        No long-term contracts &middot; Nationwide coverage &middot;
        Roofing-specific strategy
      </motion.p>
      <motion.div variants={fadeUp} className="mt-6">
        <PrimaryButton as="a" href="/book-a-call">
          Book a Call <ArrowRight className="h-4 w-4" />
        </PrimaryButton>
      </motion.div>
    </motion.section>
  );
}

export default function ContentBody() {
  const reduce = useReducedMotion();

  return (
    <div>
      <Hero reduce={reduce} />

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

      <Section id="what-our-seo-includes" title="What Our SEO for Roofers Includes" reduce={reduce}>
        <P>
          Roofing SEO isn&rsquo;t one task — it&rsquo;s several
          disciplines working together. Each piece below is part of a
          complete SEO for roofers strategy, and each is included as a
          standard part of the service.
        </P>

        <H3>Local SEO & Google Business Profile</H3>
        <P>
          A roofing company&rsquo;s Google Business Profile is often the
          first thing a homeowner sees. Category selection, service-area
          accuracy, photos of completed jobs, and consistent posting all
          factor into whether that profile shows up in the map pack — or
          gets buried under three competitors who optimized theirs.
        </P>

        <H3>On-Page & Technical SEO</H3>
        <P>
          Every SEO for roofers engagement starts with a full technical
          audit — site speed, mobile performance, metadata, heading
          structure, and schema markup. Issues here quietly cap how high
          a roofing website can rank, regardless of how strong the
          content is.
        </P>
        <Bullets
          items={[
            "Site speed and mobile responsiveness review",
            "Metadata, heading tags, and internal linking structure",
            "Schema markup for local business and service data",
          ]}
        />

        <H3>Content Built Around Roofing Jobs</H3>
        <P>
          Search engines reward roofing content that reflects real jobs —
          storm damage repair, insurance claims, full replacements, and
          material-specific services — not generic advice available on
          every competitor&rsquo;s site. Content is published on a
          consistent cadence, and every piece is optimized around the
          exact terms homeowners search.
        </P>
        <Bullets
          items={[
            "Content stays the client\u2019s — full ownership of every article, page, and asset published",
            "Clients are welcome to write their own content; it\u2019s optimized for search before publishing, not rejected",
            "Nothing goes live without approval — no roofing company should have to guess what\u2019s on their own website",
          ]}
        />

        <H3>Link Building & Authority</H3>
        <P>
          Backlinks signal to Google that other credible sites trust a
          roofing company&rsquo;s content enough to link to it. Industry
          directories, local business associations, and supplier
          partnerships all contribute to the authority that moves
          rankings — and unlike paid ads, that authority compounds
          instead of disappearing when a budget pauses.
        </P>

        <H3>Reporting</H3>
        <P>
          Every roofing client receives a monthly report — rankings,
          traffic, content published, links earned, and the technical
          work completed that month. No jargon-heavy dashboards; just a
          clear answer to &ldquo;what happened this month, and
          what&rsquo;s next.&rdquo;
        </P>

        <H3>Beyond SEO</H3>
        <P>
          SEO is the foundation, not the ceiling. Roofer SEO Co. also
          offers reputation management and web design for roofing
          companies that want a fuller marketing stack — each service is
          available independently, with no requirement to bundle.
        </P>
      </Section>

      <Section id="six-step-process" title="A Simple 6-Step Process That Works" reduce={reduce}>
        <P>
          Every SEO for roofers engagement follows the same proven
          process, from the first audit to ongoing growth.
        </P>
        <ProcessSteps />
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

      <Section id="ai-search-results" title="Showing Up in AI Search Results" reduce={reduce}>
        <P>
          Homeowners are no longer limited to a Google search bar —
          ChatGPT, Perplexity, and Google&rsquo;s own AI Overviews are
          increasingly where roofing research starts. Answer Engine
          Optimization (AEO) is how a roofing company&rsquo;s content
          gets pulled into those AI-generated answers instead of staying
          invisible to them.
        </P>
        <P>
          No agency can guarantee placement inside an AI-generated
          answer — anyone who says otherwise is overselling a system
          nobody fully controls. What AEO work can do is make a roofing
          company&rsquo;s site structured, specific, and
          citation-worthy, which is the same foundation that improves
          traditional rankings.
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

      <Section id="where-we-work" title="Where We Work" reduce={reduce}>
        <P>
          Roofer SEO Co. works with roofing contractors across all 50
          states — from single-city operations to companies managing
          multiple service areas. Whether a roofing business serves one
          town or an entire region, the strategy is built around its
          specific service territory, not a generic template applied
          everywhere.
        </P>
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
        <motion.div variants={fadeUp} className="mt-8">
          <PrimaryButton as="a" href="/book-a-call">
            Book a Call <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
        </motion.div>
      </Section>

      <motion.section
        id="ready-to-rank"
        className="pt-10"
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : viewportOnce}
      >
        <motion.h2
          variants={fadeUp}
          className="font-heading text-3xl font-black leading-tight tracking-tight text-[#252422] sm:text-4xl lg:text-5xl"
        >
          Ready to Rank for the Roofing Jobs You Want?
        </motion.h2>
        <P>
          Every roofing company competing for the same homeowners
          can&rsquo;t all be on page one — the ones that invest in SEO
          for roofers are the ones that stay there.
        </P>
        <motion.div variants={fadeUp} className="mt-6">
          <PrimaryButton as="a" href="/book-a-call">
            Book Your Free Consultation <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
        </motion.div>
      </motion.section>
    </div>
  );
}