import LocalSeoHero from "@/components/services/local_seo/hero";
import LocalSeoContentLayout from "@/components/services/local_seo/content_layout";
import FinalCTA from "@/components/shared/final_cta";

export const metadata = {
  title: "SEO for Roofers | No Contracts, Roofing-Specific Strategy",
  description:
    "SEO for roofers that books jobs, not just rankings. Roofing-specific strategy, month-to-month terms, and a 90-day guarantee in smaller markets.",
};

export default function LocalSeoPage() {
  return (
    <main className="bg-[#fffcf2]">
      <LocalSeoHero />
      <LocalSeoContentLayout />
      {/* <FinalCTA
        heading="Ready to Rank in the Map Pack?"
        subheading="Get more calls from homeowners searching for a roofer in your service area — with month-to-month terms and no long-term contracts."
      /> */}
    </main>
  );
}