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
      "For stills, we brought on a photographer who specialized in event film photography and photojournalism. This allowed them to capture authentic and stylized shots around video-capture without needing dedicated production time.",
  },
  {
    title: "Take Your Pick",
    description:
      "Building asset curation sessions into the pre-edit stage allowed for the agency team to massage ideas internally and minimize drafting.",
  },
  {
    title: "Keep it Real",
    description:
      "We built production around a subject's busy mid-week schedule to guarantee authentic slices of life, and deter opportunities to over-produce a scene.",
  },
  {
    title: "Just Here to Help",
    description:
      "Our role was to support the agency team with a lean production, not overshadow their concept, or influence client preferences. We were able to do both by providing clear breakpoints for client comms, and defining roles and structure early.",
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
        <div className="absolute inset-0 flex items-center px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] w-full">
            <Link href="/case-studies" className="text-lg text-white font-normal block mb-2 hover:text-white/80 transition-colors">Cross-Channel Media</Link>
            <h1 className="text-[46px] font-semibold leading-[55.2px] mb-3">BMO</h1>
            <p className="text-lg text-white/90 max-w-2xl text-left">
              Simplifying a docu-style process to empower the agency&apos;s vision
            </p>
          </div>
        </div>
      </section>

      {/* "On-Demand Support" — text LEFT, media RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] mb-6">On-Demand Support</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                When BMO&apos;s agency partner ran into internal delays and a tightening budget for an upcoming activation featuring real entrepreneurs, they needed an agile partner to expedite the docu-style media project without compromising the agency&apos;s vision, processes and quality.
              </p>
            </div>
            <GoldFrame>
              <VimeoEmbed videoId="1169009698" hash="f6d19acca7" aspect="fill" />
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

      {/* "We'll Do It Live" — media LEFT, text RIGHT */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame>
              <VimeoEmbed videoId="1169008713" hash="979d396235" aspect="fill" />
            </GoldFrame>
            <div>
              <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] mb-6">We&rsquo;ll Do It Live</h2>
              <p className="text-lg text-white/90 leading-[27px]">
                To keep things lean and nimble, we would need to adapt how agency and client creative inputs traditionally work. That meant choices like using a photojournalism shooting approach, minimizing req. brand shots, and designing feedback around curation by: Removing stills approvals on-set, Using a subject&apos;s real day-of schedule, Doing req. soundbite VO&apos;s off camera
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Image Gallery — 3x2 grid */}
      <FadeIn>
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-[1200px] grid grid-cols-2 lg:grid-cols-3 gap-2">
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
                <span className="text-sm font-bold text-white block mb-4">SPEED AND CONFIDENCE</span>
                <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] text-left">
                  Do it Once And Do It Right
                </h2>
                <p className="text-lg text-white/90 leading-[27px] mt-6">
                  Getting agency partners to embrace a more fast-and-loose production style means getting broad coverage and building trust in the editing process. We spent time optimizing non-negotiables against spontaneity to make everyone comfortable we&apos;d hit the creative goals while being as fast as possible.
                </p>
                <p className="text-lg text-white/90 leading-[27px] mt-4">
                  <strong className="font-bold">Outputs:</strong>{" "}
                  12 final OTT videos - each with ENG/FR, 15s and 6s, upper and lower funnel focus, and audio-only variants. 25 edited stills - in-branch print, ATM screens, digital banner, paid social, and in-app promo.
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
            <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] text-center whitespace-nowrap">
              Check Out More Case Studies
            </h2>
          </SectionDivider>
          <div className="flex justify-center gap-4">
            <Link
              href="/case-studies/nad-electronics"
              className="inline-block bg-gold text-dark px-[56px] py-6 rounded-[5px] font-bold border-2 border-gold hover:bg-lightning transition-colors"
            >
              NAD Electronics &rarr;
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
