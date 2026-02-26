import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

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
      <section className="pt-32 pb-8 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-hero leading-tight mb-6">
            Our <span className="text-gold">Work</span>
          </h1>
          <p className="text-base text-dark/60 max-w-xl mx-auto">
            Explore how we help brands build scalable, high-quality content
            production systems.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <h2 className="text-h3 text-white">{cs.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 text-center">
        <Button href="/contact-us">Let&apos;s Talk</Button>
      </section>
    </>
  );
}
