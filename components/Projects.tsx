import Image from "next/image";

const projects = [
  {
    category: "Telecom Infrastructure",
    title: "5G Tower Foundation & BTS Installation",
    location: "Vijayawada, Andhra Pradesh",
    desc: "Complete foundation construction and BTS equipment installation for a leading telecom operator, delivered ahead of schedule.",
    tag: "Completed",
    tagColor: "bg-blue-100 text-blue-700",
    catColor: "bg-indigo-100 text-indigo-700",
    img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=700&q=75",
  },
  {
    category: "Civil Works",
    title: "Telecom Shelter Construction",
    location: "Guntur District, AP",
    desc: "Multi-site shelter construction with compound walls, site leveling, and pathway development for urban connectivity rollout.",
    tag: "Completed",
    tagColor: "bg-blue-100 text-blue-700",
    catColor: "bg-blue-100 text-blue-700",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=75",
  },
  {
    category: "OFC Infrastructure",
    title: "OFC Laying & Splicing — Rural Rollout",
    location: "West Godavari, AP",
    desc: "End-to-end optical fiber cable trenching, laying, and splicing across 100+ km for rural broadband connectivity.",
    tag: "Completed",
    tagColor: "bg-blue-100 text-blue-700",
    catColor: "bg-blue-200 text-blue-800",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=75",
  },
  {
    category: "Electrical Services",
    title: "HT/LT Power & DG Commissioning",
    location: "Rajahmundry, AP",
    desc: "High-tension power connections, transformer installation, and diesel generator setup for telecom site electrification.",
    tag: "Completed",
    tagColor: "bg-blue-100 text-blue-700",
    catColor: "bg-indigo-200 text-indigo-800",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&q=75",
  },
  {
    category: "O&M Services",
    title: "Long-Term Telecom Site Maintenance",
    location: "Multiple Sites, AP",
    desc: "Ongoing preventive and corrective maintenance for 50+ telecom sites, ensuring maximum uptime for Reliance Jio networks.",
    tag: "Ongoing",
    tagColor: "bg-green-100 text-green-700",
    catColor: "bg-blue-100 text-blue-700",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=75",
  },
  {
    category: "Project Management",
    title: "Multi-State Infrastructure Rollout",
    location: "AP & Telangana",
    desc: "End-to-end project management including survey, material procurement, workforce deployment, and documentation for large-scale rollout.",
    tag: "Ongoing",
    tagColor: "bg-green-100 text-green-700",
    catColor: "bg-indigo-100 text-indigo-700",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=75",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#1a35cc] font-semibold text-sm tracking-widest uppercase">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a0f2e] mt-2 mb-4">Projects &amp; Experience</h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A snapshot of our infrastructure work spanning telecom, civil, and electrical domains across Andhra Pradesh.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map(({ category, title, location, desc, tag, tagColor, catColor, img }) => (
            <div key={title} className="service-card bg-white rounded-2xl overflow-hidden group flex flex-col">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/60 to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex justify-between">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm ${catColor}`}>{category}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${tagColor}`}>{tag}</span>
                </div>
              </div>
              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-black text-[#0a0f2e] mb-1.5 leading-tight">{title}</h3>
                <p className="text-[#1a35cc] text-xs font-semibold mb-3">📍 {location}</p>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video showcase */}
        <div className="mt-16 md:mt-20 rounded-3xl overflow-hidden relative h-auto min-h-[380px] md:h-80 flex items-center justify-center">
          <Image
            src="/branding/img3.jpeg"
            alt="Nissi Corporate heavy equipment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0f2e]/75" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center py-8 px-4">
            <div className="text-blue-300 font-bold text-xs tracking-widest uppercase mb-3">Project Gallery</div>
            <h3 className="text-3xl font-black mb-2">Delivering Excellence Across AP</h3>
            <p className="text-slate-300 text-sm max-w-lg mb-6">
              From tower foundations to OFC rollout — Nissi Corporate brings infrastructure dreams to life across Andhra Pradesh and neighboring states.
            </p>
            {/* YouTube embed */}
            <div className="flex gap-3 flex-wrap justify-center">
              <a
                href="https://www.youtube.com/watch?v=AaJD-5JcNjI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1a35cc] hover:bg-[#1228a0] px-5 py-2.5 rounded-xl font-bold text-sm transition-colors"
              >
                ▶ Watch Telecom Infrastructure
              </a>
              <a
                href="https://www.youtube.com/watch?v=u1ZB_rGFyeU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/25 hover:bg-white/10 px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
              >
                ▶ OFC Cable Laying Process
              </a>
            </div>
          </div>
        </div>

        {/* Clients */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-8">
            Trusted By Leading Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-5">
            {["Reliance Jio", "Tata Tele", "Government of AP", "EPC Contractors", "Infrastructure Developers"].map((client) => (
              <div
                key={client}
                className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-slate-700 font-bold text-sm shadow-sm hover:border-[#1a35cc] hover:text-[#1a35cc] transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
