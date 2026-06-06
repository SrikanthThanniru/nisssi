"use client";
import { useState } from "react";
import Image from "next/image";
import { FileText, CreditCard, Layers, LayoutGrid, X, Download, Maximize2, Sparkles } from "lucide-react";

interface Asset {
  title: string;
  category: "stationery" | "marketing" | "digital";
  desc: string;
  img: string;
  dimensions: string;
}

const assets: Asset[] = [
  {
    title: "Official A4 Letterhead",
    category: "stationery",
    desc: "Clean and minimalist corporate letterhead design for official communication, invoicing, and proposals.",
    img: "/branding/A4 size letterhead.png",
    dimensions: "210 x 297 mm (A4)",
  },
  {
    title: "Corporate Business Card",
    category: "stationery",
    desc: "Double-sided premium business card showcasing the brand identity and proprietor details.",
    img: "/branding/Business card.png",
    dimensions: "3.5 x 2 inches",
  },
  {
    title: "Official Branding Envelope",
    category: "stationery",
    desc: "Standard 9x4.5 inch envelope design for official correspondence and corporate mailings.",
    img: "/branding/Envelop 9x4.5inch.png",
    dimensions: "9 x 4.5 inches",
  },
  {
    title: "Company Profile Front Cover",
    category: "marketing",
    desc: "Front cover design for Nissi's official company profile, featuring the signature logo and project summary.",
    img: "/branding/A4 Front cover.png",
    dimensions: "210 x 297 mm (A4)",
  },
  {
    title: "Company Profile Back Cover",
    category: "marketing",
    desc: "Complementary back cover design with official contact details, addresses, and secondary branding.",
    img: "/branding/A4 Back cover.png",
    dimensions: "210 x 297 mm (A4)",
  },
  {
    title: "Social Media Banner",
    category: "digital",
    desc: "High-resolution header cover banner optimized for official social media channels.",
    img: "/branding/FB Cover.png",
    dimensions: "820 x 312 px",
  },
  {
    title: "Corporate Logo (Vertical)",
    category: "digital",
    desc: "Primary vertical format logo with icon and signature text on a white background.",
    img: "/branding/Nissi Logo 1.png",
    dimensions: "600 x 400 px",
  },
  {
    title: "Corporate Logo (Horizontal)",
    category: "digital",
    desc: "Horizontal format logo optimized for navigation bars, headers, and digital documents.",
    img: "/branding/Nissi Logo 2.png",
    dimensions: "800 x 200 px",
  },
  {
    title: "Corporate Seal / Icon",
    category: "digital",
    desc: "Circular seal logo icon for official stamps, digital assets, and quick-recognition favicons.",
    img: "/branding/Nissi Logo 3.png",
    dimensions: "500 x 500 px",
  },
];

export default function CorporateIdentity() {
  const [activeTab, setActiveTab] = useState<"all" | "stationery" | "marketing" | "digital">("all");
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const filteredAssets = activeTab === "all" 
    ? assets 
    : assets.filter(asset => asset.category === activeTab);

  const tabs = [
    { id: "all", label: "All Assets", icon: LayoutGrid },
    { id: "stationery", label: "Stationery Kit", icon: FileText },
    { id: "marketing", label: "Marketing & Print", icon: Layers },
    { id: "digital", label: "Digital Branding", icon: CreditCard },
  ] as const;

  return (
    <section id="branding" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
            <Sparkles size={14} className="text-[#1a35cc]" />
            <span className="text-[#1a35cc] text-xs font-semibold">Brand Identity</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a0f2e] mb-4">
            Corporate Collateral &amp; Brand Assets
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">
            Official identity guidelines, print-ready stationery kits, and social media materials. Designed to maintain professional alignment across all channels.
          </p>
        </div>

        {/* Tabs switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === id
                  ? "bg-[#1a35cc] text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-[#0a0f2e]"
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>

        {/* Grid of assets */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAssets.map((asset) => {
            const IconComponent = 
              asset.category === "stationery" ? FileText :
              asset.category === "marketing" ? Layers : CreditCard;

            return (
              <div 
                key={asset.title}
                className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setSelectedAsset(asset)}
              >
                {/* Image Area */}
                <div className="relative h-64 bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={asset.img}
                      alt={asset.title}
                      fill
                      className="object-contain group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Overlay Action */}
                  <div className="absolute inset-0 bg-[#0a0f2e]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="flex items-center gap-2 bg-white text-[#0a0f2e] font-black text-sm px-4 py-2.5 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 size={15} /> Quick View
                    </button>
                  </div>

                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-slate-700 uppercase border border-slate-200">
                    {asset.dimensions}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <IconComponent size={14} className="text-[#1a35cc]" />
                      <span className="text-xs font-bold text-[#1a35cc] tracking-wide uppercase">
                        {asset.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-[#0a0f2e] leading-tight mb-2">
                      {asset.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {asset.desc}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">Dimensions: {asset.dimensions}</span>
                    <a 
                      href={asset.img}
                      download
                      onClick={(e) => e.stopPropagation()} 
                      className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#1a35cc] hover:bg-[#1a35cc] hover:text-white transition-colors"
                      title="Download source image"
                    >
                      <Download size={14} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedAsset && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setSelectedAsset(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedAsset(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
            >
              <X size={18} />
            </button>

            {/* Left: Image Container */}
            <div className="md:w-3/5 bg-slate-50 p-8 flex items-center justify-center min-h-[300px] md:max-h-[80vh]">
              <div className="relative w-full h-80 md:h-[500px]">
                <Image
                  src={selectedAsset.img}
                  alt={selectedAsset.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right: Info Panel */}
            <div className="md:w-2/5 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-100">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1a35cc] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  {selectedAsset.category}
                </span>
                <h3 className="text-2xl font-black text-[#0a0f2e] mb-3 leading-tight">
                  {selectedAsset.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {selectedAsset.desc}
                </p>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Format:</span>
                    <span className="text-[#0a0f2e] font-bold">High-Res PNG</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Dimensions:</span>
                    <span className="text-[#0a0f2e] font-bold">{selectedAsset.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Resolution:</span>
                    <span className="text-[#0a0f2e] font-bold">300 DPI (Print Ready)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <a 
                  href={selectedAsset.img}
                  download
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#1a35cc] hover:bg-[#1228a0] text-white font-bold rounded-xl shadow-lg hover:shadow-blue-600/20 transition-all text-sm"
                >
                  <Download size={16} /> Download Asset
                </a>
                <button 
                  onClick={() => setSelectedAsset(null)}
                  className="w-full py-3.5 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-colors text-sm"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
