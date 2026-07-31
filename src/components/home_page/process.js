"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Search, ClipboardList, Target, Settings, BarChart3, TrendingUp } from "lucide-react";
import { SectionHeading } from "../ui/ui_components";
import {
  fadeScale,
  staggerContainer,
  viewportOnce,
  useReducedMotion,
} from "../ui/motion";

const PROCESS_STEPS = [
  { n: "01", icon: Search, title: "Discovery", copy: "We learn your business, your service area, and the jobs you want more of — repairs, replacements, storm damage, or insurance work — so every step after this is built on your real market." },
  { n: "02", icon: ClipboardList, title: "Audit", copy: "We run a deep audit of your website, Google Business Profile, rankings, reviews, and competitors to find opportunities and prioritize what will move the needle." },
  { n: "03", icon: Target, title: "Strategy", copy: "We create a custom SEO strategy and roadmap tailored to your goals, service area, and target jobs to generate the highest quality leads." },
  { n: "04", icon: Settings, title: "Implementation", copy: "We implement everything — on-page, technical, content, Google Business Profile optimization, and more — with precision and best practices." },
  { n: "05", icon: BarChart3, title: "Reporting", copy: "You get clear, easy-to-understand reports that show rankings, traffic, leads, and what's driving real results for your roofing business." },
  { n: "06", icon: TrendingUp, title: "Growth", copy: "We continuously optimize, refine, and scale your SEO so you stay ahead of competitors and keep growing your business month after month." },
];

// 9 tracks (number, card, dash) x 3 — matches the 9 grid items renderRow
// emits per row.
const ROW_GRID_COLUMNS = "auto 1fr auto auto 1fr auto auto 1fr auto";

const Dashes = () => (
  <svg width="48" height="4" viewBox="0 0 48 4">
    <line x1="0" y1="2" x2="48" y2="2"
      stroke="#eb5e28" strokeWidth="2"
      strokeDasharray="4 4" strokeLinecap="round" />
  </svg>
);

const Process = () => {
  const reduce = useReducedMotion();

  const renderRow = (steps) => (
    <div className="grid items-center" style={{ gridTemplateColumns: ROW_GRID_COLUMNS }}>
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          // Fragment shorthand (<>) can't carry a key — it needs to be a
          // real React.Fragment when it's the top-level item of a .map().
          <Fragment key={step.n}>
            {/*
              Number: stays in its own grid column, vertically centered
              via items-center exactly like before (NOT moved to the top).
              mr-[-1.25rem] + relative z-10 pulls it right so it overlaps
              the card's left border instead of sitting further left of it.
              The cream background lets the digit notch through the
              border line instead of the border cutting across it.
            */}
            <div
              className="relative z-10 mr-[-1.25rem] bg-[#fffcf7] px-2 font-heading text-4xl font-black italic"
              style={{ color: "#eb5e28" }}
            >
              {step.n}
            </div>

            {/*
              Card, drawn as an SVG shape instead of border+clip-path.
              clip-path masks the border away in the cut corner but draws
              no new edge there, which is why the border was stopping
              dead with a blank gap. An SVG path traces the full outline
              — including the diagonal chip — with one continuous stroke,
              so the corner is a real line, not a hole.
              mr-3 (not mx-2) keeps the LEFT edge exactly where it was,
              so the number's mr-[-1.25rem] overlap lines up again.
            */}
            <motion.div
              variants={fadeScale}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ duration: 0.25 }}
              className="relative mr-3 h-[330px]"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M8,0 L94,0 A6,6 0 0 1 100,6 L100,94 A6,6 0 0 1 94,100 L6,100 A6,6 0 0 1 0,94 L0,8 Z"
                  fill="#fffcf7"
                  stroke="#eb5e28"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div className="relative z-10 flex h-full flex-col items-center justify-start px-4 py-7 text-center">
                <div className="mb-3 flex h-11 w-11 items-center justify-center">
                  <Icon className="h-7 w-7" style={{ color: "#eb5e28" }} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-black">{step.title}</h3>
                <p className="sub-heading mt-2 text-sm font-light leading-relaxed text-[#403d39]/95">
                  {step.copy}
                </p>
              </div>
            </motion.div>

            {/* Dashes between cards (not after last) */}
            {i < 2 ? (
              <div className="flex items-center px-2">
                <Dashes />
              </div>
            ) : (
              <div />
            )}
          </Fragment>
        );
      })}
    </div>
  );

  return (
    <section className="border-b border-[#ccc5b9]/60 bg-[#fffcf7] text-[#252422]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-6">
        <SectionHeading eyebrow="OUR PROCESS" title="A Simple 6-Step Process That Works" />

        <motion.div
          className="mt-16 space-y-0"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={ viewportOnce}
        >
          {/* Row 1: steps 01–03 */}
          {renderRow(PROCESS_STEPS.slice(0, 3))}

          {/*
            Connector from step 03 -> step 04.
            This must be ASYMMETRIC: it leaves the bottom-right of row 1
            (under card 03) at the TOP of this strip, and lands at the
            BOTTOM of this strip (the top of row 2, under card 04).
            The old path curled both ends back up to y=0, which drew a
            symmetric staple bracketing cards 01–03 instead of a line
            flowing down into card 04.
          */}
          <div className="pointer-events-none w-full px-[3.5rem]">
            <svg
              width="100%"
              height="60"
              viewBox="0 0 1000 60"
              preserveAspectRatio="none"
              fill="none"
              style={{ overflow: "visible" }}
            >
              {/*
                x-coordinates on the left side (-16) are shifted further
                left than before, away from card 04's left border, for
                horizontal breathing room. y-coordinates (0/8/20/28/36)
                are untouched — vertical length stays exactly as-is.
              */}
              <path
              d="M 996,0 L 996,8 Q 996,20 984,20 L -4,20 Q -16,20 -22,39 L -21,196"
                stroke="#eb5e28"
                strokeWidth="2"
                strokeDasharray="6 5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Row 2: steps 04–06 */}
          {renderRow(PROCESS_STEPS.slice(3, 6))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;

    // d="M 996,0 L 996,8 Q 996,20 984,20 L -4,20 Q -16,20 -18,28 L -18,176"