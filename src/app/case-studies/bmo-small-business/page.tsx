import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "BMO",
  description:
    "Simplifying a docu-style process to empower the agency's vision. See how 1Project helped BMO deliver lean, high-quality documentary-style content.",
};

export default function BMOCaseStudy() {
  return (
    <CaseStudyLayout
      title="BMO"
      subtitle="Simplifying a docu-style process to empower the agency's vision"
      category="Cross-Channel Media"
      heroImage="/images/case-studies/bmo/Banner-bmo-1.png"
      heroAlt="BMO case study hero banner"
      sections={[
        {
          heading: "On-Demand Support",
          body: "To keep things lean and nimble, we would need to adapt how agency and client creative inputs traditionally work. That meant choices like using a photojournalism shooting approach, minimizing required brand shots, and designing feedback around curation by removing stills approvals on-set, using a subject\u2019s real day-of schedule, and doing required soundbite VO\u2019s off camera.",
        },
        {
          heading: "We\u2019ll Do It Live",
          body: "Getting agency partners to embrace a more fast-and-loose production style means getting broad coverage and building trust in the editing process. We spent time optimizing non-negotiables against spontaneity to make everyone comfortable we\u2019d hit the creative goals while being as fast as possible.",
        },
      ]}
      outputsLabel="Speed and Confidence"
      outputs="12 final OTT videos \u2014 each with ENG/FR, 15s and 6s, upper and lower funnel focus, and audio-only variants. 25 edited stills \u2014 in-branch print, ATM screens, digital banner, paid social, and in-app promo."
      details={[
        {
          title: "Fly on the Wall",
          description:
            "For stills, we brought on a photographer who specialized in event film photography and photojournalism. This allowed them to capture authentic and stylized shots around video-capture without needing dedicated production time.",
        },
        {
          title: "Take Your Pick",
          description:
            "Building asset curation sessions into the pre-edit stage allowed for the agency team to massage ideas internally and minimize drafting.",
        },
        {
          title: "Keep it Real",
          description:
            "We built production around a subject\u2019s busy mid-week schedule to guarantee authentic slices of life, and deter opportunities to over-produce a scene.",
        },
        {
          title: "Just Here to Help",
          description:
            "Our role was to support the agency team with a lean production, not overshadow their concept, or influence client preferences. We were able to do both by providing clear breakpoints for client comms, and defining roles and structure early.",
        },
      ]}
      images={[
        { src: "/images/case-studies/bmo/1Project_Day1_MB_055-1.jpg", alt: "BMO shoot day 1", w: 1467, h: 2200 },
        { src: "/images/case-studies/bmo/1Project_Day2_MB_562-2-1.jpg", alt: "BMO shoot day 2", w: 1650, h: 2200 },
        { src: "/images/case-studies/bmo/1Project_Day1_MB_334-1.jpg", alt: "BMO shoot day 1", w: 1467, h: 2200 },
        { src: "/images/case-studies/bmo/1Project_Day1_MB_1501-1.jpg", alt: "BMO shoot day 1", w: 2200, h: 1467 },
        { src: "/images/case-studies/bmo/1Project_Day2_MB_124-1.jpg", alt: "BMO shoot day 2", w: 2200, h: 1467 },
        { src: "/images/case-studies/bmo/1Project_Day2_MB_761-2-1.jpg", alt: "BMO shoot day 2", w: 2200, h: 1467 },
      ]}
      nextStudy={{
        title: "NAD Electronics",
        href: "/case-studies/nad-electronics",
      }}
    />
  );
}
