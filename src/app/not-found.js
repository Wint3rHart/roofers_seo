import { Eyebrow, PrimaryButton, SecondaryButton } from "@/components/ui/ui_components";
import { ArrowRight, Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found — Roofer SEO Co.",
};

export default function NotFound() {
  return (
    <main className="bg-[#fffcf2]">
      <section className="relative overflow-hidden">
        <div
          className="absolute -right-24 top-10 hidden h-[420px] w-[420px] rounded-full opacity-50 lg:block"
          style={{ background: "#ccc5b9" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <Eyebrow>404 — PAGE NOT FOUND</Eyebrow>
          <h1 className="font-heading text-7xl font-black italic leading-none tracking-tight sm:text-8xl">
            <span style={{ color: "#eb5e28" }}>404</span>
          </h1>
          <h2 className="mt-6 font-heading text-3xl font-black italic leading-tight tracking-tight sm:text-4xl">
            This page took a wrong turn on the way to the roof
          </h2>
          <p className="sub-heading mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-[#403d39]/90">
            The page you&apos;re looking for doesn&apos;t exist — or it was
            moved. Let&apos;s get you back somewhere useful instead of
            leaving you on a dead end.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton as="a" href="/">
              <Home className="h-4 w-4" /> Back to Homepage
            </PrimaryButton>
            <SecondaryButton as="a" href="/free-audit">
              Get a Free Audit <ArrowRight className="h-4 w-4" />
            </SecondaryButton>
          </div>

          <div className="mt-12 rounded-xl border border-[#ccc5b9]/70 bg-white/50 p-6 text-left">
            <p className="eyebrow mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#eb5e28]">
              Or pick a service
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Reputation Management", href: "/services/reputation-management" },
                { label: "Local SEO", href: "/services/local-seo" },
                { label: "Web Design", href: "/services/web-design" },
                { label: "AI Search Visibility", href: "/services/ai-search-visibility" },
                { label: "About Us", href: "/about" },
                { label: "Book a Call", href: "/book-a-call" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="sub-heading inline-flex items-center gap-1 text-sm font-bold transition-transform hover:translate-x-1"
                    style={{ color: "#eb5e28" }}
                  >
                    {l.label} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
