"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/ui_components";
import FinalCTA from "@/components/shared/final_cta";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "@/components/ui/motion";

const SECTIONS = [
  {
    id: "overview",
    title: "1. Overview",
    body: [
      "Roofer SEO Co. (“we,” “us,” or “our”) operates roofersseoco.com (the “Site”). This Privacy Policy explains what personal information we collect through the Site, why we collect it, how we use it, and the choices you have.",
      "By submitting information through any form on the Site — the homepage contact form, the Free Audit form, or the Contact form — you agree to the practices described in this Policy.",
      "This Policy applies only to information collected through the Site. It does not apply to information we may collect through other channels (such as phone calls, emails, or third-party scheduling tools like Calendly), which are governed by their own terms and the agreements we have with you directly.",
    ],
  },
  {
    id: "what-we-collect",
    title: "2. What We Collect",
    body: [
      "We collect only the information you voluntarily provide through our forms. The specific fields vary by form:",
      "Homepage contact form: Name, Business Name, Website URL, City, and Email or Phone.",
      "Free Audit form: Name, Business Name, Website URL, City, Email, and (optionally) Phone.",
      "Contact form: Name, Email, Subject (General Question, Partnership, or Other), and Message.",
      "If you book a call through our embedded Calendly scheduler, Calendly collects its own information (such as name and email) directly from you under Calendly’s privacy policy. We do not control Calendly’s data practices and encourage you to review their policy separately.",
      "We do not use advertising trackers, third-party analytics that profile visitors, or hidden fingerprinting. The Site does not collect sensitive personal data such as credit card numbers, Social Security numbers, or health information.",
    ],
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    body: [
      "We use the information you submit to respond to your inquiry and, if you request one, to prepare and deliver a free roofing SEO audit by email.",
      "Specifically: to identify you and your business when we reply; to review the website, Google Business Profile, map pack ranking, and review count you tell us about; to send you the audit or other information you asked for; to keep a record of our communications in case we follow up later; and to evaluate whether our services are a good fit for your business.",
      "We do not sell your personal information to anyone. We do not use your information to send unsolicited marketing emails. If you ask us to stop contacting you, we will.",
    ],
  },
  {
    id: "legal-basis",
    title: "4. Legal Basis (Where Applicable)",
    body: [
      "If you are located in a jurisdiction with privacy laws that require a legal basis for processing (such as the EU GDPR, UK GDPR, or similar), we process the information you submit on the following bases:",
      "Consent: you voluntarily provide your information through our forms, which constitutes consent to process it for the purposes described in this Policy.",
      "Contractual necessity: where we enter into an engagement with you, we process your information to fulfill our obligations under that engagement.",
      "Legitimate interests: we may process certain information to respond to inquiries, maintain records of communications, and operate our business, where those interests are not overridden by your rights.",
      "You may withdraw consent at any time by contacting us using the details in Section 8.",
    ],
  },
  {
    id: "sharing",
    title: "5. How We Share Information",
    body: [
      "We do not sell, rent, or trade your personal information. We share it only in the following limited circumstances:",
      "With service providers we use to operate the Site and deliver our services (such as email delivery, website hosting, or form processing tools), under contracts that require them to protect your information and use it only for the purposes we specify.",
      "With Calendly, if you book a call through our embedded scheduler — in which case the information you enter into Calendly is processed under Calendly’s privacy policy, not this one.",
      "When required by law, court order, or government regulation; to protect our legal rights; to investigate or prevent fraud; or to protect the safety of any person.",
      "In connection with a sale, merger, or transfer of all or part of our business, subject to the buyer continuing to honor this Policy.",
    ],
  },
  {
    id: "retention",
    title: "6. How Long We Keep Your Information",
    body: [
      "We keep the information you submit through our forms for as long as reasonably needed to respond to your inquiry, deliver any requested audit, and maintain a record of our communications.",
      "If you become a client, we keep your information for the duration of our engagement and for a reasonable period afterward to comply with legal, tax, and accounting obligations.",
      "If you do not become a client, we typically delete or de-identify your submitted information within 12 months of our last communication, unless we are required to keep it longer for legal reasons.",
      "You may ask us to delete your information earlier by contacting us using the details in Section 8.",
    ],
  },
  {
    id: "security",
    title: "7. Data Security",
    body: [
      "We take reasonable technical and organizational measures to protect the information you submit against unauthorized access, loss, misuse, or alteration.",
      "These measures include using reputable service providers, restricting access to information on a need-to-know basis, and transmitting information over encrypted connections where applicable.",
      "No method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we work to protect your information using commonly accepted industry practices.",
      "If we become aware of a data breach affecting your personal information, we will notify you and any applicable regulators as required by law.",
    ],
  },
  {
    id: "contact",
    title: "8. Your Rights and How to Contact Us",
    body: [
      "Depending on where you live, you may have the right to access the personal information we hold about you, request that we correct or delete it, object to or restrict our processing of it, or request a copy of it in a portable format.",
      "To exercise any of these rights, to ask us to stop contacting you, or to ask questions about this Policy, contact us through the Contact page on this Site or by email at the address listed there.",
      "We will respond to your request within a reasonable period — typically within 30 days — and may ask for additional information to verify your identity before acting on it.",
      "If you are not satisfied with our response, you have the right to lodge a complaint with the data protection authority in your jurisdiction.",
    ],
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will update the “last updated” date at the top of this page.",
      "If we make material changes — changes that affect how we collect, use, or share your information — we will post a prominent notice on the Site before the changes take effect.",
      "We encourage you to review this Policy periodically to stay informed about how we handle your information.",
    ],
  },
  {
    id: "review",
    title: "10. Legal Review",
    body: [
      "This is a general-purpose privacy policy drafted to cover the form data we collect on the Site (Name, Email, Phone, Website URL, and related business information across the Free Audit, Contact, and homepage contact forms).",
      "Because form data collection and privacy laws vary by jurisdiction, we recommend that this Policy be reviewed by a qualified legal professional before publication, and updated whenever our data practices change.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  const reduce = useReducedMotion();

  return (
    <main className="bg-[#fffcf2]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#ccc5b9]/60">
        <motion.div
          aria-hidden
          className="absolute -right-24 top-10 hidden h-[320px] w-[320px] rounded-full opacity-50 lg:block"
          style={{ background: "#ccc5b9" }}
          animate={
            reduce
              ? undefined
              : { x: [0, -24, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center lg:px-10 lg:py-20">
          <motion.div
            variants={staggerContainer(0.14)}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>LEGAL</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="sub-heading mt-4 text-sm font-light text-[#403d39]/80"
            >
              Last updated: July 2026
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7]">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <motion.div
            className="space-y-10"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
          >
            {SECTIONS.map((s) => (
              <motion.div key={s.id} id={s.id} variants={fadeUp} className="text-center">
                <h2 className="font-heading text-xl font-bold italic tracking-tight sm:text-2xl">
                  {s.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((para, i) => (
                    <p
                      key={i}
                      className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/90"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={reduce ? false : viewportOnce}
            className="mt-12 rounded-xl border border-dashed border-[#eb5e28]/60 bg-[#fffcf7] p-5 text-center"
          >
            <p className="sub-heading text-sm font-light leading-relaxed text-[#403d39]/85">
              <strong className="font-semibold text-[#252422]">
                Questions about this policy?
              </strong>{" "}
              Reach us through the{" "}
              <a
                href="/contact"
                className="font-bold transition-transform hover:translate-x-1"
                style={{ color: "#eb5e28" }}
              >
                Contact page
              </a>{" "}
              and we’ll get back to you within 1–2 business days.
            </p>
          </motion.div>
        </div>
      </section>

      <FinalCTA
        heading="Ready to get started?"
        subheading="Get a free, manually-reviewed audit delivered by email within 2 business days."
        primaryLabel="Get a Free Audit"
        primaryHref="/free-audit"
        secondaryLabel="See Services"
        secondaryHref="/services/reputation-management"
      />
    </main>
  );
}
