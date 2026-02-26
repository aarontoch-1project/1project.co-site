import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Homepage - 1Project.Co creative production house",
  description:
    "Creative content production made simple. 1Project connects you with top freelance creators and producers to deliver high-quality video, photo, and 3D content, on time, on budget, and without retainers.",
};

const clientLogos = [
  { src: "/images/logos/uberlogo.png", alt: "Uber client logo", w: 120, h: 45 },
  { src: "/images/logos/amazon-logo-1-768x286.png", alt: "Amazon client logo", w: 120, h: 45 },
  { src: "/images/logos/BMOlogo-768x286.png", alt: "BMO client logo", w: 120, h: 45 },
  { src: "/images/logos/tatalogo-768x286.png", alt: "Tata Consumer client logo", w: 120, h: 45 },
  { src: "/images/logos/Pentair_logo_RGB-1-768x286.png", alt: "Pentair client logo", w: 120, h: 45 },
];

const caseStudies = [
  {
    title: "AMAZON",
    category: "Video Pipeline",
    href: "/case-studies/amazon",
    image: "/images/homepage/Main-Banner-e1714164961359.png",
    alt: "Amazon case study banner",
  },
  {
    title: "TATA CONSUMER",
    category: "Brand Video",
    href: "/case-studies/eight-o-clock-coffee",
    image: "/images/homepage/Banner-Image-1.png",
    alt: "Tata Consumer case study banner",
  },
  {
    title: "BMO",
    category: "Cross-Channel Media",
    href: "/case-studies/bmo-small-business",
    image: "/images/homepage/Banner-bmo-1.png",
    alt: "BMO case study banner",
  },
  {
    title: "NAD ELECTRONICS",
    category: "Feature Documentary",
    href: "/case-studies/nad-electronics",
    image: "/images/homepage/NAD-banner-1-1.png",
    alt: "NAD Electronics case study banner",
  },
];

const capabilities = [
  {
    title: "Double or Triple Content Output",
    description:
      "We\u2019re built to handle multiple productions simultaneously and can help you get the most out of the latest AI tools. We\u2019ll help you achieve the volume you need to have authentic and purposeful media for every platform.",
  },
  {
    title: "Invest in Foundational Systems",
    description:
      "We do more than just get you stunning content. Our projects are designed with the future in mind, using repeatable and scalable strategies you can integrate into a robust content pipeline.",
  },
  {
    title: "Feed Brand Books",
    description:
      "Our iterative Master Briefing framework provides content standards that grow with you. Create brand-specific photography, video, and post-production guidelines to drive consistency across formats.",
  },
  {
    title: "Work in Your Own Way",
    description:
      "Our production workflows are designed around your team\u2019s existing structure, chain of approvals, budgets, and internal resources. We follow your lead on what works best for you.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-hero leading-tight mb-6">
            Content That{" "}
            <span className="text-gold">Performs</span>
          </h1>
          <p className="text-medium text-dark/70 max-w-2xl mx-auto mb-4">
            Supercharging brand teams with their own freelance creative networks
          </p>
          <p className="text-base text-dark/60 max-w-xl mx-auto mb-10">
            1Project provides managed creative production to help brands become
            content Powerhouses
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button href="/contact-us">Let&apos;s Talk</Button>
            <Button href="/case-studies" variant="outline">
              See More Work
            </Button>
          </div>

          {/* Client logos */}
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-60">
            {clientLogos.map((logo) => (
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

      {/* ===== VALUE PROPS ===== */}
      <section className="py-24 px-6 lg:px-8 bg-light">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-h2 leading-tight mb-6">
              Reliable Access to the Right Freelancers
            </h2>
            <p className="text-base text-dark/70 leading-relaxed">
              Utilize a diverse network of freelance talent without any of the
              heavy lifting. We own the relationship between you and over 600+
              vetted professionals to provide a guarantee against their
              performance.
            </p>
          </div>
          <div>
            <h2 className="text-h2 leading-tight mb-6">
              Winning Strategies We&apos;ve Perfected
            </h2>
            <p className="text-base text-dark/70 leading-relaxed">
              Our seasoned producers consult on, design, and run your projects
              from idea to delivery to minimize oversight and maximize output.
              Fully-managed means your team can focus on what really matters.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-h2">Our Work</h2>
            <Link
              href="/case-studies"
              className="text-sm font-medium text-gold hover:text-lightning transition-colors"
            >
              View All Case Studies &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.href}
                href={cs.href}
                className="group relative overflow-hidden rounded-2xl aspect-video"
              >
                <Image
                  src={cs.image}
                  alt={cs.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-label uppercase tracking-widest text-gold mb-2 block">
                    {cs.category}
                  </span>
                  <h3 className="text-h3 text-white">{cs.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IN-HOUSE ENHANCED ===== */}
      <section className="py-24 px-6 lg:px-8 bg-dark text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-label uppercase tracking-widest text-gold block mb-4">
              In-House Enhanced
            </span>
            <h2 className="text-h2 mb-6">
              Maintain an Unmistakable Aesthetic
            </h2>
            <p className="text-base text-white/60 max-w-2xl mx-auto">
              Great brands need amazing content. 1Project supports teams with
              the right talent and production strategy to add depth, consistency
              and authenticity to every campaign.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="border border-white/10 rounded-2xl p-8 hover:border-gold/40 transition-colors"
              >
                <h3 className="text-medium font-medium mb-4">{cap.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/services">Our Services</Button>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-h2 mb-6">Ready to Get Started?</h2>
          <p className="text-base text-dark/60 mb-10">
            Let us show you how 1Project can help your brand become a content
            powerhouse.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact-us">Let&apos;s Talk</Button>
            <Button href="/about-us" variant="outline">
              About Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
