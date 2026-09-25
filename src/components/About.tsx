import React from "react";
import {
  Code2,
  TrendingUp,
  Palette,
  Search,
  Layers,
  Share2,
  ArrowUpRight,
  Sparkles,
  Terminal,
} from "lucide-react";
import { PERSONAL_PROFILE, ABOUT_PILLARS } from "../data/companyData";

interface AboutProps {
  onOpenInquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-[#A4C639]" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-[#A4C639]" />,
    Palette: <Palette className="w-5 h-5 text-[#A4C639]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#A4C639]" />,
    Layers: <Layers className="w-5 h-5 text-[#A4C639]" />,
    Share2: <Share2 className="w-5 h-5 text-[#A4C639]" />,
  };

  return (
    <section id="about" className="py-12 md:py-32 bg-[#050505] text-white relative overflow-hidden border-t border-white/5">
      {/* Subtle green ambient background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#A4C639]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#607A16]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#A4C639] uppercase mb-3 md:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About The Founder & Strategist</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-3 md:mb-6 leading-tight">
            More Than Code. <br className="hidden sm:inline" />
            <span className="text-[#A4C639]">I Build Digital Growth.</span>
          </h2>

          <p className="text-base sm:text-xl text-[#F5F5F5] font-normal leading-relaxed mb-3 md:mb-4">
            {PERSONAL_PROFILE.aboutDescription}
          </p>

          <p className="text-xs sm:text-base text-[#9A9A9A] leading-relaxed">
            {PERSONAL_PROFILE.aboutStory}
          </p>
        </div>

        {/* 2-Column Split: Studio Workspace Image + Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-stretch">
          
          {/* Workspace Image / Visual Card */}
          <div className="lg:col-span-5 relative group">
            <div className="relative h-full min-h-[260px] sm:min-h-[320px] md:min-h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-[#111111] shadow-2xl">
              <img
                src={PERSONAL_PROFILE.images.aboutWorkspace}
                alt="Working at workstation - NEXORA DIGITAL"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-4 rounded-xl bg-[#0B0B0B]/90 backdrop-blur-md border border-[#A4C639]/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A4C639]">
                    Full-Stack Mastery
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#A4C639] animate-pulse" />
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-300">
                  Engineering modern, responsive web systems paired with high-conversion organic & paid growth.
                </p>
              </div>
            </div>
          </div>

          {/* 6 Information Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {ABOUT_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-4 sm:p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#A4C639]/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(164,198,57,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black border border-white/10 group-hover:border-[#A4C639]/40 flex items-center justify-center transition-colors">
                      {iconMap[pillar.icon]}
                    </div>
                    <span className="text-[11px] font-mono font-medium text-[#9A9A9A] group-hover:text-[#A4C639] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-[#A4C639] transition-colors mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#9A9A9A] group-hover:text-white transition-colors">
                  <span className="font-medium">Explore capability</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A4C639] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
