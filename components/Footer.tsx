"use client";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import Image from "next/image";

const services = [
  "Telecom Infrastructure",
  "Civil Works",
  "Electrical Services",
  "Operation & Maintenance",
  "Project Management",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0a0f2e] text-white">
      {/* CTA band */}
      <div className="bg-[#1a35cc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black">Ready to Start Your Project?</h3>
            <p className="text-blue-200 text-sm mt-1">Connect with us today and get a free consultation.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:9848444427"
              className="flex items-center gap-2 bg-white text-[#1a35cc] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-lg">
              <Phone size={15} /> Call Now
            </a>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 border-2 border-white/30 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo-horizontal.png"
              alt="Nissi Corporate Infra Tech"
              width={200}
              height={60}
              className="h-12 w-auto mb-5 brightness-200 contrast-0 invert"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Trusted infrastructure partner for telecom, civil, and electrical solutions across
              Andhra Pradesh for over two decades. Nothing Is Impossible.
            </p>
            <div className="inline-block bg-[#1a35cc]/20 border border-[#1a35cc]/30 rounded-full px-4 py-1.5">
              <span className="text-blue-300 text-xs font-bold tracking-widest uppercase">
                Nothing Is Impossible
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-slate-400 text-sm hover:text-blue-300 transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a35cc]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); }}
                    className="flex items-center gap-2 text-slate-400 text-sm hover:text-blue-300 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a35cc]" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-5">Contact</h4>
            <div className="space-y-4">
              <a href="tel:9848444427" className="flex items-start gap-3 group">
                <Phone size={14} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm group-hover:text-blue-300 transition-colors">+91 98484 44427</span>
              </a>
              <a href="mailto:Chalamgg@nissiinfra.com" className="flex items-start gap-3 group">
                <Mail size={14} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm group-hover:text-blue-300 transition-colors break-all">Chalamgg@nissiinfra.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  1-148 Devarapalli, Kovvuru Road,<br />
                  Gowripatnam, West Godavari,<br />
                  Andhra Pradesh — 534313
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo-seal.png" alt="Nissi seal" width={32} height={32} className="h-8 w-auto opacity-60" />
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} Nissi Corporate Infra Tech Pvt. Ltd. All rights reserved. | Proprietor: Ganga Chalam Geddam
            </p>
          </div>
          <button onClick={scrollTop}
            className="flex items-center gap-2 text-slate-400 hover:text-blue-300 transition-colors text-xs font-medium">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
