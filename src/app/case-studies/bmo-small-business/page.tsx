import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { VimeoEmbed } from "@/components/VimeoEmbed";
import { GoldFrame } from "@/components/GoldFrame";
import { SectionDivider } from "@/components/SectionDivider";
import { FadeIn } from "@/components/FadeIn";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "BMO",
  description:
    "Simplifying a docu-style process for a cross-channel media campaign. See how 1Project helped BMO create authentic small business stories.",
};

const details = [
  {
    title: "Fly on the Wall",
    description:
      "Our documentary approach captured genuine moments of small business owners in their element — no scripts, no staging, just authentic storytelling that resonated with audiences.",
  },
  {
    title: "Take Your Pick",
    description:
      "Each business story was crafted into multiple formats — long-form documentary, social cuts, testimonial clips, and behind-the-scenes content — maximizing every production day.",
  },
  {
    title: "Keep it Real",
    description:
      "Maintaining authenticity while meeting brand standards required careful pre-production planning and on-set direction that guided without controlling the narrative.",
  },
  {
    title: "Just Here to Help",
    description:
      "Our producers acted as an extension of BMO's marketing team, handling all logistics, talent coordination, and post-production so their team could focus on strategy.",
  },
];

export default function BMOCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[500px]">
        <Image
          src="/images/case-studies/bmo/Banner-bmo-1.png"
          alt="BMO case study hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 pb-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link href="/case-studies" className="text-lg text-white font-normal block mb-3 hover:text-white/80 transition-colors">Cross-Channel Media</Link>
            <h1 className="text-[72px] font-bold leading-[86.4px] mb-4">BMO</h1>
            <p className="text-lg text-white max-w-2xl text-left">
              Simplifying a docu-style process for a cross-channel media campaign
            </p>
          </div>
        </div>
      </section>

      {/* "On-Demand Support" — text LEFT, media RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-6">On-Demand Support</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                BMO needed a production partner who could move fast and adapt to the unpredictable nature of documentary-style content. We provided a dedicated team ready to deploy across multiple markets.
              </p>
            </div>
            <GoldFrame direction="right">
              <VimeoEmbed videoId="1169009698" hash="f6d19acca7" />
            </GoldFrame>
          </div>
        </section>
      </FadeIn>

      {/* "We'll Do It Live" — media LEFT, text RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame direction="left">
              <VimeoEmbed videoId="1169008713" hash="979d396235" />
            </GoldFrame>
            <div>
              <h2 className="text-h2 mb-6">We&rsquo;ll Do It Live</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                Real stories from real small business owners meant capturing authentic moments as they happened. Our crews embedded with each business to document their journey with BMO.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Image Gallery — 3x2 grid */}
      <FadeIn>
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="relative aspect-video overflow-hidden">
              <Image src="/images/case-studies/bmo/1Project_Day1_MB_055-1.jpg" alt="BMO production day 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image src="/images/case-studies/bmo/1Project_Day1_MB_1501-1.jpg" alt="BMO production" fill className="object-cover" />
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image src="/images/case-studies/bmo/1Project_Day1_MB_334-1.jpg" alt="BMO production" fill className="object-cover" />
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image src="/images/case-studies/bmo/1Project_Day2_MB_124-1.jpg" alt="BMO day 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image src="/images/case-studies/bmo/1Project_Day2_MB_562-2-1.jpg" alt="BMO day 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image src="/images/case-studies/bmo/1Project_Day2_MB_761-2-1.jpg" alt="BMO day 2" fill className="object-cover" />
            </div>
            {/* [MEDIA-008] Gallery needs larger images (~753px wide) */}
            {/* [MEDIA-009] 2 missing videos */}
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
                  Do it Once And Do It Right
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
              href="/case-studies/nad-electronics"
              className="inline-block bg-gold text-dark px-6 py-3 rounded font-semibold hover:bg-lightning transition-colors"
            >
              NAD Electronics &rarr;
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
