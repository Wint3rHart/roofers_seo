import React from 'react';
import {
  ArrowRight
} from "lucide-react";


const CtaRibbon = () => {
    return (
         <section style={{ background: "#eb5e28" }} className='bg-[#fffcf7] font-sans text-[#252422]'>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 text-center lg:flex-row lg:px-10 lg:text-left">
          <div>
            <h3 className="text-2xl font-black text-[#fffcf2] sm:text-3xl">
              Proven Strategy. Real Roofing Growth.
            </h3>
            <p className="mt-2 max-w-md text-sm text-[#fffcf2]/90">
              See how reputation management and local SEO work together to
              get your phone ringing.
            </p>
          </div>
          <button className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#252422] px-7 py-3.5 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#403d39]">
            Book a Call <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    );
}

export default CtaRibbon;
