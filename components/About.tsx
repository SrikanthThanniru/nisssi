import { Target, Eye, Heart, Building2 } from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    icon: Eye,
    title: "Vision",
    desc: "To be a leading infrastructure partner driving innovation, sustainability, and excellence across telecom and civil sectors.",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: Target,
    title: "Mission",
    desc: "Deliver quality infrastructure solutions with integrity, precision, and timeliness to empower India's connectivity and growth.",
    color: "from-blue-500 to-indigo-700",
  },
  {
    icon: Heart,
    title: "Values",
    desc: "Commitment to quality, timely execution, client satisfaction, ethical practices, teamwork, innovation, and continuous improvement.",
    color: "from-indigo-500 to-blue-700",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 reveal-up">
          <span className="text-[#1a35cc] font-semibold text-sm tracking-widest uppercase text-reveal-up">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a0f2e] mt-2 mb-4 text-mask-reveal delay-100">
            Transforming Enterprise Operations
          </h2>
          <div className="section-divider mx-auto mb-6 text-reveal-up delay-200" />
          <p className="text-slate-500 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed text-reveal-up delay-300">
            Nissi Corporate Infra Tech Pvt. Ltd. is a trusted infrastructure firm specializing in
            civil, electrical, and telecom works — delivering high-quality, on-time solutions across
            Andhra Pradesh for over two decades.
          </p>
        </div>

        {/* Image strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 md:mb-20 rounded-3xl overflow-hidden reveal-up">
          {[
            { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", alt: "Heavy construction crane and foundations site" },
            { src: "/branding/img5.jpeg", alt: "Nissi technician on-site work" },
            { src: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=800&q=80", alt: "Telecom tower foundation and installation" },
          ].map(({ src, alt }) => (
            <div key={alt} className="relative h-40 md:h-64 overflow-hidden group">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#1a35cc]/20 group-hover:bg-[#1a35cc]/10 transition-colors" />
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="reveal-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6 text-reveal-up">
              <Building2 size={14} className="text-[#1a35cc]" />
              <span className="text-[#1a35cc] text-xs font-semibold">What We Do</span>
            </div>
            <h3 className="text-3xl font-black text-[#0a0f2e] mb-5 leading-tight text-mask-reveal delay-100">
              End-to-End Infrastructure Solutions
            </h3>
            <p className="text-slate-600 leading-relaxed mb-5 text-reveal-up delay-200">
              Nissi Corporate Infra Tech Pvt. Ltd. provides comprehensive solutions in civil construction,
              electrical installations, and telecom infrastructure. Our services include tower foundations,
              OFC laying, equipment erection, and power commissioning.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8 text-reveal-up delay-300">
              We support leading telecom providers with reliable, quality-driven project execution,
              ensuring timely delivery, safety compliance, and efficient resource management across
              urban and rural sites throughout Andhra Pradesh.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                ["20+ Years", "Regional Experience"],
                ["AP Focused", "Local Market Experts"],
                ["Jio & Tata", "Trusted by Leaders"],
                ["Turnkey", "One-Stop Solutions"],
              ].map(([val, label]) => (
                <div key={label} className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <div className="w-2 h-2 rounded-full bg-[#1a35cc] mt-1.5 shrink-0" />
                  <div>
                    <div className="font-bold text-[#0a0f2e] text-sm">{val}</div>
                    <div className="text-xs text-slate-500">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — company card + layered images (Inspired by reference site) */}
          <div className="space-y-6 reveal-right">
            <div className="relative h-[300px] sm:h-[320px] flex items-center justify-center overflow-hidden rounded-3xl bg-slate-50 border border-slate-100">
              {/* Background Blue Accent Frame */}
              <div className="absolute right-2 bottom-2 w-56 h-56 bg-[#1a35cc] rounded-3xl z-0 opacity-10" />
              
              {/* Secondary Overlapping Image (Back-left) */}
              <div className="absolute left-6 top-6 w-48 h-48 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-lg border-4 border-white z-10 -rotate-3 transition-transform hover:rotate-0 duration-500">
                <Image
                  src="/branding/img3.jpeg"
                  alt="Nissi Corporate heavy equipment"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Main Primary Image (Front-right) */}
              <div className="absolute right-6 bottom-6 w-52 h-52 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-[#1a35cc] z-20 rotate-3 transition-transform hover:rotate-0 duration-500">
                <Image
                  src="/branding/img2.jpeg"
                  alt="Nissi Corporate Building"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-white font-black text-xs leading-tight">Nissi Corporate</div>
                  <div className="text-blue-200 text-[9px]">Infra Tech Private Limited</div>
                </div>
              </div>
              
              {/* Floating Trust Badge */}
              <div className="absolute left-4 bottom-4 bg-white border border-blue-100 rounded-xl px-3 py-2 shadow-lg z-30 flex items-center gap-2 animate-bounce">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
                <div className="text-[9px] font-bold text-[#0a0f2e]">100% Quality Assurance</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0a0f2e] to-[#1a35cc] rounded-3xl p-7 text-white shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Proprietor", value: "Ganga Chalam Geddam" },
                  { label: "HQ", value: "West Godavari, AP" },
                  { label: "Clients", value: "Jio, Tata Tele" },
                  { label: "Focus", value: "AP & Neighboring States" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-blue-300 text-xs mb-0.5">{label}</div>
                    <div className="text-white font-bold text-sm">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision / Mission / Values */}
        <div className="grid md:grid-cols-3 gap-8 reveal-up">
          {pillars.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="service-card rounded-2xl p-8 bg-white text-center group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                <Icon size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-black text-[#0a0f2e] mb-3">{title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="mt-20 border-t border-slate-100 pt-16">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: MD message */}
            <div className="lg:col-span-7 reveal-left">
              <span className="text-[#1a35cc] font-semibold text-xs tracking-widest uppercase mb-3 block">Leadership Message</span>
              <h3 className="text-3xl font-black text-[#0a0f2e] mb-6 leading-tight">From the Managing Director&apos;s Desk</h3>
              <div className="relative border-l-4 border-[#1a35cc] pl-6 mb-6">
                <p className="text-base sm:text-lg font-bold text-[#0a0f2e] italic leading-relaxed">
                  &ldquo;Our focus is on executing projects with top-tier quality and absolute timely delivery. Nothing is impossible when we are driven by discipline and dedication.&rdquo;
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                Under the leadership of Ganga Chalam Geddam, Nissi Corporate Infra Tech has established itself as a premier infrastructure partner across Andhra Pradesh. With over two decades of hands-on experience, we have successfully managed complex rollouts for telecom leaders like Reliance Jio and Tata Tele, alongside government and civil engineering projects.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                We believe in building long-lasting infrastructure that powers progress for communities. Our teams are trained to operate under the highest standards of safety and efficiency, ensuring that every project site is a testament to our core values.
              </p>
              <div>
                <h4 className="text-xl font-black text-[#0a0f2e]">Ganga Chalam Geddam</h4>
                <p className="text-[#1a35cc] text-sm font-semibold">Founder &amp; Managing Director</p>
              </div>
            </div>

            {/* Right Column: MD Photos & Board */}
            <div className="lg:col-span-5 space-y-6 reveal-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Photo 1: Headshot */}
                <div className="relative h-60 sm:h-64 rounded-2xl overflow-hidden shadow-md border border-slate-100">
                  <Image
                    src="/branding/IMG-20220121-WA0035.jpg"
                    alt="Ganga Chalam Geddam Portrait"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white text-[10px] font-bold bg-[#1a35cc] px-2 py-0.5 rounded-full">Official Portrait</span>
                  </div>
                </div>

                {/* Photo 2: Office environment */}
                <div className="relative h-60 sm:h-64 rounded-2xl overflow-hidden shadow-md border border-slate-100">
                  <Image
                    src="/branding/IMG-20220423-WA0010.jpg"
                    alt="Ganga Chalam Geddam at his desk"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white text-[10px] font-bold bg-[#1a35cc] px-2 py-0.5 rounded-full">MD in Office</span>
                  </div>
                </div>
              </div>

              {/* Board Members list card */}
              <div className="bg-gradient-to-br from-[#0a0f2e] to-[#122080] rounded-2xl p-6 text-white shadow-md">
                <h4 className="font-bold text-xs uppercase tracking-widest text-blue-300 mb-4">Board of Directors</h4>
                <div className="space-y-3">
                  {[
                    { name: "Ganga Chalam Geddam", role: "Founder & Managing Director" },
                    { name: "Geddam Sharon ", role: "Managing Director" },
                    { name: "Geddam Nissi", role: "Director" },
                  ].map((director) => (
                    <div key={director.name} className="flex justify-between items-center border-b border-white/10 pb-2.5 last:border-0 last:pb-0">
                      <div className="font-semibold text-sm">{director.name}</div>
                      <div className="text-xs text-blue-200">{director.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
