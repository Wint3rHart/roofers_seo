import React from 'react';
import { Eyebrow } from '../ui/ui_components';


const WHY_ROWS = [
  {
    label: "EXPERIENCE",
    heading: "No Learning Curve, No Wasted Months",
    copy: "Roofing-only focus means storm season spikes and insurance claim cycles are already understood — so your strategy is right the first month, not the fourth.",
  },
  {
    label: "SERVICES",
    heading: "Covering Every Place Homeowners Actually Search",
    copy: "Google, Google Maps, and AI search tools all get asked the same question — \u201cwho\u2019s a good roofer near me\u201d — so optimizing for all three closes the gap most agencies leave open.",
  },
  {
    label: "TRANSPARENCY",
    heading: "Month-to-Month, So Results Have to Speak for Themselves",
    copy: "No contract means nothing locks you in — so the work has to keep earning its place every single month, on results alone.",
  },
  {
    label: "COMMUNICATION",
    heading: "Fast, Plain-English Updates, So You Always Know Where You Stand",
    copy: "Running a roofing business leaves no time for marketing jargon or slow replies — so updates come fast and in plain English, built for decisions, not delays.",
  },
];


const Why = () => {
    return (
           <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] font-sans text-[#252422]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>WHY ROOFER SEO CO.</Eyebrow>
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              Built Only for Roofing Companies
            </h2>
            <p className="mt-4 text-sm text-[#403d39]/80">
              Here&apos;s what that focus actually does for your business.
            </p>
          </div>

          <div className="mt-14 space-y-14">
            {WHY_ROWS.map((row, i) => (
              <div
                key={row.heading}
                className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-16 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className="aspect-video w-full flex-1 rounded-xl"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(135deg, #403d39, #252422)"
                        : "linear-gradient(135deg, #ccc5b9, #403d39)",
                  }}
                />
                <div className="flex-1">
                  <p
                    className="mb-2 text-xs font-bold tracking-[0.18em]"
                    style={{ color: "#eb5e28" }}
                  >
                    {row.label}
                  </p>
                  <h3 className="text-2xl font-black leading-snug">
                    {row.heading}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#403d39]/85">
                    {row.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Why;
