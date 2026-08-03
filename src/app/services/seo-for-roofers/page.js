import LocalSeoHero from "@/components/services/local_seo/hero";
import LocalSeoContentLayout from "@/components/services/local_seo/content_layout";
import FinalCTA from "@/components/shared/final_cta";

export const metadata = {
  title: "SEO For Roofers.",
  description:
    "Show up in the Google Map Pack when homeowners search 'roofer near me.' Google Business Profile optimization and local search strategy built around the neighborhoods you actually serve.",
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