"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce, useReducedMotion } from "../../ui/motion";
import { PrimaryButton } from "../../ui/ui_components";
import {
  Section,
  P,
  H3,
  FeatureGrid,
  FaqAccordion,
} from "../shared/content_blocks";

/**
 * Main article content for the Reputation Management page.
 * Every sentence below is copied verbatim from
 * Reputation_management_page_content.docx — nothing paraphrased, nothing
 * added, nothing skipped. The doc’s H1 / Sub Heading / intro "Body Text"
 * paragraph and the first "[GET MY FREE PROPOSAL]" button all live in the
 * dedicated hero (reputation_management/hero.js), not here. The doc’s
 * second "[GET MY FREE PROPOSAL]" button, which appears after "Getting
 * Started", is rendered here as the closing CTA.
 * Sections included, in doc order: "Why Review Management for Roofers
 * Matters Right Now", "What Our Reputation Management for Roofers
 * Includes" (+ its 6 H3s: "The Review Funnel", "Getting More 5-Star
 * Reviews", "Protecting What’s Already Been Built", "Staying Visible",
 * "Beyond Reviews", "Everything Included" with its 14 H4 feature cards),
 * "What Silence Costs a Roofing Company", "Where We Work", "Getting
 * Started" (rendered as a premium FAQ accordion), and the closing CTA.
 */

export const TOC_ITEMS = [
  { id: "why-it-matters", label: "Why Review Management Matters Right Now" },
  { id: "whats-included", label: "What’s Included" },
  { id: "what-silence-costs", label: "What Silence Costs a Roofing Company" },
  { id: "where-we-work", label: "Where We Work" },
  { id: "getting-started", label: "Getting Started" },
];

const REVIEW_FUNNEL_STEPS = [
  "Send or schedule the request. Add the client’s name and contact details right from a phone, on the job site or on the go — under a minute, sent now or scheduled for later.",
  "The sequence runs automatically. The customer gets a text or email asking them to rate their experience out of 10.",
  "The rating decides where they go. A high rating goes straight to the Google review page — one tap and it’s live. A low rating goes to a private feedback form instead.",
  "A low rating triggers an instant alert. The business gets notified right away, with time to call and resolve it before it becomes public.",
  "One review becomes many. As soon as a review lands on Google, it’s automatically shared across the business’s social media.",
  "The website updates itself. New reviews show up automatically, so visitors see real, recent feedback.",
];

// "The Review Funnel" 6-step grid — same visual pattern as the Local SEO
// page's "A Simple 6-Step Process That Works" (number, then an orange bar
// underneath each item), laid out 2 per row across 3 rows. Text is the
// doc's REVIEW_FUNNEL_STEPS content unchanged, just re-laid-out.
function ReviewFunnelSteps({ items }) {
  return (
    <motion.div
      variants={staggerContainer(0.08)}
      className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2"
    >
      {items.map((step, i) => (
        <motion.div key={i} variants={fadeUp}>
          <span
            className="font-heading text-4xl font-black italic"
            style={{ color: "#eb5e28" }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="sub-heading mt-3 text-[18px] font-light leading-relaxed text-[#403d39]/90">
            {step}
          </p>
          <span className="mt-4 block h-[3px] w-16 bg-[#eb5e28]" />
        </motion.div>
      ))}
    </motion.div>
  );
}

const EVERYTHING_INCLUDED = [
  {
    title: "Client Intake Form",
    description:
      "Captures the customer’s name and contact info in under a minute, right from the job site, so the review sequence starts before the crew even leaves the driveway.",
  },
  {
    title: "CRM Dashboard",
    description:
      "One place to view and edit sequences, respond to reviews, and control what gets pushed to social media, instead of managing reviews across five different apps.",
  },
  {
    title: "Automated Review Request Sequence",
    description:
      "Sent by text or email as soon as a job wraps, so asking for a review never depends on someone remembering to do it.",
  },
  {
    title: "Smart Feedback Filtering",
    description:
      "Routes happy customers straight to Google and unhappy ones to a private form first, so 5-star reviews go public and problems get a chance to get fixed before they do.",
  },
  {
    title: "QR Code",
    description:
      "A scannable shortcut to the same review-and-feedback sequence, ready for a truck decal, invoice, or job-site sign.",
  },
  {
    title: "Instant Low-Rating Alerts",
    description:
      "A heads-up the moment a customer flags a bad experience, with enough lead time to call and resolve it before it becomes a public review.",
  },
  {
    title: "Automated Follow-Up Sequences",
    description:
      "Gentle reminders for customers who meant to leave a review and didn’t, so good experiences don’t just quietly go uncounted.",
  },
  {
    title: "Review Dispute Filing",
    description:
      "Fake, false, or solicited reviews get reviewed and reported directly to Google by hand, protecting a rating that reflects real work, not noise.",
  },
  {
    title: "Automated Replies to Reviews",
    description:
      "Every incoming review gets an AI-written response in a natural, human tone — a genuinely unique reply each time, not templated copy-paste — so the business spends time working, not typing responses.",
  },
  {
    title: "Auto-Share to Social",
    description:
      "New 5-star reviews post automatically to Facebook and Instagram, turning proof into content without extra effort.",
  },
  {
    title: "Live Website Widget",
    description:
      "The site’s review section updates itself in real time, so visitors always see current feedback, not a screenshot from a year ago.",
  },
  {
    title: "Roofing-Specific System Setup",
    description:
      "Configured for how roofing jobs actually run — storm damage, insurance claims, multi-day installs — not a generic template built for another trade.",
  },
  {
    title: "Customer Support",
    description:
      "Direct access to message the team with any questions about the service, whenever something needs a real answer.",
  },
  {
    title: "7-Day Free Trial",
    description: "A full week to see the system running on real jobs before committing to anything.",
  },
];

const FAQS = [
  {
    q: "How long does it take to set up?",
    a: "24 hours from sign-up. The request sequence runs on every job completed after that, so results start showing up as fast as jobs get finished.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No — month-to-month throughout.",
  },
  {
    q: "Do I need a Google Business Profile already set up?",
    a: "No. If one isn’t in place yet, setting it up is part of getting started, not a blocker.",
  },
  {
    q: "What happens to my reviews if I ever stop the service?",
    a: "They stay. Every review, response, and piece of content belongs to the roofing company, not the platform.",
  },
  {
    q: "How much does this cost?",
    a: "It depends on the size of the operation and the number of jobs running each month — that’s exactly what the proposal is for.",
  },
];

export default function ContentBody() {
  const reduce = useReducedMotion();

  return (
    <div>
      <Section id="why-it-matters" title="Why Review Management for Roofers Matters Right Now" reduce={reduce}>
        <P>
          Most homeowners decide before they call. Roughly 90–95% of
          consumers read reviews before hiring a local business, and most
          won’t consider anything under 4.0 stars, with home services
          often needing 4.5+ to stand out.
        </P>
        <P>
          Google ranks Business Profiles on three things: how closely a
          listing matches the search, how close the business is to the
          searcher, and how well-known and trusted the business appears
          online. The first two are fixed — no roofing company can
          manufacture proximity. The third, prominence, is built almost
          entirely from signals a business can actually influence: how
          many reviews it has, how recently they came in, and how
          consistently they keep coming.
        </P>
        <P>
          Prominence isn’t a Google-only score, either. It’s shaped by how
          visible a business is everywhere, which means what shows up on
          Facebook and Instagram counts too, not just what’s sitting on a
          Google Business Profile. A roofing company with strong reviews
          on Google but nothing showing up anywhere else is leaving half
          the signal on the table.
        </P>
        <P>
          This is why reputation management for roofers matters so much
          right now: a system built to capture reviews and push them out
          everywhere — not just to Google — does two jobs at once. It
          gives homeowners the proof they’re already looking for, and it
          feeds the exact signal Google uses to decide who ranks.
        </P>
      </Section>

      <Section id="whats-included" title="What Our Reputation Management for Roofers Includes" reduce={reduce}>
        <H3>The Review Funnel</H3>
        <P>
          Most bad reviews aren’t about the quality of the work, they’re
          about communication: a delay that wasn’t explained, a price
          that felt unclear, a callback that took too long. None of that
          has to go public if it’s caught while it’s still private — and
          once a review is posted, the next homeowner reading it has no
          way to know the full story, only what’s on the screen. The
          Review Funnel catches problems before they go public. A
          completed job triggers a rating request; happy customers get
          routed to leave a Google review, unhappy ones get routed to a
          private form so it can be resolved by phone first.
        </P>
        <P>How it works:</P>
        <ReviewFunnelSteps items={REVIEW_FUNNEL_STEPS} />
        <P>
          Review software can send a text and flag a low rating. It can’t
          call an upset homeowner, file a dispute with Google, or write a
          response that actually fits the situation — that gap is where
          the value of a managed system sits.
        </P>

        <H3>Getting More 5-Star Reviews</H3>
        <P>
          Automated requests, follow-up reminders, QR codes, custom
          feedback links, and an intake form that triggers the whole
          sequence, so nothing depends on someone remembering to ask.
        </P>

        <H3>Protecting What’s Already Been Built</H3>
        <P>
          Fake, false, or solicited reviews get reviewed and disputed
          directly with Google, protecting a rating that reflects real
          work, not noise. When a review isn’t fake but the customer’s
          account is one-sided, the move isn’t a takedown request, it’s a
          response — and every incoming review gets one, fast, in a tone
          that actually fits what was said.
        </P>

        <H3>Staying Visible</H3>
        <P>
          New 5-star reviews auto-post to Facebook and Instagram and
          update live on the website, so the proof stays current without
          anyone managing it.
        </P>

        <H3>Beyond Reviews</H3>
        <P>
          A strong review profile supports everything already being built
          through SEO for Roofers. Rankings bring the click. Reviews
          decide whether that click turns into a call.
        </P>

        <H3>Everything Included</H3>
        <P>Every plan comes fully built out — nothing here is an add-on.</P>
        <FeatureGrid items={EVERYTHING_INCLUDED} />
      </Section>

      <Section id="what-silence-costs" title="What Silence Costs a Roofing Company" reduce={reduce}>
        <P>
          A reputation erodes quietly. One unanswered 2-star review sits
          at the top of a Google profile for months. A homeowner
          comparing three roofers reads it, sees no response, and assumes
          it’s true. Most consumers expect a reply within 48 to 72 hours,
          and a notable share say an unanswered negative review makes them
          less likely to make contact at all.
        </P>
        <P>
          Recency can flip the ranking, not just the reputation. Review
          count, rating, and how recently reviews were posted are all
          treated as local ranking signals, not just trust signals for
          homeowners reading them — Google reads a steady stream of new
          5-star reviews as a sign of an active business, and a stale
          review history as the opposite. A roofing company collecting
          reviews every month can outrank a competitor sitting at the top
          of the results with no new reviews in over a year.
        </P>
        <P>
          Silence costs twice. Once in trust, and again in visibility,
          since a thin, aging review profile can hold a business back in
          search results even before a homeowner ever reads a single
          review.
        </P>
      </Section>

      <Section id="where-we-work" title="Where We Work" reduce={reduce}>
        <P>
          Built for roofing companies and roofing contractors nationwide,
          across storm damage repair, insurance claim work, retail roof
          replacement, residential architectural shingles, and
          commercial/TPO roofing. Whether the job was a single residential
          repair or a multi-crew commercial replacement, the same system
          applies: every completed job is a moment that could become a
          review either way.
        </P>
      </Section>

      <Section id="getting-started" title="Getting Started" reduce={reduce}>
        <FaqAccordion items={FAQS} />
      </Section>

      <motion.section
        id="get-my-free-proposal"
        className="pt-10"
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : viewportOnce}
      >
        <motion.div variants={fadeUp}>
          <PrimaryButton as="a" href="/free-audit">
            Get My Free Proposal <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
        </motion.div>
      </motion.section>
    </div>
  );
}