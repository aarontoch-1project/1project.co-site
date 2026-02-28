import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionDivider } from "@/components/SectionDivider";
import { FadeIn } from "@/components/FadeIn";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "PENTAIR",
  description:
    "Not exactly our wheelhouse — but that's kind of our thing. See how 1Project helped Pentair build a scalable asset library.",
};

const sections = [
  {
    heading: "Not Exactly Our Wheelhouse",
    body: "When Pentair approached us about producing content for commercial ice machines, it wasn't our typical brief. But adaptability is what sets 1Project apart — we dove deep into the product category and found compelling visual stories.",
  },
  {
    heading: "Simple, Repeatable, and Scalable",
    body: "We developed a production framework that could be repeated across Pentair's entire product line, creating consistent brand imagery that scaled with their catalog.",
  },
  {
    heading: "Chill Out",
    body: "The final asset library gave Pentair's marketing team everything they needed — product photography, lifestyle imagery, and video content — all organized and ready to deploy.",
  },
];

const details = [
  {
    title: "Streamlining Creative",
    description: "A standardized creative brief and shot list template meant every product received the same level of attention and brand consistency.",
  },
  {
    title: "Locked Production Scope",
    description: "Fixed-scope production packages gave Pentair predictable costs and timelines, eliminating budget surprises and scope creep.",
  },
  {
    title: "Maximizing Outputs",
    description: "Each production day was engineered to capture maximum content — product shots, lifestyle imagery, and video — from a single setup.",
  },
  {
    title: "Full Enterprise Integration",
    description: "All assets were delivered in formats compatible with Pentair's DAM system, tagged with metadata for easy discovery and deployment.",
  },
];

export default function PentairCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[500px]">
        <Image src="/images/case-studies/manitowoc/Banner-1-1.png" alt="Pentair case study hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 pb-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <span className="section-label block mb-3">Asset Library</span>
            <h1 className="text-hero leading-tight mb-4">PENTAIR</h1>
            <p className="text-lg text-white/70 max-w-2xl">Not exactly our wheelhouse — but that&rsquo;s kind of our thing</p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-20">
          {sections.map((sec) => (
            <FadeIn key={sec.heading}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div><h2 className="text-h2 mb-6">{sec.heading}</h2></div>
                <div><p className="text-base text-white/70 leading-relaxed">{sec.body}</p></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Video Placeholder */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="aspect-video bg-dark-deep flex items-center justify-center rounded-sm">
              <span className="text-sm text-muted">Video Coming Soon</span>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Image Gallery */}
      <FadeIn>
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/manitowoc/1V0A0355-edit-1.png" alt="Pentair" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/manitowoc/Manitowoc-A1833-edit-1.png" alt="Pentair" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/manitowoc/Manitowoc-B1933-edit-1.png" alt="Pentair" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/manitowoc/Manitowoc-B2083-edit-1.png" alt="Pentair" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/manitowoc/Manitowoc-Studio14524-edit-1.png" alt="Pentair" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/manitowoc/manitowoc_dec220180-2-1.png" alt="Pentair" fill className="object-cover" /></div>
          </div>
        </section>
      </FadeIn>

      {/* Details Accordion */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Accordion items={details.map((d) => ({ title: d.title, content: d.description }))} defaultOpen={0} />
          </div>
        </section>
      </FadeIn>

      {/* Navigation */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionDivider className="mb-12">
            <h2 className="text-h2 text-center whitespace-nowrap">Check Out More Case Studies</h2>
          </SectionDivider>
          <div className="flex justify-center gap-8 text-sm">
            <Link href="/case-studies/core-equipment-co" className="text-gold hover:text-lightning transition-colors">Core Equipment Co. &rarr;</Link>
            <Link href="/case-studies" className="text-white/50 hover:text-white transition-colors">All Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
