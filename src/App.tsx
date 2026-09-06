import { useState, useEffect } from "react";
import { useLenis } from "./hooks/useLenis";
import { GlobalCanvas } from "./three/GlobalCanvas";
import { CustomCursor } from "./components/cursor/CustomCursor";
import { LoadingScreen } from "./components/loading/LoadingScreen";
import { Navbar } from "./components/navigation/Navbar";

import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { TechStack } from "./sections/TechStack";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Philosophy } from "./sections/Philosophy";
import { GithubSection } from "./sections/GithubSection";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  // Initialize Lenis smooth scroll
  useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
        setScrollProgress(progress);
      }

      // Section intersection observer fallback via scroll position
      const sections = ["about", "stack", "projects", "experience", "contact"];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070709] text-gray-100 bg-noise overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Cinematic Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Custom Context Cursor */}
      <CustomCursor />

      {/* Persistent 3D Three.js Global Canvas */}
      <GlobalCanvas scrollProgress={scrollProgress} />

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Storyflow Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Philosophy />
        <GithubSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
