/**
 * Roofer SEO Co. logo — matches the brand mark in logo_roofer.jpeg.
 *
 * Visual spec (per logo image, confirmed by re-analysis):
 *
 *   ICON (top):
 *     - Main roof (left): closed filled triangle, with a chimney at its peak.
 *     - Sub roof (right, behind): smaller open V chevron (no base line),
 *       overlapping the main roof.
 *     - Both roofs touch/overlap (no gap).
 *     - Roughly 2:1 width-to-height ratio.
 *     - All orange (#eb5e28).
 *
 *   TEXT (below icon, stacked):
 *     - "ROOFER" — bold (700), Spicy Paprika (#eb5e28).
 *     - "SEO CO." — regular (400), Carbon Black (#252422) on light bg,
 *       Floral White (#fffcf2) on dark bg.
 *     - SEO CO. slightly smaller than ROOFER.
 *     - No italic. No tagline.
 *
 * The `dark` prop flips only the "SEO CO." line color, since both the icon
 * and "ROOFER" are already orange and remain visible on dark backgrounds.
 */
function Logo({ dark = false }) {
  return (
    <a
      href="/"
      className="group inline-flex flex-col items-start leading-none"
      aria-label="Roofer SEO Co. — home"
    >
      {/* Two-roof icon — stacked above the text */}
      <svg
        viewBox="0 0 40 22"
        className="h-7 w-12 shrink-0 transition-transform group-hover:scale-110"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Sub roof (right, behind): smaller open V chevron — drawn first
            so the main roof overlaps it from the left */}
        <path
          d="M20 6 L33 16 L39 16"
          stroke="#eb5e28"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Main roof (left, in front): closed filled triangle */}
        <path
          d="M2 18 L17 4 L32 18 Z"
          fill="#eb5e28"
        />

        {/* Chimney at the peak of the main roof */}
        <rect x="19" y="2" width="3.2" height="8" fill="#eb5e28" />
      </svg>

      {/* Text — below the icon, stacked */}
      <span className="font-heading mt-1 block leading-none">
        <span
          className="block text-base font-bold tracking-tight"
          style={{ color: "#eb5e28" }}
        >
          ROOFER
        </span>
        <span
          className="block text-xs font-normal tracking-tight"
          style={{ color: dark ? "#fffcf2" : "#252422" }}
        >
          SEO CO.
        </span>
      </span>
    </a>
  );
}

export { Logo };
export default Logo;
