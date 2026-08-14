import { SITE_URL } from "@/data/site_config";

// Required for output: 'export' — forces this route to render at build time.
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Thank-you is a post-conversion confirmation page — no reason for it to rank.
        disallow: ["/thank-you"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
