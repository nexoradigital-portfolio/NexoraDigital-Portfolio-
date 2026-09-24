import React from "react";
import { ArrowUpRight, Sparkles, Terminal, Rocket, Layers } from "lucide-react";
import { PERSONAL_PROFILE } from "../data/companyData";

interface BrandStatementProps {
  onOpenInquiry: () => void;
}

export const BrandStatement: React.FC<BrandStatementProps> = ({ onOpenInquiry }) => {
  return (
    <section id="brand" className="py-28 md:py-36 bg-[#050505] text-white relative overflow-hidden border-t border-white/5">
      {/* Background Animated Geometric Elements & Green Line Art */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="greenLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A4C639" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#B5D334" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#607A16" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path
            d="M -100 200 C 300 400, 700 100, 1400 300"
            fill="none"
            stroke="url(#greenLineGrad)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
          />
          <path
            d="M -200 450 C 400 200, 800 600, 1600 350"
            fill="none"
            stroke="url(#greenLineGrad)"
            strokeWidth="1"
          />
          <circle cx="20%" cy="30%" r="180" fill="#A4C639" fillOpacity="0.04" />
          <circle cx="85%" cy="70%" r="220" fill="#607A16" fillOpacity="0.05" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10 text-center">
        
        {/* Brand Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#A4C639] uppercase mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Philosophy</span>
        </div>

        {/* Large Typography: Code. Create. Grow. */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight leading-[0.95] mb-8 text-white">
          <span className="text-white hover:text-[#A4C639] transition-colors">CODE.</span>{" "}
          <span className="text-[#A4C639]">CREATE.</span>{" "}
          <span className="text-[#B5D334]">GROW.</span>
        </h2>

        {/* Supporting Narrative */}
        <p className="text-xl sm:text-2xl md:text-3xl text-[#F5F5F5] font-light max-w-3xl mx-auto leading-relaxed mb-12">
          "{PERSONAL_PROFILE.brandStatement.body}"
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <button
            onClick={onOpenInquiry}
            className="px-9 py-4 rounded-full font-semibold text-sm tracking-wider uppercase bg-[#A4C639] text-[#050505] hover:bg-[#B5D334] transition-all duration-300 shadow-[0_0_35px_rgba(164,198,57,0.35)] hover:shadow-[0_0_50px_rgba(164,198,57,0.5)] flex items-center gap-3 cursor-pointer group hover:scale-105"
          >
            <span>Collaborate With NEXORA</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* 3 Pill Badges */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-xs text-[#9A9A9A]">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#A4C639]" />
            <span className="font-semibold text-white">Robust Engineering</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#A4C639]" />
            <span className="font-semibold text-white">Bespoke Aesthetics</span>
          </div>
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-[#A4C639]" />
            <span className="font-semibold text-white">Commercial Conversion</span>
          </div>
        </div>

      </div>
    </section>
  );
};
