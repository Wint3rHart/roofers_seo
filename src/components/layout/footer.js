import { Home, ArrowRight } from "lucide-react";
import { Logo } from "../ui/ui_components";

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

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#252422]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#ccc5b9]">
              SEO services exclusively for roofing contractors. More leads,
              higher rankings, stronger businesses — month to month, no contracts.
            </p>
          </div>

          <div>
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
          </div>

          <div>
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
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-[#fffcf2]">
              Get a Free SEO Audit
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-[#ccc5b9]">
              Find out what&apos;s holding your website back and how we can
              help.
            </p>
            <a
              href="/free-audit"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#eb5e28] px-5 py-2.5 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#d94f1c]"
            >
              Get My Free Audit <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#403d39] pt-6 text-xs text-[#ccc5b9] sm:flex-row">
          <span>© 2026 Roofer SEO Co. All Rights Reserved.</span>
          <div className="flex gap-6">
            {LEGAL_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-[#eb5e28]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
