/**
 * Single source of truth for site-wide SEO values: canonical domain,
 * business identity, and social profiles. Used by sitemap.js, robots.js,
 * and JSON-LD schema builders so the URL only ever needs to change here.
 */
export const SITE_URL = "https://www.rooferseoco.com";

export const SITE_NAME = "Roofer SEO Co.";

export const BUSINESS = {
  name: "Roofer SEO Co.",
  url: SITE_URL,
  logo: `${SITE_URL}/Logo_Footer.svg`,
  email: "omer@rooferseoco.com",
  description:
    "We help roofing contractors build a five-star reputation, rank higher in local search, and turn more homeowners into booked calls, with a system built only for roofers.",
  sameAs: [
    // Add live social profile URLs here once available (Facebook, Instagram, LinkedIn).
  ],
};
