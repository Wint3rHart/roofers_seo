/**
 * HeroBackground — shared backdrop for hero sections.
 *
 * Matches the reference bg.jpeg: a warm cream-to-beige vertical gradient,
 * soft diffuse light glows, and a few faint white vertical column lines.
 * Absolutely positioned, sits behind hero content — just drop it as the
 * first child of a `relative` hero <section>.
 */
export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* base cream → warm beige gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #fffdf8 0%, #fdf8ee 35%, #f4ead9 70%, #ebdfc9 100%)",
        }}
      />

      {/* soft ambient light glows */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 10%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 60%), radial-gradient(45% 40% at 80% 0%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 65%), radial-gradient(55% 45% at 50% 100%, rgba(235,94,40,0.06) 0%, rgba(235,94,40,0) 70%)",
        }}
      />

      {/* faint white vertical column lines */}
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "33.333% 100%",
          backgroundPosition: "0 0",
        }}
      />
    </div>
  );
}