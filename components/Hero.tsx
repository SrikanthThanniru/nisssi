"use client";
import { ArrowRight, CheckCircle2, ChevronDown, Play } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const highlights = [
  "20+ Years of Regional Infrastructure Expertise",
  "Trusted by Reliance Jio & Tata Tele",
  "End-to-End Turnkey Solutions",
];

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/branding/FB Cover.png"
            alt="Telecom tower and infrastructure projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f2e]/80 via-[#0d1545]/65 to-[#1a35cc]/30" />
        </div>

        {/* Animated grid */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:py-28 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="animate-fade-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">
                  Nothing Is Impossible
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white leading-[1.1] mb-6 animate-mask-reveal">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">
                  Infrastructure.
                </span>
                <br />
                Powering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">
                  Progress
                </span>{" "}
                Together.
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                Nissi Corporate Infra Tech Pvt. Ltd. delivers end-to-end telecom, civil, and
                electrical infrastructure solutions across Andhra Pradesh — on time, every time.
              </p>

              <ul className="space-y-3 mb-10">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                    <span className="text-sm font-medium">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="group flex items-center gap-2 px-7 py-3.5 bg-[#1a35cc] hover:bg-[#1228a0] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-[#1a35cc]/40 hover:-translate-y-0.5"
                >
                  Get a Free Quote
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="group flex items-center gap-2.5 px-7 py-3.5 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                    <Play size={14} className="ml-0.5" />
                  </span>
                  Watch Overview
                </button>
              </div>
            </div>

            {/* Right — stat cards */}
            <div className="animate-fade-right grid grid-cols-2 gap-4">
              {[
                { value: "20+", label: "Years Experience", sub: "Trusted since 2000s", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=70" },
                { value: "500+", label: "Projects Done", sub: "Urban & rural AP", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=70" },
                { value: "100%", label: "On-Time Delivery", sub: "Disciplined execution", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=70" },
                { value: "2", label: "Major Clients", sub: "Jio & Tata Tele", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=70" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden card-hover group cursor-default">
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={stat.img}
                      alt={stat.label}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#0a0f2e]/60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-black text-white">{stat.value}</span>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-950/80 border-t border-white/5">
                    <div className="text-white font-extrabold text-xs mb-0.5">{stat.label}</div>
                    <div className="text-slate-300 text-xs">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollTo("#about")}
              className="flex flex-col items-center text-slate-400 hover:text-blue-400 transition-colors group"
            >
              <span className="text-xs font-medium mb-2 tracking-widest uppercase">Scroll Down</span>
              <ChevronDown size={20} className="animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/AaJD-5JcNjI?autoplay=1&rel=0"
              title="Telecom Infrastructure Overview"
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 w-9 h-9 bg-black/60 hover:bg-black rounded-full flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
