"use client";

import { useState, useEffect } from "react";

interface CyclingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function CyclingText({ words, interval = 3000, className = "" }: CyclingTextProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 400);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className={`inline-block transition-all duration-400 text-gold italic ${className} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      {words[index]}
    </span>
  );
}
