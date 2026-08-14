import AboutUs from "@/components/home_page/about_us";
import CtaRibbon from "@/components/home_page/cta_ribbon";
import { Faq } from "@/components/home_page/faq";
import { HOME_FAQS } from "@/data/home_faqs";
import { CTA } from "@/components/home_page/final_cta";
import Hero from "@/components/home_page/hero";
import Process from "@/components/home_page/process";
import { Pricing } from "@/components/home_page/pricing";
import { Services } from "@/components/home_page/services";
import Why from "@/components/home_page/why";
import Trust from "@/components/home_page/trust";
import JsonLdScript from "@/components/shared/json_ld_script";
import { faqSchema } from "@/data/json_ld";

export default function Home() {
  return (
    <main className="bg-[#fffcf2]">
      <JsonLdScript schema={faqSchema(HOME_FAQS)} />
      <Hero />
<Trust/>
      {/* ABOUT + CONTACT FORM */}
      <AboutUs />

      {/* SERVICES */}
      <Services />

      {/* WHY US */}
      <Why />

      {/* CTA RIBBON */}
      <CtaRibbon />

      {/* PROCESS */}
      <Process />

      {/* PRICING */}
      <Pricing />

      {/* FAQ */}
      <Faq />

      {/* FINAL CTA */}
      {/* <CTA /> */}
    </main>
  );
}
