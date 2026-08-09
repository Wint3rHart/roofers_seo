"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo, PrimaryButton, SecondaryButton } from "../ui/ui_components";
import Link from "next/link";

const NAV_LINKS = [
  {
    label: " Services",
    children: [
      { label: "Reputation Management", href: "/services/reputation-management" },
      { label: "AI Search Visibility", href: "/services/#" },
      { label: "SEO For Roofers", href: "/services/seo-for-roofers" },
      { label: "Web Design", href: "/services/#" },
      
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/#" },
  { label: "Blog", href: "/#" },
  
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { threshold: .5 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 bg-transparent shadow-md transition-colors ${
        scrolled ? "backdrop-blur" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 lg:px-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-7 pr-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                    nearFooter ? "text-white hover:text-[#eb5e28]" : "text-[#403d39] hover:text-[#eb5e28]"
                  }`}>
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
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block border-b border-[#ccc5b9]/40 px-5 py-3.5 text-sm font-medium text-[#403d39] transition-colors last:border-b-0 hover:bg-[#fffcf7] hover:text-[#eb5e28]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                    nearFooter ? "text-white hover:text-[#eb5e28]" : "text-[#403d39] hover:text-[#eb5e28]"
                  }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SecondaryButton as='a'
            href="/free-audit"
            className={`text-sm font-bold transition-colors ${
                nearFooter
                  ? "text-white border-white hover:text-[#eb5e28] hover:bg-white/10"
                  : "text-[#252422] hover:text-[#eb5e28]"
              }`}
          >
            Free Audit
          </SecondaryButton>
          <PrimaryButton as="a" href="/book-a-call">
            Book a Call <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
        </div>

        {/* Mobile toggle */}
        <button
          className={`inline-flex items-center justify-center rounded-md p-2 lg:hidden transition-colors ${
              nearFooter ? "text-white" : "text-[#252422]"
            }`}
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
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#403d39] hover:bg-[#fffcf7] hover:text-[#eb5e28]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-semibold text-[#403d39] hover:bg-[#fffcf7] hover:text-[#eb5e28]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="flex flex-col gap-2 pt-3">
              <Link
                href="/free-audit"
                className="rounded-md border-2 border-[#252422] px-6 py-3 text-center text-sm font-bold text-[#252422]"
              >
                Get a Free Audit
              </Link>
              <Link
                href="/book-a-call"
                className="rounded-md bg-[#eb5e28] px-6 py-3 text-center text-sm font-bold text-[#fffcf2]"
              >
                Book a Call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </motion.header>
  );
}