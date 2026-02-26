import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Whether it's stills, video, 3D modeling, or generative content — 1Project is built for content versatility. Strategic, lean, scalable, transparent, and global production.",
};

const services = [
  {
    title: "Stunning Brand Narratives",
    description:
      "Short-form, long-form or free-form — there is no wrong way to show off your brand as the main character. Expand on the type of stories you tell with access to ideation sourced from multiple teams, formats built to thrive on modern social media, and directors exploring the latest trends in video tech.",
    icon: "/images/services/free_icon_1.svg",
    alt: "Brand narratives icon",
  },
  {
    title: "Authentic Lifestyle Imagery",
    description:
      "Crafting true-to-life content is one of our key specialties. Hone-in on a unique and effortless lifestyle aesthetic for your brand. Easily add more real-people talent, geo-specific locales, and can\u2019t-fake-that moments by leveraging \u2018hidden-gem\u2019 photographers and scenario based shoots.",
    icon: "/images/services/free_icon_1-2.svg",
    alt: "Lifestyle imagery icon",
  },
  {
    title: "Specialty and Niche Production",
    description:
      "Make your campaigns stand out visually with exhilarating first-person drone footage, add AR demos to activations with custom 3D models, or be bold with artisan-grade food beauty and stylized product photography.",
    icon: "/images/services/free_icon_1-3.svg",
    alt: "Niche production icon",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Getting To Know You",
    description:
      "First — we dive into who you are and what you do best. This initial interview helps us get a nuanced and detailed outline of your content needs, team structure, internal resources, brand goals, current workflows, and how you like to work.",
  },
  {
    step: "02",
    title: "Creative Calibration",
    description:
      "Next — we zero-in on your brand\u2019s visual identity with our Creative Calibration. In a guided session we take you through various creative references, discuss tone and voice, and examine your existing brand aesthetic through the lens of production services.",
  },
  {
    step: "03",
    title: "A Framework for Success",
    description:
      "Your feedback is distilled into 3 tools: a Brand Master Brief with technical needs and visual references, a Production Menu with ready-to-launch productions and transparent pricing, and a Network Sampler with curated portfolios matched to your projects.",
  },
  {
    step: "04",
    title: "Let\u2019s Get To Work",
    description:
      "Now we can get started — in whatever way makes sense to you. Our flexible model means you can launch projects as you need them, set-up long-term recurrent shoots, request something new, or have us consult and tag-in on an upcoming need.",
  },
];

const audiences = [
  {
    title: "Forward-Thinking Marketing Leaders",
    description:
      "Good leaders are always looking for ways to stay ahead of the curve. We give CMOs, VP\u2019s, and Marketing Directors the ability to quickly make their departments more agile, self-sufficient, and capable of larger internal projects.",
  },
  {
    title: "Ambitious Brand Teams",
    description:
      "Keeping a brand identity both fresh and strong means trying new ideas with consistency. 1Project\u2019s producer team adds a valuable extra layer of brand-QA across projects and our reshoot-insurance opens the door for more experimentation with less risk.",
  },
  {
    title: "Resourceful In-House Producers",
    description:
      "Staying on-top of media needs for multiple channels doesn\u2019t always mean wearing more hats. Our flexible involvement model means producers can get support on their most complex projects or pull specific resources in only as-needed.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-hero leading-tight mb-6">
            Production That&apos;s{" "}
            <span className="text-gold">Strategic</span>
          </h1>
          <p className="text-medium text-dark/70 max-w-2xl mx-auto mb-4">
            Whether it&apos;s stills, video, 3D modeling, or even generative
            content — we&apos;re here to get you the most out of every project.
          </p>
          <p className="text-base text-dark/60 max-w-xl mx-auto">
            1Project is built for content versatility. Here are some of the ways
            we help teams Get Creative.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 lg:px-8 bg-light">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 shadow-natural hover:shadow-lg transition-shadow"
              >
                <Image
                  src={s.icon}
                  alt={s.alt}
                  width={64}
                  height={64}
                  className="mb-6"
                />
                <h2 className="text-medium font-medium mb-4">{s.title}</h2>
                <p className="text-sm text-dark/70 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Docu-style Storytelling */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 mb-6">Engaging Docu-style Storytelling</h2>
          <p className="text-base text-dark/70 leading-relaxed">
            We have a rich history of helping brands use real stories to drive
            consistent and powerful engagement. Master your human-centric media
            by leaning on the editorial producers, cross channel story formats,
            and global teams we&apos;ve collected to both educate and entertain
            your audiences.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-8 bg-dark text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-label uppercase tracking-widest text-gold block mb-4">
              Built to Fit
            </span>
            <h2 className="text-h2 mb-6">
              Nothing Less Than Seamless Integration
            </h2>
            <p className="text-base text-white/60 max-w-2xl mx-auto">
              Great partnerships are driven by an attention to synergy. Our
              process is designed to adapt creative industry best practices to
              your ideal workflow, team structure, budget cycle, and aesthetic
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="border border-white/10 rounded-2xl p-8 hover:border-gold/40 transition-colors"
              >
                <span className="text-gold text-label font-medium block mb-3">
                  Step {step.step}
                </span>
                <h3 className="text-medium font-medium mb-4">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Image
            src="/images/services/site-table-transparent.png"
            alt="1Project compared to other production options"
            width={1459}
            height={877}
            className="w-full h-auto hidden md:block"
          />
          <Image
            src="/images/services/mobile-site-table-1-1.png"
            alt="1Project compared to other production options"
            width={500}
            height={768}
            className="w-full h-auto md:hidden"
          />
        </div>
      </section>

      {/* Who Uses Us */}
      <section className="py-24 px-6 lg:px-8 bg-light">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-h2 text-center mb-16">Who Uses Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl p-8">
                <h3 className="text-medium font-medium mb-4">{a.title}</h3>
                <p className="text-sm text-dark/70 leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-h2 mb-10">Ready to Get Creative?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact-us">Let&apos;s Talk</Button>
            <Button href="/case-studies" variant="outline">
              Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
