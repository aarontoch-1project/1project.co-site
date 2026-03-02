import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GoldFrame } from "@/components/GoldFrame";
import { SectionDivider } from "@/components/SectionDivider";
import { FadeIn } from "@/components/FadeIn";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "CORE",
  description:
    "Go take a hike — and bring a camera. See how 1Project helped Core Equipment Co. create authentic outdoor lifestyle content.",
};

const sections = [
  {
    heading: "Go Take A Hike",
    body: "Core Equipment Co. needed content that captured the spirit of outdoor adventure. We assembled crews who live and breathe the outdoors to create imagery that felt authentic, not staged.",
  },
  {
    heading: "Friends In Wild Places",
    body: "Our network of outdoor-lifestyle photographers and videographers spanned multiple regions, giving Core access to diverse landscapes and genuine outdoor enthusiasts as talent.",
  },
  {
    heading: "Packed and Ready",
    body: "From alpine trails to desert canyons, our mobile production teams were equipped to shoot in remote locations with minimal footprint and maximum creative output.",
  },
];

const details = [
  {
    title: "Creative Formulas",
    description: "We developed repeatable creative frameworks for outdoor product photography that maintained brand consistency across diverse locations and conditions.",
  },
  {
    title: "Removing Risk",
    description: "Weather contingencies, location permits, and safety protocols were all managed by our production team, removing logistical risk from Core's marketing calendar.",
  },
  {
    title: "New Rules",
    description: "Traditional product photography rules don't apply in the wild. We developed new approaches to showcase gear in authentic use scenarios.",
  },
  {
    title: "What A Trip",
    description: "Each production trip yielded content for multiple campaigns — product shots, lifestyle imagery, social content, and behind-the-scenes material.",
  },
];

export default function CoreCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[500px]">
        <Image src="/images/case-studies/core/Banner-Image-1-1.png" alt="Core Equipment case study hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 pb-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link href="/case-studies" className="text-lg text-white font-normal block mb-3 hover:text-white/80 transition-colors">Lifestyle Content</Link>
            <h1 className="text-[72px] font-bold leading-[86.4px] mb-4">CORE</h1>
            <p className="text-lg text-white max-w-2xl text-left">Go take a hike — and bring a camera</p>
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
                <div><p className="text-lg text-white/90 leading-[27px]">{sec.body}</p></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Featured Image with Gold Frame */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame direction="right">
              <div className="aspect-video bg-dark-deep relative overflow-hidden">
                <Image src="/images/case-studies/core/CORE_1Project_AUG_12_202232072-Edit-scaled.jpg" alt="Core Equipment outdoor lifestyle" fill className="object-cover" />
              </div>
            </GoldFrame>
            <div>
              <h2 className="text-h2 mb-6">Adventure Ready</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                Authentic outdoor lifestyle imagery that captures the spirit of adventure — shot on location by photographers who live for the wild.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Image Gallery */}
      <FadeIn>
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/core/CORE_1Project_AUG_12_202232072-Edit-scaled.jpg" alt="Core" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/core/Core-6p-0522-Edited-2-1-scaled.jpg" alt="Core" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/core/Core-6p-0522-Edited-21-scaled.jpg" alt="Core" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/core/Core-6p-0522-Edited-24-scaled.jpg" alt="Core" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/core/Core-6p-0522-Edited-3-scaled.jpg" alt="Core" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/core/JB2_2190-scaled.jpg" alt="Core" fill className="object-cover" /></div>
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
          <div className="flex justify-center gap-4">
            <Link href="/case-studies/amazon" className="inline-block bg-gold text-dark px-6 py-3 rounded font-semibold hover:bg-lightning transition-colors">Amazon &rarr;</Link>
            <Link href="/case-studies" className="inline-block border border-gold text-gold px-6 py-3 rounded bg-transparent hover:bg-gold/10 transition-colors">All Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
