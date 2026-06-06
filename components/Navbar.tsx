"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#1a35cc] text-white text-sm py-2 px-4 hidden md:flex justify-between items-center gap-4 flex-wrap overflow-hidden">
        <span className="opacity-90 text-xs truncate max-w-full sm:max-w-none">
          Nissi Corporate Infra Tech Private Limited &mdash; Trusted Infrastructure Partner in Andhra Pradesh
        </span>
        <div className="flex items-center gap-4 sm:gap-6 shrink-0 flex-wrap">
          <a href="tel:9848444427" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors text-xs">
            <Phone size={12} />
            +91 98484 44427
          </a>
          <a href="mailto:Chalamgg@nissiinfra.com" className="hover:text-blue-200 transition-colors text-xs">
            Chalamgg@nissiinfra.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md shadow-lg border-b border-blue-100"
          : "bg-white shadow-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => handleLink("#home")} className="flex items-center">
              <Image
                src="/logo-horizontal.png"
                alt="Nissi Corporate Infra Tech"
                width={220}
                height={50}
                className="h-10 w-auto object-contain"
                priority
              />
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLink(link.href)}
                  className="nav-link px-2.5 xl:px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#1a35cc] transition-colors rounded-md hover:bg-blue-50"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleLink("#contact")}
                className="ml-2 xl:ml-3 px-4 xl:px-5 py-2.5 bg-[#1a35cc] text-white text-sm font-bold rounded-lg hover:bg-[#1228a0] transition-all shadow-md hover:shadow-[#1a35cc]/30 hover:-translate-y-0.5"
              >
                Get Free Quote
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-gray-100"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-4 py-3 space-y-1">
              <div className="flex justify-center py-3">
                <Image src="/logo-vertical.png" alt="Nissi Corporate" width={80} height={80} className="h-16 w-auto" />
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLink(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:text-[#1a35cc] hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 pb-1">
                <button
                  onClick={() => handleLink("#contact")}
                  className="w-full py-3 bg-[#1a35cc] text-white font-bold rounded-lg hover:bg-[#1228a0] transition-colors"
                >
                  Get a Free Quote
                </button>
              </div>
              <div className="py-2 border-t border-gray-100 text-center text-xs text-slate-500">
                <a href="tel:9848444427" className="text-[#1a35cc] font-semibold">+91 98484 44427</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
