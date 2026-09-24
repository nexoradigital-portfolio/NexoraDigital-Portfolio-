import React, { useEffect } from "react";
import { X, ArrowUpRight, CheckCircle, Calendar, Building, Sparkles } from "lucide-react";
import { ProjectItem } from "../data/companyData";

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111111] border border-[#A4C639]/40 shadow-[0_24px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(164,198,57,0.15)] z-10 flex flex-col text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Sticky Header with Close */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 bg-[#111111]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#A4C639] px-2.5 py-1 rounded bg-[#A4C639]/10 border border-[#A4C639]/30">
              CASE STUDY {project.number}
            </span>
            <span className="text-xs text-[#9A9A9A]">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#9A9A9A] hover:text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Title & Client Banner */}
          <div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white mb-4">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs text-[#9A9A9A] pb-6 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-[#A4C639]" />
                <span>Client: <strong className="text-white">{project.client}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#A4C639]" />
                <span>Completed: <strong className="text-white">{project.year}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#A4C639]" />
                <span>Category: <strong className="text-white">{project.category}</strong></span>
              </div>
            </div>
          </div>

          {/* Hero Mockup Preview */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 bg-black">
            <img 
              src={project.image} 
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Impact Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-center">
                <span className="text-xs text-[#9A9A9A] mb-1">{metric.label}</span>
                <span className="text-2xl sm:text-3xl font-display font-black text-[#A4C639]">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Deep Narrative: Challenge, Solution, Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#A4C639] mb-2">
                01 / The Challenge
              </h3>
              <p className="text-sm text-[#F5F5F5] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#A4C639] mb-2">
                02 / The Solution
              </h3>
              <p className="text-sm text-[#F5F5F5] leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-[#A4C639]/40 bg-[#A4C639]/5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#A4C639] mb-2">
                03 / Business Impact
              </h3>
              <p className="text-sm text-[#F5F5F5] leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#9A9A9A] mb-3">
              Technologies & Tools Utilized
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/10 text-white border border-white/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 z-20 p-6 bg-[#111111]/95 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9A9A9A]">
            Interested in achieving similar metrics for your business?
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-[#9A9A9A] hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#A4C639] text-[#050505] hover:bg-[#B5D334] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(164,198,57,0.3)]"
            >
              <span>Build A Similar Solution</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
