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
  { label: "Web Design", href: "/services/#" },
  { label: "AI Search Visibility", href: "/services/#" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/#" },
  { label: "Contact", href: "/#" },
  { label: "Book a Call", href: "/#" },
];

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.23 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.23 22 17.08 22 12.06Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.98 1.83-2.02 3.77-2.02 4.03 0 4.78 2.55 4.78 5.86V21h-4v-5.6c0-1.34-.02-3.05-1.86-3.05-1.86 0-2.15 1.44-2.15 2.95V21h-4V9Z" />
  </svg>
);

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
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
        <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          <motion.div  variants={fadeUp}>
            <Image
              src="/Logo_Footer.svg"
              alt="Roofer SEO Co."
              width={140}
              height={44}
             
              className="h-7 sm:h-8 lg:h-10 w-auto object-contain "
            />
            <p className="sub-heading mt-3 lg:mt-4 max-w-xs sm:ml-6 text-[10px] sm:text-xs lg:text-sm font-light leading-relaxed text-[#ccc5b9]">
              SEO services exclusively for roofing contractors. More leads,
              higher rankings, stronger businesses — month to month, no
              contracts.
            </p>
            <a
              href="mailto:omer@rooferseoco.com"
              className="mt-3 lg:mt-4 inline-block sm:ml-6 text-[10px] sm:text-xs lg:text-sm font-semibold text-[#ccc5b9] transition-colors hover:text-[#eb5e28]"
            >
              omer@rooferseoco.com
            </a>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="font-heading text-xs sm:text-sm font-bold text-[#fffcf2]">
              SEO Services
            </h4>
            <ul className="mt-3 lg:mt-4 space-y-1.5 lg:space-y-2 text-[10px] sm:text-xs lg:text-sm">
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
            <h4 className="font-heading text-xs sm:text-sm font-bold text-[#fffcf2]">
              Company
            </h4>
            <ul className="mt-3 lg:mt-4 space-y-1.5 lg:space-y-2 text-[10px] sm:text-xs lg:text-sm">
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
          className="mt-12 flex flex-col items-center gap-4 border-t border-[#403d39] pt-6 text-center text-xs text-[#ccc5b9]/80"
        >
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-[#ccc5b9] transition-colors hover:text-[#eb5e28]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center gap-1">
            <span>© 2026 Roofer SEO Co. All Rights Reserved.</span>
            <a
              href="/privacy-policy"
              className="transition-colors hover:text-[#eb5e28]"
            >
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}