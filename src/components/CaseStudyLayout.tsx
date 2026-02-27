import Image from "next/image";
import Link from "next/link";
import { SectionDivider } from "./SectionDivider";
import { FadeIn } from "./FadeIn";

interface Detail {
  title: string;
  description: string;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  category?: string;
  heroImage: string;
  heroAlt: string;
  sections: { heading: string; body: string }[];
  outputs?: string;
  outputsLabel?: string;
  details: Detail[];
  images?: { src: string; alt: string; w: number; h: number }[];
  nextStudy: { title: string; href: string };
}

export function CaseStudyLayout({
  title,
  subtitle,
  category,
  heroImage,
  heroAlt,
  sections,
  outputs,
  outputsLabel,
  details,
  images,
  nextStudy,
}: CaseStudyLayoutProps) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[500px]">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 pb-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {category && (
              <span className="section-label block mb-3">{category}</span>
            )}
            <h1 className="text-hero leading-tight mb-4">{title}</h1>
            <p className="text-lg text-white/70 max-w-2xl">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* ── Content Sections (alternating layout) ── */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-20">
          {sections.map((sec, i) => (
            <FadeIn key={sec.heading}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div>
                  <h2 className="text-h2 mb-6">{sec.heading}</h2>
                </div>
                <div>
                  <p className="text-base text-white/70 leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}

          {outputs && (
            <FadeIn>
              <div className="border-t border-rule pt-8">
                <span className="section-label block mb-3">
                  {outputsLabel || "Outputs"}
                </span>
                <p className="text-base text-white/60 leading-relaxed">
                  {outputs}
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ── Image Gallery ── */}
      {images && images.length > 0 && (
        <FadeIn>
          <section className="px-6 lg:px-8 pb-24">
            <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-3 gap-2">
              {images.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-video overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      )}

      {/* ── Details / Results ── */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-10">
            {details.map((d) => (
              <div key={d.title} className="border-b border-rule pb-8">
                <h3 className="text-h3 mb-3">{d.title}</h3>
                <p className="text-base text-white/60 leading-relaxed">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── Navigation ── */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionDivider className="mb-12">
            <h2 className="text-h2 text-center whitespace-nowrap">
              Check Out More Case Studies
            </h2>
          </SectionDivider>
          <div className="flex justify-center gap-8 text-sm">
            <Link
              href={nextStudy.href}
              className="text-gold hover:text-lightning transition-colors"
            >
              {nextStudy.title} &rarr;
            </Link>
            <Link
              href="/case-studies"
              className="text-white/50 hover:text-white transition-colors"
            >
              All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
