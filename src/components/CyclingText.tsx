"use client";

import { useState, useEffect, useRef } from "react";

interface CyclingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function CyclingText({
  words,
  interval = 4000,
  className = "",
}: CyclingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 800);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      ref={containerRef}
      className={`inline-block overflow-hidden align-bottom ${className}`}
      style={{
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        fontSize: "85px",
        fontWeight: 700,
        color: "#C99A22",
        lineHeight: 1.15,
        height: "1.15em",
      }}
    >
      <span
        className="inline-block transition-all ease-in-out"
        style={{
          transitionDuration: "800ms",
          transform: isAnimating ? "translateY(-100%)" : "translateY(0)",
          opacity: isAnimating ? 0 : 1,
        }}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
}
