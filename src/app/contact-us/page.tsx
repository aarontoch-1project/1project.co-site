import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Start a project with 1Project. Tell us about how you want to grow your team, a challenging idea, or that one project that's been slowing you down.",
};

const clientLogos = [
  { src: "/images/contact/uberlogo-300x112.png", alt: "Uber", w: 80, h: 30 },
  { src: "/images/contact/amazon-logo-1-300x112.png", alt: "Amazon", w: 80, h: 30 },
  { src: "/images/contact/BMOlogo-1024x381.png", alt: "BMO", w: 80, h: 30 },
  { src: "/images/contact/tatalogo-1024x381.png", alt: "Tata Consumer", w: 80, h: 30 },
  { src: "/images/contact/Pentair_logo_RGB-2-1024x381.png", alt: "Pentair", w: 80, h: 30 },
];

const tags = [
  "Authentic Lifestyle",
  "Niche Video Production",
  "Maximizing Budgets",
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — copy */}
            <FadeIn>
              <div>
                <h1 className="text-hero leading-tight mb-6">
                  Start a <span className="text-gold italic">Project</span>
                </h1>
                <p className="text-base text-white/60 leading-relaxed mb-8">
                  Tell us about how you want to grow your team, a challenging
                  idea in an upcoming campaign, or that one project that&apos;s
                  been slowing you down. We&apos;ll show you how 1Project can
                  help you do it better.
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-label uppercase tracking-widest border border-gold/40 text-gold px-4 py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Client logos */}
                <div className="flex flex-wrap items-center gap-8 opacity-40">
                  {clientLogos.map((logo) => (
                    <Image
                      key={logo.src}
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.w}
                      height={logo.h}
                      className="object-contain invert"
                    />
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right — form */}
            <FadeIn delay={0.2}>
              <div className="border border-white/10 p-8 lg:p-12">
                <form className="flex flex-col gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/60 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/60 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/60 transition-colors resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gold text-dark text-sm font-medium px-8 py-3 rounded-md hover:bg-lightning transition-colors self-start"
                  >
                    Start a Project
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
