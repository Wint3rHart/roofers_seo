"use client";

import AuthorCard from "./author_card";
import TableOfContents from "./table_of_contents";
import CtaCard from "./cta_card";
import LeadForm from "./lead_form";
import ContentBody from "./content_body";

/**
 * Local SEO page body — 3-column layout:
 *   left  = author card + table of contents (sticky)
 *   center = main article content
 *   right = CTA card + lead form (sticky)
 *
 * Mobile-only change: Table of Contents is pulled out and rendered
 * right after the hero section (before everything else), and is
 * collapsible there. Desktop layout is untouched — TOC stays in the
 * left sidebar, always fully expanded.
 */
export default function LocalSeoContentLayout() {
  return (
    <section className="bg-[#fffcf2]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* MOBILE-ONLY: Author card, then Table of Contents, right after hero */}
        <div className="mb-6 space-y-6 lg:hidden">
          <AuthorCard />
          <TableOfContents />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* LEFT SIDEBAR (desktop only — mobile version rendered above) */}
          <div className="order-2 space-y-6 lg:order-1 lg:col-span-3">
            <div className="lg:sticky lg:top-24 lg:space-y-6">
              <div className="hidden lg:block">
                <AuthorCard />
              </div>
              {/* Desktop-only TOC (hidden on mobile, shown above instead) */}
              <div className="mt-6 hidden lg:mt-6 lg:block">
                <TableOfContents />
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <ContentBody />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="order-3 space-y-6 lg:col-span-3">
            <div className="lg:sticky lg:top-24 lg:space-y-6">
              <CtaCard />
              <div className="mt-6 lg:mt-6">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}