import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { VimeoEmbed } from "@/components/VimeoEmbed";
import { GoldFrame } from "@/components/GoldFrame";
import { SectionDivider } from "@/components/SectionDivider";
import { FadeIn } from "@/components/FadeIn";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "AMAZON",
  description:
    "Building a video production system to bring a program to life. See how 1Project helped Amazon create scalable video production for high-performing stores.",
};

const results = [
  {
    title: "Streamlining Choice",
    description:
      "Every video was pitched under a fixed-bidding system - letting clients choose from multiple teams based on creative alone.",
  },
  {
    title: "Staying on track",
    description:
      "Despite sometimes being vastly different types of shoots - turnaround remained consistent at 3 weeks from briefings.",
  },
  {
    title: "Unlimited Revisions",
    description:
      "For consistency, all post-production was centralized by 1Projects in-house editors - making draft revisions faster and removing any concerns of scope-creep on freelancers.",
  },
  {
    title: "No Cost Extras",
    description:
      "Every videos shooting-methodology incorporated ample B-roll with unlimited usage. This way stores got matching, on-brand assets they could use outside the scope of the programs OTT campaigns.",
  },
];

export default function AmazonCaseStudy() {
  return (
    <>
      {/* ── 1. Full-Viewport Hero ── */}
      <section className="relative">
        <div className="relative min-h-screen bg-dark-deep">
          <Image
            src="/images/case-studies/amazon/pavoi-banner.png"
            alt="Amazon case study hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] w-full">
            <Link href="/case-studies" className="text-lg text-white font-normal block mb-2 hover:text-white/80 transition-colors">Video Pipeline</Link>
            <h1 className="text-[72px] font-bold leading-tight mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>AMAZON</h1>
            <p className="text-lg text-white/90 max-w-2xl text-left">
              Building a video production system to bring a program to life
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. "To Each Their Own" (text LEFT, video RIGHT) ── */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] mb-6">To Each Their Own</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                Amazon was running a program that provided high-performing stores
                with funding to create and place OTT video campaigns. They wanted
                every video to be something that was unique to each brand&apos;s
                look and feel - but also needed every production to have
                matching scopes, budgets, and timelines that met the
                program&apos;s standards.
              </p>
            </div>
            <GoldFrame>
              <VimeoEmbed videoId="1168992208" hash="410dd21dda" aspect="fill" />
            </GoldFrame>
          </div>
        </section>
      </FadeIn>

      {/* ── 2.5 Centered Video Section ── */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-video bg-[#2a2a2a] border-2 border-dashed border-[#C99A22] flex items-center justify-center rounded-lg">
            <span className="text-[#C99A22] text-base">[CENTERED VIDEO PLACEHOLDER]</span>
          </div>
        </div>
      </section>

      {/* ── 3. "Customizable Creative" (video LEFT, text RIGHT) ── */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame>
              <VimeoEmbed videoId="1168992196" hash="7132d3dfbc" aspect="fill" />
            </GoldFrame>
            <div>
              <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] mb-6">Customizable Creative</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                Supporting an Amazon agency partner, we developed a repeatable
                creative video framework and workflow to give each store: A
                simple briefing process, 3 creative pitches from different
                teams, Ability to shoot globally and remotely, A plug-in format
                to add key SKUs, brand messaging, and a preferred target
                audience.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 4. Image Gallery / Mosaic ── */}
      <FadeIn>
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-[1200px] grid grid-cols-2 lg:grid-cols-3 gap-2 overflow-hidden">
            <div className="lg:col-span-2 lg:row-span-2 overflow-hidden">
              <VimeoEmbed videoId="1168992268" hash="b2c64a1226" className="h-full" />
            </div>
            <VimeoEmbed videoId="1168992256" hash="eb1e586800" aspect="square" />
            <VimeoEmbed videoId="1168992252" hash="5f4137f983" aspect="square" />
            <VimeoEmbed videoId="1169003121" hash="c22aa25d26" aspect="square" />
            <VimeoEmbed videoId="1169004076" hash="b24488a984" aspect="square" />
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/case-studies/amazon/pavoi.png" alt="Amazon product" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/case-studies/amazon/Amazon_block1_still.jpg" alt="Amazon production still" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/case-studies/amazon/Main-Banner-e1714164961359.png" alt="Amazon banner" fill className="object-cover" />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 5. Statement + Accordion (Two-Column) ── */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              {/* LEFT column — statement */}
              <div className="lg:w-[35%]">
                <span className="text-sm font-bold text-white block mb-4">
                  Centralized Management
                </span>
                <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] text-left">
                  Different Brands Different Needs Same Outputs
                </h2>
                <p className="text-lg text-white/90 leading-[27px] mt-6">
                  Through centralizing all production and freelancers through
                  1Project, Amazon was able to offer each brand participant a
                  unique video for their brand, while keeping scopes and budgets
                  consistent across the entire campaign.
                </p>
                <p className="text-lg text-white/90 leading-[27px] mt-4">
                  <strong className="font-bold">Outputs (per brand):</strong>{" "}
                  30s OTT ad w/ VO+motion, hi-res stills, b-roll clip library,
                  all raw footage, global usage, and cropped cut-downs of final
                  for social.
                </p>
              </div>
              {/* RIGHT column — accordion */}
              <div className="lg:w-[60%]">
                <Accordion
                  items={results.map((r) => ({
                    title: r.title,
                    content: r.description,
                  }))}
                  defaultOpen={0}
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 6. "Check Out More Case Studies" ── */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionDivider className="mb-12">
            <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] text-center whitespace-nowrap">
              Check Out More Case Studies
            </h2>
          </SectionDivider>
          <div className="flex justify-center gap-4">
            <Link
              href="/case-studies/eight-o-clock-coffee"
              className="inline-block bg-gold text-dark px-[56px] py-6 rounded-[5px] font-bold border-2 border-gold hover:bg-lightning transition-colors"
            >
              Eight O&rsquo;Clock Coffee &rarr;
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
