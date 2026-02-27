import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CyclingText } from "@/components/CyclingText";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
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
  { src: "/images/logos/uberlogo.png", alt: "Uber client logo", w: 150, h: 56 },
  { src: "/images/logos/amazon-logo-1-768x286.png", alt: "Amazon client logo", w: 150, h: 56 },
  { src: "/images/logos/BMOlogo-768x286.png", alt: "BMO client logo", w: 150, h: 56 },
  { src: "/images/logos/tatalogo-768x286.png", alt: "Tata Consumer client logo", w: 150, h: 56 },
  { src: "/images/logos/Pentair_logo_RGB-1-768x286.png", alt: "Pentair client logo", w: 150, h: 56 },
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
      "Our production workflows are designed around your team\u2019s existing structure, chain of approvals, budgets, and internal resources. We follow your lead on what works best for you.",
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
      {/* ===== 1. HERO — full viewport with video bg ===== */}
      <section className="relative min-h-screen flex items-end pb-24 px-6 lg:px-8">
        {/* VIDEO PLACEHOLDER: Hero background reel — branded montage, drone footage, 3D renders. Autoplay, loop, muted */}
        <div className="absolute inset-0 bg-dark-deep z-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-muted">Video Coming Soon</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="max-w-[60%]">
            <h1 className="text-hero text-white font-normal mb-2">
              Content That
            </h1>
            <div className="mb-6">
              <CyclingText
                words={["Engages", "Converts", "Performs", "Adapts", "Responds", "Is Authentic"]}
                className="text-cycling font-bold"
              />
            </div>
            <p className="text-lg text-white/70 max-w-lg">
              Supercharging brand teams with{" "}
              <span className="gold-highlight">their own</span> freelance
              creative networks
            </p>
          </div>
        </div>
      </section>

      {/* ===== 2. CLIENT LOGOS MARQUEE ===== */}
      <section className="bg-dark py-8 overflow-hidden border-y border-white/5">
        <div className="flex" style={{ animation: "marquee 30s linear infinite", width: "200%" }}>
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 px-10">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="object-contain brightness-0 invert opacity-70"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3. "POWERHOUSES" STATEMENT ===== */}
      <FadeIn>
        <section className="py-24 lg:py-32 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-h2 lg:text-[2.75rem] leading-snug text-white">
              1Project provides managed creative production to help brands become
              content{" "}
              <span className="relative inline-block">
                <span className="text-gold italic">Powerhouses</span>
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
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ===== 4. "RELIABLE ACCESS" — text left, video right ===== */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 leading-tight mb-6">
                Reliable Access to the{" "}
                <em className="not-italic italic">Right</em> Freelancers
              </h2>
              <p className="text-base text-white/60 leading-relaxed">
                Utilize a{" "}
                <span className="gold-highlight">diverse network</span> of
                freelance talent without any of the heavy lifting. We own the
                relationship between you and over 600+ vetted professionals to{" "}
                <span className="gold-highlight">provide a guarantee</span>{" "}
                against their performance.
              </p>
            </div>
            <GoldFrame direction="right">
              {/* VIDEO PLACEHOLDER: Close-up product/beverage pour video. Autoplay, loop, muted */}
              <VideoPlaceholder label="Video Coming Soon" />
            </GoldFrame>
          </div>
        </section>
      </FadeIn>

      {/* ===== 5. "WINNING STRATEGIES" — video left, text right ===== */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame direction="left" className="order-2 lg:order-1">
              {/* VIDEO PLACEHOLDER: Behind-the-scenes production footage. Autoplay, loop, muted */}
              <VideoPlaceholder label="Video Coming Soon" />
            </GoldFrame>
            <div className="order-1 lg:order-2">
              <h2 className="text-h2 leading-tight mb-6">
                Winning Strategies We&apos;ve{" "}
                <em className="not-italic italic">Perfected</em>
              </h2>
              <p className="text-base text-white/60 leading-relaxed">
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

      {/* ===== 6. PORTFOLIO GRID — non-uniform layout ===== */}
      <section className="px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl flex flex-col gap-1.5">
          {/* Row 1: Amazon — full width */}
          <FadeIn>
            <Link
              href="/case-studies/amazon"
              className="group relative overflow-hidden block aspect-[21/9]"
            >
              {/* VIDEO PLACEHOLDER: Amazon project reel. Autoplay, loop, muted */}
              <div className="absolute inset-0 bg-dark-deep">
                <Image
                  src="/images/homepage/Main-Banner-e1714164961359.png"
                  alt="Amazon case study banner"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-60"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 lg:p-12">
                <span className="section-label block mb-2">Video Pipeline</span>
                <h3 className="text-h3 text-white font-bold">AMAZON</h3>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="section-label block mb-2">Brand Video</span>
                  <h3 className="text-h3 text-white font-bold">TATA CONSUMER</h3>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="section-label block mb-2">Cross-Channel Media</span>
                  <h3 className="text-h3 text-white font-bold">BMO</h3>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 lg:p-12">
                <span className="section-label block mb-2">Feature Documentary</span>
                <h3 className="text-h3 text-white font-bold">NAD ELECTRONICS</h3>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== 7. SPINNING "SEE MORE WORK" CIRCLE ===== */}
      <section className="py-16">
        <SpinningCircle href="/case-studies" />
      </section>

      {/* ===== 8. "IN-HOUSE ENHANCED" — text left, accordion right ===== */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16">
            {/* Left — heading + body */}
            <div>
              <span className="section-label block mb-4">In-House Enhanced</span>
              <h2 className="text-h2 leading-tight mb-6">
                Maintain an Unmistakable Aesthetic
              </h2>
              <p className="text-base text-white/60 leading-relaxed">
                Great brands need{" "}
                <span className="gold-highlight">amazing</span> content.
                1Project supports teams with the right talent and production
                strategy to add{" "}
                <span className="gold-highlight">depth, consistency, and authenticity</span>{" "}
                to every campaign.
              </p>
            </div>

            {/* Right — accordion */}
            <div>
              <Accordion items={accordionItems} />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== 9. TESTIMONIALS CAROUSEL ===== */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>
      </FadeIn>
    </>
  );
}
