import { Logo } from "./logo";
import SectionHeading, { OrangeBar } from "./section_heading";

export { Logo, SectionHeading, OrangeBar };

function PrimaryButton({ children, className = "", as = "button", href, ...props }) {
  const Comp = as === "a" ? "a" : "button";
  return (
    <Comp
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-[#eb5e28] px-6 py-3.5 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#d94f1c] ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

function SecondaryButton({ children, className = "", as = "button", href, ...props }) {
  const Comp = as === "a" ? "a" : "button";
  return (
    <Comp
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#252422] px-6 py-3.5 text-sm font-bold text-[#252422] transition-colors hover:bg-[#252422] hover:text-[#fffcf2] ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

function Eyebrow({ children, className = "" }) {
  return (
    <p className={`eyebrow mb-3 text-xs font-bold tracking-[0.18em] text-[#eb5e28] uppercase ${className}`}>
      {children}
    </p>
  );
}

export { PrimaryButton, SecondaryButton, Eyebrow };
