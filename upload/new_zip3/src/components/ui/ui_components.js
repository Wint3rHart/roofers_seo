import { Home } from "lucide-react";


function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-2">
      <Home
        className="h-7 w-7"
        style={{ color: "#eb5e28" }}
        strokeWidth={2.5}
      />
      <span
        className={`font-black tracking-tight text-lg leading-none ${
          dark ? "text-[#fffcf2]" : "text-[#252422]"
        }`}
      >
        ROOFER
        <br />
        <span style={{ color: "#eb5e28" }}>SEO CO.</span>
      </span>
    </div>
  );
}

function PrimaryButton({ children, className = "" }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-[#eb5e28] px-6 py-3.5 text-sm font-bold text-[#fffcf2] transition-colors hover:bg-[#d94f1c] ${className}`}
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, className = "" }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#252422] px-6 py-3.5 text-sm font-bold text-[#252422] transition-colors hover:bg-[#252422] hover:text-[#fffcf2] ${className}`}
    >
      {children}
    </button>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="mb-3 text-xs font-bold tracking-[0.18em] text-[#eb5e28]">
      {children}
    </p>
  );
} 

export {PrimaryButton,SecondaryButton,Eyebrow,Logo}