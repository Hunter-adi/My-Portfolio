import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <div className="space-y-32"> {/* Har section ke beech gap */}
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}