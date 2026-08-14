import { SITE_URL, BUSINESS } from "@/data/site_config";

/**
 * Site-wide Organization schema — rendered once in the root layout.
 * We use Organization (not LocalBusiness) since Roofer SEO Co. is a
 * service-area agency with no public physical storefront/NAP.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    description: BUSINESS.description,
    email: BUSINESS.email,
    ...(BUSINESS.sameAs.length ? { sameAs: BUSINESS.sameAs } : {}),
  };
}

/**
 * WebSite schema — enables sitelinks search box eligibility and ties
 * the site to the Organization entity above.
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/**
 * Service schema for a single service page. Pass the SERVICE_DATA entry.
 */
export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}/#service`,
    name: service.h1,
    description: service.subheading,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "US",
    serviceType: service.eyebrow,
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

/**
 * FAQPage schema built from a plain array of { q, a } items — matches the
 * shape already used in src/data/services.js and home_page/faq.js.
 */
export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

/**
 * BreadcrumbList schema for a service page (Home > Services > This service).
 */
export function breadcrumbSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: service.h1,
        item: `${SITE_URL}/services/${service.slug}`,
      },
    ],
  };
}
