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

const details = [
  {
    title: "ASAP Approvals",
    description:
      "Streamlined approval workflows meant faster turnaround without sacrificing quality control or brand consistency.",
  },
  {
    title: "Easy Extras",
    description:
      "Our production methodology naturally generates bonus assets — behind-the-scenes content, social cuts, and still photography — at no additional cost.",
  },
  {
    title: "Ready To Ship",
    description:
      "All deliverables were formatted, color-graded, and packaged for immediate deployment across digital, social, and retail channels.",
  },
  {
    title: "Under The Clock",
    description:
      "The entire production — from brief to final delivery — was completed in under 3 weeks, meeting the campaign launch deadline with days to spare.",
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
            <Link href="/case-studies" className="text-lg text-white font-normal block mb-3 hover:text-white/80 transition-colors">Brand Video</Link>
            <h1 className="text-[72px] font-bold leading-[86.4px] mb-4">TATA CONSUMER</h1>
            <p className="text-lg text-white max-w-2xl text-left">
              Enabling brand leads to finish a job — when their agency couldn&rsquo;t
            </p>
          </div>
        </div>
      </section>

      {/* "Left Empty-Handed" — text LEFT, media RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-6">Left Empty-Handed</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                When Tata Consumer&rsquo;s agency partner fell short on delivering planned video content for their Eight O&rsquo;Clock Coffee brand, the team was left without key assets for an upcoming campaign launch.
              </p>
            </div>
            <GoldFrame direction="right">
              <VimeoEmbed videoId="1169007416" hash="89394d9ba4" />
            </GoldFrame>
          </div>
        </section>
      </FadeIn>

      {/* "Time To Get Creative" — media LEFT, text RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame direction="left">
              <VimeoEmbed videoId="1169007589" hash="b83e4e49fb" />
            </GoldFrame>
            <div>
              <h2 className="text-h2 mb-6">Time To Get Creative</h2>
              <p className="text-lg text-white/90 leading-[27px] mb-6">
                1Project stepped in with a rapid-response production framework, assembling a specialized crew and developing a creative brief that captured the brand&rsquo;s warmth and authenticity in record time.
              </p>
              <p className="text-lg text-white/90 leading-[27px]">
                By maximizing every shoot day and leveraging our network of versatile creators, we delivered a full suite of video and photo assets that exceeded the original scope — all within the compressed timeline.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Gallery — 2-column layout with larger images */}
      <FadeIn>
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-2">
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
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/case-studies/eight-o-clock-coffee/eoc-mc.png" alt="Eight O'Clock Coffee montage" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/case-studies/eight-o-clock-coffee/byob-still-1.png" alt="Eight O'Clock Coffee BYOB still" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/case-studies/eight-o-clock-coffee/Sequence 01.00_00_32_17.Still003.png" alt="Eight O'Clock Coffee production still" fill className="object-cover" />
            </div>
            {/* [MEDIA-006] Additional gallery images needed for larger layout */}
            {/* [MEDIA-007] ~10 missing videos (original has 17, build has 7) */}
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
                  Wake Up and Smell the Coffee
                </h2>
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
            <h2 className="text-h2 text-center whitespace-nowrap">
              Check Out More Case Studies
            </h2>
          </SectionDivider>
          <div className="flex justify-center gap-4">
            <Link
              href="/case-studies/bmo-small-business"
              className="inline-block bg-gold text-dark px-6 py-3 rounded font-semibold hover:bg-lightning transition-colors"
            >
              BMO Small Business &rarr;
            </Link>
            <Link
              href="/case-studies"
              className="inline-block border border-gold text-gold px-6 py-3 rounded bg-transparent hover:bg-gold/10 transition-colors"
            >
              All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
