"use client"

import { useState } from "react";
import {
  ChevronDown,} from "lucide-react";


const FAQS = [
  "How long does it take to see results?",
  "Do you work with roofing companies of all sizes?",
  "What makes Roofer SEO Co. different from other agencies?",
  "Do I have to sign a long-term contract?",
  "Do you only work with companies that already have good reviews?",
  "What\u2019s included if I start with reputation management first?",
];

function FAQItem({ question, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#ccc5b9] ">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-[#252422]">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#eb5e28] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <p className="pb-5 text-sm leading-relaxed text-[#403d39]/80">
          Answer coming soon — reach out and we&apos;ll walk you through it on
          a call.
        </p>
      )}
    </div>
  );
}


export const Faq=()=>{
 const [openFaq, setOpenFaq] = useState(null);
    return   <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] font-sans text-[#252422]">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
          <h2 className="text-center text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10">
            {FAQS.map((q, i) => (
              <FAQItem
                key={q}
                question={q}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>
}