"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, Eye, X, Film, ImageIcon } from "lucide-react";

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

const mediaItems = [
  {
    type: "video",
    category: "Telecom",
    title: "Tower Foundation & Equipment Installation",
    thumbnail: "/branding/img3.jpeg",
    videoUrl: "https://www.youtube.com/embed/AaJD-5JcNjI?autoplay=1&rel=0",
    desc: "Heavy crane hoisting and base installation for telecom mast tower sites."
  },
  {
    type: "video",
    category: "OFC",
    title: "OFC Cable Trenching & Aerial Splicing",
    thumbnail: "/branding/img4.jpeg",
    videoUrl: "https://www.youtube.com/embed/u1ZB_rGFyeU?autoplay=1&rel=0",
    desc: "High-speed fiber rollout: trenching machinery and technician splicing checks."
  },
  {
    type: "photo",
    category: "Telecom",
    title: "5G Base Station BTS Deployments",
    thumbnail: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=800&q=80",
    desc: "Broadband receivers and antenna links mounted on high mast cell structures."
  },
  {
    type: "photo",
    category: "Civil",
    title: "Secure Equipment Shelter Construction",
    thumbnail: "/branding/img2.jpeg",
    desc: "Site leveling, compound fencing, and concrete shelter builds for network hubs."
  },
  {
    type: "photo",
    category: "Electrical",
    title: "HT Substation Transformer Laying",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    desc: "Electrification works: transformer mounting, earth wiring, and load testing."
  },
  {
    type: "photo",
    category: "Safety",
    title: "On-Site Core Alignment & Quality Check",
    thumbnail: "/branding/img5.jpeg",
    desc: "Nissi field technicians performing fiber splicing testing wearing safety gear."
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const filteredMedia = activeCategory === "All"
    ? mediaItems
    : mediaItems.filter(item => item.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <span className="text-[#1a35cc] font-semibold text-sm tracking-widest uppercase text-reveal-up">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a0f2e] mt-2 mb-4 text-mask-reveal delay-100">Projects &amp; Experience</h2>
          <div className="section-divider mx-auto mb-6 text-reveal-up delay-200" />
          <p className="text-slate-500 text-lg max-w-2xl mx-auto text-reveal-up delay-300">
            A snapshot of our infrastructure work spanning telecom, civil, and electrical domains across Andhra Pradesh.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
          {projects.map(({ category, title, location, desc, tag, tagColor, catColor, img }, idx) => (
            <div 
              key={title} 
              className={`service-card bg-white rounded-2xl overflow-hidden group flex flex-col reveal-up delay-${(idx % 3 + 1) * 100}`}
            >
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

        {/* Media Showcase Section */}
        <div className="border-t border-slate-200 pt-16 mt-16">
          <div className="text-center mb-10 reveal-up">
            <span className="text-[#1a35cc] font-semibold text-sm tracking-widest uppercase text-reveal-up">Project Media</span>
            <h3 className="text-3xl font-black text-[#0a0f2e] mt-2 mb-4 text-mask-reveal delay-100">Photos &amp; Videos Gallery</h3>
            <div className="section-divider mx-auto mb-6 text-reveal-up delay-200" />
            <p className="text-slate-500 text-sm max-w-xl mx-auto text-reveal-up delay-300">
              Browse actual footage and high-res imagery from our active sites. Filter by service category.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {["All", "Telecom", "OFC", "Civil", "Electrical", "Safety"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border ${
                    activeCategory === cat
                      ? "bg-[#1a35cc] text-white border-[#1a35cc] shadow-md shadow-[#1a35cc]/20"
                      : "bg-white text-slate-600 border-slate-200 hover:border-[#1a35cc] hover:text-[#1a35cc]"
                  }`}
                >
                  {cat === "OFC" ? "OFC Cable" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full card-hover cursor-pointer reveal-up delay-${(idx % 3 + 1) * 100}`}
                onClick={() => {
                  if (item.type === "video" && item.videoUrl) {
                    setSelectedVideo(item.videoUrl);
                  } else {
                    setSelectedPhoto(item.thumbnail);
                  }
                }}
              >
                {/* Thumbnail */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-[#0a0f2e]/40 group-hover:bg-[#0a0f2e]/20 transition-colors duration-300" />
                  
                  {/* Media Indicator Badge */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5">
                    {item.type === "video" ? (
                      <>
                        <Film size={10} /> Video
                      </>
                    ) : (
                      <>
                        <ImageIcon size={10} /> Photo
                      </>
                    )}
                  </div>

                  {/* Play / Zoom Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.type === "video" ? (
                      <div className="w-14 h-14 bg-[#1a35cc] text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 pulse-ring">
                        <Play size={22} className="ml-1 fill-white" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 opacity-0 group-hover:opacity-100">
                        <Eye size={20} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black text-[#1a35cc] uppercase tracking-wider">{item.category}</span>
                    <h4 className="text-sm font-black text-[#0a0f2e] mt-1 mb-2 leading-snug">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>Nissi Operations</span>
                    <span className="text-[#1a35cc] group-hover:underline flex items-center gap-1">
                      {item.type === "video" ? "Play Video ➔" : "View Photo ➔"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clients list */}
        <div className="mt-20 text-center reveal-up">
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

      {/* Video Lightbox Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedVideo}
              title="Project Video Player"
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-black rounded-full flex items-center justify-center text-white transition-colors border border-white/10"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Photo Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl max-h-[85vh] w-full aspect-auto rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[75vh]">
              <Image
                src={selectedPhoto}
                alt="Enlarged Project Photo"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-black rounded-full flex items-center justify-center text-white transition-colors border border-white/10 z-50"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
