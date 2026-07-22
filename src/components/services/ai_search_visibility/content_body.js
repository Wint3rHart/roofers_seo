"use client";

import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "../../ui/motion";
import { PrimaryButton } from "../../ui/ui_components";
import { SERVICE_DATA } from "../../../data/services";
import {
  Section,
  P,
  Bullets,
  NumberedSteps,
  FaqAccordion,
} from "../shared/content_blocks";

export const TOC_ITEMS = [
  { id: "the-problem", label: "What's Costing You AI Visibility Right Now" },
  { id: "whats-included", label: "What's Included" },
  { id: "how-it-works", label: "How It Works" },
  { id: "why-it-matters", label: "Why It Matters For Roofers" },
  { id: "getting-started", label: "Getting Started" },
];

const data = SERVICE_DATA["ai-search-visibility"];

export default function ContentBody() {
  const reduce = useReducedMotion();

  return (
    <div>
      <Section id="the-problem" title="What's Quietly Costing You AI Visibility Right Now" reduce={reduce}>
        <Bullets items={data.problems} />
      </Section>

      <Section id="whats-included" title="What's Included" reduce={reduce}>
        <Bullets items={data.included} />
      </Section>

      <Section id="how-it-works" title="How It Works" reduce={reduce}>
        <NumberedSteps items={data.howItWorks} />
      </Section>

      <Section id="why-it-matters" title="Why It Matters For Roofers" reduce={reduce}>
        <P>{data.whyItMatters}</P>
        <div className="mt-6">
          <PrimaryButton as="a" href={data.nextStep.href}>
            {data.nextStep.label} <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
        </div>
      </Section>

      <Section id="getting-started" title="Getting Started" reduce={reduce}>
        <FaqAccordion items={data.faqs} />
      </Section>
    </div>
  );
}
