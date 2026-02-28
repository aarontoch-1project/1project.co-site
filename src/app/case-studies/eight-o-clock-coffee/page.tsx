import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { VimeoEmbed } from "@/components/VimeoEmbed";
import { GoldFrame } from "@/components/GoldFrame";
import { SectionDivider } from "@/components/SectionDivider";
import { FadeIn } from "@/components/FadeIn";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "TATA CONSUMER",
  description:
    "Enabling brand leads to finish a job — when their agency couldn't. See how 1Project helped Tata Consumer produce compelling brand video content.",
};

const sections = [
  {
    heading: "Left Empty-Handed",
    body: "When Tata Consumer's agency partner fell short on delivering planned video content for their Eight O'Clock Coffee brand, the team was left without key assets for an upcoming campaign launch.",
  },
  {
    heading: "Time To Get Creative",
    body: "1Project stepped in with a rapid-response production framework, assembling a specialized crew and developing a creative brief that captured the brand's warmth and authenticity in record time.",
  },
  {
    heading: "Making the Most",
    body: "By maximizing every shoot day and leveraging our network of versatile creators, we delivered a full suite of video and photo assets that exceeded the original scope — all within the compressed timeline.",
  },
];

const details = [
  {
    title: "ASAP Approvals",
    description: "Streamlined approval workflows meant faster turnaround without sacrificing quality control or brand consistency.",
  },
  {
    title: "Easy Extras",
    description: "Our production methodology naturally generates bonus assets — behind-the-scenes content, social cuts, and still photography — at no additional cost.",
  },
  {
    title: "Ready To Ship",
    description: "All deliverables were formatted, color-graded, and packaged for immediate deployment across digital, social, and retail channels.",
  },
  {
    title: "Under The Clock",
    description: "The entire production — from brief to final delivery — was completed in under 3 weeks, meeting the campaign launch deadline with days to spare.",
  },
];

export default function TataConsumerCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[500px]">
        <Image
          src="/images/case-studies/eight-o-clock-coffee/Banner-Image-1-1024x576.png"
          alt="Tata Consumer case study hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 pb-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <span className="section-label block mb-3">Brand Video</span>
            <h1 className="text-hero leading-tight mb-4">TATA CONSUMER</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Enabling brand leads to finish a job — when their agency couldn&rsquo;t
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-20">
          {sections.map((sec, i) => (
            <FadeIn key={sec.heading}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-h2 mb-6">{sec.heading}</h2>
                </div>
                <div>
                  <p className="text-base text-white/70 leading-relaxed">{sec.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Video Section - left side gold frame */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame direction="left">
              <VimeoEmbed videoId="1169007416" hash="89394d9ba4" />
            </GoldFrame>
            <div>
              <h2 className="text-h2 mb-6">Bringing the Brand to Life</h2>
              <p className="text-base text-white/70 leading-relaxed">
                Our team captured the essence of Eight O&rsquo;Clock Coffee through authentic lifestyle imagery and compelling brand storytelling.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Centered Video Montage */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <VimeoEmbed videoId="1169007589" hash="b83e4e49fb" mode="player" />
          </div>
        </section>
      </FadeIn>

      {/* Gallery */}
      <FadeIn>
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-3 gap-2">
            <VimeoEmbed videoId="1169006117" hash="c94742c46f" aspect="square" />
            <VimeoEmbed videoId="1169006143" hash="5402a81852" aspect="square" />
            <VimeoEmbed videoId="1169006107" hash="9daa9999ff" aspect="square" />
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/case-studies/eight-o-clock-coffee/eoccl.png" alt="Eight O'Clock Coffee" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/case-studies/eight-o-clock-coffee/eoc-eg.png" alt="Eight O'Clock Coffee" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/case-studies/eight-o-clock-coffee/eoc-coffee.png" alt="Eight O'Clock Coffee product" fill className="object-cover" />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Details Accordion */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Accordion
              items={details.map((d) => ({ title: d.title, content: d.description }))}
              defaultOpen={0}
            />
          </div>
        </section>
      </FadeIn>

      {/* Navigation */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionDivider className="mb-12">
            <h2 className="text-h2 text-center whitespace-nowrap">
              Check Out More Case Studies
            </h2>
          </SectionDivider>
          <div className="flex justify-center gap-8 text-sm">
            <Link
              href="/case-studies/bmo-small-business"
              className="text-gold hover:text-lightning transition-colors"
            >
              BMO Small Business &rarr;
            </Link>
            <Link
              href="/case-studies"
              className="text-white/50 hover:text-white transition-colors"
            >
              All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
