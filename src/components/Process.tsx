import React from "react";
import { Sparkles, Compass, Lightbulb, PenTool, Code2, Rocket } from "lucide-react";
import { PROCESS_STEPS } from "../data/companyData";

export const Process: React.FC = () => {
  const stepIcons = [
    <Compass className="w-5 h-5 text-[#607A16]" />,
    <Lightbulb className="w-5 h-5 text-[#607A16]" />,
    <PenTool className="w-5 h-5 text-[#607A16]" />,
    <Code2 className="w-5 h-5 text-[#607A16]" />,
    <Rocket className="w-5 h-5 text-[#607A16]" />,
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-white text-[#111111] relative overflow-hidden border-t border-black/5">
      {/* Background subtleties */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-[#A4C639]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A4C639]" />
            <span>Structured Execution</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
            How I Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555555]">
            A five-step structured methodology designed for rapid execution, absolute transparent milestones, and measurable results.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-black/10 -translate-y-12 z-0" />

          {/* 5 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="p-6 rounded-3xl bg-[#F5F5F5] border border-black/10 hover:border-[#607A16] hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-black text-[#A4C639]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-black/10 group-hover:border-[#607A16] flex items-center justify-center transition-colors shadow-sm">
                      {stepIcons[idx % stepIcons.length]}
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-[#111111] group-hover:text-[#607A16] transition-colors mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#607A16] mb-3">
                    {step.summary}
                  </p>

                  <p className="text-xs text-[#666666] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span>PHASE 0{idx + 1}</span>
                  <span className="font-semibold text-black">MILESTONE</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
