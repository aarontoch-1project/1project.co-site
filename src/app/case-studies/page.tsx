import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how 1Project helps brands like Amazon, Tata Consumer, BMO, NAD Electronics, Pentair, and Core Equipment produce high-quality creative content at scale.",
};

const caseStudies = [
  {
    title: "AMAZON",
    category: "Video Pipeline",
    href: "/case-studies/amazon",
    image: "/images/case-studies/index/Main-Banner-1-e1712813061725.png",
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
    image: "/images/case-studies/bmo/Banner-bmo-1.png",
    alt: "BMO case study banner",
  },
  {
    title: "NAD ELECTRONICS",
    category: "Feature Documentary",
    href: "/case-studies/nad-electronics",
    image: "/images/case-studies/nad/NAD-banner-1-1.png",
    alt: "NAD Electronics case study banner",
  },
  {
    title: "PENTAIR",
    category: "Asset Library",
    href: "/case-studies/manitowoc-ice",
    image: "/images/case-studies/index/Banner-1-1.png",
    alt: "Pentair case study banner",
  },
  {
    title: "CORE",
    category: "Lifestyle Content",
    href: "/case-studies/core-equipment-co",
    image: "/images/case-studies/index/Banner-Image-1-1.png",
    alt: "Core Equipment case study banner",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-hero leading-tight mb-4">
            Our <span className="text-gold italic">Work</span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl">
            Explore how we help brands build scalable, high-quality content
            production systems.
          </p>
        </div>
      </section>

      {/* Portfolio Grid — matching homepage layout */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl flex flex-col gap-2">
          {/* Row 1: Amazon full-width */}
          <FadeIn>
            <Link
              href={caseStudies[0].href}
              className="group relative block overflow-hidden aspect-[21/9]"
            >
              <Image
                src={caseStudies[0].image}
                alt={caseStudies[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="section-label block mb-2">
                  {caseStudies[0].category}
                </span>
                <h2 className="text-h2 text-white">{caseStudies[0].title}</h2>
              </div>
            </Link>
          </FadeIn>

          {/* Row 2: Tata + BMO side by side */}
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {caseStudies.slice(1, 3).map((cs) => (
                <Link
                  key={cs.href}
                  href={cs.href}
                  className="group relative block overflow-hidden aspect-video"
                >
                  <Image
                    src={cs.image}
                    alt={cs.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="section-label block mb-2">
                      {cs.category}
                    </span>
                    <h2 className="text-h3 text-white">{cs.title}</h2>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>

          {/* Row 3: NAD full-width */}
          <FadeIn>
            <Link
              href={caseStudies[3].href}
              className="group relative block overflow-hidden aspect-[21/9]"
            >
              <Image
                src={caseStudies[3].image}
                alt={caseStudies[3].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="section-label block mb-2">
                  {caseStudies[3].category}
                </span>
                <h2 className="text-h2 text-white">{caseStudies[3].title}</h2>
              </div>
            </Link>
          </FadeIn>

          {/* Row 4: Pentair + Core side by side */}
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {caseStudies.slice(4, 6).map((cs) => (
                <Link
                  key={cs.href}
                  href={cs.href}
                  className="group relative block overflow-hidden aspect-video"
                >
                  <Image
                    src={cs.image}
                    alt={cs.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="section-label block mb-2">
                      {cs.category}
                    </span>
                    <h2 className="text-h3 text-white">{cs.title}</h2>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 text-center">
        <Link
          href="/contact-us"
          className="inline-block bg-gold text-dark text-sm font-medium px-8 py-3 rounded-md hover:bg-lightning transition-colors"
        >
          Let&apos;s Talk
        </Link>
      </section>
    </>
  );
}
