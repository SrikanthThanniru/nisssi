import Image from "next/image";

const stats = [
  { value: "20+", label: "Years of Experience", sub: "Trusted since the 2000s" },
  { value: "500+", label: "Projects Completed", sub: "Across urban & rural AP" },
  { value: "USD 71.3B", label: "Telecom Market by 2033", sub: "CAGR ~7.8% growth" },
  { value: "USD 801.6B", label: "Civil Market by 2030", sub: "CAGR ~7.8% growth" },
];

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Infrastructure background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0f2e]/88" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Market Opportunity &amp; Our Impact
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Operating in India&apos;s fastest-growing infrastructure sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="stats-card rounded-2xl p-6 text-center card-hover backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">{value}</div>
              <div className="text-blue-300 font-bold text-sm mb-1">{label}</div>
              <div className="text-slate-400 text-xs">{sub}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { title: "India Telecom Infrastructure", value: "$35.1B → $71.3B", detail: "2024–2033 | CAGR ~7.8%" },
            { title: "India Civil & Electrical Infrastructure", value: "$475B → $801.6B", detail: "2023–2030 | CAGR ~7.8%" },
            { title: "Electrical Components (OFC & Wiring)", value: "$259.6M → $456.8M", detail: "2024–2033 | CAGR ~6.5%" },
          ].map(({ title, value, detail }) => (
            <div key={title} className="bg-white/6 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <div className="text-blue-300 font-bold text-xs uppercase tracking-wider mb-3">{title}</div>
              <div className="text-white font-black text-xl mb-1">{value}</div>
              <div className="text-slate-400 text-sm">{detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
