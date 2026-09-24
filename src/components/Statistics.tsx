import React from "react";
import { Sparkles, Trophy, Users, Briefcase, SmilePlus } from "lucide-react";
import { STATISTICS } from "../data/companyData";

export const Statistics: React.FC = () => {
  const iconList = [
    <Users className="w-5 h-5 text-[#A4C639]" />,
    <Briefcase className="w-5 h-5 text-[#A4C639]" />,
    <SmilePlus className="w-5 h-5 text-[#A4C639]" />,
  ];

  return (
    <section className="py-20 md:py-28 bg-[#050505] text-white relative overflow-hidden border-t border-white/5">
      {/* Subtle green ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-[#A4C639]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Small Intro Badge */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#A4C639] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Demonstrated Impact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            Proven Performance by the Numbers
          </h2>
        </div>

        {/* 3 Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {STATISTICS.map((stat, idx) => (
            <div
              key={stat.label}
              className="p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#A4C639]/50 transition-all duration-300 group hover:-translate-y-1 text-center sm:text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-black border border-white/10 group-hover:border-[#A4C639]/40 flex items-center justify-center mb-6 mx-auto sm:mx-0 transition-colors">
                  {iconList[idx % iconList.length]}
                </div>

                <div className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white group-hover:text-[#A4C639] transition-colors mb-2">
                  {stat.value}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {stat.label}
                </h3>

                <p className="text-xs text-[#9A9A9A] leading-relaxed">
                  {stat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#777777]">
                <span>VERIFIED METRIC</span>
                <span className="text-[#A4C639]">LIVE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
