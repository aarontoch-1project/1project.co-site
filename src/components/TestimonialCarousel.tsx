"use client";

import { useState, useEffect } from "react";
import { SectionDivider } from "./SectionDivider";

interface Testimonial {
  quote: React.ReactNode;
  name: string;
  title: string;
  company: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoAdvance?: number;
}

export function TestimonialCarousel({
  testimonials,
  autoAdvance = 6000,
}: TestimonialCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!autoAdvance) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, autoAdvance);
    return () => clearInterval(timer);
  }, [testimonials.length, autoAdvance]);

  const t = testimonials[active];

  return (
    <div>
      <SectionDivider className="mb-16">
        <h2 className="text-h2 text-center">What Our Clients Are Saying</h2>
      </SectionDivider>

      <div className="max-w-3xl mx-auto text-center min-h-[240px]">
        <blockquote
          key={active}
          className="animate-[fadeIn_0.5s_ease]"
        >
          <p className="text-lg italic text-white/80 leading-relaxed mb-8">
            &ldquo;{t.quote}&rdquo;
          </p>
          <footer>
            <cite className="not-italic">
              <span className="block text-sm font-semibold text-white">
                {t.name}
              </span>
              <span className="block text-xs text-white/50 mt-1">
                {t.title} @ {t.company}
              </span>
            </cite>
          </footer>
        </blockquote>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === active ? "bg-gold" : "bg-rule"
            }`}
            aria-label={`Show testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
