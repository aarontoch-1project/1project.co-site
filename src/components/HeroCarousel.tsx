"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Slide {
  type: "image" | "placeholder";
  src?: string;
  alt?: string;
  label?: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  interval?: number;
  children?: React.ReactNode;
}

export function HeroCarousel({
  slides,
  interval = 5000,
  children,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [advance, interval, slides.length]);

  return (
    <div className="relative min-h-screen bg-dark-deep overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {slide.type === "image" && slide.src ? (
            <Image
              src={slide.src}
              alt={slide.alt || "Hero slide"}
              fill
              className="object-cover opacity-60"
              priority={i === 0}
            />
          ) : (
            <div
              style={{
                background: "#2a2a2a",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#999", fontSize: "18px" }}>
                [{slide.label}]
              </span>
            </div>
          )}
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
      {children}
    </div>
  );
}
