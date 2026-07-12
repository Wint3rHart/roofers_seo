import {
  ArrowRight,
  Star,
  MapPin,
  Globe,
  Sparkles,
  
} from "lucide-react";
import { Eyebrow } from "../ui/ui_components";

const SERVICES = [
  {
    icon: Star,
    title: "Reputation Management",
    copy: "Get more 5-star Google reviews on autopilot, route negative feedback privately before it goes public, and turn happy customers into your strongest ranking signal.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    copy: "Rank higher in the Google Map Pack and local search for \u201croofer near me\u201d and storm-related searches, with Google Business Profile optimization and local content.",
  },
  {
    icon: Globe,
    title: "Web Design",
    copy: "A fast, mobile-friendly website designed to convert visitors into calls — built with the on-page SEO structure search engines need to rank roofing pages.",
  },
  {
    icon: Sparkles,
    title: "AI Search Visibility",
    copy: "Show up when homeowners ask AI tools like ChatGPT and Google AI Overviews \u201cwho\u2019s the best roofer near me\u201d — structured to be pulled into real answers.",
  },
];





export const Services=()=>{

  return <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] font-sans text-[#252422]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10">
          <Eyebrow>OUR SERVICES</Eyebrow>
          <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            Built to Get Roofers Found, Trusted, and Hired
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#403d39]/80">
            Four services, one goal — more homeowners choosing your roofing
            company over the competition.
          </p>

          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
            {SERVICES.map(({ icon: Icon, title, copy }) => (
              <div
                key={title}
                className="rounded-xl border border-[#ccc5b9]/70 bg-white/40 p-7 transition-shadow hover:shadow-lg"
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ background: "#eb5e28" }}
                >
                  <Icon className="h-5 w-5 text-[#fffcf2]" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#403d39]/85">
                  {copy}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold"
                  style={{ color: "#eb5e28" }}
                >
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


}