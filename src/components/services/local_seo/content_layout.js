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
 */
export default function LocalSeoContentLayout() {
  return (
    <section className="bg-[#fffcf2]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* LEFT SIDEBAR */}
          <div className="order-2 space-y-6 lg:order-1 lg:col-span-3">
            <div className="lg:sticky lg:top-24 lg:space-y-6">
              <AuthorCard />
              <div className="mt-6 lg:mt-6">
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