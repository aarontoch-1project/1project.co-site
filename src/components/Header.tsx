"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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
      setHidden(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-transform duration-300 bg-transparent ${
        hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="px-8">
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
                className="text-white hover:text-gold transition-colors"
                style={{
                  fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="bg-gold text-white hover:bg-lightning transition-colors"
              style={{
                fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                padding: "16px 56px",
                borderRadius: "5px",
              }}
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
                className="text-white hover:text-gold transition-colors"
                style={{
                  fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="bg-gold text-white text-center hover:bg-lightning transition-colors"
              style={{
                fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                padding: "16px 56px",
                borderRadius: "5px",
              }}
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
