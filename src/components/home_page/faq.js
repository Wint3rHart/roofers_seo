"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "../ui/ui_components";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

const FAQS = [
  {
    q: "How long does it take to see results?",
    a: "Reputation work typically shows movement within the first 30–60 days as new reviews come in. Local SEO ranking shifts generally take 60–90 days to compound, depending on how competitive your service area is. We walk you through realistic timelines for your specific market on the first call.",
  },
  {
    q: "Do you work with roofing companies of all sizes?",
    a: "Yes — from solo contractors to multi-crew operations. The plan scales with where you are: a smaller company often starts with reputation management alone, while a larger operation may need the full ladder (reviews, local SEO, web design, and AI search visibility) running in parallel.",
  },
  {
    q: "What makes Roofer SEO Co. different from other agencies?",
    a: "We work only with roofers — which means storm season spikes, insurance claim cycles, and homeowner search behavior in this industry are already understood from day one. No onboarding months lost explaining the business, and no generic SEO playbook applied to a roofing-specific problem.",
  },
  {
    q: "Do I have to sign a long-term contract?",
    a: "No. Everything runs month-to-month. If the work isn’t earning its place, you can leave — which means the work has to keep earning its place every single month, on results alone.",
  },
  {
    q: "Do you only work with companies that already have good reviews?",
    a: "No. Many of our engagements start with a thin or unbalanced review profile. The reputation management service is built specifically to fix that — routing happy customers to public reviews while routing unhappy ones to private feedback before anything goes public.",
  },
  {
    q: "What’s included if I start with reputation management first?",
    a: "Automated review requests by text and email after each job, a 1–5 star routing system that protects your public profile, ongoing monitoring and response support, and monthly reporting on review count, average rating, and response time. From there, we layer in local SEO, web, or AI visibility only when they’re the right next move for your business.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#ccc5b9]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="sub-heading font-semibold text-[#252422]">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#eb5e28] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
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
            <p className="sub-heading pb-5 text-center text-sm font-light leading-relaxed text-[#403d39]/80">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] text-[#252422]">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
        <SectionHeading title="Frequently Asked Questions" />

        <motion.div
          className="mt-10 text-left"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          {FAQS.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <FAQItem
                question={item.q}
                answer={item.a}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
