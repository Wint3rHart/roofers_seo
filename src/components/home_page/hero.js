import { ArrowRight } from "lucide-react";
import { Eyebrow, PrimaryButton, SecondaryButton } from "../ui/ui_components";

const TRUST_STRIP = [
  "Organic leads solution for all your roofing services",
  "Month-to-Month, No Contracts",
  "Built Exclusively for Roofers",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#ccc5b9]/60 bg-[#fffcf2]">
      <div
        className="absolute -right-24 top-10 hidden h-[420px] w-[420px] rounded-full opacity-60 lg:block"
        style={{ background: "#ccc5b9" }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
        <div>
          <Eyebrow>ROOFING SEO &amp; REPUTATION SPECIALISTS</Eyebrow>
          <h1 className="font-heading text-4xl font-black italic leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Get More Roofing
            <br />
            <span style={{ color: "#eb5e28" }}>Leads. Better Reviews.</span>
            <br />
            Grow Your Business.
          </h1>
          <p className="sub-heading mt-6 max-w-lg text-base font-light leading-relaxed text-[#403d39]/90">
            We help roofing contractors build a five-star reputation, rank
            higher in local search, and turn more homeowners into booked
            calls — with a system built only for roofers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton as="a" href="/book-a-call">
              Book a Call <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton as="a" href="/free-audit">
              Get a Free Audit
            </SecondaryButton>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#403d39] to-[#252422] shadow-xl" />
          <div
            className="absolute -bottom-6 -left-6 flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed text-center text-[10px] font-bold uppercase leading-tight shadow-lg sm:h-32 sm:w-32"
            style={{
              background: "#eb5e28",
              color: "#fffcf2",
              borderColor: "#fffcf2",
            }}
          >
            Roofing SEO That Delivers
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-[#ccc5b9]/60 bg-[#fffcf2]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-6 text-center text-sm font-semibold text-[#403d39] sm:flex-row sm:justify-center sm:gap-6 sm:text-left lg:px-10">
          {TRUST_STRIP.map((item, i) => (
            <span key={item} className="flex items-center gap-6">
              {item}
              {i < TRUST_STRIP.length - 1 && (
                <span className="hidden text-[#eb5e28] sm:inline">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
