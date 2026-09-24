import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { PERSONAL_PROFILE } from "../data/companyData";

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["home", "about", "skills", "services", "work", "process", "brand", "testimonials", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Work", href: "#work", id: "work" },
    { label: "Process", href: "#process", id: "process" },
    { label: "Testimonials", href: "#testimonials", id: "testimonials" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-5 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl rounded-2xl sm:rounded-full border transition-all duration-300 px-5 sm:px-7 py-3 sm:py-3.5 flex items-center justify-between ${
          isScrolled
            ? "bg-[#050505]/92 backdrop-blur-xl border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(164,198,57,0.12)] text-white"
            : "bg-[#050505]/80 sm:bg-[#111111]/80 backdrop-blur-md border-black/10 sm:border-white/10 text-white shadow-sm"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#home");
          }}
        >
          <div className="w-8 h-8 rounded-lg bg-black border border-[#A4C639]/50 flex items-center justify-center font-display font-bold text-sm text-[#A4C639] group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(164,198,57,0.4)] transition-all">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider uppercase text-white group-hover:text-[#A4C639] transition-colors">
              {PERSONAL_PROFILE.brandName}
            </span>
            <span className="text-[10px] tracking-widest text-[#9A9A9A] uppercase">
              Developer & Marketer
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className={`text-xs uppercase tracking-wider px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#A4C639] text-black font-semibold shadow-[0_0_15px_rgba(164,198,57,0.3)]"
                    : "text-[#9A9A9A] hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-white text-black hover:bg-[#A4C639] hover:text-black transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(164,198,57,0.4)]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-white hover:text-[#A4C639] bg-white/5 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 bg-[#0B0B0B]/98 border border-white/10 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl flex flex-col gap-4 lg:hidden z-50">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-[#A4C639] text-black font-bold"
                    : "text-neutral-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#A4C639] text-black font-semibold text-sm hover:bg-[#B5D334] transition-all shadow-[0_0_20px_rgba(164,198,57,0.3)]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
