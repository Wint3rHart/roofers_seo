import { Eyebrow, PrimaryButton, SecondaryButton } from "../ui/ui_components";
import { ArrowRight } from "lucide-react";

/**
 * Shared inner-page hero header.
 * Used on About, Contact, Free Audit, Book a Call, Blog, Privacy, Thank You.
 */
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  align = "center",
}) {
  const isLeft = align === "left";
  return (
    <section className="relative overflow-hidden border-b border-[#ccc5b9]/60 bg-[#fffcf2]">
      <div
        className="absolute -right-24 -top-10 hidden h-[320px] w-[320px] rounded-full opacity-50 lg:block"
        style={{ background: "#ccc5b9" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
        <div className={isLeft ? "text-left" : "text-center"}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="font-heading text-4xl font-black italic leading-[1.1] tracking-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p
              className={`sub-heading mt-5 max-w-2xl text-base font-light leading-relaxed text-[#403d39]/90 ${
                isLeft ? "" : "mx-auto"
              }`}
            >
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div
              className={`mt-8 flex flex-wrap gap-4 ${
                isLeft ? "" : "justify-center"
              }`}
            >
              {primaryCta && (
                <PrimaryButton as="a" href={primaryHref}>
                  {primaryCta} <ArrowRight className="h-4 w-4" />
                </PrimaryButton>
              )}
              {secondaryCta && (
                <SecondaryButton as="a" href={secondaryHref}>
                  {secondaryCta}
                </SecondaryButton>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
