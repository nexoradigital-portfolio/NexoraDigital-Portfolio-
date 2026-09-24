import React from "react";
import { ArrowUp, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { PERSONAL_PROFILE } from "../data/companyData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle green ambient light */}
      <div className="absolute bottom-0 right-10 w-96 h-48 bg-[#A4C639]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Top Footer Banner */}
        <div className="pb-16 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-black border border-[#A4C639]/60 flex items-center justify-center font-display font-black text-sm text-[#A4C639]">
                N
              </div>
              <span className="font-display font-extrabold text-xl tracking-wider text-white">
                {PERSONAL_PROFILE.brandName}
              </span>
            </div>
            <p className="text-sm text-[#9A9A9A] max-w-md">
              {PERSONAL_PROFILE.roleTitle}. Engineering modern web platforms and orchestrating high-growth digital marketing strategies.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#A4C639] text-[#050505] hover:bg-[#B5D334] transition-all duration-300 shadow-[0_0_20px_rgba(164,198,57,0.3)] flex items-center gap-2"
            >
              <span>Work With Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-[#111111] border border-white/15 hover:border-[#A4C639] text-white hover:text-[#A4C639] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Navigation Links */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9A9A9A]">
              <li><a href="#home" className="hover:text-[#A4C639] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#A4C639] transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-[#A4C639] transition-colors">Skills</a></li>
              <li><a href="#services" className="hover:text-[#A4C639] transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-[#A4C639] transition-colors">Selected Work</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9A9A9A]">
              <li><a href="#services" className="hover:text-[#A4C639] transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-[#A4C639] transition-colors">WordPress Development</a></li>
              <li><a href="#services" className="hover:text-[#A4C639] transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-[#A4C639] transition-colors">Brand & Content Strategy</a></li>
              <li><a href="#services" className="hover:text-[#A4C639] transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Social Presence
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9A9A9A]">
              {PERSONAL_PROFILE.socialLinks.map((s) => (
                <li key={s.name}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="hover:text-[#A4C639] transition-colors inline-flex items-center gap-1">
                    <span>{s.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A4C639]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-[#9A9A9A]">
              <p className="text-white font-medium">{PERSONAL_PROFILE.contact.email}</p>
              <p>{PERSONAL_PROFILE.contact.phone}</p>
              <p>{PERSONAL_PROFILE.contact.location}</p>
              <div className="pt-2">
                <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[#A4C639]/20 text-[#A4C639] border border-[#A4C639]/30">
                  OPEN TO COMMISSIONS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <p>© {new Date().getFullYear()} {PERSONAL_PROFILE.brandName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Code. Create. Grow.</span>
            <span>•</span>
            <span className="text-[#A4C639]">Black, White & Green Edition</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
