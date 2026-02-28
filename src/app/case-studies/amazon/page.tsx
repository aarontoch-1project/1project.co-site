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
      "Every video was pitched under a fixed-bidding system \u2014 letting clients choose from multiple teams based on creative alone.",
  },
  {
    title: "Staying on Track",
    description:
      "Despite sometimes being vastly different types of shoots \u2014 turnaround remained consistent at 3 weeks from briefings.",
  },
  {
    title: "Unlimited Revisions",
    description:
      "For consistency, all post-production was centralized by 1Project\u2019s in-house editors \u2014 making draft revisions faster and removing any concerns of scope-creep on freelancers.",
  },
  {
    title: "No Cost Extras",
    description:
      "Every video\u2019s shooting-methodology incorporated ample B-roll with unlimited usage. This way stores got matching, on-brand assets they could use outside the scope of the program\u2019s OTT campaigns.",
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
        <div className="absolute bottom-0 left-0 right-0 pb-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <span className="section-label block mb-3">Video Pipeline</span>
            <h1 className="text-hero leading-tight mb-4">AMAZON</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Building a video production system to bring a program to life
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Intro Context ── */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-white/70 leading-relaxed">
              Amazon was running a program that provided high-performing stores
              with funding to create and place OTT video campaigns. They wanted
              every video to be something that was unique to each brand&rsquo;s
              look and feel &mdash; but also needed every production to have
              matching scopes, budgets, and timelines that met the
              program&rsquo;s standards.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ── 3. "To Each Their Own" (text L, placeholder R) ── */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-6">To Each Their Own</h2>
              <p className="text-base text-white/70 leading-relaxed">
                Supporting an Amazon agency partner, we developed a repeatable
                creative video framework and workflow to give each store a simple
                briefing process, 3 creative pitches from different teams, the
                ability to shoot globally and remotely, and a plug-in format to
                add key SKUs, brand messaging, and a preferred target audience.
              </p>
            </div>
            <GoldFrame direction="right">
              <VimeoEmbed videoId="1168992208" hash="410dd21dda" />
            </GoldFrame>
          </div>
        </section>
      </FadeIn>

      {/* ── 4. "Customizable Creative" (placeholder L, text R) ── */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame direction="left">
              <VimeoEmbed videoId="1168992196" hash="7132d3dfbc" />
            </GoldFrame>
            <div>
              <h2 className="text-h2 mb-6">Customizable Creative</h2>
              <p className="text-base text-white/70 leading-relaxed mb-6">
                Through centralizing all production and freelancers through
                1Project, Amazon was able to offer each brand participant a
                unique video for their brand, while keeping scopes and budgets
                consistent across the entire campaign.
              </p>
              <div className="border-t border-rule pt-6">
                <span className="section-label block mb-2">
                  Outputs (per brand)
                </span>
                <p className="text-sm text-white/60 leading-relaxed">
                  30s OTT ad w/ VO+motion, hi-res stills, b-roll clip library,
                  all raw footage, global usage, and cropped cut-downs of final
                  for social.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 5. "CENTRALIZED MANAGEMENT" + Heading ── */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="section-label block mb-4">
              Centralized Management
            </span>
            <h2 className="text-h2">
              Different Brands Different Needs Same Outputs
            </h2>
          </div>
        </section>
      </FadeIn>

      {/* ── 6. Image Gallery / Mosaic ── */}
      <FadeIn>
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="lg:col-span-2 lg:row-span-2">
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

      {/* ── 7. Results (Accordion) ── */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Accordion
              items={results.map((r) => ({
                title: r.title,
                content: r.description,
              }))}
              defaultOpen={0}
            />
          </div>
        </section>
      </FadeIn>

      {/* ── 8. "Check Out More Case Studies" ── */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionDivider className="mb-12">
            <h2 className="text-h2 text-center whitespace-nowrap">
              Check Out More Case Studies
            </h2>
          </SectionDivider>
          <div className="flex justify-center gap-8 text-sm">
            <Link
              href="/case-studies/eight-o-clock-coffee"
              className="text-gold hover:text-lightning transition-colors"
            >
              Eight O&rsquo;Clock Coffee &rarr;
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
