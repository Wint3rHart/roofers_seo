import { Eyebrow } from "@/components/ui/ui_components";
import { Check, Clock, PhoneCall } from "lucide-react";
import FinalCTA from "@/components/shared/final_cta";

export const metadata = {
  title: "Book a Free Strategy Call — Roofer SEO Co.",
  description:
    "A quick 20-minute call to understand your business and figure out what's actually worth fixing first — no pitch, just a real conversation.",
};

const WHAT_WE_COVER = [
  "Where you’re losing leads right now (reviews, rankings, or your website)",
  "What a realistic plan looks like for your market and budget",
  "Whether we’re actually a fit — no pressure either way",
];

export default function BookACallPage() {
  // Replace with your real Calendly URL when ready.
  const CALENDLY_URL =
    "https://calendly.com/roofer-seo-co/strategy-call";

  return (
    <main className="bg-[#fffcf2]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#ccc5b9]/60">
        <div
          className="absolute -right-24 top-10 hidden h-[320px] w-[320px] rounded-full opacity-50 lg:block"
          style={{ background: "#ccc5b9" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="text-center">
            <Eyebrow>BOOK A CALL</Eyebrow>
            <h1 className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl">
              Book a Free Strategy Call
            </h1>
            <p className="sub-heading mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-[#403d39]/90">
              A quick call to understand your business and figure out what’s
              actually worth fixing first — no pitch, just a real
              conversation.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-[#ccc5b9]/70 bg-white/50 p-6">
            <p className="eyebrow mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#eb5e28]">
              What we’ll cover
            </p>
            <ul className="space-y-3">
              {WHAT_WE_COVER.map((item, i) => (
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
      </section>

      {/* Calendly embed */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
          <div className="mb-6 flex items-center gap-3">
            <PhoneCall className="h-5 w-5" style={{ color: "#eb5e28" }} />
            <h2 className="font-heading text-2xl font-black italic tracking-tight">
              Pick a time that works for you
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#ccc5b9]/70 bg-white shadow-sm">
            <iframe
              src={CALENDLY_URL}
              title="Schedule a strategy call"
              className="h-[700px] w-full"
              frameBorder="0"
            />
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-[#403d39]/80">
            <Clock className="h-4 w-4" style={{ color: "#eb5e28" }} />
            <span className="sub-heading font-light">
              Calls run about 20 minutes. No contracts, no obligation to
              move forward.
            </span>
          </div>
        </div>
      </section>

      <FinalCTA
        heading="Not ready for a call yet?"
        subheading="Get a free audit by email first — same honest assessment, just on your timeline."
        primaryLabel="Get a Free Audit"
        primaryHref="/free-audit"
        secondaryLabel="See Services"
        secondaryHref="/services/reputation-management"
      />
    </main>
  );
}
