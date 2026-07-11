/**
 * Service content registry — every word verbatim from the documentation
 * (herman_client.docx, Pages 2-5). Each entry drives one full service page
 * via the shared <ServicePageTemplate /> component.
 *
 * NOTE: `icon` is a string identifier (not a component reference) so this
 * data is safe to import from a Server Component and pass as a prop into
 * the Client Component template. The template resolves the icon.
 *
 * Cross-sell ladder (loop, per doc):
 *   Reputation Management → Local SEO → Web Design → AI Search Visibility → Reputation Management
 */
export const SERVICE_DATA = {
  "reputation-management": {
    slug: "reputation-management",
    eyebrow: "REPUTATION MANAGEMENT",
    icon: "star",
    h1: "Get More 5-Star Reviews, Without Chasing Customers for Them",
    subheading:
      "Automated review requests, faster responses, and a reputation that does the selling before you ever pick up the phone.",
    problems: [
      "A handful of old reviews makes a 20-year-old roofing company look brand new to anyone searching online.",
      "One bad review with no response sits at the top of the profile for months, unanswered.",
      "Asking happy customers for a review in person rarely results in them actually leaving one.",
      "Competitors with more reviews — even mediocre ones — consistently outrank better contractors with fewer reviews.",
    ],
    included: [
      "Automated review request flow sent right after a job completes, by text and email",
      "A 1–5 star routing system — happy customers go straight to a public review, unhappy ones go to a private feedback form first",
      "Ongoing monitoring and response support, so reviews don’t sit unanswered",
      "Monthly reporting on review count, average rating, and response time",
    ],
    howItWorks: [
      "Job completion triggers an automated request to the homeowner",
      "Customer is routed based on their rating — public review or private feedback",
      "Review count and rating climb steadily, monitored and reported monthly",
    ],
    whyItMatters:
      "Storm-damage and insurance-claim customers research contractors fast and under pressure — review count and recency are often the deciding factor before a homeowner ever calls.",
    nextStep: {
      copy: "Once reviews are climbing, the next move is making sure those reviews actually show up where homeowners are searching.",
      label: "See Local SEO",
      href: "/services/local-seo",
    },
    faqs: [
      {
        q: "Will this only show good reviews and hide the bad ones?",
        a: "No — and you shouldn’t. Hiding bad reviews isn’t possible on Google, and trying to game the system hurts you in the long run. What this does is route unhappy customers to a private feedback form first, so you have a chance to make it right before (or instead of) a public negative review. Genuinely happy customers go straight to a public review. The result is a more accurate, healthier-looking profile — not a fake one.",
      },
      {
        q: "How fast will my review count actually grow?",
        a: "Most roofing companies see a noticeable lift within the first 30–60 days as automated requests go out after each completed job. The pace depends on your job volume and how many of those customers are prompted at the right moment — which is exactly what the system is built to optimize.",
      },
      {
        q: "Do I need to do anything once it’s set up?",
        a: "Very little. The automated request flow runs on its own after each job. Your main involvement is flagging when a job is complete (or letting your existing workflow trigger it). We handle monitoring and response support on our side, and you get a monthly report showing the numbers that actually matter.",
      },
      {
        q: "Can this work alongside reviews I already have on Google?",
        a: "Yes — this layers on top of your existing profile, not instead of it. New reviews come in through the same Google review flow you already have; the system just makes sure more of your happy customers actually leave one, and that unhappy ones get routed to you privately first.",
      },
    ],
  },

  "local-seo": {
    slug: "local-seo",
    eyebrow: "LOCAL SEO",
    icon: "map-pin",
    h1: "Show Up in the Map Pack When Homeowners Search “Roofer Near Me”",
    subheading:
      "Google Business Profile optimization and local search strategy built around the neighborhoods you actually serve.",
    problems: [
      "Showing up on page 2 of Google means losing the job to whoever’s in the top 3 map pack results.",
      "An incomplete or outdated Google Business Profile gets outranked by competitors with less roofing experience but a better-optimized listing.",
      "Service areas and categories set up wrong from the start quietly cap how far a listing can rank.",
      "Storm season search spikes go to whoever ranks that week — not necessarily whoever does the best work.",
    ],
    included: [
      "Full Google Business Profile setup and optimization — categories, service areas, photos, posts",
      "Local citation building across directories that actually influence map pack ranking",
      "Location-specific content built around the cities and neighborhoods served",
      "Ongoing ranking tracking for the keywords that actually drive calls",
    ],
    howItWorks: [
      "Profile and listings audited and corrected",
      "Local content and citations built out to strengthen relevance",
      "Rankings tracked and adjusted month over month",
    ],
    whyItMatters:
      "Most roofing leads come from a homeowner who needs someone now — map pack position at that exact moment often decides who gets the call, regardless of how good the work is.",
    nextStep: {
      copy: "Ranking higher only helps if the site visitors land on actually converts them.",
      label: "See Web Design",
      href: "/services/web-design",
    },
    faqs: [
      {
        q: "How long until I see ranking movement?",
        a: "Local SEO is a compounding play — most roofing companies see early movement in 60–90 days, with the more meaningful map pack gains showing up in the 3–6 month range. How fast you move depends on how competitive your service area is and how much cleanup your profile needs at the start.",
      },
      {
        q: "Do I need a Google Business Profile already, or can you set one up?",
        a: "Either one. If you already have a profile, we audit and optimize what’s there. If you don’t, we handle the full setup — categories, service areas, photos, and the rest — so it launches structured correctly from day one instead of being patched together later.",
      },
      {
        q: "What if I serve multiple cities or counties?",
        a: "That’s common for roofing companies, and it’s exactly what location-specific content is built for. We structure your profile and content around each service area you actually work in, so you’re not capped to one city just because that’s where your address is.",
      },
      {
        q: "Does this help with storm-season search spikes specifically?",
        a: "Yes — storm searches are some of the highest-intent local queries a roofer can rank for. A well-optimized profile with the right categories and content is what puts you in front of homeowners searching in the window right after a storm hits your area.",
      },
    ],
  },

  "web-design": {
    slug: "web-design",
    eyebrow: "WEB DESIGN",
    icon: "globe",
    h1: "A Website Built to Turn Visitors Into Booked Calls",
    subheading:
      "Fast, mobile-friendly, and structured the way search engines need to rank roofing pages — not just a template with your logo on it.",
    problems: [
      "A slow-loading site loses mobile visitors before the page even finishes loading.",
      "A generic template with no roofing-specific structure makes it harder to rank for the searches that actually bring leads.",
      "No clear call-to-action on the page means visitors leave without calling or filling out a form.",
      "A site that isn’t built for SEO undoes the ranking work being done everywhere else.",
    ],
    included: [
      "Mobile-first design built for speed and conversion, not just appearance",
      "On-page SEO structure — titles, headers, schema markup, internal linking",
      "Clear calls-to-action throughout, built around the homeowner’s decision path",
      "Service pages structured to actually rank for what homeowners search",
    ],
    howItWorks: [
      "Site structure and pages planned around your actual services and service area",
      "Design and build, optimized for both visitors and search engines",
      "Launch, with ongoing technical SEO support afterward",
    ],
    whyItMatters:
      "A homeowner comparing 3 roofing companies after a storm will rule one out in seconds if the site looks dated or won’t load on their phone — the website is often the actual deciding factor, not the work itself.",
    nextStep: {
      copy: "A fast, well-structured site is the foundation everything else builds on — including showing up in AI search results.",
      label: "See AI Search Visibility",
      href: "/services/ai-search-visibility",
    },
    faqs: [
      {
        q: "Do I need to already have a website, or can this be built from scratch?",
        a: "Either way. If you already have a site, we assess whether it’s worth rebuilding on or starting fresh — most templated sites are easier to replace than to retrofit. If you have nothing, we plan, design, and build from the ground up around your services and service area.",
      },
      {
        q: "Will this work with my existing domain and branding?",
        a: "Yes. Your domain stays yours, and we work with whatever branding you already have — logos, colors, voice — or help tighten it up if it needs work. A new site doesn’t mean throwing away the brand equity you’ve already built.",
      },
      {
        q: "How long does a new site take to build?",
        a: "Most roofing sites take 4–8 weeks end-to-end, depending on how many service pages and service areas we’re building out and how quickly content decisions move. We’ll give you a real timeline on the first call based on what you actually need.",
      },
      {
        q: "Does this replace the need for ongoing SEO, or work alongside it?",
        a: "Alongside it. A well-built site is the foundation — it makes everything else work better — but it doesn’t replace ongoing reputation management, local SEO, or AI visibility work. Most roofing companies run the website in combination with at least one of the other services.",
      },
    ],
  },

  "ai-search-visibility": {
    slug: "ai-search-visibility",
    eyebrow: "AI SEARCH VISIBILITY",
    icon: "sparkles",
    h1: "Show Up When Homeowners Ask AI “Who’s the Best Roofer Near Me”",
    subheading:
      "Structuring your reviews, content, and business data so AI search tools actually recommend your business.",
    problems: [
      "Homeowners are starting to ask ChatGPT and Google AI Overviews for recommendations instead of just scrolling search results.",
      "A business with no structured data or clear online presence simply doesn’t get mentioned by AI tools, no matter how good the work is.",
      "Competitors who get ahead of this now will be the default answer before most roofing companies even know it’s happening.",
      "Traditional SEO alone doesn’t guarantee visibility in AI-generated answers — it’s a related but separate problem.",
    ],
    included: [
      "Structuring business information and content in the format AI tools pull answers from",
      "Ensuring reviews and reputation data are visible and consistent across the sources AI tools reference",
      "Ongoing monitoring as AI search tools and their ranking factors evolve",
      "Reporting on visibility within AI-generated answers, not just traditional search",
    ],
    howItWorks: [
      "Current AI visibility assessed across major tools",
      "Content and data structured to match how AI tools source answers",
      "Visibility monitored and adjusted as AI search evolves",
    ],
    whyItMatters:
      "This is still early — most roofing companies haven’t touched it yet, which means the businesses that show up consistently in AI answers now have a real head start before it becomes standard practice.",
    nextStep: {
      copy: "AI visibility works best once reviews, local SEO, and the website are already solid — if any of those are missing, that’s the right place to start first.",
      label: "See Reputation Management",
      href: "/services/reputation-management",
    },
    faqs: [
      {
        q: "What exactly counts as “AI search,” and how is it different from Google?",
        a: "AI search covers tools like ChatGPT, Google AI Overviews, Perplexity, and similar — where instead of getting a list of links, the user gets a generated answer that names specific businesses. The difference from traditional Google search is that the “result” is a synthesized recommendation, not a ranked page — which means being mentioned at all is the new ranking.",
      },
      {
        q: "How do you actually measure visibility in AI answers?",
        a: "We run a structured set of roofing-related prompts across the major AI tools on a recurring basis and track whether (and how) your business shows up in the generated answers. The reporting shows what’s being said, where, and how that changes month over month — not just a vague “you’re mentioned somewhere.”",
      },
      {
        q: "Is this worth doing now, or too early?",
        a: "Now. Most roofing companies haven’t started yet, which is exactly why the ones that do show up consistently in AI answers right now get a real head start before it becomes standard practice. Once every roofer in your market is doing it, the advantage disappears.",
      },
      {
        q: "Does this replace traditional SEO, or work alongside it?",
        a: "Alongside it. AI visibility builds on top of a solid reputation, local SEO presence, and well-structured website — it’s the layer that makes all of that work show up inside AI-generated answers. Doing AI visibility without the foundation underneath rarely sticks.",
      },
    ],
  },
};

export const SERVICE_ORDER = [
  "reputation-management",
  "local-seo",
  "web-design",
  "ai-search-visibility",
];

export function getService(slug) {
  return SERVICE_DATA[slug];
}
