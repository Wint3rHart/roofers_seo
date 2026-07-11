import { ArrowRight } from "lucide-react";

const CtaRibbon = () => {
  return (
    <section className="bg-[#eb5e28] text-[#252422]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 text-center lg:flex-row lg:px-10 lg:text-left">
        <div>
          <h3 className="font-heading text-2xl font-black italic text-[#fffcf2] sm:text-3xl">
            Proven Strategy. Real Roofing Growth.
          </h3>
          <p className="sub-heading mt-2 max-w-md text-sm font-light text-[#fffcf2]/90">
            See how reputation management and local SEO work together to
            get your phone ringing.
          </p>
        </div>
        <a
          href="/book-a-call"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#252422] px-7 py-3.5 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#403d39]"
        >
          Book a Call <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default CtaRibbon;
