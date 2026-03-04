import Image from "next/image";
import Link from "next/link";
import { SectionDivider } from "./SectionDivider";
import { FadeIn } from "./FadeIn";
import { Accordion } from "./Accordion";

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
          <div className="mx-auto max-w-[1200px]">
            {category && (
              <Link href="/case-studies" className="text-lg text-white font-normal block mb-3 hover:text-white/80 transition-colors">{category}</Link>
            )}
            <h2 className="text-[46px] font-semibold leading-[55.2px] mb-4">{title}</h2>
            <p className="text-lg text-white max-w-2xl text-left">{subtitle}</p>
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
                  <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] mb-6">{sec.heading}</h2>
                </div>
                <div>
                  <p className="text-lg text-white/90 leading-[27px]">
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
                <p className="text-lg text-white/90 leading-[27px]">
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
            <div className="mx-auto max-w-[1200px] grid grid-cols-2 lg:grid-cols-3 gap-2">
              {images.map((img) => (
                <div
                  key={img.src}
                  className="relative overflow-hidden"
                  style={{ aspectRatio: `${img.w}/${img.h}` }}
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

      {/* ── Details / Results (Accordion) ── */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Accordion
              items={details.map((d) => ({
                title: d.title,
                content: d.description,
              }))}
              defaultOpen={0}
            />
          </div>
        </section>
      </FadeIn>

      {/* ── Navigation ── */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionDivider className="mb-12">
            <h2 className="text-[36px] lg:text-[46px] font-semibold leading-[43px] lg:leading-[55.2px] text-center whitespace-nowrap">
              Check Out More Case Studies
            </h2>
          </SectionDivider>
          <div className="flex justify-center gap-4">
            <Link
              href={nextStudy.href}
              className="inline-block bg-gold text-dark px-[56px] py-6 rounded-[5px] font-bold border-2 border-gold hover:bg-lightning transition-colors"
            >
              {nextStudy.title} &rarr;
            </Link>
            <Link
              href="/case-studies"
              className="inline-block border-2 border-gold text-gold px-[56px] py-6 rounded-[5px] bg-transparent font-bold hover:bg-gold/10 transition-colors"
            >
              All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
