import Link from "next/link";
import Image from "next/image";

/**
 * Roofer SEO Co. logo.
 *
 * Uses the transparent-background brand mark
 * (public/WhatsApp_Image_2026-07-16_at_8.36.34_PM-removebg-preview.png)
 * above the stacked wordmark.
 *
 *   TEXT (below icon, stacked):
 *     - "ROOFER" — bold (700), Spicy Paprika (#eb5e28).
 *     - "SEO CO." — regular (400), Carbon Black (#252422) on light bg,
 *       Floral White (#fffcf2) on dark bg.
 *     - SEO CO. slightly smaller than ROOFER.
 *     - No italic. No tagline.
 *
 * The `dark` prop flips only the "SEO CO." line color, since the mark
 * and "ROOFER" are already orange and remain visible on dark backgrounds.
 */
function Logo({ dark = false }) {
  return (
    <Link
      href="/"
      className="group inline-flex flex-col items-start leading-none"
      aria-label="Roofer SEO Co. — home"
    >
      {/* Icon — stacked above the text */}
      <Image
        src="/Logo Header.svg"
        alt="roofer Seo co ."
        width={48}
        height={28}
        priority
        className="h-7  w-full  object-cover transition-transform group-hover:scale-110"
      />

      {/* Text — below the icon, stacked */}
     
    </Link>
  );
}

export { Logo };
export default Logo;