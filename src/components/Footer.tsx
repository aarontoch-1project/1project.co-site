"use client";

import Link from "next/link";

const outlineLinks = [
  { href: "/contact-us", label: "Let\u2019s talk" },
  { href: "/services", label: "Our Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about-us", label: "About Us" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark pt-20 pb-8">
      {/* Large outline-font navigation */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="flex flex-col gap-2">
          {outlineLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="outline-text text-outline-nav font-bold leading-tight hover:text-white transition-all duration-400"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 border-t border-white/10 pt-6">
        <div className="flex items-center justify-between text-xs text-white/40">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white/70 transition-colors"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
            Back to top
          </button>
          <span>Copyright &mdash; 1Project.co</span>
          <a
            href="https://www.instagram.com/1projectmakes/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white/70 transition-colors"
          >
            Follow
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
