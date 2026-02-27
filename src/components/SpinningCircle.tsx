"use client";

import Link from "next/link";

interface SpinningCircleProps {
  href: string;
  text?: string;
}

export function SpinningCircle({
  href,
  text = "SEE MORE WORK \u00b7 ",
}: SpinningCircleProps) {
  const repeated = text.repeat(3);
  const chars = repeated.split("");
  const totalAngle = 360;

  return (
    <Link href={href} className="group relative block w-[140px] h-[140px] mx-auto">
      {/* Spinning text */}
      <div
        className="absolute inset-0 group-hover:[animation-duration:8s]"
        style={{ animation: "spin 20s linear infinite" }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-0 text-[11px] uppercase tracking-[3px] text-muted font-medium origin-[0_70px]"
            style={{ transform: `rotate(${(i / chars.length) * totalAngle}deg)` }}
          >
            {char}
          </span>
        ))}
      </div>
      {/* Center arrow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-5 h-5 text-muted group-hover:text-gold transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    </Link>
  );
}
