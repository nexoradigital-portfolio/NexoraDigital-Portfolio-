import React, { useState, useRef } from "react";
import { ArrowUpRight, Code, TrendingUp, Layout, Layers, Sparkles, CheckCircle2, Camera, Upload, RotateCcw, Image as ImageIcon } from "lucide-react";
import { PERSONAL_PROFILE, HERO_FLOATING_CARDS } from "../data/companyData";

interface HeroProps {
  onOpenInquiry: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onViewWork }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const [portraitSrc, setPortraitSrc] = useState<string>(() => {
    const saved = localStorage.getItem("nexora_user_portrait");
    if (saved && (saved.startsWith("data:") || saved.startsWith("blob:"))) {
      return saved;
    }
    return PERSONAL_PROFILE.images.heroPortrait;
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processPhotoFile(file);
    }
  };

  const processPhotoFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setPortraitSrc(dataUrl);
        try {
          localStorage.setItem("nexora_user_portrait", dataUrl);
        } catch {
          // localStorage quota exceeded gracefully ignored
        }
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processPhotoFile(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem("nexora_user_portrait");
    setPortraitSrc(PERSONAL_PROFILE.images.heroPortrait);
  };

  const hasCustomPhoto = portraitSrc !== PERSONAL_PROFILE.images.heroPortrait;

  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-4 h-4 text-[#A4C639]" />,
    TrendingUp: <TrendingUp className="w-4 h-4 text-[#A4C639]" />,
    Layout: <Layout className="w-4 h-4 text-[#A4C639]" />,
    Layers: <Layers className="w-4 h-4 text-[#A4C639]" />,
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-white text-[#111111] pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden flex items-center"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Narrative & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            
            {/* Small Brand Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm border border-black/10">
              <span className="w-2 h-2 rounded-full bg-[#A4C639] animate-pulse" />
              <span>{PERSONAL_PROFILE.brandName}</span>
              <span className="text-[#9A9A9A]">/</span>
              <span className="text-[#A4C639] font-medium tracking-normal">{PERSONAL_PROFILE.roleTitle}</span>
            </div>

            {/* Main Heading with Green Highlights */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#111111] tracking-tight leading-[1.1] mb-6">
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

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#444444] font-normal leading-relaxed max-w-xl mb-8">
              {PERSONAL_PROFILE.heroSupportingText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm tracking-wide bg-[#050505] text-white hover:bg-[#A4C639] hover:text-[#050505] transition-all duration-300 shadow-md hover:shadow-[0_0_30px_rgba(164,198,57,0.4)] flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onViewWork}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm tracking-wide bg-white text-[#111111] border border-black/80 hover:border-[#A4C639] hover:text-[#607A16] hover:bg-[#A4C639]/5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>View My Work</span>
              </button>
            </div>

            {/* Credibility highlights */}
            <div className="pt-6 border-t border-black/10 w-full flex flex-wrap items-center gap-6 text-xs text-[#555555]">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#607A16]" />
                <span>50+ Web Projects Completed</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#607A16]" />
                <span>Full-Funnel Digital Marketing</span>
              </div>
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
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative z-10 rounded-2xl overflow-hidden bg-white shadow-2xl border transition-all duration-300 ${
                  isDragging
                    ? "border-[#A4C639] ring-4 ring-[#A4C639]/40 scale-[1.01]"
                    : "border-black/10 ring-1 ring-[#A4C639]/30"
                }`}
              >
                {/* Hidden File Input for Native File Selection */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />

                <img
                  src={portraitSrc}
                  alt="NEXORA DIGITAL - Female Web Developer & Digital Marketer"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-center max-h-[560px] transform hover:scale-[1.01] transition-transform duration-700"
                />
                
                {/* Dragging Active Overlay */}
                {isDragging && (
                  <div className="absolute inset-0 z-40 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-[#A4C639] rounded-2xl">
                    <Upload className="w-10 h-10 text-[#A4C639] animate-bounce mb-3" />
                    <p className="text-sm font-bold text-white mb-1">Drop your exact photo here</p>
                    <p className="text-xs text-neutral-300">Loads your 100% original photo instantly without alterations</p>
                  </div>
                )}

                {/* Upload Success Toast */}
                {uploadSuccess && (
                  <div className="absolute top-4 inset-x-4 z-40 bg-[#0B0B0B]/95 text-white px-3.5 py-2 rounded-xl border border-[#A4C639] shadow-2xl backdrop-blur-md flex items-center justify-center gap-2 text-xs font-semibold animate-in fade-in slide-in-from-top-2 duration-300">
                    <CheckCircle2 className="w-4 h-4 text-[#A4C639]" />
                    <span>Exact photo loaded successfully!</span>
                  </div>
                )}

                {/* Floating Interactive Action Badge */}
                <div className="absolute bottom-3 inset-x-3 z-30 flex items-center justify-between pointer-events-auto">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#050505]/95 hover:bg-black text-white text-[11px] font-bold border border-white/20 hover:border-[#A4C639] transition-all shadow-xl backdrop-blur-md cursor-pointer group"
                    title="Upload your exact original photo (WhatsApp Image or camera roll)"
                  >
                    <Camera className="w-3.5 h-3.5 text-[#A4C639] group-hover:scale-110 transition-transform" />
                    <span>{hasCustomPhoto ? "Replace Photo" : "Upload My Photo"}</span>
                  </button>

                  {hasCustomPhoto && (
                    <button
                      type="button"
                      onClick={handleResetPhoto}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-neutral-300 hover:text-white text-[10px] font-medium border border-white/10 hover:border-white/30 transition-all shadow-md backdrop-blur-md cursor-pointer"
                      title="Reset to default portrait"
                    >
                      <RotateCcw className="w-3 h-3 text-neutral-400" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>

                {/* Subtle bottom gradient overlay for card blend */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
              </div>

              {/* 4 Floating Cards: Black (#111111), White Text, Green Icons (#A4C639), Green Borders */}
              
              {/* Card 01 - Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-8 z-20 bg-[#111111] text-white p-3 sm:p-3.5 rounded-xl border border-[#A4C639]/40 shadow-xl backdrop-blur-md flex items-center gap-3 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="w-9 h-9 rounded-lg bg-black/80 border border-[#A4C639]/50 flex items-center justify-center shrink-0">
                  {iconMap[HERO_FLOATING_CARDS[0].icon]}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#A4C639] tracking-wider">{HERO_FLOATING_CARDS[0].number}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">{HERO_FLOATING_CARDS[0].title}</span>
                  </div>
                  <p className="text-[11px] text-[#9A9A9A] leading-tight">{HERO_FLOATING_CARDS[0].detail}</p>
                </div>
              </div>

              {/* Card 02 - Top Right */}
              <div className="absolute top-16 -right-4 sm:-right-8 z-20 bg-[#111111] text-white p-3 sm:p-3.5 rounded-xl border border-[#A4C639]/40 shadow-xl backdrop-blur-md flex items-center gap-3 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-9 h-9 rounded-lg bg-black/80 border border-[#A4C639]/50 flex items-center justify-center shrink-0">
                  {iconMap[HERO_FLOATING_CARDS[1].icon]}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#A4C639] tracking-wider">{HERO_FLOATING_CARDS[1].number}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">{HERO_FLOATING_CARDS[1].title}</span>
                  </div>
                  <p className="text-[11px] text-[#9A9A9A] leading-tight">{HERO_FLOATING_CARDS[1].detail}</p>
                </div>
              </div>

              {/* Card 03 - Bottom Left */}
              <div className="absolute bottom-20 -left-4 sm:-left-8 z-20 bg-[#111111] text-white p-3 sm:p-3.5 rounded-xl border border-[#A4C639]/40 shadow-xl backdrop-blur-md flex items-center gap-3 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="w-9 h-9 rounded-lg bg-black/80 border border-[#A4C639]/50 flex items-center justify-center shrink-0">
                  {iconMap[HERO_FLOATING_CARDS[2].icon]}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#A4C639] tracking-wider">{HERO_FLOATING_CARDS[2].number}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">{HERO_FLOATING_CARDS[2].title}</span>
                  </div>
                  <p className="text-[11px] text-[#9A9A9A] leading-tight">{HERO_FLOATING_CARDS[2].detail}</p>
                </div>
              </div>

              {/* Card 04 - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 z-20 bg-[#111111] text-white p-3 sm:p-3.5 rounded-xl border border-[#A4C639]/40 shadow-xl backdrop-blur-md flex items-center gap-3 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-9 h-9 rounded-lg bg-black/80 border border-[#A4C639]/50 flex items-center justify-center shrink-0">
                  {iconMap[HERO_FLOATING_CARDS[3].icon]}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#A4C639] tracking-wider">{HERO_FLOATING_CARDS[3].number}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">{HERO_FLOATING_CARDS[3].title}</span>
                  </div>
                  <p className="text-[11px] text-[#9A9A9A] leading-tight">{HERO_FLOATING_CARDS[3].detail}</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
