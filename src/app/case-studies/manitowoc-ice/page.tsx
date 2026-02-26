import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "PENTAIR",
  description:
    "Building a scalable lifestyle photography system for Manitowoc Ice. See how 1Project helped Pentair create high-volume, evergreen content on demand.",
};

export default function PentairCaseStudy() {
  return (
    <CaseStudyLayout
      title="PENTAIR"
      subtitle="Not exactly our wheelhouse — but that's kind of our thing"
      heroImage="/images/case-studies/manitowoc/Banner-1-1.png"
      heroAlt="Manitowoc Ice hero banner"
      stats={[
        { value: "12", label: "Products per Shoot" },
        { value: "200+", label: "Photos per Shoot" },
        { value: "100+", label: "Video Clips" },
      ]}
      sections={[
        {
          heading: "Not Exactly Our Wheelhouse",
          body: "Manitowoc Ice relies on long-term relationships with key distributors in the hospitality supply industry. They wanted to provide their partners with a large bank of approved lifestyle photography for localized campaigns \u2014 but as a team built around strong technical writing, creating a bank of authentic lifestyle photography was a much more challenging task.",
        },
        {
          heading: "Simple, Repeatable, and Scalable",
          body: "Using their product release schedule and tradeshow availability as milestones, we found the perfect size high-volume shoot to quickly add evergreen lifestyle content and cover new feature SKUs and targeted use cases.",
        },
        {
          heading: "Chill Out",
          body: "Through finding workflows and engagement timelines that sync with slower moving industrial sales cycles and offering \u2018as-you-need-it\u2019 production \u2014 we made it easy for Manitowoc\u2019s team to pick back up any content plans that got put on ice during tradeshow season and top off evergreen content in short bursts of high-volume work without needing to redesign creative from the ground up.",
        },
      ]}
      outputs="12 products featured across 200+ photos and 100+ video clips + raw content per shoot."
      details={[
        {
          title: "Streamlining Creative",
          description:
            "Lifestyle scenes boiled down to SKU + ACTION for the team while we filled in the other creative details.",
        },
        {
          title: "Locked Production Scope",
          description:
            "Regardless of the scenes, the creative could be executed in 1 or 2 days on-set.",
        },
        {
          title: "Maximizing Outputs",
          description:
            "The production was structured to work for both video and stills simultaneously to get the most assets from every set-up.",
        },
        {
          title: "Full Enterprise Integration",
          description:
            "Content was edited and uploaded ready-to-use directly to their backend complete with meta-data.",
        },
      ]}
      images={[
        { src: "/images/case-studies/manitowoc/1V0A0355-edit-1.png", alt: "Manitowoc product photo", w: 1172, h: 782 },
        { src: "/images/case-studies/manitowoc/manitowoc_dec220180-2-1.png", alt: "Manitowoc lifestyle photo", w: 800, h: 1200 },
        { src: "/images/case-studies/manitowoc/Manitowoc-A1833-edit-1.png", alt: "Manitowoc product A1833", w: 944, h: 630 },
        { src: "/images/case-studies/manitowoc/Manitowoc-B1933-edit-1.png", alt: "Manitowoc product B1933", w: 604, h: 403 },
        { src: "/images/case-studies/manitowoc/Manitowoc-B2083-edit-1.png", alt: "Manitowoc product B2083", w: 605, h: 403 },
        { src: "/images/case-studies/manitowoc/Manitowoc-Studio14524-edit-1.png", alt: "Manitowoc studio shot", w: 605, h: 403 },
      ]}
      nextStudy={{
        title: "Core Equipment Co.",
        href: "/case-studies/core-equipment-co",
      }}
    />
  );
}
