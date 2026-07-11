import AboutUs from "@/components/home_page/about_us";
import CtaRibbon from "@/components/home_page/cta_ribbon";
import { Faq } from "@/components/home_page/faq";
import { CTA } from "@/components/home_page/final_cta";
import { Footer } from "@/components/home_page/footer";
import Page from "@/components/home_page/hero";
import Process from "@/components/home_page/process";
import { Services } from "@/components/home_page/services";
import Why from "@/components/home_page/why";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans dark:bg-black">
     <main>
       <Page/>
  {/* ABOUT + CONTACT FORM */}
     <AboutUs/>

      {/* SERVICES */}
    <Services/>
      {/* WHY US */}
   <Why/>

      {/* CTA RIBBON */}
     <CtaRibbon/>

      {/* PROCESS */}
     <Process/>

      {/* PRICING */}
     

      {/* FAQ */}
    <Faq/>

      {/* FINAL CTA */}
   <CTA/>

      {/* FOOTER */}
     <Footer/>





     </main>
    </div>
  );
}
