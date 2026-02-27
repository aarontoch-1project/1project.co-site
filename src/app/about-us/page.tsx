import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CyclingText } from "@/components/CyclingText";
import { FadeIn } from "@/components/FadeIn";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Empowering great brands to take back the reins on their content creation. We're seasoned ex-agency media producers on a mission to help teams own their creative production.",
};

const values = [
  {
    title: "Diverse Freelance Network",
    description:
      "Handpicked creatives from across the globe to always get the right team for the right project.",
    icon: "/images/about/globe-2.png",
    alt: "Diverse Freelance Network icon",
  },
  {
    title: "Creative Infrastructure",
    description:
      "Tools and processes teams can build upon and use beyond a single shoot, campaign, or platform.",
    icon: "/images/about/team-management-2.png",
    alt: "Creative Infrastructure icon",
  },
  {
    title: "Production Design Matters",
    description:
      "Producers that can make budgets and ideas go further with novel approaches to project deliverables.",
    icon: "/images/about/multimedia-2.png",
    alt: "Production Design icon",
  },
];

const partnerLogos = [
  { src: "/images/logos/uberlogo.png", alt: "Uber", w: 100, h: 37 },
  { src: "/images/logos/amazon-logo-1-768x286.png", alt: "Amazon", w: 100, h: 37 },
  { src: "/images/logos/BMOlogo-768x286.png", alt: "BMO", w: 100, h: 37 },
  { src: "/images/logos/tatalogo-768x286.png", alt: "Tata Consumer", w: 100, h: 37 },
  { src: "/images/logos/Pentair_logo_RGB-1-768x286.png", alt: "Pentair", w: 100, h: 37 },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-hero leading-tight mb-2">
                Changing How Brands
              </h1>
              <CyclingText
                words={[
                  "Make Amazing Content",
                  "Plan for Success",
                  "Tell Stories",
                  "Drive Their Creative",
                ]}
                className="text-cycling"
              />
              <p className="text-lg text-white/60 mt-6">
                Empowering great brands to take back the reins on their Content
                Creation
              </p>
            </div>
            <div>
              <Image
                src="/images/about/about-img-section-1.jpg"
                alt="About section hero image"
                width={550}
                height={477}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionDivider className="mb-12">
              <h2 className="text-h2">Our Mission</h2>
            </SectionDivider>
            <p className="text-base text-white/70 leading-relaxed">
              We&apos;re seasoned ex-agency media producers who have seen the
              best and the worst of the creative production industry: inflated
              budgets, hype-sellers, &apos;many-hats&apos; vendors, and worn-out
              big agency processes. By acting as way finders in freelance
              commercial production &mdash; our mission is to help teams own
              their content creation from end-to-end, become more agile, and
              develop a robust media pipeline that builds on their own unique
              strengths.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Key Values */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionDivider className="mb-16">
              <h2 className="text-h2 text-center">Our Key Values</h2>
            </SectionDivider>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {values.map((v) => (
                <div key={v.title}>
                  <Image
                    src={v.icon}
                    alt={v.alt}
                    width={80}
                    height={80}
                    className="mx-auto mb-6 invert opacity-80"
                  />
                  <h3 className="text-medium font-semibold mb-4">{v.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Partners */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-h2 mb-12">Our Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
              {partnerLogos.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  className="object-contain invert hover:opacity-80 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-h2 mb-10">Let&apos;s Work Together</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-block bg-gold text-dark text-sm font-medium px-8 py-3 rounded-md hover:bg-lightning transition-colors"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/case-studies"
              className="inline-block border border-white/30 text-white text-sm font-medium px-8 py-3 rounded-md hover:border-white/60 transition-colors"
            >
              Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
