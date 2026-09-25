import React from "react";
import { ArrowUpRight, Code, TrendingUp, Layout, Layers, CheckCircle2 } from "lucide-react";
import { PERSONAL_PROFILE, HERO_FLOATING_CARDS } from "../data/companyData";

interface HeroProps {
  onOpenInquiry: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onViewWork }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-4 h-4 text-[#A4C639]" />,
    TrendingUp: <TrendingUp className="w-4 h-4 text-[#A4C639]" />,
    Layout: <Layout className="w-4 h-4 text-[#A4C639]" />,
    Layers: <Layers className="w-4 h-4 text-[#A4C639]" />,
  };

  return (
    <section
      id="home"
      className="relative min-h-0 md:min-h-screen bg-white text-[#111111] pt-24 pb-12 md:pt-36 md:pb-28 overflow-hidden flex items-center"
    >
      {/* Subtle background ambient grid & soft green light */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#A4C639]/12 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#607A16]/8 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Narrative & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            
            {/* Small Brand & Personal Name Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-semibold tracking-wider uppercase mb-4 md:mb-6 shadow-sm border border-black/10">
              <span className="w-2 h-2 rounded-full bg-[#A4C639] animate-pulse" />
              <span>BISMA IMRAN</span>
              <span className="text-[#9A9A9A]">/</span>
              <span className="text-[#A4C639] font-medium tracking-normal">Web Developer & Digital Marketer</span>
            </div>

            {/* Main Heading with Green Highlights */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#111111] tracking-tight leading-[1.15] mb-4 md:mb-6">
              Building{" "}
              <span className="text-[#607A16] underline decoration-[#A4C639] decoration-4 underline-offset-4">
                Digital Experiences
              </span>{" "}
              That{" "}
              <span className="relative inline-block text-[#111111]">
                Grow Businesses.
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#A4C639]/30 -z-10 rounded-sm"></span>
              </span>
            </h1>

            {/* Supporting Text with Personal Introduction */}
            <p className="text-base sm:text-xl text-[#444444] font-normal leading-relaxed max-w-xl mb-6 md:mb-8">
              Hi, I'm <strong className="text-[#111111] font-bold">Bisma Imran</strong>. I build fast, modern websites and execute targeted digital marketing campaigns designed to turn visitors into long-term clients.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-6 md:mb-10">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-semibold text-sm tracking-wide bg-[#050505] text-white hover:bg-[#A4C639] hover:text-[#050505] transition-all duration-300 shadow-md hover:shadow-[0_0_30px_rgba(164,198,57,0.4)] flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onViewWork}
                className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-semibold text-sm tracking-wide bg-white text-[#111111] border border-black/80 hover:border-[#A4C639] hover:text-[#607A16] hover:bg-[#A4C639]/5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>View My Work</span>
              </button>
            </div>

            {/* Credibility highlights */}
            <div className="pt-4 md:pt-6 border-t border-black/10 w-full flex flex-wrap items-center gap-6 text-xs text-[#555555]">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#607A16]" />
                <span>SEO & Conversion Optimized</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Studio Portrait + Floating Black Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Visual Aura / Green Glow Background */}
            <div className="relative w-full max-w-md">
              
              {/* Abstract Green Rings / Framing */}
              <div className="absolute -inset-4 rounded-3xl border border-[#A4C639]/40 pointer-events-none -rotate-2" />
              <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-[#A4C639]/15 via-transparent to-black/5 blur-2xl pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden bg-white shadow-2xl border border-black/10 ring-1 ring-[#A4C639]/30 transition-all duration-300">
                <img
                  src={PERSONAL_PROFILE.images.heroPortrait}
                  alt="NEXORA DIGITAL - Female Web Developer & Digital Marketer"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-center max-h-[380px] sm:max-h-[460px] md:max-h-[560px] transform hover:scale-[1.01] transition-transform duration-700"
                />

                {/* Subtle bottom gradient overlay for card blend */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
              </div>

              {/* 4 Floating Cards: Black (#111111), White Text, Green Icons (#A4C639), Green Borders */}
              
              {/* Card 01 - Top Left */}
              <div className="absolute -top-3 -left-2 sm:-top-4 sm:-left-8 z-20 bg-[#111111] text-white p-2.5 sm:p-3.5 rounded-xl border border-[#A4C639]/40 shadow-xl backdrop-blur-md flex items-center gap-2 sm:gap-3 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-black/80 border border-[#A4C639]/50 flex items-center justify-center shrink-0">
                  {iconMap[HERO_FLOATING_CARDS[0].icon]}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#A4C639] tracking-wider">{HERO_FLOATING_CARDS[0].number}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">{HERO_FLOATING_CARDS[0].title}</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#9A9A9A] leading-tight">{HERO_FLOATING_CARDS[0].detail}</p>
                </div>
              </div>

              {/* Card 02 - Top Right */}
              <div className="absolute top-12 -right-2 sm:top-16 sm:-right-8 z-20 bg-[#111111] text-white p-2.5 sm:p-3.5 rounded-xl border border-[#A4C639]/40 shadow-xl backdrop-blur-md flex items-center gap-2 sm:gap-3 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-black/80 border border-[#A4C639]/50 flex items-center justify-center shrink-0">
                  {iconMap[HERO_FLOATING_CARDS[1].icon]}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#A4C639] tracking-wider">{HERO_FLOATING_CARDS[1].number}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">{HERO_FLOATING_CARDS[1].title}</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#9A9A9A] leading-tight">{HERO_FLOATING_CARDS[1].detail}</p>
                </div>
              </div>

              {/* Card 03 - Bottom Left */}
              <div className="absolute bottom-14 -left-2 sm:bottom-20 sm:-left-8 z-20 bg-[#111111] text-white p-2.5 sm:p-3.5 rounded-xl border border-[#A4C639]/40 shadow-xl backdrop-blur-md flex items-center gap-2 sm:gap-3 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-black/80 border border-[#A4C639]/50 flex items-center justify-center shrink-0">
                  {iconMap[HERO_FLOATING_CARDS[2].icon]}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#A4C639] tracking-wider">{HERO_FLOATING_CARDS[2].number}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">{HERO_FLOATING_CARDS[2].title}</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#9A9A9A] leading-tight">{HERO_FLOATING_CARDS[2].detail}</p>
                </div>
              </div>

              {/* Card 04 - Bottom Right */}
              <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-6 z-20 bg-[#111111] text-white p-2.5 sm:p-3.5 rounded-xl border border-[#A4C639]/40 shadow-xl backdrop-blur-md flex items-center gap-2 sm:gap-3 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-black/80 border border-[#A4C639]/50 flex items-center justify-center shrink-0">
                  {iconMap[HERO_FLOATING_CARDS[3].icon]}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#A4C639] tracking-wider">{HERO_FLOATING_CARDS[3].number}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">{HERO_FLOATING_CARDS[3].title}</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#9A9A9A] leading-tight">{HERO_FLOATING_CARDS[3].detail}</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
