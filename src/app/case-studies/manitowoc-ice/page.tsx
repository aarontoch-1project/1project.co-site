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
    "Supercharging a technical media library with lifestyle assets. See how 1Project helped Pentair build a scalable content production system.",
};

const details = [
  {
    title: "Streamlining Creative",
    description:
      "Lifestyle scenes boiled down to SKU + ACTION for the team while we filled in the other creative details",
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
];

export default function PentairCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[500px]">
        <Image src="/images/case-studies/manitowoc/Banner-1-1.png" alt="Pentair case study hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute inset-0 flex items-center px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] w-full">
            <Link href="/case-studies" className="text-lg text-white font-normal block mb-2 hover:text-white/80 transition-colors">Asset Library</Link>
            <h1 className="text-[72px] font-bold leading-tight mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>PENTAIR</h1>
            <p className="text-lg text-white/90 max-w-2xl text-left">Supercharging a technical media library with lifestyle assets</p>
          </div>
        </div>
      </section>

      {/* "Not Exactly Our Wheelhouse" — text LEFT, media RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] mb-6">Not Exactly our Wheelhouse</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                Manitowoc Ice relies on long-term relationships with key distributors in the hospitality supply industry. They wanted to provide their partners with a large bank of approved lifestyle photography for localized campaigns - but as a team built around strong technical writing, creating a bank of authentic lifestyle photography was a much more challenging task.
              </p>
            </div>
            <GoldFrame>
              <div className="w-full h-full bg-dark-deep relative overflow-hidden">
                <Image src="/images/case-studies/manitowoc/1V0A0355-edit-1.png" alt="Pentair product photography" fill className="object-cover" />
              </div>
            </GoldFrame>
          </div>
        </section>
      </FadeIn>

      {/* Centered Video Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-video bg-[#2a2a2a] border-2 border-dashed border-[#C99A22] flex items-center justify-center rounded-lg">
            <span className="text-[#C99A22] text-base">[CENTERED VIDEO PLACEHOLDER]</span>
          </div>
        </div>
      </section>

      {/* "Simple, Repeatable, and Scalable" — media LEFT, text RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame>
              <div className="w-full h-full bg-dark-deep relative overflow-hidden">
                <Image src="/images/case-studies/manitowoc/Manitowoc-A1833-edit-1.png" alt="Pentair scalable production" fill className="object-cover" />
              </div>
            </GoldFrame>
            <div>
              <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] mb-6">Simple, Repeatable, and Scalable</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                Using their product release schedule and tradeshow availability as milestones, we found the perfect size high-volume shoot to quickly add evergreen lifestyle content and cover new feature SKUS and targeted use cases.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Image Gallery */}
      <FadeIn>
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-[1200px] grid grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/manitowoc/1V0A0355-edit-1.png" alt="Pentair" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden bg-[#2a2a2a] border-2 border-dashed border-[#C99A22] flex items-center justify-center rounded"><span className="text-[#C99A22] text-sm">[IMAGE PLACEHOLDER]</span></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/manitowoc/manitowoc_dec220180-2-1.png" alt="Pentair" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden bg-[#2a2a2a] border-2 border-dashed border-[#C99A22] flex items-center justify-center rounded"><span className="text-[#C99A22] text-sm">[IMAGE PLACEHOLDER]</span></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/manitowoc/Manitowoc-A1833-edit-1.png" alt="Pentair" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/manitowoc/Manitowoc-B1933-edit-1.png" alt="Pentair" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/manitowoc/Manitowoc-B2083-edit-1.png" alt="Pentair" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/manitowoc/Manitowoc-Studio14524-edit-1.png" alt="Pentair" fill className="object-cover" /></div>
          </div>
        </section>
      </FadeIn>

      {/* Statement + Accordion (Two-Column) */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              {/* LEFT column — statement */}
              <div className="lg:w-[35%]">
                <span className="text-sm font-bold text-white block mb-4">
                  CHILL OUT
                </span>
                <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] text-left">
                  Staying Creative at a Glacial Pace
                </h2>
                <p className="text-lg text-white/90 leading-[27px] mt-6">
                  Through finding workflows and engagement timelines that sync with slower moving industrial sales cycles and offering &apos;as-you-need-it&apos; production - we made it easy for Manitowoc&apos;s team to pick back up any content plans that got put on ice during tradeshow season and top off evergreen content in short bursts of high-volume work without needing to redesign creative from the ground up.
                </p>
                <p className="text-lg text-white/90 leading-[27px] mt-4">
                  <strong className="font-bold">Outputs (per shoot):</strong>{" "}
                  12 products featured across 200+ photos and 100+ video clips + Raw content
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
        <div className="mx-auto max-w-[1200px]">
          <SectionDivider className="mb-12">
            <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] text-center whitespace-nowrap">Check Out More Case Studies</h2>
          </SectionDivider>
          <div className="flex justify-center gap-4">
            <Link href="/case-studies/core-equipment-co" className="inline-block bg-gold text-dark px-[56px] py-6 rounded-[5px] font-bold border-2 border-gold hover:bg-lightning transition-colors">Core Equipment Co. &rarr;</Link>
            <Link href="/case-studies" className="inline-block border-2 border-gold text-gold px-[56px] py-6 rounded-[5px] bg-transparent font-bold hover:bg-gold/10 transition-colors">All Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
