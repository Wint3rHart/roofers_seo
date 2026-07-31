"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";
import { CTA } from "../home_page/final_cta";

const SERVICE_LINKS = [
  { label: "Reputation Management", href: "/services/reputation-management" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Web Design", href: "/services/web-design" },
  { label: "AI Search Visibility", href: "/services/ai-search-visibility" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Call", href: "/book-a-call" },
];

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer className="bg-[#252422]">
      <CTA />

      {/* Faded divider */}
      <div className="mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-[#ccc5b9]/25 to-transparent" />

      <motion.div
        className="mx-auto max-w-7xl px-6 py-14 lg:px-6"
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? false : viewportOnce}
      >
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div  variants={fadeUp}>
            <Image
              src="/Logo_Footer.svg"
              alt="Roofer SEO Co."
              width={140}
              height={44}
             
              className="h-10 w-auto object-contain "
            />
            <p className="sub-heading mt-4 max-w-xs sm:ml-6 text-sm font-light leading-relaxed text-[#ccc5b9]">
              SEO services exclusively for roofing contractors. More leads,
              higher rankings, stronger businesses — month to month, no
              contracts.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="font-heading text-sm font-bold text-[#fffcf2]">
              SEO Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[#ccc5b9] transition-colors hover:text-[#eb5e28]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="font-heading text-sm font-bold text-[#fffcf2]">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[#ccc5b9] transition-colors hover:text-[#eb5e28]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col items-center gap-1 border-t border-[#403d39] pt-6 text-center text-xs text-[#ccc5b9]/80"
        >
          <span>© 2026 Roofer SEO Co. All Rights Reserved.</span>
          <a
            href="/privacy-policy"
            className="transition-colors hover:text-[#eb5e28]"
          >
            Privacy Policy
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
}