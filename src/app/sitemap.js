import { SITE_URL } from "@/data/site_config";

// Required for output: 'export' — forces this route to render at build time,
// producing a static /out/sitemap.xml with no request-time logic.
export const dynamic = "force-static";

export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.6 },
    { path: "/free-audit", changeFrequency: "monthly", priority: 0.8 },
    { path: "/book-a-call", changeFrequency: "monthly", priority: 0.8 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  ];

  // Keep in sync with src/app/services/* route folders.
  const serviceRoutes = [
    "/services/reputation-management",
    "/services/seo-for-roofers",
    "/services/web-design",
    "/services/ai-search-visibility",
  ];

  const allPaths = [
    ...staticRoutes,
    ...serviceRoutes.map((path) => ({
      path,
      changeFrequency: "monthly",
      priority: 0.9,
    })),
  ];

  return allPaths.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
