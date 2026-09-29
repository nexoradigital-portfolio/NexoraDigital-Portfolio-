import React, { useState } from "react";
import {
  Code,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Layout,
  Layers,
  Share2,
} from "lucide-react";
import { SKILLS_DATA, ServiceItem } from "../data/companyData";

interface SkillsAndServicesProps {
  onOpenInquiry: () => void;
  onSelectService?: (service: ServiceItem) => void;
}

export const SkillsAndServices: React.FC<SkillsAndServicesProps> = ({
  onOpenInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<"all" | "web" | "marketing">("all");

  return (
    <section
      id="skills-services"
      className="py-10 md:py-24 bg-white text-[#111111] relative overflow-hidden border-t border-black/5"
    >
      {/* Anchor targets for backward compatibility */}
      <div id="skills" className="absolute -top-16" />
      <div id="services" className="absolute -top-16" />

      {/* Subtle background ambient grid & soft green light */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#A4C639]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#607A16]/8 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 md:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-semibold tracking-widest uppercase mb-2.5 md:mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#A4C639]" />
              <span>Core Capabilities</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
              Skills & Services
            </h2>
            <p className="mt-2 md:mt-3 text-sm sm:text-base text-[#555555] leading-relaxed">
              Combining full-stack web development with commercial digital marketing to build fast, high-converting digital assets.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#F5F5F5] p-1 rounded-full border border-black/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-black text-white shadow-sm"
                  : "text-[#555555] hover:text-black"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === "web"
                  ? "bg-black text-white shadow-sm"
                  : "text-[#555555] hover:text-black"
              }`}
            >
              Web Dev
            </button>
            <button
              onClick={() => setActiveTab("marketing")}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === "marketing"
                  ? "bg-black text-white shadow-sm"
                  : "text-[#555555] hover:text-black"
              }`}
            >
              Marketing
            </button>
          </div>
        </div>

        {/* 2 Primary Capability Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 items-stretch">
          {/* CARD 1: WEB DEVELOPMENT */}
          {(activeTab === "all" || activeTab === "web") && (
            <div className="p-5 sm:p-8 rounded-3xl bg-[#F8F9FA] border border-black/10 shadow-sm hover:shadow-md hover:border-[#607A16]/40 transition-all flex flex-col justify-between group">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-black text-[#A4C639] flex items-center justify-center font-bold shadow-sm">
                      <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#607A16] uppercase tracking-widest">
                        Discipline 01
                      </span>
                      <h3 className="text-lg sm:text-2xl font-display font-extrabold text-[#111111]">
                        Website Development & UI/UX
                      </h3>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white border border-black/10 text-neutral-600 hidden sm:inline-block">
                    Frontend & CMS
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#555555] mb-4 sm:mb-6 leading-relaxed">
                  Modern, responsive and performance-focused websites engineered with clean semantic code, intuitive design, and sub-second load times.
                </p>

                {/* Key Deliverables */}
                <div className="mb-5 sm:mb-6 bg-white p-3.5 sm:p-5 rounded-2xl border border-black/5">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-2.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#607A16]" />
                    <span>What I Deliver</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#444444]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#607A16] shrink-0" />
                      <span>Custom React & SPA Sites</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#607A16] shrink-0" />
                      <span>Custom WordPress Themes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#607A16] shrink-0" />
                      <span>Sub-second Mobile Speeds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#607A16] shrink-0" />
                      <span>Clean Mobile-First UX/UI</span>
                    </div>
                  </div>
                </div>

                {/* Skills Tags */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#666666] mb-2.5">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {SKILLS_DATA.webDevelopment.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-black/10 text-xs font-semibold text-[#222222] shadow-2xs hover:border-[#607A16] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#607A16]" />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={onOpenInquiry}
                className="mt-5 sm:mt-6 pt-3.5 border-t border-black/10 flex items-center justify-between text-xs font-semibold text-[#111111] group-hover:text-[#607A16] transition-colors cursor-pointer"
              >
                <span>Discuss Web Development Project</span>
                <div className="w-6 h-6 rounded-full bg-black text-white group-hover:bg-[#A4C639] group-hover:text-black flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          )}

          {/* CARD 2: DIGITAL MARKETING */}
          {(activeTab === "all" || activeTab === "marketing") && (
            <div className="p-5 sm:p-8 rounded-3xl bg-[#F8F9FA] border border-black/10 shadow-sm hover:shadow-md hover:border-[#607A16]/40 transition-all flex flex-col justify-between group">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-black text-[#A4C639] flex items-center justify-center font-bold shadow-sm">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#607A16] uppercase tracking-widest">
                        Discipline 02
                      </span>
                      <h3 className="text-lg sm:text-2xl font-display font-extrabold text-[#111111]">
                        Digital Marketing & Growth
                      </h3>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white border border-black/10 text-neutral-600 hidden sm:inline-block">
                    PPC & Campaigns
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#555555] mb-4 sm:mb-6 leading-relaxed">
                  Data-backed customer acquisition, conversion optimization, and sustainable audience expansion engineered to maximize business ROI.
                </p>

                {/* Key Deliverables */}
                <div className="mb-5 sm:mb-6 bg-white p-3.5 sm:p-5 rounded-2xl border border-black/5">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-2.5 flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-[#607A16]" />
                    <span>What I Deliver</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#444444]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#607A16] shrink-0" />
                      <span>Google & Meta Paid Ads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#607A16] shrink-0" />
                      <span>Conversion Rate Optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#607A16] shrink-0" />
                      <span>GA4 & Funnel Tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#607A16] shrink-0" />
                      <span>Brand Strategy & Positioning</span>
                    </div>
                  </div>
                </div>

                {/* Skills Tags */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#666666] mb-2.5">
                    Growth Competencies
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {SKILLS_DATA.digitalMarketing.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-black/10 text-xs font-semibold text-[#222222] shadow-2xs hover:border-[#607A16] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#607A16]" />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={onOpenInquiry}
                className="mt-5 sm:mt-6 pt-3.5 border-t border-black/10 flex items-center justify-between text-xs font-semibold text-[#111111] group-hover:text-[#607A16] transition-colors cursor-pointer"
              >
                <span>Discuss Marketing Campaign</span>
                <div className="w-6 h-6 rounded-full bg-black text-white group-hover:bg-[#A4C639] group-hover:text-black flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          )}
        </div>

        {/* Compact Collaboration Bar */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border border-black/10">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-full bg-[#A4C639]/20 text-[#A4C639] flex items-center justify-center shrink-0">
              <Layout className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm text-neutral-300">
              Looking for a combined build-and-scale package? I offer end-to-end website engineering & growth retainers.
            </p>
          </div>

          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#A4C639] text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
