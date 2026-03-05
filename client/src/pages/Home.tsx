import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { AboutUs } from "@/components/sections/AboutUs";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Projects />
        <Process />
        <AboutUs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}