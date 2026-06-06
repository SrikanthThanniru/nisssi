"use client";
import { Radio, Building, Zap, Wrench, ClipboardList, ChevronRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Radio,
    title: "Telecom Infrastructure",
    color: "from-blue-600 to-blue-800",
    img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&q=75",
    items: [
      "Tower foundation construction",
      "Pole and mast erection",
      "BTS / eNodeB / 5G equipment installation",
      "OFC trenching, laying & splicing",
      "Power and battery bank commissioning",
    ],
  },
  {
    icon: Building,
    title: "Civil Works",
    color: "from-blue-500 to-indigo-700",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=75",
    items: [
      "Building and shelter construction",
      "Compound wall and fencing",
      "Site leveling and excavation",
      "Road and pathway development",
    ],
  },
  {
    icon: Zap,
    title: "Electrical Services",
    color: "from-indigo-600 to-blue-700",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
    items: [
      "Internal and external electrical wiring",
      "Earthing and lightning protection systems",
      "HT/LT power connections & transformer installation",
      "Diesel Generator (DG) setup & commissioning",
    ],
  },
  {
    icon: Wrench,
    title: "Operation & Maintenance",
    color: "from-blue-700 to-indigo-800",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=75",
    items: [
      "Preventive and corrective maintenance",
      "Electrical fault troubleshooting",
      "Battery, DG, and equipment upkeep",
    ],
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    color: "from-indigo-500 to-blue-600",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=75",
    items: [
      "Site survey and planning",
      "Material procurement and logistics",
      "End-to-end project execution & documentation",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-up">
          <span className="text-[#1a35cc] font-semibold text-sm tracking-widest uppercase text-reveal-up">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a0f2e] mt-2 mb-4 text-mask-reveal delay-100">Our Products &amp; Services</h2>
          <div className="section-divider mx-auto mb-6 text-reveal-up delay-200" />
          <p className="text-slate-500 text-lg max-w-2xl mx-auto text-reveal-up delay-300">
            Comprehensive infrastructure solutions — from site survey to commissioning and long-term maintenance, all under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map(({ icon: Icon, title, color, img, items }, idx) => (
            <div 
              key={title} 
              className={`service-card bg-white rounded-2xl overflow-hidden group reveal-up delay-${(idx % 3 + 1) * 100}`}
            >
              {/* Image top */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/70 to-[#1a35cc]/20" />
                <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                  <Icon size={19} className="text-white" />
                </div>
                <h3 className="absolute bottom-4 left-4 text-white font-black text-lg">{title}</h3>
              </div>
              {/* Body */}
              <div className="p-6">
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-slate-600 text-sm">
                      <ChevronRight size={14} className="text-[#1a35cc] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-gradient-to-br from-[#0a0f2e] to-[#1a35cc] rounded-2xl p-7 flex flex-col justify-between text-white reveal-up delay-300">
            <div>
              <div className="text-blue-300 font-bold text-xs tracking-widest uppercase mb-3">Need a Custom Solution?</div>
              <h3 className="text-2xl font-black mb-4 leading-tight">Let&apos;s Discuss Your Project</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our team provides end-to-end turnkey execution tailored to your specific infrastructure requirements across AP and beyond.
              </p>
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 flex items-center gap-2 bg-white text-[#1a35cc] text-sm font-bold py-3 px-5 rounded-xl hover:bg-blue-50 transition-colors w-fit"
            >
              Contact Us <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
