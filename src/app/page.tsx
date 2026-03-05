import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CyclingText } from "@/components/CyclingText";
import { VimeoEmbed } from "@/components/VimeoEmbed";
import { GoldFrame } from "@/components/GoldFrame";
import { SpinningCircle } from "@/components/SpinningCircle";
import { Accordion } from "@/components/Accordion";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Homepage - 1Project.Co creative production house",
  description:
    "Creative content production made simple. 1Project connects you with top freelance creators and producers to deliver high-quality video, photo, and 3D content.",
};

const clientLogos = [
  { src: "/images/logos/uberlogo.png", alt: "Uber client logo", w: 271, h: 101 },
  { src: "/images/logos/amazon-logo-1-768x286.png", alt: "Amazon client logo", w: 271, h: 101 },
  { src: "/images/logos/BMOlogo-768x286.png", alt: "BMO client logo", w: 271, h: 101 },
  { src: "/images/logos/tatalogo-768x286.png", alt: "Tata Consumer client logo", w: 271, h: 101 },
  { src: "/images/logos/Pentair_logo_RGB-1-768x286.png", alt: "Pentair client logo", w: 271, h: 101 },
];

const accordionItems = [
  {
    title: "Double or Triple Content Output",
    content:
      "We\u2019re built to handle multiple productions simultaneously and can help you get the most out of the latest AI tools. We\u2019ll help you achieve the volume you need to have authentic and purposeful media for every platform.",
  },
  {
    title: "Invest in Foundational Systems",
    content:
      "We do more than just get you stunning content. Our projects are designed with the future in mind, using repeatable and scalable strategies you can integrate into a robust content pipeline.",
  },
  {
    title: "Feed Brand Books",
    content:
      "Our iterative Master Briefing framework provides content standards that grow with you. Create brand-specific photography, video, and post-production guidelines to drive consistency across formats.",
  },
  {
    title: "Work in Your Own Way",
    content:
      "Our production workflows are designed around your teams existing structure, chain of approvals, budgets, and internal resources. We follow your lead on what works best for you.",
  },
];

const testimonials = [
  {
    quote: (
      <>
        I view 1Project as an{" "}
        <span className="gold-highlight">extension of our in-house creative team</span>
        , readily available to tackle virtually any photo or video needs I may
        throw their way...well-versed in our brand and meticulous in executing
        shoots to match those standards and expectations.
      </>
    ),
    name: "Kris K",
    title: "Manager of Creative Production Services",
    company: "Loves Travel Stops",
  },
  {
    quote: (
      <>
        The greatest thing about 1Project&apos;s team is not just their high
        quality execution and high output speed, but their{" "}
        <span className="gold-highlight">impressive flexibility</span>, and how
        much they truly try to understand how our business works to adapt their
        model to best suit our needs...
      </>
    ),
    name: "Henrique G",
    title: "Product Manager",
    company: "Uber",
  },
  {
    quote: (
      <>
        Diligent, meticulous, and{" "}
        <span className="gold-highlight">collaborative</span>, their team
        ensured the creative development and planning stages went off without a
        hitch...technical details and stylistic recommendations{" "}
        <span className="gold-highlight">before, during, and after production</span>{" "}
        resulted in terrific ads...
      </>
    ),
    name: "Ash K",
    title: "Senior Brand Manager",
    company: "Tata Consumer",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== 0. HERO — full viewport with video bg ===== */}
      <section
        className="hero-section relative min-h-[85vh] flex flex-col justify-end overflow-hidden"
        style={{ padding: "4vw 4vw 3vw 10vw" }}
      >
        {/* Hero background Vimeo video */}
        <div className="absolute inset-0 bg-dark-deep z-0 overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/930727789?h=f691cb6fb4&background=1&autoplay=1&loop=1&muted=1&quality=1080p#t=10s"
            frameBorder="0"
            allow="autoplay; fullscreen"
            loading="lazy"
            className="absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 object-cover"
            title="1Project hero reel"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        </div>

        <div className="relative z-10">
          <h2
            className="text-white font-semibold mb-1"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "40px", fontWeight: 600 }}
          >
            Content That
          </h2>
          <div className="mb-4">
            <CyclingText
              words={["Engages", "Converts", "Performs", "Adapts", "Responds", "Is Authentic"]}
              className="font-bold leading-tight"
            />
          </div>
          <p className="text-lg text-white max-w-lg" style={{ fontFamily: "var(--font-poppins)", fontSize: "18px", fontWeight: 400 }}>
            Supercharging brand teams with{" "}
            <span className="gold-highlight">their own</span> freelance
            creative networks
          </p>
        </div>
      </section>

      {/* ===== 1. BRANDS — client logo bar ===== */}
      <section className="flex justify-between items-center" style={{ padding: "1vw 3vw" }}>
        {clientLogos.map((logo) => (
          <div key={logo.alt} className="flex flex-col justify-center items-center w-full">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              className="w-auto object-contain brightness-0 invert opacity-70"
              style={{ maxHeight: "101px" }}
            />
          </div>
        ))}
      </section>

      {/* ===== 3. "POWERHOUSES" STATEMENT ===== */}
      <FadeIn>
        <section style={{ padding: "8vw 4vw" }}>
          <div className="mx-auto max-w-[1200px] text-left">
            <h1 className="text-[46px] font-bold leading-[55.2px] text-white" style={{ fontWeight: 700 }}>
              1Project provides managed creative production to help brands become
              content{" "}
              <span className="relative inline-block">
                <span className="text-gold italic font-extrabold">Powerhouses</span>
                {/* Hand-drawn squiggle underline */}
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 C 30 2, 50 12, 80 6 S 130 2, 160 8 S 185 12, 198 4"
                    stroke="#C99A22"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
          </div>
        </section>
      </FadeIn>

      {/* ===== 4. "RELIABLE ACCESS" — text left, video right ===== */}
      <FadeIn>
        <section style={{ padding: "0 4vw 2vw 4vw" }}>
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[40px] font-semibold leading-tight mb-6">
                Reliable Access to the{" "}
                <em>Right</em> Freelancers
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Utilize a{" "}
                <span className="gold-highlight">diverse network</span> of
                freelance talent without any of the heavy lifting. We own the
                relationship between you and over 600+ vetted professionals to{" "}
                <span className="gold-highlight">provide a guarantee</span>{" "}
                against their performance.
              </p>
            </div>
            <GoldFrame>
              <VimeoEmbed videoId="939689395" hash="3a7a906c4e" aspect="fill" />
            </GoldFrame>
          </div>
        </section>
      </FadeIn>

      {/* ===== 5. "WINNING STRATEGIES" — video left, text right ===== */}
      <FadeIn>
        <section style={{ padding: "2vw 4vw 2vw 4vw" }}>
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame className="order-2 lg:order-1">
              <VimeoEmbed videoId="1168992231" hash="ef53c80ff9" aspect="fill" />
            </GoldFrame>
            <div className="order-1 lg:order-2">
              <h2 className="text-[40px] font-semibold leading-tight mb-6">
                Winning Strategies We&apos;ve{" "}
                <em className="not-italic italic">Perfected</em>
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Our{" "}
                <span className="gold-highlight">seasoned producers</span>{" "}
                consult on, design, and run your projects from idea to delivery
                to minimize oversight and{" "}
                <span className="gold-highlight">maximize output</span>.
                Fully-managed means your team can focus on what really matters.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== 5. PORTFOLIO GRID — non-uniform layout, full width ===== */}
      <section className="overflow-hidden" style={{ padding: "4vw" }}>
        <div className="flex flex-col gap-1.5">
          {/* Row 1: Amazon — full width */}
          <FadeIn>
            <Link
              href="/case-studies/amazon"
              className="group relative overflow-hidden block aspect-[21/9]"
            >
              <div className="absolute inset-0 bg-dark-deep">
                <Image
                  src="/images/case-studies/amazon/pavoi-banner.png"
                  alt="Amazon case study banner"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                  <span className="text-white text-[18px] font-normal tracking-normal inline-block mb-2">Video Pipeline</span>
                  <h2 className="text-[27px] text-white font-bold">AMAZON</h2>
                </div>
              </div>
            </Link>
          </FadeIn>

          {/* Row 2: Tata + BMO side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
            <FadeIn>
              <Link
                href="/case-studies/eight-o-clock-coffee"
                className="group relative overflow-hidden block aspect-video"
              >
                <Image
                  src="/images/homepage/Banner-Image-1.png"
                  alt="Tata Consumer case study banner"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <span className="text-white text-[18px] font-normal tracking-normal inline-block mb-2">Brand Video</span>
                    <h2 className="text-[27px] text-white font-bold">TATA CONSUMER</h2>
                  </div>
                </div>
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link
                href="/case-studies/bmo-small-business"
                className="group relative overflow-hidden block aspect-video"
              >
                <Image
                  src="/images/homepage/Banner-bmo-1.png"
                  alt="BMO case study banner"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <span className="text-white text-[18px] font-normal tracking-normal inline-block mb-2">Cross-Channel Media</span>
                    <h2 className="text-[27px] text-white font-bold">BMO</h2>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>

          {/* Row 3: NAD Electronics — full width */}
          <FadeIn>
            <Link
              href="/case-studies/nad-electronics"
              className="group relative overflow-hidden block aspect-[21/9]"
            >
              <Image
                src="/images/homepage/NAD-banner-1-1.png"
                alt="NAD Electronics case study banner"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                  <span className="text-white text-[18px] font-normal tracking-normal inline-block mb-2">Feature Documentary</span>
                  <h2 className="text-[27px] text-white font-bold">NAD ELECTRONICS</h2>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== 7. SPINNING "SEE MORE WORK" CIRCLE ===== */}
      <section className="py-16">
        <SpinningCircle href="/case-studies" />
      </section>

      {/* ===== 7. "IN-HOUSE ENHANCED" — text left, accordion right ===== */}
      <FadeIn>
        <section style={{ padding: "4vw" }}>
          <div className="mx-auto max-w-[80vw] flex flex-col lg:flex-row justify-center gap-16">
            {/* Left — heading + body */}
            <div className="lg:w-[432px] shrink-0">
              <span className="block mb-4 text-gold uppercase tracking-[3px] font-normal" style={{ fontFamily: "var(--font-poppins)", fontSize: "14px", fontWeight: 400 }}>In-House Enhanced</span>
              <h2 className="text-h2 leading-tight mb-6">
                Maintain an Unmistakable Aesthetic
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Great brands need{" "}
                <span className="gold-highlight">amazing</span> content.
                1Project supports teams with the right talent and production
                strategy to add{" "}
                <span className="gold-highlight">depth, consistency and authenticity</span>{" "}
                to every campaign.
              </p>
            </div>

            {/* Right — accordion */}
            <div className="flex-1">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== 8. TESTIMONIALS CAROUSEL ===== */}
      <FadeIn>
        <section style={{ padding: "1vw 4vw 0 4vw" }}>
          <div className="mx-auto max-w-[1200px]">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>
      </FadeIn>
    </>
  );
}
