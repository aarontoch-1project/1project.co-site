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
    "Enabling brand leads to finish a job their agency started. See how 1Project helped Tata Consumer produce compelling brand video content.",
};

const details = [
  {
    title: "ASAP Approvals",
    description:
      "With delivery being time-sensitive, we integrated remote on-set approval for key shots to eliminate assembly drafts, and reduce back-and-forth in post-production.",
  },
  {
    title: "Easy Extras",
    description:
      "Each of the 4 SKUs had a unique flavour and signature preparation the team was planning to promote in the future. We added each preparation into the video structure so assets and b-roll could be reused across future recipe content.",
  },
  {
    title: "Ready To Ship",
    description:
      "Assets were delivered with custom meta-data to allow direct upload from our editors to digital distributors' DAM platforms.",
  },
  {
    title: "Under The Clock",
    description:
      "Concept to go-live timeline was under 4 weeks, despite international placements, remote production, revising pre-approved creative, and multiple distribution partners.",
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
        <div className="absolute inset-0 flex items-center px-6 lg:px-8">
          <div className="mx-auto max-w-7xl w-full">
            <Link href="/case-studies" className="text-lg text-white font-normal block mb-2 hover:text-white/80 transition-colors">Brand Video</Link>
            <h1 className="text-[72px] font-bold leading-[86.4px] mb-3">TATA CONSUMER</h1>
            <p className="text-lg text-white/90 max-w-2xl text-left">
              Enabling brand leads to finish a job their agency started
            </p>
          </div>
        </div>
      </section>

      {/* "Left Empty-Handed" — text LEFT, media RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[36px] lg:text-[72px] font-bold leading-[43px] lg:leading-[86.4px] mb-6">Left Empty-Handed</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                The brand team for Tata Consumer&apos;s legacy brand Eight-O-Clock Coffee was in a tricky spot. Having made the decision to drop their current AOR, they we&apos;re left to fill dozens of already-purchased media buys on their own with only a minimal flex-budget remaining in the campaign&apos;s coffers.
              </p>
            </div>
            <GoldFrame>
              <VimeoEmbed videoId="1169007416" hash="89394d9ba4" aspect="fill" />
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

      {/* "Time To Get Creative" — media LEFT, text RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame>
              <VimeoEmbed videoId="1169007589" hash="b83e4e49fb" aspect="fill" />
            </GoldFrame>
            <div>
              <h2 className="text-[36px] lg:text-[72px] font-bold leading-[43px] lg:leading-[86.4px] mb-6">Time To Get Creative</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                After adapting their ex-agency&apos;s initial creative - we restructured the main video content into a modular format, allowing multiple SKUs to have unique deliverables under the same script. We then optimized the limited budget by: Moving production to a lower-cost locale, Leveraging existing design assets more, Using remote art directors for pre-pro, Providing on-set AD and line-producing.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Gallery — 3-column grid */}
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
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/case-studies/eight-o-clock-coffee/eoc-mc.png" alt="Eight O'Clock Coffee montage" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/case-studies/eight-o-clock-coffee/byob-still-1.png" alt="Eight O'Clock Coffee BYOB still" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/case-studies/eight-o-clock-coffee/Sequence 01.00_00_32_17.Still003.png" alt="Eight O'Clock Coffee production still" fill className="object-cover" />
            </div>
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
                <span className="text-sm font-bold text-white block mb-4">MAKING THE MOST</span>
                <h2 className="text-[36px] lg:text-[72px] font-bold leading-[43px] lg:leading-[86.4px] text-left">
                  Wake Up and Smell the Coffee
                </h2>
                <p className="text-lg text-white/90 leading-[27px] mt-6">
                  A huge takeaway for the brand team was seeing just how drastically strong production design can drive a project. An asset-first perspective like &apos;modular video&apos; can enable a smaller team to confidently take on projects internally where hundreds of unique deliverables are required.
                </p>
                <p className="text-lg text-white/90 leading-[27px] mt-4">
                  <strong className="font-bold">Output:</strong>{" "}
                  144 unique OTT video assets: 4 different SKU hero narratives with 30s, 15s, and 6s versions, each with 12 regional vendor variants + stills and raw footage.
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
            <h2 className="text-[36px] lg:text-[72px] font-bold leading-[43px] lg:leading-[86.4px] text-center whitespace-nowrap">
              Check Out More Case Studies
            </h2>
          </SectionDivider>
          <div className="flex justify-center gap-4">
            <Link
              href="/case-studies/bmo-small-business"
              className="inline-block bg-gold text-dark px-[56px] py-6 rounded-[5px] font-bold border-2 border-gold hover:bg-lightning transition-colors"
            >
              BMO Small Business &rarr;
            </Link>
            <Link
              href="/case-studies"
              className="inline-block border-2 border-gold text-gold px-[56px] py-6 rounded-[5px] bg-transparent font-bold hover:bg-gold/10 transition-colors"
            >
              All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
