import { Eyebrow, PrimaryButton } from "../ui/ui_components";

export const Pricing = () => {
  return (
    <section className="border-b border-[#ccc5b9]/60 bg-white/40 text-[#252422]">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
        <Eyebrow>PRICING</Eyebrow>
        <h2 className="font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl">
          Custom Plans for Your Roofing Business
        </h2>
        <p className="sub-heading mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed text-[#403d39]/85">
          Every roofing company starts in a different place — some need
          reviews fixed first, some are invisible in the map pack, some have
          a website actively losing them leads. Pricing follows whichever
          combination of services actually moves your business forward, not
          a one-size-fits-all package.
        </p>
        <p className="sub-heading mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-[#403d39]/85">
          A plan built around reputation management alone costs less than
          one that combines reviews, local SEO, web design, and AI search
          visibility — so the price reflects what your business actually
          needs, not what&apos;s easiest to sell.
        </p>
        <p className="mt-6 text-base font-bold">
          Most projects range between{" "}
          <span style={{ color: "#eb5e28" }}>$250</span> and{" "}
          <span style={{ color: "#eb5e28" }}>$3,000</span> per month.
        </p>
        <PrimaryButton as="a" href="/book-a-call" className="mt-8">
          Book a Call for a Custom Plan
        </PrimaryButton>
      </div>
    </section>
  );
};
