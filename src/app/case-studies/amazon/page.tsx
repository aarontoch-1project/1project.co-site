import type { Metadata } from "next";
import Link from "next/link";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { SectionDivider } from "@/components/SectionDivider";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "AMAZON",
  description:
    "Building a video production system to bring a program to life. See how 1Project helped Amazon create scalable video production for high-performing stores.",
};

const results = [
  {
    title: "Streamlining Choice",
    description:
      "Every video was pitched under a fixed-bidding system \u2014 letting clients choose from multiple teams based on creative alone.",
  },
  {
    title: "Staying on Track",
    description:
      "Despite sometimes being vastly different types of shoots \u2014 turnaround remained consistent at 3 weeks from briefings.",
  },
  {
    title: "Unlimited Revisions",
    description:
      "For consistency, all post-production was centralized by 1Project\u2019s in-house editors \u2014 making draft revisions faster and removing any concerns of scope-creep on freelancers.",
  },
  {
    title: "No Cost Extras",
    description:
      "Every video\u2019s shooting-methodology incorporated ample B-roll with unlimited usage. This way stores got matching, on-brand assets they could use outside the scope of the program\u2019s OTT campaigns.",
  },
];

export default function AmazonCaseStudy() {
  return (
    <>
      {/* ── 1. Full-Viewport Hero ── */}
      <section className="relative">
        <VideoPlaceholder
          label="Amazon case study hero \u2014 OTT ad production footage, autoplay, loop, muted"
          aspect="hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <span className="section-label block mb-3">Video Pipeline</span>
            <h1 className="text-hero leading-tight mb-4">AMAZON</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Building a video production system to bring a program to life
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Intro Context ── */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-white/70 leading-relaxed">
              Amazon was running a program that provided high-performing stores
              with funding to create and place OTT video campaigns. They wanted
              every video to be something that was unique to each brand&rsquo;s
              look and feel &mdash; but also needed every production to have
              matching scopes, budgets, and timelines that met the
              program&rsquo;s standards.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ── 3. "To Each Their Own" (text L, placeholder R) ── */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-6">To Each Their Own</h2>
              <p className="text-base text-white/70 leading-relaxed">
                Supporting an Amazon agency partner, we developed a repeatable
                creative video framework and workflow to give each store a simple
                briefing process, 3 creative pitches from different teams, the
                ability to shoot globally and remotely, and a plug-in format to
                add key SKUs, brand messaging, and a preferred target audience.
              </p>
            </div>
            <VideoPlaceholder
              label="Amazon OTT production behind-the-scenes"
              aspect="video"
            />
          </div>
        </section>
      </FadeIn>

      {/* ── 4. "Customizable Creative" (placeholder L, text R) ── */}
      <FadeIn>
        <section className="py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <VideoPlaceholder
              label="Amazon brand video production footage"
              aspect="video"
            />
            <div>
              <h2 className="text-h2 mb-6">Customizable Creative</h2>
              <p className="text-base text-white/70 leading-relaxed mb-6">
                Through centralizing all production and freelancers through
                1Project, Amazon was able to offer each brand participant a
                unique video for their brand, while keeping scopes and budgets
                consistent across the entire campaign.
              </p>
              <div className="border-t border-rule pt-6">
                <span className="section-label block mb-2">
                  Outputs (per brand)
                </span>
                <p className="text-sm text-white/60 leading-relaxed">
                  30s OTT ad w/ VO+motion, hi-res stills, b-roll clip library,
                  all raw footage, global usage, and cropped cut-downs of final
                  for social.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 5. "CENTRALIZED MANAGEMENT" + Heading ── */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="section-label block mb-4">
              Centralized Management
            </span>
            <h2 className="text-h2">
              Different Brands Different Needs Same Outputs
            </h2>
          </div>
        </section>
      </FadeIn>

      {/* ── 6. Image Gallery / Mosaic ── */}
      <FadeIn>
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="lg:col-span-2 lg:row-span-2">
              <VideoPlaceholder
                label="Fitness / running campaign footage"
                className="h-full"
              />
            </div>
            <VideoPlaceholder
              label="Product supplement shoot"
              aspect="square"
            />
            <VideoPlaceholder
              label="Lifestyle / fashion shoot"
              aspect="square"
            />
            <VideoPlaceholder
              label="Marina / harbor scene"
              aspect="square"
            />
            <VideoPlaceholder
              label="Studio product photography"
              aspect="square"
            />
          </div>
        </section>
      </FadeIn>

      {/* ── 7. Results ── */}
      <FadeIn>
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-12">
            {results.map((r) => (
              <div key={r.title} className="border-b border-rule pb-8">
                <h3 className="text-h3 mb-3">{r.title}</h3>
                <p className="text-base text-white/60 leading-relaxed">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── 8. "Check Out More Case Studies" ── */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionDivider className="mb-12">
            <h2 className="text-h2 text-center whitespace-nowrap">
              Check Out More Case Studies
            </h2>
          </SectionDivider>
          <div className="flex justify-center gap-8 text-sm">
            <Link
              href="/case-studies/eight-o-clock-coffee"
              className="text-gold hover:text-lightning transition-colors"
            >
              Eight O&rsquo;Clock Coffee &rarr;
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
