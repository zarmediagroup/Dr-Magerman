"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/90 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Dr Magerman — Home"
          >
            <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
              <span className="text-gold font-heading font-bold text-sm">M</span>
            </div>
            <div>
              <span className="font-heading font-bold text-lg text-navy tracking-wide leading-tight block">
                DR. MAGERMAN
              </span>
              <span className="text-[11px] text-text-muted tracking-widest uppercase leading-tight block font-body">
                General Practice
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 font-body pb-1 group ${
                  pathname === link.href
                    ? "text-navy"
                    : "text-gray-600 hover:text-navy"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gold rounded-full transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/appointments"
              className="ml-2 px-5 py-2.5 bg-gold text-white rounded-lg text-sm font-semibold font-body hover:bg-opacity-90 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-navy hover:bg-cream transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 bg-white/95 backdrop-blur-md rounded-xl mb-4 shadow-lg border border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-5 py-3 text-sm font-medium font-body rounded-lg mx-2 transition-colors ${
                  pathname === link.href
                    ? "bg-cream text-navy font-semibold border-l-2 border-gold"
                    : "text-gray-600 hover:bg-cream hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/appointments"
                className="block text-center px-5 py-3 bg-gold text-white rounded-lg text-sm font-semibold font-body hover:bg-opacity-90 transition-all"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
