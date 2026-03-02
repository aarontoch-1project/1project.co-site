import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GoldFrame } from "@/components/GoldFrame";
import { SectionDivider } from "@/components/SectionDivider";
import { FadeIn } from "@/components/FadeIn";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "PENTAIR",
  description:
    "Not exactly our wheelhouse — but that's kind of our thing. See how 1Project helped Pentair build a scalable asset library.",
};

const details = [
  {
    title: "Streamlining Creative",
    description:
      "A standardized creative brief and shot list template meant every product received the same level of attention and brand consistency.",
  },
  {
    title: "Locked Production Scope",
    description:
      "Fixed-scope production packages gave Pentair predictable costs and timelines, eliminating budget surprises and scope creep.",
  },
  {
    title: "Maximizing Outputs",
    description:
      "Each production day was engineered to capture maximum content — product shots, lifestyle imagery, and video — from a single setup.",
  },
  {
    title: "Full Enterprise Integration",
    description:
      "All assets were delivered in formats compatible with Pentair's DAM system, tagged with metadata for easy discovery and deployment.",
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
            <Link href="/case-studies" className="text-lg text-white font-normal block mb-3 hover:text-white/80 transition-colors">Asset Library</Link>
            <h1 className="text-[72px] font-bold leading-[86.4px] mb-4">PENTAIR</h1>
            <p className="text-lg text-white max-w-2xl text-left">Not exactly our wheelhouse — but that&rsquo;s kind of our thing</p>
          </div>
        </div>
      </section>

      {/* "Not Exactly Our Wheelhouse" — text LEFT, media RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-6">Not Exactly Our Wheelhouse</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                When Pentair approached us about producing content for commercial ice machines, it wasn&rsquo;t our typical brief. But adaptability is what sets 1Project apart — we dove deep into the product category and found compelling visual stories.
              </p>
            </div>
            <GoldFrame direction="right">
              <div className="aspect-video bg-dark-deep relative overflow-hidden">
                <Image src="/images/case-studies/manitowoc/1V0A0355-edit-1.png" alt="Pentair product photography" fill className="object-cover" />
              </div>
            </GoldFrame>
          </div>
        </section>
      </FadeIn>

      {/* "Simple, Repeatable, and Scalable" — media LEFT, text RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame direction="left">
              <div className="aspect-video bg-dark-deep relative overflow-hidden">
                <Image src="/images/case-studies/manitowoc/Manitowoc-A1833-edit-1.png" alt="Pentair scalable production" fill className="object-cover" />
              </div>
            </GoldFrame>
            <div>
              <h2 className="text-h2 mb-6">Simple, Repeatable, and Scalable</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                We developed a production framework that could be repeated across Pentair&rsquo;s entire product line, creating consistent brand imagery that scaled with their catalog.
              </p>
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
            {/* [MEDIA-012] Video placeholder — currently shows "Coming Soon" */}
          </div>
        </section>
      </FadeIn>

      {/* Statement + Accordion (Two-Column) */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              {/* LEFT column — statement */}
              <div className="lg:w-[35%]">
                <span className="text-sm font-bold text-white block mb-4">
                  Staying Creative at a Glacial Pace
                </span>
                <h2 className="text-[46px] font-semibold leading-[55.2px] text-left">
                  Chill Out
                </h2>
                <p className="text-lg text-white/90 leading-[27px] mt-6">
                  The final asset library gave Pentair&rsquo;s marketing team everything they needed — product photography, lifestyle imagery, and video content — all organized and ready to deploy.
                </p>
              </div>
              {/* RIGHT column — accordion */}
              <div className="lg:w-[60%]">
                <Accordion
                  items={details.map((d) => ({ title: d.title, content: d.description }))}
                  defaultOpen={0}
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Navigation */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionDivider className="mb-12">
            <h2 className="text-h2 text-center whitespace-nowrap">Check Out More Case Studies</h2>
          </SectionDivider>
          <div className="flex justify-center gap-4">
            <Link href="/case-studies/core-equipment-co" className="inline-block bg-gold text-dark px-6 py-3 rounded font-semibold hover:bg-lightning transition-colors">Core Equipment Co. &rarr;</Link>
            <Link href="/case-studies" className="inline-block border border-gold text-gold px-6 py-3 rounded bg-transparent hover:bg-gold/10 transition-colors">All Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
