import { Eyebrow } from "@/components/ui/ui_components";
import { Check, ShieldCheck } from "lucide-react";
import FreeAuditForm from "@/components/shared/free_audit_form";
import FinalCTA from "@/components/shared/final_cta";

export const metadata = {
  title: "Free Roofing SEO Audit — Roofer SEO Co.",
  description:
    "See exactly where your business is losing visibility — and what it would take to fix it. Manually-reviewed, delivered by email within 2 business days.",
};

const WHAT_THEY_GET = [
  "A review of your Google Business Profile, map pack ranking, and review count",
  "A look at how your website currently performs for local roofing searches",
  "A plain-English summary of what’s costing you leads, and what to fix first",
];

export default function FreeAuditPage() {
  return (
    <main className="bg-[#fffcf2]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#ccc5b9]/60">
        <div
          className="absolute -right-24 top-10 hidden h-[320px] w-[320px] rounded-full opacity-50 lg:block"
          style={{ background: "#ccc5b9" }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-20">
          <div>
            <Eyebrow>FREE AUDIT</Eyebrow>
            <h1 className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl">
              Get Your Free Roofing SEO Audit
            </h1>
            <p className="sub-heading mt-6 max-w-lg text-base font-light leading-relaxed text-[#403d39]/90">
              See exactly where your business is losing visibility — and what
              it would take to fix it.
            </p>

            <div className="mt-8 space-y-4">
              <p className="eyebrow text-xs font-bold uppercase tracking-[0.18em] text-[#eb5e28]">
                What you get
              </p>
              <ul className="space-y-3">
                {WHAT_THEY_GET.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "#eb5e28" }}
                    >
                      <Check className="h-3.5 w-3.5 text-[#fffcf2]" />
                    </div>
                    <span className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-2xl bg-[#252422] p-8 text-[#fffcf2] shadow-xl">
              <h2 className="font-heading text-xl font-bold italic">
                Send Me My Free Audit
              </h2>
              <p className="sub-heading mt-2 text-xs font-light text-[#ccc5b9]">
                Manual review — delivered by email within 2 business days.
              </p>
              <div className="mt-6">
                <FreeAuditForm buttonLabel="Send Me My Free Audit" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signal */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center lg:px-10">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "#eb5e28" }}>
            <ShieldCheck className="h-6 w-6 text-[#fffcf2]" />
          </div>
          <p className="sub-heading text-base font-light leading-relaxed text-[#403d39]/90">
            We personally review every submission — no automated reports.
            You&apos;ll get your audit by email within 2 business days. No
            sales pressure, no obligation.
          </p>
        </div>
      </section>

      <FinalCTA
        heading="Prefer to talk it through live?"
        subheading="Book a free 20-minute strategy call instead — same honest assessment, just in real time."
        primaryLabel="Book a Call"
        primaryHref="/book-a-call"
        secondaryLabel="See Services"
        secondaryHref="/services/reputation-management"
      />
    </main>
  );
}
