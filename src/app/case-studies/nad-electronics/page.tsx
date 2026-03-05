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
      "The documentary and its various educational vignettes, archival content, stylized era sets, and product features provided the bulk of the content for NAD's matching 50 Years micro-site.",
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
        <div className="absolute inset-0 flex items-center px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] w-full">
            <Link href="/case-studies" className="text-lg text-white font-normal block mb-2 hover:text-white/80 transition-colors">Feature Documentary</Link>
            <h1 className="text-[72px] font-bold leading-tight mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>NAD ELECTRONICS</h1>
            <p className="text-lg text-white/90 max-w-2xl text-left">
              Helping a passionate team of music-lovers tell their biggest story
            </p>
          </div>
        </div>
      </section>

      {/* "Turning Up the Volume" — text LEFT, media RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] mb-6">Turning Up the Volume</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                When Lenbrook International&rsquo;s world-renowned audiophile brand NAD came up on its 50 Years Anniversary - they wanted to celebrate their story with an inspiring brand documentary. But with an internal agency built to create technical and niche audiophile content - they would need some help giving NAD&rsquo;s history the Hollywood treatment it deserved.
              </p>
            </div>
            <GoldFrame>
              <div className="w-full h-full bg-dark-deep relative overflow-hidden">
                <Image src="/images/case-studies/nad/nadblock1.png" alt="NAD Electronics documentary" fill className="object-cover" />
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

      {/* "Amplifying Everyone" — media LEFT, text RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame>
              <div className="w-full h-full bg-dark-deep relative overflow-hidden">
                <Image src="/images/case-studies/nad/nadblock2.png" alt="NAD Electronics production" fill className="object-cover" />
              </div>
            </GoldFrame>
            <div>
              <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] mb-6">Amplifying Everyone</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                A big internal challenge was agreeing on the priority of telling NAD&rsquo;s personality-rich brand story VS detailing their key technical innovations. By collaborating with marketing and engineering teams on two distinct scripts - one focused on company history, and one outlining cornerstone technologies - we helped blend both sides into a storyline that spoke to both industry and audiophile audiences.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* NAD 50 Anniversary Logo Section */}
      <section className="py-16 flex justify-center">
        <div className="text-center">
          <div className="w-64 h-64 bg-[#2a2a2a] border-2 border-dashed border-[#C99A22] flex items-center justify-center mx-auto rounded-lg">
            <span className="text-[#C99A22] text-sm">[NAD 50 LOGO PLACEHOLDER]</span>
          </div>
        </div>
      </section>

      {/* Full-Bleed Masonry Gallery */}
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
            {/* Row 6 — two images side by side */}
            <div className="grid grid-cols-2 gap-4 px-6 lg:px-8">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/case-studies/nad/mod.png" alt="NAD mod" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/case-studies/nad/nasds.png" alt="NAD product" fill className="object-cover" />
              </div>
            </div>
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
                <span className="text-sm font-bold text-white block mb-4">LOUD AND CLEAR</span>
                <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] text-left">
                  An Honest Sounding Board
                </h2>
                <p className="text-lg text-white/90 leading-[27px] mt-6">
                  When creative has unlimited depth - having a North Star to guide everyone is indispensable. Funneling a passionate team through the right narrative production framework can allow authentic and engaging stories to reveal themselves regardless of how niche or nuanced the subject matter.
                </p>
                <p className="text-lg text-white/90 leading-[27px] mt-4">
                  <strong className="font-bold">Outputs:</strong>{" "}
                  43min feature documentary, teaser trailer w/ social cuts, 10x 2-3min Product vignettes, product beauty clips, digitized historical archives, custom score, 10 page microsite + raw footage, 8+ hours of additional technical interviews, stills, and clip library
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
            <Link href="/case-studies/manitowoc-ice" className="inline-block bg-gold text-dark px-[56px] py-6 rounded-[5px] font-bold border-2 border-gold hover:bg-lightning transition-colors">Pentair &rarr;</Link>
            <Link href="/case-studies" className="inline-block border-2 border-gold text-gold px-[56px] py-6 rounded-[5px] bg-transparent font-bold hover:bg-gold/10 transition-colors">All Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
