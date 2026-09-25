import React from "react";
import { Sparkles, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/companyData";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 md:py-32 bg-white text-[#111111] relative overflow-hidden border-t border-black/5">
      {/* Background subtleties */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#A4C639]/12 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-semibold tracking-widest uppercase mb-3 md:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A4C639]" />
            <span>Client Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
            Client Words & Trust
          </h2>
          <p className="mt-3 md:mt-4 text-base sm:text-lg text-[#555555]">
            Unfiltered feedback from founders and brand leaders who experienced our joint technical and marketing execution.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-5 sm:p-8 rounded-3xl bg-[#F5F5F5] border border-black/10 hover:border-[#607A16] hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Top Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-3.5 sm:mb-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black text-[#A4C639] flex items-center justify-center">
                    <Quote className="w-4 h-4 sm:w-5 sm:h-5 fill-[#A4C639]" />
                  </div>
                  <div className="flex items-center gap-1 text-[#607A16]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#607A16] text-[#607A16]" />
                    ))}
                  </div>
                </div>

                {/* Quote Content */}
                <p className="text-sm sm:text-lg font-normal text-[#222222] leading-relaxed mb-3.5 sm:mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Highlight Metric Pill if available */}
                {testimonial.highlightMetric && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#A4C639]/20 border border-[#607A16]/30 text-xs font-bold text-[#607A16] mb-3.5 sm:mb-6">
                    <span>Outcome:</span>
                    <span>{testimonial.highlightMetric}</span>
                  </div>
                )}
              </div>

              {/* Author Info */}
              <div className="pt-3.5 sm:pt-4 border-t border-black/10 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-[#A4C639] font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#607A16] transition-colors">
                    {testimonial.author}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#666666]">
                    {testimonial.role}, <span className="font-semibold text-black">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
