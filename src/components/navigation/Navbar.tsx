import { useState, useEffect } from "react";
import { soundManager } from "../../utils/sound";
import { Volume2, VolumeX, Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundManager.setEnabled(nextState);
    if (nextState) {
      soundManager.playClick();
    }
  };

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "STACK", href: "#stack" },
    { label: "WORK", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    soundManager.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "py-4 glass-nav shadow-2xl" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => handleNavClick("#hero")}
            onMouseEnter={() => soundManager.playHover()}
            className="group flex items-center gap-2 font-display text-lg font-extrabold tracking-wider text-white"
            data-cursor="HOME"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#38bdf8]" />
            <span className="group-hover:text-cyan-400 transition-colors">SUBHAPRIYAM</span>
            <span className="text-[10px] font-mono text-gray-400 font-normal ml-1 hidden sm:inline-block">/ DEV</span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.label.toLowerCase();
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  data-cursor="GO"
                  className={`relative font-mono text-xs tracking-widest transition-colors duration-300 py-1 ${
                    isActive ? "text-cyan-400 font-bold" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Audio Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="AUDIO"
              className={`p-2.5 rounded-full glass-panel border transition-all duration-300 ${
                soundEnabled
                  ? "border-cyan-500/50 text-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                  : "border-white/10 text-gray-400 hover:text-white"
              }`}
              title={soundEnabled ? "Mute UI Audio" : "Enable UI Audio"}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2.5 rounded-full glass-panel border border-white/10 text-white md:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#070709]/95 backdrop-blur-2xl md:hidden flex flex-col justify-center px-8">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Navigation Menu</span>
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-display text-3xl font-extrabold text-white hover:text-cyan-400 transition-colors flex items-center justify-between border-b border-white/10 pb-4"
              >
                <span>{item.label}</span>
                <span className="font-mono text-sm text-gray-500">0{idx + 1}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
