import { Eyebrow, PrimaryButton } from "@/components/ui/ui_components";
import { ArrowRight, Star, MapPin, Globe, Sparkles } from "lucide-react";
import FinalCTA from "@/components/shared/final_cta";

export const metadata = {
  title: "About — Roofer SEO Co.",
  description:
    "Roofing-only SEO and reputation management. Why we built for roofers specifically, and how the ladder — reviews, local SEO, web, AI visibility — fits together as one system.",
};

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
            <Eyebrow>WHO WE ARE</Eyebrow>
            <h1 className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl">
              Built Only for Roofing Companies
            </h1>
            <p className="sub-heading mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-[#403d39]/90">
              Roofer SEO Co. is an SEO and reputation management company that
              works exclusively with roofing contractors — not plumbers, not
              dentists, not “any local business.” Roofers, period.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <Eyebrow>OUR STORY</Eyebrow>
            <h2 className="font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl">
              Why roofing, specifically
            </h2>
          </div>
          <div className="space-y-5">
            <p className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
              Roofing is a high-stakes, high-stress purchase. Homeowners
              research fast, often under pressure after a storm, and they
              decide based on signals they can scan in seconds — star count,
              recency, whether the business shows up on the map, and whether
              the website loads on their phone.
            </p>
            <p className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
              Generalist SEO agencies miss most of that. They spend months
              learning the industry, apply generic playbooks built for
              dentists or lawyers, and bill for traffic that doesn&apos;t
              turn into calls. Roofing is different — storm season spikes,
              insurance claim cycles, and homeowner search behavior here are
              specific, and the work has to be built around them from day
              one.
            </p>
            <p className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
              That&apos;s the entire premise of Roofer SEO Co.: no learning
              curve, no wasted months, no generic templates. A system built
              only for roofers, in the right order, on month-to-month
              agreements so the work has to keep earning its place every
              single month.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf2]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <Eyebrow>WHO WE WORK WITH</Eyebrow>
            <h2 className="font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl">
              Roofing contractors across the United States
            </h2>
          </div>
          <div className="space-y-5">
            <p className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
              We work with roofing contractors across the entire United
              States — not limited to specific states or regions. Whether
              you&apos;re a solo contractor running one crew or a multi-roof
              operation with several service areas, the same roofing-specific
              system applies.
            </p>
            <p className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
              Where you start in the ladder depends on where you actually
              are today — some companies need reviews fixed first, some are
              invisible in the map pack, some have a website actively losing
              them leads. The combination is what moves the business, not a
              one-size-fits-all package.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>OUR APPROACH</Eyebrow>
            <h2 className="font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl">
              A real system, not a grab-bag of services
            </h2>
            <p className="sub-heading mt-4 text-sm font-light text-[#403d39]/80">
              Four services, in a specific order, because the order is what
              makes them work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {APPROACH_LADDER.map(({ icon: Icon, label, copy }) => (
              <div
                key={label}
                className="rounded-xl border border-[#ccc5b9]/70 bg-white/50 p-7"
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg"
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
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <PrimaryButton as="a" href="/book-a-call">
              Book a Call <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Note: per documentation, no Team/Founder section on this page.
          Company voice only — no individual name, photo, or bio. */}

      <FinalCTA />
    </main>
  );
}
