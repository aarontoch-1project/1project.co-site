import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GoldFrame } from "@/components/GoldFrame";
import { SectionDivider } from "@/components/SectionDivider";
import { FadeIn } from "@/components/FadeIn";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "NAD ELECTRONICS",
  description:
    "Helping a passionate team of music-lovers tell an epic story about sound. See how 1Project helped NAD Electronics create a feature documentary.",
};

const details = [
  {
    title: "Organizing History",
    description:
      "Decades of product innovation, engineering breakthroughs, and brand evolution were researched, catalogued, and woven into a compelling narrative arc.",
  },
  {
    title: "Archivists",
    description:
      "Our team digitized and restored archival footage, photography, and documents to bring NAD's history to life with authentic visual storytelling.",
  },
  {
    title: "Fan Service Success",
    description:
      "The documentary resonated deeply with NAD's audiophile community, generating significant engagement and reinforcing brand loyalty among their most passionate customers.",
  },
  {
    title: "Centerpiece Content",
    description:
      "The feature documentary became the centerpiece of NAD's content strategy, with derivative cuts and clips fueling social media, trade shows, and retailer presentations.",
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
            <Link href="/case-studies" className="text-lg text-white font-normal block mb-3 hover:text-white/80 transition-colors">Feature Documentary</Link>
            <h1 className="text-[72px] font-bold leading-[86.4px] mb-4">NAD ELECTRONICS</h1>
            <p className="text-lg text-white max-w-2xl text-left">
              Helping a passionate team of music-lovers tell an epic story about sound
            </p>
          </div>
        </div>
      </section>

      {/* "Turning Up the Volume" — text LEFT, media RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-6">Turning Up the Volume</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                NAD Electronics had decades of audio innovation history but no cohesive narrative to share it. We partnered with their team to craft a feature-length documentary that celebrated their legacy and vision.
              </p>
            </div>
            <GoldFrame direction="right">
              <div className="aspect-video bg-dark-deep relative overflow-hidden">
                <Image src="/images/case-studies/nad/nadblock1.png" alt="NAD Electronics documentary" fill className="object-cover" />
              </div>
            </GoldFrame>
          </div>
        </section>
      </FadeIn>

      {/* "Amplifying Everyone" — media LEFT, text RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame direction="left">
              <div className="aspect-video bg-dark-deep relative overflow-hidden">
                <Image src="/images/case-studies/nad/nadblock2.png" alt="NAD Electronics production" fill className="object-cover" />
              </div>
            </GoldFrame>
            <div>
              <h2 className="text-h2 mb-6">Amplifying Everyone</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                From engineers to executives, every voice at NAD had a story worth telling. Our documentary approach ensured each perspective was captured authentically, creating a rich tapestry of the brand&rsquo;s culture.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Full-Bleed Masonry Gallery — signature visual treatment */}
      <FadeIn>
        <section className="pb-24">
          <div className="space-y-4">
            {/* Row 1 — large image, offset left */}
            <div className="w-[90%] relative aspect-[16/7] overflow-hidden">
              <Image src="/images/case-studies/nad/nadblock1.png" alt="NAD documentary production" fill className="object-cover" />
            </div>
            {/* Row 2 — large image, offset right */}
            <div className="w-[90%] ml-auto relative aspect-[16/7] overflow-hidden">
              <Image src="/images/case-studies/nad/nadblock2.png" alt="NAD documentary scene" fill className="object-cover" />
            </div>
            {/* Row 3 — two images side by side */}
            <div className="grid grid-cols-2 gap-4 px-6 lg:px-8">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/case-studies/nad/753_.png" alt="NAD 753" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/case-studies/nad/NAD_still-10-e1713856175293.png" alt="NAD still" fill className="object-cover" />
              </div>
            </div>
            {/* Row 4 — large image, offset left */}
            <div className="w-[90%] relative aspect-[16/7] overflow-hidden">
              <Image src="/images/case-studies/nad/NAD_still-15.png" alt="NAD audio engineering" fill className="object-cover" />
            </div>
            {/* Row 5 — large image, offset right */}
            <div className="w-[90%] ml-auto relative aspect-[16/7] overflow-hidden">
              <Image src="/images/case-studies/nad/NAD_still-5-e1713856264496.png" alt="NAD sound innovation" fill className="object-cover" />
            </div>
            {/* [MEDIA-010] Gallery needs full-bleed masonry restoration (1135px+ images) */}
            {/* [MEDIA-011] Missing 1 video */}
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
                <h2 className="text-[46px] font-semibold leading-[55.2px] text-left">
                  An Honest Sounding Board
                </h2>
                <p className="text-lg text-white/90 leading-[27px] mt-6">
                  The final documentary served as both an internal rallying cry and an external brand statement, showcasing NAD&rsquo;s commitment to audio excellence across multiple distribution channels.
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
            <Link href="/case-studies/manitowoc-ice" className="inline-block bg-gold text-dark px-6 py-3 rounded font-semibold hover:bg-lightning transition-colors">Pentair &rarr;</Link>
            <Link href="/case-studies" className="inline-block border border-gold text-gold px-6 py-3 rounded bg-transparent hover:bg-gold/10 transition-colors">All Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
