const testimonials = [
  {
    quote:
      "I view 1Project as an extension of our in-house creative team, readily available to tackle virtually any photo or video needs I may throw their way...well-versed in our brand and meticulous in executing shoots to match those standards and expectations.",
    name: "Kris K",
    title: "Manager of Creative Production Services",
    company: "Loves Travel Stops",
  },
  {
    quote:
      "The greatest thing about 1Project\u2019s team is not just their high quality execution and high output speed, but their impressive flexibility, and how much they truly try to understand how our business works to adapt their model to best suit our needs...",
    name: "Henrique G",
    title: "Product Manager",
    company: "Uber",
  },
  {
    quote:
      "Diligent, meticulous, and collaborative, their team ensured the creative development and planning stages went off without a hitch...technical details and stylistic recommendations before, during, and after production resulted in terrific ads...",
    name: "Ash K",
    title: "Senior Brand Manager",
    company: "Tata Consumer",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-light">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-h2 text-center mb-16">
          What Our Clients Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-natural flex flex-col"
            >
              <p className="text-sm leading-relaxed text-dark/80 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 pt-6 border-t border-light">
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-dark">
                    {t.name}
                  </span>
                  <span className="block text-xs text-dark/50 mt-1">
                    {t.title} @ {t.company}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
