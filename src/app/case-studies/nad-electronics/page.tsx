import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "NAD ELECTRONICS",
  description:
    "Helping a passionate team of music-lovers tell their biggest story. See how 1Project produced NAD's 50th anniversary feature documentary and microsite.",
};

export default function NADCaseStudy() {
  return (
    <CaseStudyLayout
      title="NAD ELECTRONICS"
      subtitle="Helping a passionate team of music-lovers tell their biggest story"
      category="Feature Documentary"
      heroImage="/images/case-studies/nad/NAD-banner-1-1.png"
      heroAlt="NAD Electronics hero banner"
      sections={[
        {
          heading: "Turning Up the Volume",
          body: "When Lenbrook International\u2019s world-renowned audiophile brand NAD came up on its 50 Years Anniversary \u2014 they wanted to celebrate their story with an inspiring brand documentary. But with an internal agency built to create technical and niche audiophile content \u2014 they would need some help giving NAD\u2019s history the Hollywood treatment it deserved.",
        },
        {
          heading: "Amplifying Everyone",
          body: "A big internal challenge was agreeing on the priority of telling NAD\u2019s personality-rich brand story VS detailing their key technical innovations. By collaborating with marketing and engineering teams on two distinct scripts \u2014 one focused on company history, and one outlining cornerstone technologies \u2014 we helped blend both sides into a storyline that spoke to both industry and audiophile audiences.",
        },
        {
          heading: "Loud and Clear",
          body: "When creative has unlimited depth \u2014 having a North Star to guide everyone is indispensable. Funneling a passionate team through the right narrative production framework can allow authentic and engaging stories to reveal themselves regardless of how niche or nuanced the subject matter.",
        },
      ]}
      outputs="43min feature documentary, 10x 2-3min product vignettes, 10 page microsite, 8+ hours of additional technical interviews."
      details={[
        {
          title: "Organizing History",
          description:
            "By breaking post-production of the documentary into distinct eras the team could run technical or storyline QA segment by segment and do draft approvals on different sections simultaneously.",
        },
        {
          title: "Archivists",
          description:
            "With the large volume of physical media digitized for the film, NAD was left with a searchable historical brand content archive for future use.",
        },
        {
          title: "Fan Service Success",
          description:
            "Striking a balance between technical concepts and historical content made the documentary an educational stand-out in a space known for its sometimes promo-heavy brand pieces.",
        },
        {
          title: "Centerpiece Content",
          description:
            "The documentary and its various educational vignettes, archival content, stylized era sets, and product features provided the bulk of the content for NAD\u2019s matching 50 Years micro-site.",
        },
      ]}
      images={[
        { src: "/images/case-studies/nad/mod.png", alt: "NAD production still", w: 6144, h: 3240 },
        { src: "/images/case-studies/nad/NAD_still-5-e1713856264496.png", alt: "NAD still", w: 1678, h: 905 },
        { src: "/images/case-studies/nad/nasds.png", alt: "NAD production", w: 1920, h: 1080 },
        { src: "/images/case-studies/nad/753_rear.png", alt: "NAD 753 product rear", w: 6144, h: 3240 },
        { src: "/images/case-studies/nad/NAD_still-7.png", alt: "NAD still", w: 1920, h: 1080 },
        { src: "/images/case-studies/nad/NAD_still-15.png", alt: "NAD still", w: 1920, h: 1080 },
      ]}
      nextStudy={{
        title: "Pentair",
        href: "/case-studies/manitowoc-ice",
      }}
    />
  );
}
