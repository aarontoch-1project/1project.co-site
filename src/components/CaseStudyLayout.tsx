import Image from "next/image";
import Link from "next/link";

interface Stat {
  value: string;
  label: string;
}

interface Detail {
  title: string;
  description: string;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  sections: { heading: string; body: string }[];
  outputs?: string;
  details: Detail[];
  stats: Stat[];
  images?: { src: string; alt: string; w: number; h: number }[];
  nextStudy: { title: string; href: string };
}

export function CaseStudyLayout({
  title,
  subtitle,
  heroImage,
  heroAlt,
  sections,
  outputs,
  details,
  stats,
  images,
  nextStudy,
}: CaseStudyLayoutProps) {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-hero text-white mb-4">{title}</h1>
            <p className="text-medium text-white/80 max-w-2xl">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-dark text-white py-8 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="block text-h3 text-gold">{s.value}</span>
              <span className="text-label uppercase tracking-widest text-white/50">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Content sections */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-16">
          {sections.map((sec) => (
            <div key={sec.heading}>
              <h2 className="text-h2 mb-6">{sec.heading}</h2>
              <p className="text-base text-dark/70 leading-relaxed whitespace-pre-line">
                {sec.body}
              </p>
            </div>
          ))}

          {outputs && (
            <div className="bg-light rounded-2xl p-8">
              <h3 className="text-medium font-medium mb-3">Outputs</h3>
              <p className="text-sm text-dark/70 leading-relaxed">{outputs}</p>
            </div>
          )}
        </div>
      </section>

      {/* Image gallery */}
      {images && images.length > 0 && (
        <section className="py-16 px-6 lg:px-8 bg-light">
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img) => (
              <div
                key={img.src}
                className="relative aspect-video rounded-xl overflow-hidden"
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
      )}

      {/* Details grid */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {details.map((d) => (
            <div
              key={d.title}
              className="border border-dark/10 rounded-2xl p-8 hover:border-gold/40 transition-colors"
            >
              <h3 className="text-medium font-medium mb-4">{d.title}</h3>
              <p className="text-sm text-dark/70 leading-relaxed">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-6 lg:px-8 bg-light">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-4">
          <Link
            href={nextStudy.href}
            className="inline-block bg-gold text-white text-sm font-medium px-14 py-4 rounded-full hover:bg-lightning hover:shadow-natural transition-all duration-300"
          >
            Next: {nextStudy.title}
          </Link>
          <Link
            href="/case-studies"
            className="inline-block border-2 border-dark text-dark text-sm font-medium px-8 py-3.5 rounded-full hover:bg-dark hover:text-white transition-all duration-300"
          >
            All Case Studies
          </Link>
        </div>
      </section>
    </>
  );
}
