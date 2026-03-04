"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Cases" },
  { href: "/about-us", label: "About" },
];

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Only visible when at the very top of the page
      setHidden(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-transparent ${
        hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-[88px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/Logo transparency 2.png"
              alt="1Project"
              width={203}
              height={48}
              className="h-[48px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="bg-transparent text-white text-[21px] font-normal border border-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-sm border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="bg-transparent text-white text-[21px] font-normal border border-white px-6 py-3 rounded-md text-center hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Start a Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
