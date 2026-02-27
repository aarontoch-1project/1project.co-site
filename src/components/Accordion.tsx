"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-rule">
      {items.map((item, i) => (
        <div key={item.title} className="border-b border-rule">
          <button
            className="w-full flex items-center justify-between py-5 text-left group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-medium font-semibold text-white group-hover:text-gold transition-colors">
              {item.title}
            </span>
            <svg
              className={`w-5 h-5 text-white/60 transition-transform duration-300 shrink-0 ml-4 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === i ? "max-h-96 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-sm text-white/60 leading-relaxed pr-8">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
