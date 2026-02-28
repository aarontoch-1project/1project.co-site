import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CyclingText } from "@/components/CyclingText";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
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
            <p className="text-base text-white/70 leading-relaxed mb-8">
              We&apos;re seasoned ex-agency media producers who have seen the
              best and the worst of the creative production industry: inflated
              budgets, hype-sellers, &apos;many-hats&apos; vendors, and worn-out
              big agency processes. By acting as way finders in freelance
              commercial production &mdash; our mission is to help teams own
              their content creation from end-to-end, become more agile, and
              develop a robust media pipeline that builds on their own unique
              strengths.
            </p>
            {/* Social Media Links */}
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/company/1project/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/1projectmakes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/1projectmakes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Key Values */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionDivider className="mb-16">
              <h2 className="text-h2 text-center">Our Key Values</h2>
            </SectionDivider>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {values.map((v) => (
              <StaggerItem key={v.title}>
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

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

      {/* Our Teams at Work */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionDivider className="mb-16">
              <h2 className="text-h2 text-center">Our Teams at Work</h2>
            </SectionDivider>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <div className="relative aspect-video overflow-hidden">
                <Image src="/images/case-studies/bmo/1Project_Day1_MB_055-1.jpg" alt="Team on set" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative aspect-video overflow-hidden">
                <Image src="/images/case-studies/bmo/1Project_Day1_MB_1501-1.jpg" alt="Production crew" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative aspect-video overflow-hidden">
                <Image src="/images/case-studies/bmo/1Project_Day1_MB_334-1.jpg" alt="Behind the scenes" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative aspect-video overflow-hidden">
                <Image src="/images/case-studies/bmo/1Project_Day2_MB_124-1.jpg" alt="Team on location" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative aspect-video overflow-hidden">
                <Image src="/images/case-studies/bmo/1Project_Day2_MB_562-2-1.jpg" alt="Production day" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative aspect-video overflow-hidden">
                <Image src="/images/case-studies/bmo/1Project_Day2_MB_761-2-1.jpg" alt="Crew at work" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
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
