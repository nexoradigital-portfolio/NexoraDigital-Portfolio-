import React from "react";
import { Sparkles, Compass, Lightbulb, PenTool, Code2, Rocket } from "lucide-react";
import { PROCESS_STEPS } from "../data/companyData";

export const Process: React.FC = () => {
  const stepIcons = [
    <Compass className="w-5 h-5 text-[#A4C639]" />,
    <Lightbulb className="w-5 h-5 text-[#A4C639]" />,
    <PenTool className="w-5 h-5 text-[#A4C639]" />,
    <Code2 className="w-5 h-5 text-[#A4C639]" />,
    <Rocket className="w-5 h-5 text-[#A4C639]" />,
  ];

  return (
    <section id="process" className="py-12 md:py-32 bg-[#050505] text-white relative overflow-hidden border-t border-white/5">
      {/* Background subtleties */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-[#A4C639]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#A4C639] uppercase mb-3 md:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A4C639]" />
            <span>Structured Execution</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            How I Work
          </h2>
          <p className="mt-3 md:mt-4 text-base sm:text-lg text-[#9A9A9A]">
            A five-step streamlined process designed for rapid execution, absolute transparent milestones, and measurable results.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-12 z-0" />

          {/* 5 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 md:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="p-4 sm:p-6 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#A4C639]/60 hover:shadow-[0_10px_30px_rgba(164,198,57,0.1)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon Top Bar */}
                  <div className="flex items-center justify-between mb-3 sm:mb-6">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-black border border-white/10 text-[#A4C639]">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black border border-white/10 group-hover:border-[#A4C639]/40 flex items-center justify-center transition-colors shadow-sm">
                      {stepIcons[idx % stepIcons.length]}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-xl font-display font-bold text-white group-hover:text-[#A4C639] transition-colors mb-1.5 sm:mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#A4C639] mb-2 sm:mb-3">
                    {step.summary}
                  </p>

                  <p className="text-xs text-[#9A9A9A] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 sm:mt-6 sm:pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#777777]">
                  <span>PHASE 0{idx + 1}</span>
                  <span className="font-semibold text-white">MILESTONE</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
