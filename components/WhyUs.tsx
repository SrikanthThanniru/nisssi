import { Clock, Star, Shield, Layers, Handshake, Trophy } from "lucide-react";
import Image from "next/image";

const strengths = [
  {
    icon: Trophy,
    title: "Proven Experience",
    desc: "Over 20 years of expertise in telecom, civil, and electrical infrastructure projects across Andhra Pradesh.",
    color: "text-blue-600", bg: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "Consistent record of completing projects on or before deadlines with disciplined planning and daily monitoring.",
    color: "text-indigo-600", bg: "bg-indigo-50",
  },
  {
    icon: Star,
    title: "Quality Focused",
    desc: "Strict adherence to technical standards, safety protocols, and quality control at every project stage.",
    color: "text-blue-700", bg: "bg-blue-50",
  },
  {
    icon: Layers,
    title: "End-to-End Services",
    desc: "Complete turnkey solutions from site survey to execution and maintenance — all under one roof.",
    color: "text-indigo-700", bg: "bg-indigo-50",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    desc: "Strong client base including Reliance Jio, Tata Tele, and top telecom providers across Andhra Pradesh.",
    color: "text-blue-600", bg: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Safety Compliance",
    desc: "Mandatory safety training and regular audits maintain a secure and compliant work environment.",
    color: "text-indigo-600", bg: "bg-indigo-50",
  },
];

const competitors = [
  { feature: "Civil Infrastructure",           nissi: true,  powermech: true,  aepl: true },
  { feature: "Telecom Tower Services",          nissi: true,  powermech: false, aepl: true },
  { feature: "Electrical Services (HT/LT, DG)",nissi: true,  powermech: true,  aepl: true },
  { feature: "End-to-End Turnkey Execution",    nissi: true,  powermech: true,  aepl: true },
  { feature: "OFC Laying & Splicing",           nissi: true,  powermech: false, aepl: true },
  { feature: "Local Market Focus (AP Region)",  nissi: true,  powermech: false, aepl: true },
  { feature: "Long-Term O&M Support",           nissi: true,  powermech: true,  aepl: true },
  { feature: "20+ Years Regional Expertise",    nissi: true,  powermech: false, aepl: false },
];

function Check({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">✓</span>
  ) : (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50 text-red-400 text-sm">✕</span>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#1a35cc] font-semibold text-sm tracking-widest uppercase">Our Differentiators</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a0f2e] mt-2 mb-4">Why Nissi Corporate Stands Out</h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Empowering growth through smart, integrated business solutions with a track record that speaks for itself.
          </p>
        </div>

        {/* Strength cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
          {strengths.map(({ icon: Icon, title, desc, color, bg }) => (
            <div key={title} className="service-card bg-white rounded-2xl p-7 group">
              <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon size={22} className={color} />
              </div>
              <h3 className="text-lg font-black text-[#0a0f2e] mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Banner with image */}
        <div className="relative rounded-3xl overflow-hidden mb-12 md:mb-20 h-auto min-h-[350px] md:h-64 flex items-center">
          <Image
            src="/branding/img4.jpeg"
            alt="Nissi Corporate Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f2e]/90 to-[#1a35cc]/60" />
          <div className="absolute inset-0 flex items-center px-6 py-8 md:px-10 md:py-0">
            <div>
              <div className="text-blue-300 font-bold text-xs tracking-widest uppercase mb-2">Our Commitment</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 max-w-xl leading-tight">
                &ldquo;Trusted regional partner for timely, end-to-end infrastructure solutions.&rdquo;
              </h3>
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-4">
                {[["Telecom", "Tower & OFC"], ["Civil", "Construction"], ["Electrical", "HT/LT & DG"]].map(([h, s]) => (
                  <div key={h} className="min-w-[100px]">
                    <div className="text-white font-black text-base md:text-lg">{h}</div>
                    <div className="text-blue-200 text-[10px] md:text-xs">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Competitive table */}
        <div>
          <div className="text-center mb-10">
            <span className="text-[#1a35cc] font-semibold text-sm tracking-widest uppercase">Competitive Landscape</span>
            <h3 className="text-3xl font-black text-[#0a0f2e] mt-2">Industry Comparison</h3>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-[#0a0f2e] text-white">
                  <th className="text-left py-4 px-6 text-sm font-semibold w-1/2">Features / Capabilities</th>
                  <th className="py-4 px-4 text-sm font-bold text-blue-300 text-center w-1/6">Nissi Corporate</th>
                  <th className="py-4 px-4 text-sm font-semibold text-slate-300 text-center w-1/6">Power Mech</th>
                  <th className="py-4 px-4 text-sm font-semibold text-slate-300 text-center w-1/6">AEPL</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map(({ feature, nissi, powermech, aepl }, i) => (
                  <tr key={feature} className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}>
                    <td className="py-4 px-6 text-sm text-slate-700 font-medium">{feature}</td>
                    <td className="py-4 px-4 text-center"><Check ok={nissi} /></td>
                    <td className="py-4 px-4 text-center"><Check ok={powermech} /></td>
                    <td className="py-4 px-4 text-center"><Check ok={aepl} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
