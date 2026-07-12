import React from 'react';
import { Eyebrow } from '../ui/ui_components';


const PROCESS_STEPS = [
  { n: "01", title: "Discovery", copy: "We learn about your business, your service area, and your goals." },
  { n: "02", title: "Audit", copy: "We analyze your reviews, your site, your competitors, and your current visibility." },
  { n: "03", title: "Strategy", copy: "We build a custom plan — reputation, local SEO, and web, in the right order." },
  { n: "04", title: "Implementation", copy: "We execute the plan with precision and roofing-industry best practices." },
  { n: "05", title: "Reporting", copy: "You get clear reports showing real reviews, rankings, and traffic progress." },
  { n: "06", title: "Growth", copy: "We refine, optimize, and scale to keep leads coming month after month." },
];

const Process = () => {
    return (
         <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] font-sans text-[#252422]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10">
          <Eyebrow>OUR PROCESS</Eyebrow>
          <h2 className="mx-auto max-w-xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            A Simple 6-Step Process That Works
          </h2>

          <div className="mt-14 grid gap-x-8 gap-y-12 text-left sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <div key={step.n}>
                <span
                  className="text-3xl font-black"
                  style={{ color: "#eb5e28" }}
                >
                  {step.n}
                </span>
                <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#403d39]/85">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Process;
