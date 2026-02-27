import type { Metadata } from "next";
import { CyclingText } from "@/components/CyclingText";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { GoldFrame } from "@/components/GoldFrame";
import { Accordion } from "@/components/Accordion";
import { SectionDivider } from "@/components/SectionDivider";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Whether it's stills, video, 3D modeling, or generative content — 1Project is built for content versatility. Strategic, lean, scalable, transparent, and global production.",
};

const processItems = [
  {
    title: "Getting To Know You",
    content:
      "First — we dive into who you are and what you do best. This initial interview helps us get a nuanced and detailed outline of your content needs, team structure, internal resources, brand goals, current workflows, and how you like to work.",
  },
  {
    title: "Creative Calibration",
    content:
      "Next — we zero-in on your brand\u2019s visual identity with our Creative Calibration. In a guided session we take you through various creative references, discuss tone and voice, and examine your existing brand aesthetic through the lens of production services.",
  },
  {
    title: "A Framework for Success",
    content:
      "Your feedback is distilled into 3 tools: a Brand Master Brief with technical needs and visual references, a Production Menu with ready-to-launch productions and transparent pricing, and a Network Sampler with curated portfolios matched to your projects.",
  },
  {
    title: "Let\u2019s Get To Work",
    content:
      "Now we can get started — in whatever way makes sense to you. Our flexible model means you can launch projects as you need them, set-up long-term recurrent shoots, request something new, or have us consult and tag-in on an upcoming need.",
  },
];

const comparisonData = {
  columns: ["1PROJECT", "Agency Production", "Production Houses", "Internal Producer"],
  rows: [
    {
      category: "Flexibility",
      cells: [
        "Hundreds of high-quality freelancers for any style, locale, or budget.",
        "High-end preferred vendors only — with preferred pricing.",
        "Expertise with one or two types of content.",
        "Limited by personal network, local rates, and availability.",
      ],
    },
    {
      category: "Process",
      cells: [
        "Long-term, repeatable, and custom production processes.",
        "Rigid workflows, driven by \u2018best-practices\u2019 and layers of approvals.",
        "Workflows designed around their strengths, not yours.",
        "Must onboard new vendors every time.",
      ],
    },
  ],
};

const testimonials = [
  {
    quote: (
      <>
        I view 1Project as an{" "}
        <span className="gold-highlight">
          extension of our in-house creative team
        </span>
        , readily available to tackle virtually any photo or video needs I may
        throw their way&hellip; well-versed in our brand and meticulous in
        executing shoots to match those standards and expectations.
      </>
    ),
    name: "Kris K",
    title: "Manager of Creative Production Services",
    company: "Love\u2019s Travel Stops",
  },
  {
    quote: (
      <>
        The greatest thing about 1Project&rsquo;s team is not just their high
        quality execution and high output speed, but their{" "}
        <span className="gold-highlight">impressive flexibility</span>, and how
        much they truly try to understand how our business works to adapt their
        model to best suit our needs&hellip;
      </>
    ),
    name: "Henrique G",
    title: "Product Manager",
    company: "Uber",
  },
  {
    quote: (
      <>
        Diligent, meticulous, and{" "}
        <span className="gold-highlight">collaborative</span>, their team
        ensured the creative development and planning stages went off without a
        hitch&hellip; technical details and stylistic recommendations{" "}
        <span className="gold-highlight">
          before, during, and after production
        </span>{" "}
        resulted in terrific ads&hellip;
      </>
    ),
    name: "Ash K",
    title: "Global Client Management Lead",
    company: "Tata Consumer",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── 1. Hero: Video + Cycling Text ── */}
      <section className="relative">
        <VideoPlaceholder
          label="Services showreel / interior design video — autoplay, loop, muted"
          aspect="hero"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 pb-24">
            <h1 className="text-hero leading-tight mb-4">
              Production That&rsquo;s
            </h1>
            <CyclingText
              words={[
                "Strategic",
                "Lean",
                "Scalable",
                "Transparent",
                "Global",
              ]}
              className="text-cycling"
            />
          </div>
        </div>
      </section>

      {/* ── 2. "Get Creative" Intro ── */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-h2 lg:text-[2.75rem] leading-snug text-white mb-6">
              Whether it&rsquo;s stills, video, 3D modeling, or even generative
              content — we&rsquo;re here to{" "}
              <span className="gold-highlight">get you the most</span> out of
              every project.
            </p>
            <p className="text-lg text-white/60">
              1Project is built on our <em>versatility</em>. Here are some of
              the ways we help teams{" "}
              <span className="relative inline-block">
                <span className="text-gold font-bold">Get Creative</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6 C 40 2, 80 6, 120 3 S 170 5, 198 3"
                    stroke="#C99A22"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ── 3. Service Block: Stunning Brand Narratives (text L, image R) ── */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-6">Stunning Brand Narratives</h2>
              <p className="text-base text-white/70 leading-relaxed">
                Short-form, long-form or free-form — there is no wrong way to
                show off your brand as the main character. Expand on the type of
                stories you tell with access to ideation sourced from multiple
                teams, formats built to{" "}
                <span className="gold-highlight">
                  thrive on modern social media
                </span>
                , and directors exploring the latest trends in video tech.
              </p>
            </div>
            <GoldFrame direction="right">
              <VideoPlaceholder
                label="Brand narrative showreel — autoplay, loop, muted"
                aspect="video"
              />
            </GoldFrame>
          </div>
        </section>
      </FadeIn>

      {/* ── 4. Service Block: Authentic Lifestyle Imagery (image L, text R) ── */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame direction="left">
              <VideoPlaceholder
                label="Lifestyle photography / behind-the-scenes — autoplay, loop, muted"
                aspect="video"
              />
            </GoldFrame>
            <div>
              <h2 className="text-h2 mb-6">Authentic Lifestyle Imagery</h2>
              <p className="text-base text-white/70 leading-relaxed">
                Crafting true-to-life content is one of our key specialties.
                Hone-in on a unique and effortless lifestyle aesthetic for your
                brand. Easily add more real-people talent, geo-specific locales,
                and can&rsquo;t-fake-that moments by leveraging{" "}
                <span className="gold-highlight">
                  &lsquo;hidden-gem&rsquo; photographers
                </span>{" "}
                and scenario based shoots.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 5. Service Block: Specialty and Niche Production (text L, image R) ── */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-6">Specialty and Niche Production</h2>
              <p className="text-base text-white/70 leading-relaxed">
                Make your campaigns stand out visually with{" "}
                <span className="gold-highlight">
                  exhilarating first-person drone footage
                </span>
                , add AR demos to activations with custom 3D models, or be bold
                with artisan-grade food beauty and stylized product photography.
              </p>
            </div>
            <GoldFrame direction="right">
              <VideoPlaceholder
                label="Drone footage / niche production reel — autoplay, loop, muted"
                aspect="video"
              />
            </GoldFrame>
          </div>
        </section>
      </FadeIn>

      {/* ── 6. Service Block: Engaging Docu-style Storytelling (image L, text R) ── */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GoldFrame direction="left">
              <VideoPlaceholder
                label="Documentary-style storytelling footage — autoplay, loop, muted"
                aspect="video"
              />
            </GoldFrame>
            <div>
              <h2 className="text-h2 mb-6">Engaging Docu-style Storytelling</h2>
              <p className="text-base text-white/70 leading-relaxed">
                We have a rich history of helping brands use real stories to
                drive consistent and powerful engagement. Master your
                human-centric media by leaning on the{" "}
                <span className="gold-highlight">editorial producers</span>,
                cross channel story formats, and global teams we&rsquo;ve
                collected to both educate and entertain your audiences.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 7. "Built to Fit" Accordion Section ── */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: label + heading + body */}
            <div>
              <span className="section-label block mb-4">Built to Fit</span>
              <h2 className="text-h2 mb-6">
                Nothing Less Than <em>Seamless</em> Integration
              </h2>
              <p className="text-base text-white/70 leading-relaxed">
                Great partnerships are driven by an attention to synergy. Our
                process is designed to{" "}
                <strong className="text-white">
                  adapt creative industry best practices
                </strong>{" "}
                to your ideal workflow, team structure, budget cycle, and
                aesthetic needs.
              </p>
            </div>
            {/* Right: accordion */}
            <Accordion items={processItems} />
          </div>
        </section>
      </FadeIn>

      {/* ── 8. Comparison Table ── */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-x-auto">
            <table className="w-full border-collapse text-sm min-w-[700px]">
              <thead>
                <tr>
                  <th className="p-4 text-left text-white/50 font-medium border-b border-rule" />
                  {comparisonData.columns.map((col, i) => (
                    <th
                      key={col}
                      className={`p-4 text-left font-semibold border-b border-rule ${
                        i === 0
                          ? "text-gold border-l-2 border-t-2 border-r-2 border-gold bg-gold/5"
                          : "text-white/80"
                      }`}
                    >
                      {i === 0 ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border border-gold flex items-center justify-center text-[10px] font-bold text-white">
                            1
                          </span>
                          {col}
                        </span>
                      ) : (
                        col
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.rows.map((row, ri) => (
                  <tr key={row.category}>
                    <td className="p-4 font-medium text-white/60 border-b border-rule align-top">
                      {row.category}
                    </td>
                    {row.cells.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`p-4 text-white/70 border-b border-rule align-top leading-relaxed ${
                          ci === 0
                            ? "border-l-2 border-gold bg-gold/5" +
                              (ri === comparisonData.rows.length - 1
                                ? " border-b-2"
                                : "")
                            : ""
                        }${
                          ci === 0 && ri === comparisonData.rows.length - 1
                            ? " border-r-2 border-gold"
                            : ci === 0
                            ? " border-r-2 border-gold"
                            : ""
                        }`}
                      >
                        <span className="flex gap-2">
                          <svg
                            className="w-4 h-4 text-gold shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          {cell}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </FadeIn>

      {/* ── 9. "Who Uses Us?" ── */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionDivider className="mb-16">
              <h2 className="text-h2 text-center">Who Uses Us?</h2>
            </SectionDivider>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {/* Forward-Thinking Marketing Leaders */}
              <div>
                <svg
                  className="w-12 h-12 text-gold mx-auto mb-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <h3 className="text-medium font-semibold mb-3">
                  Forward-Thinking Marketing Leaders
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Good leaders are always looking for ways to stay ahead of the
                  curve. We give CMOs, VP&rsquo;s, and Marketing Directors the
                  ability to quickly make their departments more agile,
                  self-sufficient, and capable of larger internal projects.
                </p>
              </div>

              {/* Ambitious Brand Teams */}
              <div>
                <svg
                  className="w-12 h-12 text-gold mx-auto mb-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                <h3 className="text-medium font-semibold mb-3">
                  Ambitious Brand Teams
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Keeping a brand identity both fresh and strong means trying new
                  ideas with consistency. 1Project&rsquo;s producer team adds a
                  valuable extra layer of brand-QA across projects and our
                  reshoot-insurance opens the door for more experimentation with
                  less risk.
                </p>
              </div>

              {/* Resourceful In-House Producers */}
              <div>
                <svg
                  className="w-12 h-12 text-gold mx-auto mb-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                <h3 className="text-medium font-semibold mb-3">
                  Resourceful In-House Producers
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Staying on-top of media needs for multiple channels
                  doesn&rsquo;t always mean wearing more hats. Our flexible
                  involvement model means producers can get support on their most
                  complex projects or pull specific resources in only as-needed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 10. Testimonials Carousel ── */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
    </>
  );
}
