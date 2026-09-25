import React, { useState } from "react";
import { ArrowUpRight, Sparkles, ExternalLink, Eye } from "lucide-react";
import { PROJECTS, ProjectItem } from "../data/companyData";

interface SelectedWorkProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Web Development", "Website + UI/UX", "Digital Marketing", "Fintech Website", "Social Media Marketing", "Web & Brand Campaign"];

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || p.category === activeFilter);

  return (
    <section id="work" className="py-12 md:py-32 bg-white text-[#111111] relative overflow-hidden border-t border-black/5">
      {/* Background subtleties */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#A4C639]/12 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 md:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-semibold tracking-widest uppercase mb-3 md:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#A4C639]" />
              <span>Proven Track Record</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
              Selected Work
            </h2>
            <p className="mt-3 md:mt-4 text-base sm:text-lg text-[#555555]">
              Real-world web architectures and high-ROI digital marketing initiatives delivering measurable business transformation.
            </p>
          </div>

          <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-[#F5F5F5] border border-black/10 text-neutral-600 self-start md:self-auto">
            {PROJECTS.length} Featured Case Studies
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 md:mb-10 scrollbar-none">
          {["All", "Web Dev", "E-Commerce", "Marketing", "Fintech", "Branding"].map((filterLabel) => {
            const isSelected =
              (filterLabel === "All" && activeFilter === "All") ||
              (filterLabel === "Web Dev" && activeFilter === "Web Development") ||
              (filterLabel === "E-Commerce" && activeFilter === "Website + UI/UX") ||
              (filterLabel === "Marketing" && activeFilter === "Digital Marketing") ||
              (filterLabel === "Fintech" && activeFilter === "Fintech Website") ||
              (filterLabel === "Branding" && (activeFilter === "Web & Brand Campaign" || activeFilter === "Branding"));

            return (
              <button
                key={filterLabel}
                onClick={() => {
                  if (filterLabel === "All") setActiveFilter("All");
                  else if (filterLabel === "Web Dev") setActiveFilter("Web Development");
                  else if (filterLabel === "E-Commerce") setActiveFilter("Website + UI/UX");
                  else if (filterLabel === "Marketing") setActiveFilter("Digital Marketing");
                  else if (filterLabel === "Fintech") setActiveFilter("Fintech Website");
                  else if (filterLabel === "Branding") setActiveFilter("Web & Brand Campaign");
                }}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#050505] text-white shadow-md ring-1 ring-[#A4C639]"
                    : "bg-[#F5F5F5] text-[#555555] hover:text-[#111111] hover:bg-neutral-200 border border-black/5"
                }`}
              >
                {filterLabel}
              </button>
            );
          })}
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#607A16]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
            >
              <div>
                {/* Image Container with Zoom & Green Overlay */}
                <div className="relative aspect-[16/10] bg-[#050505] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Floating Number Pill */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#A4C639]/40 text-[11px] font-mono font-bold text-[#A4C639]">
                    {project.number}
                  </div>

                  {/* View Details Prompt on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-[#607A16]" />
                      <span>View Case Study</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-7">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#607A16]">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-[#888888]">{project.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-extrabold text-[#111111] group-hover:text-[#607A16] transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] line-clamp-2 leading-relaxed mb-3 sm:mb-5">
                    {project.description}
                  </p>

                  {/* Highlight Metric */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#F5F5F5] border border-black/5 flex items-center justify-between mb-3 sm:mb-5">
                    <span className="text-[11px] text-[#666666] font-medium">{project.metrics[0].label}</span>
                    <span className="text-xs font-mono font-bold text-[#111111] bg-[#A4C639]/30 px-2 py-0.5 rounded">
                      {project.metrics[0].value}
                    </span>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-neutral-100 text-neutral-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 sm:px-7 py-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#111111]">
                <span className="group-hover:text-[#607A16] transition-colors">Client: {project.client}</span>
                <div className="w-7 h-7 rounded-full bg-black text-white group-hover:bg-[#A4C639] group-hover:text-black flex items-center justify-center transition-all duration-300">
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
