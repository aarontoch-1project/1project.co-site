import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";

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
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-hero leading-tight mb-6">
                Changing How Brands{" "}
                <span className="text-gold">Create</span>
              </h1>
              <p className="text-medium text-dark/70">
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
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 lg:px-8 bg-light">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 mb-8">Our Mission</h2>
          <p className="text-base text-dark/70 leading-relaxed">
            We&apos;re seasoned ex-agency media producers who have seen the best
            and the worst of the creative production industry: inflated budgets,
            hype-sellers, &apos;many-hats&apos; vendors, and worn-out big agency
            processes. By acting as way finders in freelance commercial
            production — our mission is to help teams own their content creation
            from end-to-end, become more agile, and develop a robust media
            pipeline that builds on their own unique strengths.
          </p>
        </div>
      </section>

      {/* Key Values */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-h2 text-center mb-16">Our Key Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <Image
                  src={v.icon}
                  alt={v.alt}
                  width={80}
                  height={80}
                  className="mx-auto mb-6"
                />
                <h3 className="text-medium font-medium mb-4">{v.title}</h3>
                <p className="text-sm text-dark/70 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 px-6 lg:px-8 bg-light">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-h2 mb-12">Our Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {partnerLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-h2 mb-10">Let&apos;s Work Together</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact-us">Let&apos;s Talk</Button>
            <Button href="/case-studies" variant="outline">
              Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
