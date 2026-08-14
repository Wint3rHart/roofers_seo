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
import { HOME_FAQS as FAQS } from "@/data/home_faqs";

const PER_PAGE = 6;

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
  const [page, setPage] = useState(1);
  const reduce = useReducedMotion();

  const totalPages = Math.ceil(FAQS.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visibleFaqs = FAQS.slice(start, start + PER_PAGE);

  const goToPage = (p) => {
    setPage(p);
    setOpenFaq(null);
  };

  return (
    <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] text-[#252422]">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-6">
        <SectionHeading title="Frequently Asked Questions" />

        <motion.div
          key={page}
          className="mt-10 text-left"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          {visibleFaqs.map((item, i) => {
            const globalIndex = start + i;
            return (
              <motion.div key={globalIndex} variants={fadeUp}>
                <FAQItem
                  question={item.q}
                  answer={item.a}
                  isOpen={openFaq === globalIndex}
                  onToggle={() =>
                    setOpenFaq(openFaq === globalIndex ? null : globalIndex)
                  }
                />
              </motion.div>
            );
          })}
        </motion.div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => goToPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="rounded-full border border-[#ccc5b9] px-4 py-2 text-sm font-medium text-[#252422] transition-colors disabled:cursor-not-allowed disabled:opacity-40 hover:not-disabled:border-[#eb5e28] hover:not-disabled:text-[#eb5e28]"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`h-9 w-9 rounded-full text-sm font-medium transition-colors ${
                  p === page
                    ? "bg-[#eb5e28] text-white"
                    : "border border-[#ccc5b9] text-[#252422] hover:border-[#eb5e28] hover:text-[#eb5e28]"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => goToPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="rounded-full border border-[#ccc5b9] px-4 py-2 text-sm font-medium text-[#252422] transition-colors disabled:cursor-not-allowed disabled:opacity-40 hover:not-disabled:border-[#eb5e28] hover:not-disabled:text-[#eb5e28]"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};