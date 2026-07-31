"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "../ui/ui_components";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

// Order intentionally shuffled from the source reference list.
const FAQS = [
  {
    q: "Do Google reviews actually help my rankings and can you help me get more?",
    a: "They do — Google has confirmed reviews factor into local rankings. A roofer sitting on 150 five-star reviews will beat a competitor with 12, even if that competitor's site is more technically polished. We put automated text follow-ups in place after every job, hand you a one-tap review link, and give you reply templates so nothing sits unanswered.",
  },
  {
    q: "Do I own everything you build, including my website, content, and rankings, even if I walk away?",
    a: "Every bit of it — the site, the domain, the content, your GBP, all your data. If you ever decide to leave, we hand over every login and file. We don't build on infrastructure we control. Too many roofers have gotten stuck with an agency holding their site hostage, and that's not a position we'll put you in.",
  },
  {
    q: "How much of my time does your service take?",
    a: "Barely any. Plan on about an hour up front so we can learn your business, services, and target areas. From there we run with it. Reading your monthly report takes five minutes. We built this for roofers on a jobsite by 7 AM, not roofers glued to a laptop.",
  },
  {
    q: "Can SEO help me expand into nearby cities without a second location?",
    a: "Absolutely — you don't need a physical office in a city to rank there. We put together city-specific service pages with local keywords and content, then configure your GBP service area correctly. Roofers we've worked with reach 30 to 100 miles beyond their home base using the crew they already have.",
  },
  {
    q: "SEO or Google Ads, or both? Where should a roofing company start?",
    a: "Most roofers benefit from running both. Ads generate calls within days but go silent the moment you stop paying for them. SEO needs 3 to 6 months to build momentum but keeps working after that. A common approach is running Ads now while SEO ramps up, then dialing back ad spend as organic leads grow, which lowers your overall cost per lead.",
  },
  {
    q: "What if I'm not happy, can I cancel?",
    a: "You can — everything is month-to-month, no long-term contract required. If results aren't there, you're free to go. We'd rather earn your business every month through leads than trap you in a 12-month agreement the way a lot of agencies do.",
  },
  {
    q: "I've been roofing for 20 years. Why is a newer company outranking me?",
    a: "Google can't see your track record unless your website communicates it. A two-year-old roofing company with a well-structured site and consistent reviews can easily outrank a 20-year veteran whose site has been left untouched. Your experience is genuinely valuable — it just needs to be presented on the site the right way for it to count.",
  },
  {
    q: "What does a roofing SEO company actually do every month?",
    a: "It comes down to six ongoing tasks: refreshing your website content, posting to your Google Business Profile, building out city and service pages, earning backlinks from legitimate sites, resolving technical problems like slow load times or broken links, and tracking every call and form submission. Each month you get a report showing exactly what was done and what moved.",
  },
  {
    q: "Do you work with small roofing companies or only large ones?",
    a: "Both ends of the spectrum. We've partnered with single-truck operations as well as companies pulling in $15M+ a year. Smaller roofers typically start with two or three target cities and their highest-value services, while larger companies expand into more cities, more keywords, and commercial work. The plan is sized to fit your business.",
  },
  {
    q: "Do you handle storm and insurance restoration SEO differently from retail roofing?",
    a: "We do, because the searches themselves are different. Someone with hail damage is typing 'hail damage roof inspection' or 'insurance claim roofer near me,' not 'new roof cost.' We create dedicated storm and insurance pages built around what insurance customers are actually searching for — same website, different pages, different keyword targets.",
  },
  {
    q: "Is it too late to start SEO, or can I still catch up to competitors?",
    a: "It's rarely too late. We've seen roofers move from nowhere on Google to the Map Pack in 4 to 6 months, overtaking competitors who had years of a head start. Competitors get complacent, switch providers, or stop investing altogether — every month you're putting in the work while they aren't is ground gained.",
  },
  {
    q: "Can SEO really work in a competitive roofing market?",
    a: "Competitive markets are often where SEO delivers the most. If there are 30 roofers in your city, chances are only 3 or 4 are taking SEO seriously — those are your real competition. And most of them have gaps: thin content, a neglected GBP, no real link-building effort. That gap is your opportunity.",
  },
  {
    q: "How long before SEO starts bringing in real calls?",
    a: "Most clients start seeing organic calls within 60 to 90 days. The first month is spent fixing the site and getting your GBP in shape. By month two, rankings begin to shift. Month three is typically when the phone starts ringing more consistently, and month six tends to outperform month three by a wide margin since SEO compounds over time.",
  },
  {
    q: "Do you work with other roofers in my area, or is my market exclusive?",
    a: "Your service area belongs to you alone — we work with one roofing company per market, period. We're not going to try to rank you #1 while doing the same for a competitor down the street. If another roofer in your territory reaches out, we turn them away, and your boundaries get put in writing during onboarding.",
  },
  {
    q: "How many leads will I get from SEO?",
    a: "There's no exact number we can promise, but here's the general pattern: most roofing clients land 15 to 40 organic leads a month once the campaign matures, usually around month 4 to 6. Smaller markets tend toward the lower end, larger markets toward the higher end, and the real number depends on your competition, budget, and how aggressively we push. Every one of those leads is exclusively yours — not split with four other roofers the way HomeAdvisor works.",
  },
  {
    q: "Will SEO keep bringing leads through the slow season?",
    a: "It does. Google activity doesn't pause in December — homeowners are still searching for leaks, filing insurance claims, and planning ahead for spring. If competitors go quiet during the off-season and your presence stays strong, you pick up the calls they'd normally be getting. Clients we work with typically see a much smaller winter dip than before.",
  },
  {
    q: "What matters more for roofing leads, the Map Pack or website rankings?",
    a: "They serve different purposes. The Map Pack drives immediate phone calls — someone searches 'roof repair near me,' taps the map listing, and calls right then. Website rankings capture homeowners who are still researching and will call later. Ideally you want both: Map Pack for today's calls, organic rankings for next month's.",
  },
  {
    q: "Can you help me rank for commercial roofing keywords too?",
    a: "Yes — commercial is a different game than residential. Search volume is lower, but job values and decision timelines are much higher. We build out commercial-specific pages (TPO, EPDM, metal, flat roof repair) targeting property managers and facility decision-makers. Most roofers focus entirely on residential SEO and skip commercial, which is often where the easiest wins are found.",
  },
  {
    q: "With AI and ChatGPT, does roofing SEO still matter?",
    a: "It matters even more now. Tools like ChatGPT, Google AI Overviews, and Perplexity all pull their answers from websites. A weak site gets skipped by AI entirely; a strong one shows up in both traditional search and AI-generated answers. The same signals — solid content, reviews, authority — power both.",
  },
  {
    q: "What makes you different from roofing SEO agencies that overpromise and underdeliver?",
    a: "We work exclusively with roofing companies — no dentists, no lawyers, no plumbers mixed in. That means we already understand your keywords, your busy season, and exactly what homeowners search for when their roof starts leaking. Other agencies spend your budget figuring that out as they go. We skip that step entirely.",
  },
  {
    q: "How much does roofing SEO cost and what am I paying for at each level?",
    a: "Pricing generally falls between $1,500 and $5,000 a month depending on your market and goals. The lower tier covers the essentials — technical fixes, GBP management, foundational content. The mid tier adds more content, additional city pages, and link building. The top tier is built for full market domination across multiple cities.",
  },
  {
    q: "Do you guarantee rankings or leads?",
    a: "No — and any company that tells you otherwise isn't being straight with you, since nobody controls Google's algorithm. What we do guarantee is the work itself: the audits, the content, the GBP management, the backlinks, and the reporting. We're happy to show you results from other roofing clients so you have a realistic picture, but we won't promise a specific ranking or lead count.",
  },
  {
    q: "Can I start small and scale up as I see results?",
    a: "Yes — our plans come in tiers. A smaller roofing company might begin with the fundamentals: site fixes, GBP optimization, and going after top keywords first. Once leads start showing up and the ROI is clear, you can grow into additional cities, more keywords, and a more aggressive strategy.",
  },
  {
    q: "If I stop SEO, do I lose my rankings?",
    a: "Not immediately. Ads shut off the day you stop paying, but SEO is different — the content, links, and authority you've built stay in place. What happens gradually is competitors who keep investing start closing the gap, and Google tends to favor freshly updated sites. Rankings typically hold steady for months before slowly declining, not overnight.",
  },
  {
    q: "Do I need a new roofing website, or can you work with what I have?",
    a: "It depends on your current site. Some just need stronger content, better speed, and improved structure. Others are built on platforms that can't be fixed and need to be rebuilt. We'll evaluate yours and give you an honest answer — if it's workable, we'll work with it; if not, we'll explain exactly why.",
  },
  {
    q: "Who writes the content, is it AI or a real person who knows roofing?",
    a: "It's a combination, in that order. AI helps us move fast on a first draft, speeding up research and structure. From there, our writers — who actually understand roofing — rewrite it by hand, adding original research, real examples, and details AI simply can't produce on its own. What goes live is human-written, not raw AI output.",
  },
  {
    q: "What does your reporting look like, and will I actually understand it?",
    a: "It's one page with three numbers: calls, Map Pack position, and rankings for your top keywords. No 20-page PDF, no bounce-rate jargon to decode. If something drops, we'll explain why and what we're doing about it. The whole thing takes about five minutes to read.",
  },
  {
    q: "I get leads from HomeAdvisor and Angi. Why would SEO be better?",
    a: "Those platforms hand the same lead to four or five other roofers at once, so you're competing on price before the conversation even starts. SEO leads come to you exclusively — the homeowner found your site, checked out your reviews, and called your number directly. Those leads tend to close more often and at better job sizes.",
  },
  {
    q: "Do I still need social media if I'm doing SEO?",
    a: "It helps, but it isn't required. Social media doesn't directly move your Google rankings, but it builds trust — homeowners will often check your Facebook or Instagram before they call. A handful of before-and-after posts each month is plenty; you don't need to be active everywhere. SEO drives the leads in, social helps close them.",
  },
  {
    q: "How do you handle out-of-area storm chasers that flood my market after a hailstorm?",
    a: "We make sure your site is what homeowners find first after a storm hits. Storm chasers typically don't have a local website, an established GBP, or local reviews — they're relying on door-knocking alone. If your site ranks for searches like 'hail damage roofer [city]' and your GBP is full of genuine local reviews, homeowners choose you over an unfamiliar out-of-state crew.",
  },
  {
    q: "What's the difference between local SEO and regular SEO for a roofing company?",
    a: "Local SEO is what gets you showing up for searches like 'roofers near me' or 'roof repair [city]' — that's the Map Pack and your city-specific pages. Regular SEO covers broader content like blog posts and general roofing topics at a national level. For a roofing company, local SEO is responsible for around 90% of leads, while regular SEO plays a supporting role.",
  },
];

const PER_PAGE = 6;

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#ccc5b9]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="sub-heading font-semibold text-[#252422]">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#eb5e28] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="sub-heading pb-5 text-center text-sm font-light leading-relaxed text-[#403d39]/80">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [page, setPage] = useState(1);
  const reduce = useReducedMotion();

  const totalPages = Math.ceil(FAQS.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visibleFaqs = FAQS.slice(start, start + PER_PAGE);

  const goToPage = (p) => {
    setPage(p);
    setOpenFaq(null);
  };

  return (
    <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] text-[#252422]">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-6">
        <SectionHeading title="Frequently Asked Questions" />

        <motion.div
          key={page}
          className="mt-10 text-left"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={reduce ? false : viewportOnce}
        >
          {visibleFaqs.map((item, i) => {
            const globalIndex = start + i;
            return (
              <motion.div key={globalIndex} variants={fadeUp}>
                <FAQItem
                  question={item.q}
                  answer={item.a}
                  isOpen={openFaq === globalIndex}
                  onToggle={() =>
                    setOpenFaq(openFaq === globalIndex ? null : globalIndex)
                  }
                />
              </motion.div>
            );
          })}
        </motion.div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => goToPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="rounded-full border border-[#ccc5b9] px-4 py-2 text-sm font-medium text-[#252422] transition-colors disabled:cursor-not-allowed disabled:opacity-40 hover:not-disabled:border-[#eb5e28] hover:not-disabled:text-[#eb5e28]"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`h-9 w-9 rounded-full text-sm font-medium transition-colors ${
                  p === page
                    ? "bg-[#eb5e28] text-white"
                    : "border border-[#ccc5b9] text-[#252422] hover:border-[#eb5e28] hover:text-[#eb5e28]"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => goToPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="rounded-full border border-[#ccc5b9] px-4 py-2 text-sm font-medium text-[#252422] transition-colors disabled:cursor-not-allowed disabled:opacity-40 hover:not-disabled:border-[#eb5e28] hover:not-disabled:text-[#eb5e28]"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};