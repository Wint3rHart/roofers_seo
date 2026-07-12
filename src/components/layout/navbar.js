"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo, PrimaryButton } from "../ui/ui_components";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "SEO Services",
    children: [
      { label: "Reputation Management", href: "/services/reputation-management" },
      { label: "Local SEO", href: "/services/local-seo" },
      { label: "Web Design", href: "/services/web-design" },
      { label: "AI Search Visibility", href: "/services/ai-search-visibility" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-[#ccc5b9]/80 bg-[#fffcf2]/95 backdrop-blur"
          : "border-transparent bg-[#fffcf2]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-semibold text-[#403d39] transition-colors hover:text-[#eb5e28]">
                  {link.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                    <div className="w-72 overflow-hidden rounded-lg border border-[#ccc5b9] bg-[#fffcf2] shadow-xl">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block border-b border-[#ccc5b9]/40 px-5 py-3.5 text-sm font-medium text-[#403d39] transition-colors last:border-b-0 hover:bg-[#fffcf7] hover:text-[#eb5e28]"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#403d39] transition-colors hover:text-[#eb5e28]"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/free-audit"
            className="text-sm font-bold text-[#252422] transition-colors hover:text-[#eb5e28]"
          >
            Free Audit
          </a>
          <PrimaryButton as="a" href="/book-a-call">
            Book a Call <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-[#252422] lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#ccc5b9]/60 bg-[#fffcf2] lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-6 py-4">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#eb5e28]">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#403d39] hover:bg-[#fffcf7] hover:text-[#eb5e28]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-semibold text-[#403d39] hover:bg-[#fffcf7] hover:text-[#eb5e28]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <div className="flex flex-col gap-2 pt-3">
              <a
                href="/free-audit"
                className="rounded-md border-2 border-[#252422] px-6 py-3 text-center text-sm font-bold text-[#252422]"
              >
                Get a Free Audit
              </a>
              <a
                href="/book-a-call"
                className="rounded-md bg-[#eb5e28] px-6 py-3 text-center text-sm font-bold text-[#fffcf2]"
              >
                Book a Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
