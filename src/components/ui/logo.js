/**
 * Roofer SEO Co. logo — matches the brand mark in logo_roofer.jpeg.
 *
 * Visual spec (per logo image):
 *   - Icon: open roof (V chevron, stroke only) + small chimney rect on the
 *     right slope of the roof. Both in Spicy Paprika (#eb5e28).
 *   - "ROOFER" — bold (700), Spicy Paprika (#eb5e28).
 *   - "SEO CO." — regular (400), Carbon Black (#252422) on light backgrounds,
 *     Floral White (#fffcf2) on dark backgrounds.
 *   - SEO CO. is slightly smaller than ROOFER.
 *   - No italic. No tagline.
 *
 * The `dark` prop flips only the "SEO CO." line color, since both the icon
 * and "ROOFER" are already orange and remain visible on dark backgrounds.
 */
function Logo({ dark = false }) {
  return (
    <a href="/" className="group flex items-center gap-2.5">
      {/* Roof + chimney icon */}
      <svg
        viewBox="0 0 32 28"
        className="h-7 w-8 shrink-0 transition-transform group-hover:scale-110"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Open roof — V chevron, stroke only (no base line) */}
        <path
          d="M2 18 L16 6 L30 18"
          stroke="#eb5e28"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Chimney — small vertical rect on the right slope */}
        <rect x="20" y="2" width="3.5" height="9" fill="#eb5e28" />
      </svg>

      <span className="font-heading leading-none">
        <span
          className="block text-lg font-bold tracking-tight"
          style={{ color: "#eb5e28" }}
        >
          ROOFER
        </span>
        <span
          className="block text-sm font-normal tracking-tight"
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
