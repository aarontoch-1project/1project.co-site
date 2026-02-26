import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "AMAZON",
  description:
    "Building a video production system to bring a program to life. See how 1Project helped Amazon create scalable video production for high-performing stores.",
};

export default function AmazonCaseStudy() {
  return (
    <CaseStudyLayout
      title="AMAZON"
      subtitle="Building a video production system to bring a program to life"
      heroImage="/images/case-studies/amazon/Main-Banner-e1714164961359.png"
      heroAlt="Amazon case study hero banner"
      stats={[
        { value: "3", label: "Creative Pitches" },
        { value: "3 wk", label: "Turnaround" },
        { value: "30s", label: "OTT Ad Format" },
      ]}
      sections={[
        {
          heading: "To Each Their Own",
          body: "Supporting an Amazon agency partner, we developed a repeatable creative video framework and workflow to give each store a simple briefing process, 3 creative pitches from different teams, the ability to shoot globally and remotely, and a plug-in format to add key SKUs, brand messaging, and a preferred target audience.",
        },
        {
          heading: "Customizable Creative",
          body: "Through centralizing all production and freelancers through 1Project, Amazon was able to offer each brand participant a unique video for their brand, while keeping scopes and budgets consistent across the entire campaign.",
        },
      ]}
      outputs="30s OTT ad w/ VO+motion, hi-res stills, b-roll clip library, all raw footage, global usage, and cropped cut-downs of final for social."
      details={[
        {
          title: "Streamlining Choice",
          description:
            "Every video was pitched under a fixed-bidding system — letting clients choose from multiple teams based on creative alone.",
        },
        {
          title: "Staying on Track",
          description:
            "Despite sometimes being vastly different types of shoots — turnaround remained consistent at 3 weeks from briefings.",
        },
        {
          title: "Unlimited Revisions",
          description:
            "For consistency, all post-production was centralized by 1Project\u2019s in-house editors — making draft revisions faster and removing any concerns of scope-creep on freelancers.",
        },
        {
          title: "No Cost Extras",
          description:
            "Every video\u2019s shooting-methodology incorporated ample B-roll with unlimited usage. This way stores got matching, on-brand assets they could use outside the scope of the program\u2019s OTT campaigns.",
        },
      ]}
      nextStudy={{
        title: "Eight O\u2019Clock Coffee",
        href: "/case-studies/eight-o-clock-coffee",
      }}
    />
  );
}
