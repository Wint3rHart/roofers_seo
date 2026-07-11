import { PrimaryButton } from "../ui/ui_components";

export const CTA = () => {
  return (
    <section className="bg-[#252422] text-[#252422]">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
        <h2 className="font-heading text-3xl font-black italic leading-tight text-[#fffcf2] sm:text-4xl">
          Ready to Boost Your Rankings?
        </h2>
        <p className="sub-heading mx-auto mt-4 max-w-lg text-sm font-light text-[#ccc5b9]">
          Get more 5-star reviews, more visibility, and more roofing jobs —
          with a system built only for roofers.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <PrimaryButton as="a" href="/book-a-call">
            Book a Call
          </PrimaryButton>
          <a
            href="/free-audit"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#fffcf2] px-6 py-3.5 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#fffcf2] hover:text-[#252422]"
          >
            Get a Free Audit
          </a>
        </div>
      </div>
    </section>
  );
};
