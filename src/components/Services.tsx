import React from "react";
import {
  Code,
  Layers,
  TrendingUp,
  Search,
  Share2,
  Layout,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SERVICES, ServiceItem } from "../data/companyData";

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenInquiry: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenInquiry }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-6 h-6 text-[#A4C639]" />,
    Layers: <Layers className="w-6 h-6 text-[#A4C639]" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-[#A4C639]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#A4C639]" />,
    Share2: <Share2 className="w-6 h-6 text-[#A4C639]" />,
    Layout: <Layout className="w-6 h-6 text-[#A4C639]" />,
  };

  return (
    <section id="services" className="py-12 md:py-32 bg-[#0B0B0B] text-white relative overflow-hidden border-t border-white/5">
      {/* Subtle green ambient light */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#A4C639]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#607A16]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#A4C639] uppercase mb-3 md:mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Solutions</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Services I Offer
            </h2>
            <p className="mt-3 md:mt-4 text-base sm:text-lg text-[#9A9A9A]">
              Specialized services tailored for founders, high-growth startups, and established enterprises seeking measurable digital elevation.
            </p>
          </div>

          <button
            onClick={onOpenInquiry}
            className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111111] hover:bg-[#A4C639] text-white hover:text-black border border-white/15 hover:border-[#A4C639] transition-all self-start md:self-auto cursor-pointer shadow-md"
          >
            <span>Inquire About A Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="p-5 sm:p-8 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#A4C639]/60 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(164,198,57,0.15)] flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-black border border-white/10 group-hover:border-[#A4C639] group-hover:shadow-[0_0_20px_rgba(164,198,57,0.3)] flex items-center justify-center transition-all duration-300">
                    {iconMap[service.icon]}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#9A9A9A] group-hover:text-[#A4C639] transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#A4C639] transition-colors mb-2 sm:mb-3">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-1.5 sm:space-y-2 pt-3 sm:pt-4 border-t border-white/5">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A4C639] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Prompt */}
              <div className="pt-4 mt-4 sm:pt-6 sm:mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#9A9A9A] group-hover:text-white transition-colors">
                <span className="tracking-wide">Request Proposal</span>
                <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#A4C639] group-hover:text-black flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
