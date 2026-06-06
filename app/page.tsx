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
  return (
    <main className="overflow-x-hidden w-full relative">
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
