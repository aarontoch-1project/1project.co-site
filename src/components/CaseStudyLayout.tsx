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
      <section className="relative min-h-screen flex flex-col justify-center" style={{ padding: "80px 32px 48px 32px" }}>
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="relative z-10">
          {category && (
            <span className="text-lg text-white font-normal block mb-3">{category}</span>
          )}
          <h1 className="text-[72px] font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>{title}</h1>
          <p className="text-lg text-white max-w-2xl text-left" style={{ fontFamily: "var(--font-poppins)", fontSize: "18px", fontWeight: 400 }}>{subtitle}</p>
        </div>
      </section>

      {/* ── Content Sections (alternating layout) ── */}
      <section style={{ padding: "8vw 4vw 4vw 4vw" }}>
        <div className="mx-auto max-w-[1200px] space-y-20">
          {sections.map((sec, i) => (
            <FadeIn key={sec.heading}>
              <div className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <h2 className="text-[27px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] mb-6">{sec.heading}</h2>
                  <p className="text-white/90 leading-[27px]" style={{ fontFamily: "var(--font-poppins)", fontSize: "18px", fontWeight: 400 }}>
                    {sec.body}
                  </p>
                </div>
                <div className="flex-1" />
              </div>
            </FadeIn>
          ))}

          {outputs && (
            <FadeIn>
              <div className="border-t border-rule pt-8">
                <span className="section-label block mb-3">
                  {outputsLabel || "Outputs"}
                </span>
                <p className="text-white/90 leading-[27px]" style={{ fontFamily: "var(--font-poppins)", fontSize: "18px", fontWeight: 400 }}>
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
          <section style={{ padding: "4vw" }}>
            <div className="mx-auto max-w-[1600px] grid grid-cols-2 lg:grid-cols-3 gap-2">
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
        <section style={{ padding: "4vw" }}>
          <div className="mx-auto max-w-[80vw] flex flex-col lg:flex-row justify-center gap-16">
            <div className="lg:w-[432px] shrink-0">
              <h2 className="text-[46px] font-semibold leading-tight mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
                Results &amp; Output
              </h2>
            </div>
            <div className="flex-1">
              <Accordion
                items={details.map((d) => ({
                  title: d.title,
                  content: d.description,
                }))}
                defaultOpen={0}
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Navigation ── */}
      <section style={{ padding: "120px 32px" }}>
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
