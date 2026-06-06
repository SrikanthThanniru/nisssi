"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "", service: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-up">
          <span className="text-[#1a35cc] font-semibold text-sm tracking-widest uppercase text-reveal-up">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a0f2e] mt-2 mb-4 text-mask-reveal delay-100">Contact Us</h2>
          <div className="section-divider mx-auto mb-6 text-reveal-up delay-200" />
          <p className="text-slate-500 text-lg max-w-2xl mx-auto text-reveal-up delay-300">
            Ready to start your infrastructure project? Connect with us today and let&apos;s build something great together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image with logo overlay */}
            <div className="relative h-52 rounded-2xl overflow-hidden reveal-left">
              <Image
                src="/branding/img2.jpeg"
                alt="Nissi office building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/80 to-[#1a35cc]/30" />
              <div className="absolute bottom-4 left-4">
                <Image src="/logo-horizontal.png" alt="Nissi Corporate" width={160} height={40} className="h-8 w-auto brightness-200 contrast-0 invert" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0a0f2e] to-[#122080] rounded-2xl p-7 text-white reveal-left delay-100">
              <h3 className="text-lg font-black mb-5">Let&apos;s Connect</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Phone", val: "+91 98484 44427", href: "tel:9848444427" },
                  { icon: Mail, label: "Email", val: "Chalamgg@nissiinfra.com", href: "mailto:Chalamgg@nissiinfra.com" },
                ].map(({ icon: Icon, label, val, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#1a35cc]/30 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-blue-300" />
                    </div>
                    <div>
                      <div className="text-blue-300 text-xs mb-0.5 uppercase tracking-wider">{label}</div>
                      <a href={href} className="text-white font-semibold text-sm hover:text-blue-300 transition-colors">{val}</a>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#1a35cc]/30 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-blue-300" />
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs mb-0.5 uppercase tracking-wider">Address</div>
                    <p className="text-white font-semibold text-sm leading-relaxed">
                       1-148 Devarapalli, Kovvuru Road,<br />
                       Gowripatnam, West Godavari,<br />
                       Andhra Pradesh — 534313
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-blue-100 rounded-2xl p-6 reveal-left delay-200">
              <h4 className="font-black text-[#0a0f2e] mb-4">Quick Response Guaranteed</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                {["Free site consultation", "Detailed project quote within 24–48 hours", "Experienced team assigned immediately", "Serving AP and surrounding states"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#1a35cc] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-gray-100 reveal-right delay-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle2 size={40} className="text-[#1a35cc]" />
                </div>
                <h3 className="text-2xl font-black text-[#0a0f2e] mb-3">Thank You!</h3>
                <p className="text-slate-500 max-w-sm">We&apos;ve received your inquiry and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-black text-[#0a0f2e] mb-2">Send Us a Message</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a35cc]/25 focus:border-[#1a35cc] transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">Company</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company name"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a35cc]/25 focus:border-[#1a35cc] transition-all" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">Phone *</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a35cc]/25 focus:border-[#1a35cc] transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a35cc]/25 focus:border-[#1a35cc] transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1a35cc]/25 focus:border-[#1a35cc] transition-all bg-white">
                    <option value="">Select a service...</option>
                    <option>Telecom Infrastructure Services</option>
                    <option>Civil Works</option>
                    <option>Electrical Services</option>
                    <option>Operation & Maintenance (O&M)</option>
                    <option>Project Management</option>
                    <option>Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">Project Details *</label>
                  <textarea name="message" required value={form.message} onChange={handleChange} rows={5}
                    placeholder="Describe your project requirements, location, scope, and any other relevant details..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a35cc]/25 focus:border-[#1a35cc] transition-all resize-none" />
                </div>
                <button type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-4 bg-[#1a35cc] hover:bg-[#1228a0] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-[#1a35cc]/30 hover:-translate-y-0.5 text-sm">
                  <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  Send Inquiry — We Respond Within 24 Hours
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
