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

const details = [
  {
    title: "Creative Formulas",
    description:
      "We streamlined all creative inputs down to SKU + WHO + WHERE to let the team to brief rapidly alongside a standard brand shot list and flexible scenario templates guided by locale/demo.",
  },
  {
    title: "Removing Risk",
    description:
      "A lot can happen in the woods. Remote locations are unpredictable, weather can change fast, and we know sometimes freelancers can just miss the mark! Core was able to ensure every shoot netted outputs they could use with free reshoot insurance against every production.",
  },
  {
    title: "New Rules",
    description:
      "Experienced outdoors enthusiasts know that every trip is a learning experience. With our iterative briefing framework, we were able to add brand-specific production tricks and tips into subsequent projects and refine Core's shoots.",
  },
  {
    title: "What A Trip",
    description:
      "Structured to be 'send-away' assignments, our photoshoots were actual camping adventures - allowing for sunrise to sunset coverage of stunning wilderness and unique moments that just can't be captured during an office-hours photoshoot.",
  },
];

export default function CoreCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[500px]">
        <Image src="/images/case-studies/core/Banner-Image-1-1.png" alt="Core Equipment case study hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute inset-0 flex items-center px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] w-full">
            <Link href="/case-studies" className="text-lg text-white font-normal block mb-2 hover:text-white/80 transition-colors">Lifestyle Content</Link>
            <h1 className="text-[46px] font-semibold leading-[55.2px] mb-3">CORE</h1>
            <p className="text-lg text-white/90 max-w-2xl text-left">Giving an outdoors company access to authentic remote locations</p>
          </div>
        </div>
      </section>

      {/* "Go Take A Hike" — text LEFT, media RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] mb-6">Go Take A Hike</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                As Core Equipment Co's product line expanded, so did a need for authentic lifestyle content of their outdoors gear in action. But with narrowing target demos and internal production based in city centers, it was becoming hard to hit all the geographically distinct locales their customers frequented.
              </p>
            </div>
            <GoldFrame>
              <div className="w-full h-full bg-dark-deep relative overflow-hidden">
                <Image src="/images/case-studies/core/CORE_1Project_AUG_12_202232072-Edit-scaled.jpg" alt="Core Equipment outdoor lifestyle" fill className="object-cover" />
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

      {/* "Friends In Wild Places" — media LEFT, text RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame>
              <div className="w-full h-full bg-dark-deep relative overflow-hidden">
                <Image src="/images/case-studies/core/Core-6p-0522-Edited-2-1-scaled.jpg" alt="Core Equipment outdoor production" fill className="object-cover" />
              </div>
            </GoldFrame>
            <div>
              <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] mb-6">Friends In Wild Places</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                After a brief aesthetic calibration we quickly assembled Core their own network of on-demand outdoor lifestyle freelancers from across North America. Combined with a selection of flat-rated video and photo project formats the team could now: Add localized content to activations, Shoot in iconic national parks, Increase output volume, Get unique shots of remote spaces
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Image Gallery — 3x3 grid */}
      <FadeIn>
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-[1200px] grid grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#2a2a2a] border-2 border-dashed border-[#C99A22] flex items-center justify-center rounded"><span className="text-[#C99A22] text-sm">[IMAGE PLACEHOLDER]</span></div>
            <div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/case-studies/core/CORE_1Project_AUG_12_202232072-Edit-scaled.jpg" alt="Core outdoor" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/case-studies/core/Core-6p-0522-Edited-2-1-scaled.jpg" alt="Core lifestyle" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/case-studies/core/Core-6p-0522-Edited-21-scaled.jpg" alt="Core adventure" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/case-studies/core/Core-6p-0522-Edited-24-scaled.jpg" alt="Core product" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/case-studies/core/Core-6p-0522-Edited-3-scaled.jpg" alt="Core wilderness" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/case-studies/core/JB2_2190-scaled.jpg" alt="Core equipment" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/case-studies/core/JB2_2394-Edit-scaled.jpg" alt="Core hiking" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/case-studies/core/block2-core-scaled.jpg" alt="Core gear" fill className="object-cover" /></div>
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
                <span className="text-sm font-bold text-white block mb-4">PACKED AND READY</span>
                <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] text-left">
                  Specific, Sporadic, &amp; Spontaneous
                </h2>
                <p className="text-lg text-white/90 leading-[27px] mt-6">
                  The key to building Core something they could fully take advantage of was making sure that the production matched the flexibility and freedom of real camping. Designing around scenarios rather than shot-lists, leaving room for creative interpretation across talent and activities, the inability to fully scout a location until you are on-site - all things that keep each shoot creatively straightforward, quick to execute, and naturally authentic.
                </p>
                <p className="text-lg text-white/90 leading-[27px] mt-4">
                  <strong className="font-bold">Avg. Scope and Outputs (per shoot):</strong>{" "}
                  25 photos / 40+ clip library / 30s edited final
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
            <Link href="/case-studies/amazon" className="inline-block bg-gold text-dark px-[56px] py-6 rounded-[5px] font-bold border-2 border-gold hover:bg-lightning transition-colors">Amazon &rarr;</Link>
            <Link href="/case-studies" className="inline-block border-2 border-gold text-gold px-[56px] py-6 rounded-[5px] bg-transparent font-bold hover:bg-gold/10 transition-colors">All Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
