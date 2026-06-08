"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";
// import CorporateIdentity from "@/components/CorporateIdentity";
import ScaleupPlan from "@/components/ScaleupPlan";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -40px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    const observeAll = () => {
      const elements = document.querySelectorAll(
        ".reveal-left, .reveal-right, .reveal-up, .text-mask-reveal, .text-reveal-up"
      );
      elements.forEach((el) => {
        if (!el.classList.contains("revealed")) {
          observer.observe(el);
        }
      });
    };

    // Initial observation
    observeAll();

    // Set up MutationObserver to auto-detect and observe newly added DOM nodes (like when filters change)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <main className="w-full relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <WhyUs />
      <Projects />
      {/* <CorporateIdentity /> */}
      <ScaleupPlan />
      <Contact />
      <Footer />
    </main>
  );
}
