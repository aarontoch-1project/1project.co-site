import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "CORE",
  description:
    "Building an on-demand outdoor lifestyle content network. See how 1Project helped Core Equipment Co. create authentic gear content from remote locations across North America.",
};

export default function CoreCaseStudy() {
  return (
    <CaseStudyLayout
      title="CORE"
      subtitle="Go take a hike &mdash; and bring a camera"
      category="Lifestyle Content"
      heroImage="/images/case-studies/core/Banner-Image-1-1.png"
      heroAlt="Core Equipment hero banner"
      sections={[
        {
          heading: "Go Take A Hike",
          body: "As Core Equipment Co\u2019s product line expanded, so did a need for authentic lifestyle content of their outdoors gear in action. But with narrowing target demos and internal production based in city centers, it was becoming hard to hit all the geographically distinct locales their customers frequented.",
        },
        {
          heading: "Friends In Wild Places",
          body: "After a brief aesthetic calibration we quickly assembled Core their own network of on-demand outdoor lifestyle freelancers from across North America. Combined with a selection of flat-rated video and photo project formats the team could now add localized content to activations, shoot in iconic national parks, increase output volume, and get unique shots of remote spaces.",
        },
        {
          heading: "Packed and Ready",
          body: "The key to building Core something they could fully take advantage of was making sure that the production matched the flexibility and freedom of real camping. Designing around scenarios rather than shot-lists, leaving room for creative interpretation across talent and activities, the inability to fully scout a location until you are on-site \u2014 all things that keep each shoot creatively straightforward, quick to execute, and naturally authentic.",
        },
      ]}
      outputs="25 photos / 40+ clip library / 30s edited final, 3-4 talent (all demos), up to 2 feature SKUs & 3 accessory SKUs, anywhere in NA, 3-4 week turnaround + raw footage."
      details={[
        {
          title: "Creative Formulas",
          description:
            "We streamlined all creative inputs down to SKU + WHO + WHERE to let the team brief rapidly alongside a standard brand shot list and flexible scenario templates guided by locale/demo.",
        },
        {
          title: "Removing Risk",
          description:
            "A lot can happen in the woods. Remote locations are unpredictable, weather can change fast, and sometimes freelancers can just miss the mark! Core was able to ensure every shoot netted outputs they could use with free reshoot insurance against every production.",
        },
        {
          title: "New Rules",
          description:
            "Experienced outdoors enthusiasts know that every trip is a learning experience. With our iterative briefing framework, we were able to add brand-specific production tricks and tips into subsequent projects and refine Core\u2019s shoots.",
        },
        {
          title: "What A Trip",
          description:
            "Structured to be \u2018send-away\u2019 assignments, our photoshoots were actual camping adventures \u2014 allowing for sunrise to sunset coverage of stunning wilderness and unique moments that just can\u2019t be captured during an office-hours photoshoot.",
        },
      ]}
      images={[
        { src: "/images/case-studies/core/JB2_2394-Edit-scaled.jpg", alt: "Outdoor lifestyle photo", w: 2560, h: 1703 },
        { src: "/images/case-studies/core/Core-6p-0522-Edited-24-scaled.jpg", alt: "Core camping photo", w: 2560, h: 1707 },
        { src: "/images/case-studies/core/Core-6p-0522-Edited-3-scaled.jpg", alt: "Core outdoor gear photo", w: 2560, h: 1707 },
        { src: "/images/case-studies/core/Core-6p-0522-Edited-21-scaled.jpg", alt: "Core lifestyle photo", w: 2560, h: 1707 },
        { src: "/images/case-studies/core/block2-core-scaled.jpg", alt: "Core product block", w: 2560, h: 1703 },
        { src: "/images/case-studies/core/Core-6p-0522-Edited-2-1-scaled.jpg", alt: "Core outdoor scene", w: 2560, h: 1707 },
      ]}
      nextStudy={{
        title: "Amazon",
        href: "/case-studies/amazon",
      }}
    />
  );
}
