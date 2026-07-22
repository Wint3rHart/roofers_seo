"use client";

import AuthorCard from "../local_seo/author_card";
import TableOfContents from "../local_seo/table_of_contents";
import CtaCard from "./cta_card";
import LeadForm from "./lead_form";

/**
 * Reusable service-page body structure — same 3-column layout used on the
 * Local SEO page (author card + table of contents | main content | CTA
 * card + lead form), generalized so all 4 service pages can share it.
 * Only `children` (the content body) and the TOC/CTA/form copy differ
 * per page; local_seo keeps using its own local_seo/content_layout.js
 * untouched.
 *
 * Mobile-only behavior mirrors local_seo: TOC is pulled out and rendered
 * right after the hero, collapsible there; desktop keeps it in the left
 * sidebar, always expanded.
 */
export default function ServiceContentLayout({
  tocItems,
  ctaHeadingLine1 = "Consultations Are",
  ctaHeadingLine2 = "Always Free",
  formTitle,
  formSubtitle,
  formAction,
  submitLabel = "Get My Free Audit",
  children,
}) {
  return (
    <section className="bg-[#fffcf2]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* MOBILE-ONLY: Table of Contents, right after hero */}
        <div className="mb-6 lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* LEFT SIDEBAR */}
          <div className="order-2 space-y-6 lg:order-1 lg:col-span-3">
            <div className="lg:sticky lg:top-24 lg:space-y-6">
              <AuthorCard />
              {/* Desktop-only TOC (hidden on mobile, shown above instead) */}
              <div className="mt-6 hidden lg:mt-6 lg:block">
                <TableOfContents items={tocItems} />
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="order-1 lg:order-2 lg:col-span-6">{children}</div>

          {/* RIGHT SIDEBAR */}
          <div className="order-3 space-y-6 lg:col-span-3">
            <div className="lg:sticky lg:top-24 lg:space-y-6">
              <CtaCard headingLine1={ctaHeadingLine1} headingLine2={ctaHeadingLine2} />
              <div className="mt-6 lg:mt-6">
                <LeadForm
                  title={formTitle}
                  subtitle={formSubtitle}
                  action={formAction}
                  submitLabel={submitLabel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
