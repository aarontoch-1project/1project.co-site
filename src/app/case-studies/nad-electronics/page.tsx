import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { VimeoEmbed } from "@/components/VimeoEmbed";
import { GoldFrame } from "@/components/GoldFrame";
import { SectionDivider } from "@/components/SectionDivider";
import { FadeIn } from "@/components/FadeIn";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "NAD ELECTRONICS",
  description:
    "Helping a passionate team of music-lovers tell an epic story about sound. See how 1Project helped NAD Electronics create a feature documentary.",
};

const sections = [
  {
    heading: "Turning Up the Volume",
    body: "NAD Electronics had decades of audio innovation history but no cohesive narrative to share it. We partnered with their team to craft a feature-length documentary that celebrated their legacy and vision.",
  },
  {
    heading: "Amplifying Everyone",
    body: "From engineers to executives, every voice at NAD had a story worth telling. Our documentary approach ensured each perspective was captured authentically, creating a rich tapestry of the brand's culture.",
  },
  {
    heading: "Loud and Clear",
    body: "The final documentary served as both an internal rallying cry and an external brand statement, showcasing NAD's commitment to audio excellence across multiple distribution channels.",
  },
];

const details = [
  {
    title: "Organizing History",
    description: "Decades of product innovation, engineering breakthroughs, and brand evolution were researched, catalogued, and woven into a compelling narrative arc.",
  },
  {
    title: "Archivists",
    description: "Our team digitized and restored archival footage, photography, and documents to bring NAD's history to life with authentic visual storytelling.",
  },
  {
    title: "Fan Service Success",
    description: "The documentary resonated deeply with NAD's audiophile community, generating significant engagement and reinforcing brand loyalty among their most passionate customers.",
  },
  {
    title: "Centerpiece Content",
    description: "The feature documentary became the centerpiece of NAD's content strategy, with derivative cuts and clips fueling social media, trade shows, and retailer presentations.",
  },
];

export default function NADCaseStudy() {
  return (
    <>
      {/* Hero with Vimeo video */}
      <section className="relative h-screen min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-dark-deep">
          <iframe
            src="https://player.vimeo.com/video/1169009698?h=f6d19acca7&background=1&autoplay=1&loop=1&muted=1&quality=1080p"
            frameBorder="0"
            allow="autoplay; fullscreen"
            loading="lazy"
            className="absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 object-cover"
            title="NAD Electronics hero"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 pb-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <span className="section-label block mb-3">Feature Documentary</span>
            <h1 className="text-hero leading-tight mb-4">NAD ELECTRONICS</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Helping a passionate team of music-lovers tell an epic story about sound
            </p>
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

      {/* Image Gallery */}
      <FadeIn>
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/nad/nadblock1.png" alt="NAD" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/nad/nadblock2.png" alt="NAD" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/nad/753_.png" alt="NAD 753" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/nad/NAD_still-10-e1713856175293.png" alt="NAD still" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/nad/NAD_still-15.png" alt="NAD still" fill className="object-cover" /></div>
            <div className="relative aspect-video overflow-hidden"><Image src="/images/case-studies/nad/NAD_still-5-e1713856264496.png" alt="NAD still" fill className="object-cover" /></div>
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
            <Link href="/case-studies/manitowoc-ice" className="text-gold hover:text-lightning transition-colors">Pentair &rarr;</Link>
            <Link href="/case-studies" className="text-white/50 hover:text-white transition-colors">All Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
