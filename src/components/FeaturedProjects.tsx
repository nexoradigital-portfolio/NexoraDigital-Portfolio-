import React, { useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Eye,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { PROJECTS, ProjectItem } from "../data/companyData";

interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const investlinkProject = PROJECTS.find((p) => p.id === "investlink-advisor") || PROJECTS[0];
  const otherProjects = PROJECTS.filter((p) => p.id !== "investlink-advisor");

  const filteredOtherProjects =
    activeFilter === "All"
      ? otherProjects
      : otherProjects.filter((p) => {
          const cat = p.category.toLowerCase();
          if (activeFilter === "Web Dev") {
            return cat.includes("web");
          }
          if (activeFilter === "E-Commerce") {
            return cat.includes("commerce") || cat.includes("e-commerce") || cat.includes("ui/ux");
          }
          if (activeFilter === "Marketing") {
            return cat.includes("marketing");
          }
          if (activeFilter === "Fintech") {
            return cat.includes("fintech") || cat.includes("finance");
          }
          return cat.includes(activeFilter.toLowerCase());
        });

  return (
    <section
      id="projects"
      className="py-10 md:py-24 bg-[#0B0B0B] text-white relative overflow-hidden border-t border-white/5"
    >
      {/* Target for backward compatibility */}
      <div id="work" className="absolute -top-16" />

      {/* Subtle green ambient light */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#A4C639]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#607A16]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 md:mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#A4C639] uppercase mb-2.5 md:mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Results</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 md:mt-3 text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
              Real-world web platforms and commercial growth campaigns engineered for measurable client success.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#A4C639]">
              {PROJECTS.length} Selected Projects
            </span>
          </div>
        </div>

        {/* 1. PROMINENT MAIN PROJECT: INVESTLINK ADVISOR */}
        {investlinkProject && (
          <div className="mb-8 md:mb-12 rounded-3xl bg-[#111111] border border-[#A4C639]/40 p-4 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(164,198,57,0.15)] relative overflow-hidden group">
            {/* Top highlight glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A4C639] to-transparent opacity-80" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
              {/* Left Column: Image Preview with Click to Live */}
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-black border border-white/10 aspect-[16/10] sm:aspect-[16/9] group-hover:border-[#A4C639]/60 transition-colors">
                <img
                  src={investlinkProject.image}
                  alt={investlinkProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Badges */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2">
                  <div className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-[#A4C639]/50 text-[10px] sm:text-xs font-mono font-bold text-[#A4C639] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#A4C639] animate-pulse" />
                    <span>FLAGSHIP PROJECT</span>
                  </div>
                </div>

                {/* Quick Live Preview Overlay */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                  <a
                    href={investlinkProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#A4C639] text-black text-xs font-bold shadow-md hover:bg-white transition-colors"
                  >
                    <span>investlinkadvisor.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Narrative, Role & Live Button */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A4C639] bg-[#A4C639]/10 px-2.5 py-1 rounded-md border border-[#A4C639]/30">
                      {investlinkProject.category}
                    </span>
                    <span className="text-xs text-[#9A9A9A] font-mono">
                      Completed {investlinkProject.year}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-display font-extrabold text-white mb-2 sm:mb-3 group-hover:text-[#A4C639] transition-colors">
                    {investlinkProject.title}
                  </h3>

                  {/* Role specification */}
                  {investlinkProject.role && (
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A4C639] mb-3">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Role: {investlinkProject.role}</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed mb-4 sm:mb-6">
                    {investlinkProject.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-6">
                    {investlinkProject.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="p-2 sm:p-3 rounded-xl bg-black/60 border border-white/10 text-center"
                      >
                        <span className="block text-[10px] sm:text-xs text-[#888888] truncate mb-0.5">
                          {metric.label}
                        </span>
                        <span className="text-xs sm:text-base font-display font-bold text-[#A4C639]">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
                    {investlinkProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/5 text-[#CCCCCC] border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href="https://investlinkadvisor.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-[#A4C639] text-[#050505] hover:bg-[#B5D334] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(164,198,57,0.4)] cursor-pointer"
                  >
                    <span>View Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectProject(investlinkProject)}
                    className="w-full sm:w-auto px-5 py-3 rounded-full font-semibold text-xs uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-[#A4C639]" />
                    <span>Case Study Details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. FILTER PILLS FOR OTHER PROJECTS */}
        <div className="flex items-center justify-between gap-4 mb-5 sm:mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#9A9A9A]">
            More Selected Work
          </h4>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {["All", "Web Dev", "E-Commerce", "Marketing", "Fintech"].map(
              (filterLabel) => {
                const isSelected = activeFilter === filterLabel;

                return (
                  <button
                    key={filterLabel}
                    onClick={() => setActiveFilter(filterLabel)}
                    className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#A4C639] text-black shadow-sm font-bold"
                        : "bg-white/5 text-[#9A9A9A] hover:text-white border border-white/10"
                    }`}
                  >
                    {filterLabel}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* 3. COMPACT OTHER PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredOtherProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-[#111111] rounded-2xl border border-white/10 overflow-hidden shadow-sm hover:border-[#A4C639]/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(164,198,57,0.15)] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] bg-black overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

                  {/* Number & Live pill */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                    <div className="px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-[#A4C639]">
                      {project.number}
                    </div>
                    {project.liveUrl && (
                      <div className="px-2 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-[#A4C639]/50 text-[9px] font-mono font-bold text-[#A4C639] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A4C639] animate-pulse" />
                        <span>LIVE</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A4C639]">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#888888]">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-[#A4C639] transition-colors mb-1.5 line-clamp-1">
                    {project.title}
                  </h3>

                  {project.role && (
                    <div className="text-[11px] font-medium text-[#A4C639] mb-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A4C639]" />
                      <span>{project.role}</span>
                    </div>
                  )}

                  <p className="text-xs text-[#9A9A9A] line-clamp-2 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Highlight Metric */}
                  <div className="p-2 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between mb-3">
                    <span className="text-[10px] text-[#888888] font-medium">
                      {project.metrics[0].label}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#A4C639]">
                      {project.metrics[0].value}
                    </span>
                  </div>

                  {/* Live Website Action Button if present */}
                  {project.liveUrl && (
                    <div className="pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-2 px-3 rounded-full bg-[#A4C639] hover:bg-[#B5D334] text-[#050505] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <span>View Live Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom footer */}
              <div className="px-4 sm:px-5 py-3 border-t border-white/5 flex items-center justify-between text-xs text-[#9A9A9A]">
                <span className="text-[11px]">Client: {project.client}</span>
                <div className="flex items-center gap-1 text-[11px] group-hover:text-white transition-colors">
                  <span>Case Study</span>
                  <div className="w-6 h-6 rounded-full bg-white/5 text-white group-hover:bg-[#A4C639] group-hover:text-black flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
