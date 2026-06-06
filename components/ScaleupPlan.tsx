import { MapPin, Cpu, Users, Leaf } from "lucide-react";
import Image from "next/image";

const plans = [
  {
    icon: MapPin,
    title: "Regional Expansion",
    desc: "Expand operations beyond Andhra Pradesh into neighboring states to tap into new infrastructure projects.",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: Cpu,
    title: "Technology Adoption",
    desc: "Integrate digital tools for project management, monitoring, and reporting to enhance efficiency and scalability.",
    color: "from-indigo-600 to-blue-700",
  },
  {
    icon: Users,
    title: "Strategic Partnerships",
    desc: "Collaborate with telecom giants, EPC firms, and government agencies for long-term, high-value contracts.",
    color: "from-blue-700 to-indigo-800",
  },
  {
    icon: Leaf,
    title: "Service Diversification",
    desc: "Enter emerging sectors like renewable energy, smart infrastructure, and fiber-to-home (FTTH) solutions.",
    color: "from-blue-500 to-indigo-600",
  },
];

export default function ScaleupPlan() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#1a35cc] font-semibold text-sm tracking-widest uppercase">Looking Ahead</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a0f2e] mt-2 mb-4">Scale-Up Plan</h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Nissi Corporate Infra Tech delivers reliable infrastructure solutions with quality, timeliness, and trusted industry expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mb-16">
          {plans.map(({ icon: Icon, title, desc, color }, i) => (
            <div key={title} className="service-card bg-white rounded-2xl p-7 group relative overflow-hidden">
              <div className="absolute top-4 right-4 text-6xl font-black text-slate-50 select-none">{i + 1}</div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg relative z-10`}>
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-black text-[#0a0f2e] mb-3 relative z-10">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10">{desc}</p>
            </div>
          ))}
        </div>

        {/* Image + tagline */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="relative h-full min-h-[320px] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=80"
              alt="Future infrastructure"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1a35cc]/40" />
            <div className="absolute bottom-5 left-5">
              <div className="text-white font-black text-2xl">Building the Future</div>
              <div className="text-blue-200 text-sm">India&apos;s Connectivity &amp; Growth</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a35cc] to-[#1228a0] rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-black mb-4">
              &ldquo;Empowering growth through smart, integrated infrastructure solutions.&rdquo;
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Positioning as the trusted regional partner for end-to-end infrastructure delivery
              across telecom, civil, and electrical domains — with a vision to lead nationally.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["2025–26", "AP Consolidation"],
                ["2026–27", "Multi-State Rollout"],
                ["2027–28", "Green Energy Entry"],
                ["2028+", "National Presence"],
              ].map(([yr, goal]) => (
                <div key={yr} className="bg-white/10 rounded-xl p-3">
                  <div className="text-blue-300 text-xs font-bold">{yr}</div>
                  <div className="text-white text-sm font-semibold">{goal}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
