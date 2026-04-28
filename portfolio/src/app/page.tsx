import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function SectionDivider() {
  return (
    <div className="relative h-px mx-auto max-w-7xl px-6 lg:px-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Timeline />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Portfolio />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
