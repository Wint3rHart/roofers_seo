import { Eyebrow, PrimaryButton } from "@/components/ui/ui_components";
import { ArrowRight, Mail, Clock } from "lucide-react";
import FinalCTA from "@/components/shared/final_cta";

export const metadata = {
  title: "Contact — Roofer SEO Co.",
  description:
    "Questions, partnership inquiries, or anything else — send us a message and we'll get back to you within 1–2 business days.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#fffcf2]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#ccc5b9]/60">
        <div
          className="absolute -right-24 top-10 hidden h-[320px] w-[320px] rounded-full opacity-50 lg:block"
          style={{ background: "#ccc5b9" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="text-center">
            <Eyebrow>CONTACT</Eyebrow>
            <h1 className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl">
              Get In Touch
            </h1>
            <p className="sub-heading mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-[#403d39]/90">
              Questions, partnership inquiries, or anything else — send us a
              message and we&apos;ll get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-[#ccc5b9]/70 bg-white/60 p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-black italic tracking-tight">
                Send us a message
              </h2>
              <form action="/thank-you?type=contact" method="post" className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name *"
                    className="rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email *"
                    className="rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
                  />
                </div>
                <div>
                  <select
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm text-[#403d39]/80 focus:border-[#eb5e28] focus:outline-none"
                  >
                    <option value="" disabled>
                      Select a subject *
                    </option>
                    <option value="general">General Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Message *"
                  className="w-full rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
                />
                <PrimaryButton as="button" type="submit">
                  Send Message
                </PrimaryButton>
              </form>
            </div>

            {/* Redirect for mis-landed audit-seekers */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-dashed border-[#eb5e28]/60 bg-[#fffcf7] p-5">
              <p className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90">
                <strong className="font-semibold text-[#252422]">
                  Looking for a free SEO audit instead?
                </strong>{" "}
                <a
                  href="/free-audit"
                  className="inline-flex items-center gap-1 font-bold transition-transform hover:translate-x-1"
                  style={{ color: "#eb5e28" }}
                >
                  Get one here <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-[#252422] p-6 text-[#fffcf2]">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" style={{ color: "#eb5e28" }} />
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
                  Response time
                </h3>
              </div>
              <p className="sub-heading mt-3 text-sm font-light leading-relaxed text-[#ccc5b9]">
                We typically respond within 1–2 business days.
              </p>
            </div>

            <div className="rounded-2xl border border-[#ccc5b9]/70 bg-white/60 p-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5" style={{ color: "#eb5e28" }} />
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
                  Prefer to talk?
                </h3>
              </div>
              <p className="sub-heading mt-3 text-sm font-light leading-relaxed text-[#403d39]/90">
                If you&apos;d rather have a real conversation about your
                roofing business, book a free strategy call.
              </p>
              <a
                href="/book-a-call"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold transition-transform hover:translate-x-1"
                style={{ color: "#eb5e28" }}
              >
                Book a Call <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        heading="Ready to see where you're losing leads?"
        subheading="Get a free, manually-reviewed audit delivered by email within 2 business days."
        primaryLabel="Get a Free Audit"
        primaryHref="/free-audit"
        secondaryLabel="See Services"
        secondaryHref="/services/reputation-management"
      />
    </main>
  );
}
