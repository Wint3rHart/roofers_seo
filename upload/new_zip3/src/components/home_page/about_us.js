import React from 'react';
import {
  Star,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Eyebrow, PrimaryButton } from '../ui/ui_components';











const ABOUT_PARAGRAPHS = [
  "Roofing-only strategy means no time wasted explaining storm season or insurance claims — so your plan is right from month one, not month four.",
  "Reviews come before rankings, because homeowners check stars before they check a website — so fixing your reputation first makes every visitor after that convert better.",
  "Reporting tracks calls and ranked keywords, not raw traffic — so the numbers you see are the numbers that actually turn into booked jobs.",
];

const ABOUT_STATS = [
  { icon: Star, label: "Roofing-Only Focus" },
  { icon: MapPin, label: "Month-to-Month Agreements" },
  { icon: Sparkles, label: "Reviews-First Approach" },
];


const AboutUs = () => {
    return ( 
    <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] font-sans text-[#252422]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-5 lg:px-10">
          <div className="lg:col-span-3">
            <Eyebrow>WHO WE ARE</Eyebrow>
            <h2 className="max-w-md text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              SEO and Reputation Management Built for Roofing Businesses
            </h2>
            <div className="mt-6 space-y-4">
              {ABOUT_PARAGRAPHS.map((p) => (
                <p
                  key={p}
                  className="max-w-xl text-sm leading-relaxed text-[#403d39]/90"
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              {ABOUT_STATS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-5 w-5" style={{ color: "#eb5e28" }} />
                  <span className="text-sm font-bold">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-[#252422] p-8 text-[#fffcf2] shadow-xl">
              <h3 className="text-xl font-bold">
                Let&apos;s Talk About Your Rankings
              </h3>
              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="col-span-1 rounded-md border border-[#403d39] bg-[#fffcf2]/5 px-4 py-3 text-sm placeholder:text-[#ccc5b9] focus:border-[#eb5e28] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Business Name"
                    className="col-span-1 rounded-md border border-[#403d39] bg-[#fffcf2]/5 px-4 py-3 text-sm placeholder:text-[#ccc5b9] focus:border-[#eb5e28] focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Website URL"
                  className="w-full rounded-md border border-[#403d39] bg-[#fffcf2]/5 px-4 py-3 text-sm placeholder:text-[#ccc5b9] focus:border-[#eb5e28] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full rounded-md border border-[#403d39] bg-[#fffcf2]/5 px-4 py-3 text-sm placeholder:text-[#ccc5b9] focus:border-[#eb5e28] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Email or Phone"
                  className="w-full rounded-md border border-[#403d39] bg-[#fffcf2]/5 px-4 py-3 text-sm placeholder:text-[#ccc5b9] focus:border-[#eb5e28] focus:outline-none"
                />
                <PrimaryButton className="w-full">
                  Get My Free Audit
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutUs;
