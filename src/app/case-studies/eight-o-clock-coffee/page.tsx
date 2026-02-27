import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "TATA CONSUMER",
  description:
    "Enabling brand leads to finish a job their agency started. See how 1Project helped Tata Consumer's Eight O'Clock Coffee brand deliver 144 unique OTT video assets.",
};

export default function TataConsumerCaseStudy() {
  return (
    <CaseStudyLayout
      title="TATA CONSUMER"
      subtitle="Enabling brand leads to finish a job their agency started"
      category="Brand Video"
      heroImage="/images/case-studies/eight-o-clock-coffee/Banner-Image-1-1024x576.png"
      heroAlt="Eight O'Clock Coffee hero banner"
      sections={[
        {
          heading: "Left Empty-Handed",
          body: "The brand team for Tata Consumer\u2019s legacy brand Eight O\u2019Clock Coffee was in a tricky spot. Having made the decision to drop their current AOR, they were left to fill already-purchased media buys on their own with only a minimal flex-budget now remaining for the campaign.",
        },
        {
          heading: "Time To Get Creative",
          body: "After adapting their ex-agency\u2019s initial creative \u2014 we restructured the main video content into a modular format allowing multiple SKUs to get unique deliverables under the same script. We then optimized the small budget by moving production to a lower-cost area, leveraging existing design assets more, using remote art directors for pre-pro, and providing on-set AD and line-producing.",
        },
        {
          heading: "Making the Most",
          body: "A huge takeaway for the brand team was seeing just how drastically strong production design can drive a project. An asset-first perspective like \u2018modular video\u2019 can enable a smaller team to confidently take on projects internally where hundreds of unique deliverables are required.",
        },
      ]}
      outputsLabel="Wake Up and Smell the Coffee"
      outputs="144 unique OTT video assets: 4 different SKU hero narratives with 30s, 15s, and 6s versions, each with 12 regional vendor variants + stills and raw footage."
      details={[
        {
          title: "ASAP Approvals",
          description:
            "With delivery being time-sensitive, we integrated remote on-set approval for key shots to eliminate assembly drafts, and reduce back-and-forth in post-production.",
        },
        {
          title: "Easy Extras",
          description:
            "Each of the 4 SKUs had a unique flavour and signature preparation the team was planning to promote in the future. We added each preparation into the video structure so assets and b-roll could be reused across future recipe content.",
        },
        {
          title: "Ready To Ship",
          description:
            "Assets were delivered with custom meta-data to allow direct upload from our editors to digital distributors\u2019 DAM platforms.",
        },
        {
          title: "Under The Clock",
          description:
            "Concept to go-live timeline was under 4 weeks, despite international placements, remote production, revising pre-approved creative, and multiple distribution partners.",
        },
      ]}
      images={[
        {
          src: "/images/case-studies/eight-o-clock-coffee/byob-still-1.png",
          alt: "Production still",
          w: 1920,
          h: 1080,
        },
        {
          src: "/images/case-studies/eight-o-clock-coffee/Sequence-01.gif",
          alt: "Animated production sequence",
          w: 1080,
          h: 1080,
        },
      ]}
      nextStudy={{
        title: "BMO Small Business",
        href: "/case-studies/bmo-small-business",
      }}
    />
  );
}
