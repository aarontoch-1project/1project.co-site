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

const clientLogos: { src?: string; alt: string; placeholder?: boolean }[] = [
  { src: "/images/logos/uberlogo.png", alt: "Uber" },
  { src: "/images/logos/amazon-logo-1-768x286.png", alt: "Amazon" },
  { src: "/images/logos/BMOlogo-768x286.png", alt: "BMO" },
  { src: "/images/logos/tatalogo-768x286.png", alt: "Tata Consumer" },
  { src: "/images/logos/Pentair_logo_RGB-1-768x286.png", alt: "Pentair" },
  { alt: "Elevance Health", placeholder: true },
  { alt: "Core Equipment", placeholder: true },
  { alt: "NAD Electronics", placeholder: true },
  { alt: "Welbilt", placeholder: true },
  { alt: "Lenbrook", placeholder: true },
  { alt: "Manitowoc", placeholder: true },
  { alt: "X2 Performance", placeholder: true },
  { alt: "PSB Speakers", placeholder: true },
  { alt: "Partner 14", placeholder: true },
  { alt: "Partner 15", placeholder: true },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Full-width stacked banners — no intro heading */}
      <section className="pt-20">
        <div className="flex flex-col">
          {caseStudies.map((cs) => (
            <FadeIn key={cs.href}>
              <Link
                href={cs.href}
                className="group relative block overflow-hidden h-[65vh] min-h-[450px]"
              >
                <Image
                  src={cs.image}
                  alt={cs.alt}
                  fill
                  className="object-cover transition-all duration-600 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-end text-right p-8 lg:p-16">
                  <div>
                    <span className="block mb-3 text-[18px] text-white font-normal">
                      {cs.category}
                    </span>
                    <h2 className="text-h2 lg:text-[3rem] text-white font-bold leading-tight">
                      {cs.title}
                    </h2>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Client Logo Grid */}
      <FadeIn>
        <section className="py-16 bg-dark">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center opacity-50">
              {clientLogos.map((logo, i) =>
                logo.placeholder ? (
                  <div
                    key={i}
                    className="w-[120px] h-[48px] bg-[#2a2a2a] border border-dashed border-[#C99A22] flex items-center justify-center rounded"
                  >
                    <span className="text-[#C99A22] text-[8px] uppercase tracking-wider">{logo.alt}</span>
                  </div>
                ) : (
                  <Image
                    key={i}
                    src={logo.src!}
                    alt={logo.alt}
                    width={120}
                    height={48}
                    className="h-12 w-auto object-contain invert hover:opacity-80 transition-opacity"
                  />
                )
              )}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8 text-center">
          <Link
            href="/contact-us"
            className="inline-block bg-gold text-dark text-sm font-medium px-8 py-3 rounded-md hover:bg-lightning transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </section>
      </FadeIn>
    </>
  );
}
