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
      {/* Full-width stacked banners — no intro heading */}
      <section className="pt-20">
        <div className="flex flex-col">
          {caseStudies.map((cs) => (
            <FadeIn key={cs.href}>
              <Link
                href={cs.href}
                className="group relative block overflow-hidden h-[85vh] min-h-[500px]"
              >
                <Image
                  src={cs.image}
                  alt={cs.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 lg:p-16">
                  <span className="section-label block mb-3">
                    {cs.category}
                  </span>
                  <h2 className="text-h2 lg:text-[3rem] text-white font-bold">
                    {cs.title}
                  </h2>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

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
