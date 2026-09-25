import React, { useState } from "react";
import { Code, TrendingUp, Sparkles, CheckCircle2, Cpu, Globe, Rocket, ShieldCheck } from "lucide-react";
import { SKILLS_DATA } from "../data/companyData";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "web" | "marketing">("all");

  return (
    <section id="skills" className="py-12 md:py-32 bg-white text-[#111111] relative overflow-hidden border-t border-black/5">
      {/* Background subtleties */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#A4C639]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-semibold tracking-widest uppercase mb-3 md:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#A4C639]" />
              <span>Core Competencies</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
              What I Do
            </h2>
            <p className="mt-3 md:mt-4 text-base sm:text-lg text-[#555555]">
              A specialized dual capability in full-stack web engineering and commercial digital growth strategies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#F5F5F5] p-1.5 rounded-full border border-black/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeTab === "all"
                  ? "bg-black text-white shadow-sm"
                  : "text-[#555555] hover:text-black"
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeTab === "web"
                  ? "bg-black text-white shadow-sm"
                  : "text-[#555555] hover:text-black"
              }`}
            >
              Web Dev
            </button>
            <button
              onClick={() => setActiveTab("marketing")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeTab === "marketing"
                  ? "bg-black text-white shadow-sm"
                  : "text-[#555555] hover:text-black"
              }`}
            >
              Marketing
            </button>
          </div>
        </div>

        {/* 2 Category Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* CATEGORY 1: WEB DEVELOPMENT */}
          {(activeTab === "all" || activeTab === "web") && (
            <div className="p-5 sm:p-10 rounded-3xl bg-[#F5F5F5] border border-black/10 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-black text-[#A4C639] flex items-center justify-center font-bold">
                      <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#607A16] uppercase tracking-widest">Discipline 01</span>
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#111111]">
                        {SKILLS_DATA.webDevelopment.category}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-white border border-black/10 text-neutral-600">
                    8 Competencies
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#555555] mb-5 sm:mb-8 leading-relaxed">
                  {SKILLS_DATA.webDevelopment.description}
                </p>

                {/* Skill Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {SKILLS_DATA.webDevelopment.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 sm:p-3.5 rounded-xl bg-white border border-black/10 hover:border-[#607A16] hover:bg-[#A4C639]/5 transition-all group flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#607A16] transition-colors">
                          {skill.name}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-[#607A16]" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-[#777777] font-medium">{skill.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-4 sm:mt-8 sm:pt-6 border-t border-black/10 flex items-center justify-between text-xs text-[#555555]">
                <span className="font-semibold text-black">Modern Web Standards</span>
                <span>TypeScript • Tailwind • React 19 • Next.js Ready</span>
              </div>
            </div>
          )}

          {/* CATEGORY 2: DIGITAL MARKETING */}
          {(activeTab === "all" || activeTab === "marketing") && (
            <div className="p-5 sm:p-10 rounded-3xl bg-[#F5F5F5] border border-black/10 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-black text-[#A4C639] flex items-center justify-center font-bold">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#607A16] uppercase tracking-widest">Discipline 02</span>
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#111111]">
                        {SKILLS_DATA.digitalMarketing.category}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-white border border-black/10 text-neutral-600">
                    8 Competencies
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#555555] mb-5 sm:mb-8 leading-relaxed">
                  {SKILLS_DATA.digitalMarketing.description}
                </p>

                {/* Skill Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {SKILLS_DATA.digitalMarketing.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 sm:p-3.5 rounded-xl bg-white border border-black/10 hover:border-[#607A16] hover:bg-[#A4C639]/5 transition-all group flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#607A16] transition-colors">
                          {skill.name}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-[#607A16]" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-[#777777] font-medium">{skill.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-4 sm:mt-8 sm:pt-6 border-t border-black/10 flex items-center justify-between text-xs text-[#555555]">
                <span className="font-semibold text-black">Performance & Growth</span>
                <span>GA4 • Google Ads • Meta Suite • Semrush • Core Web Vitals</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
