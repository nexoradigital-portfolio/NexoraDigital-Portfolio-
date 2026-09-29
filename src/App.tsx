/**
 * BISMA IMRAN - Personal Portfolio Website
 * Web Developer & Digital Marketer
 * 
 * Strict Black, White & Green Palette
 * Alternating White and Black background sections
 * Concise, high-impact flow
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { SkillsAndServices } from "./components/SkillsAndServices";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CaseStudyModal } from "./components/CaseStudyModal";
import { ProjectItem, ServiceItem } from "./data/companyData";

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);

  const handleOpenInquiry = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewWork = () => {
    const workSection = document.getElementById("projects") || document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (_service: ServiceItem) => {
    handleOpenInquiry();
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#A4C639]/30 selection:text-black overflow-x-hidden">
      {/* Sticky Top Navigation Bar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Flow with Alternating Backgrounds */}
      <main>
        {/* 1. Hero Section (WHITE Background) */}
        <Hero
          onOpenInquiry={handleOpenInquiry}
          onViewWork={handleViewWork}
        />

        {/* 2. Short About Me (BLACK Background - #050505) */}
        <About onOpenInquiry={handleOpenInquiry} />

        {/* 3. Skills & Services (WHITE Background) */}
        <SkillsAndServices
          onOpenInquiry={handleOpenInquiry}
          onSelectService={handleSelectService}
        />

        {/* 4. Featured Projects (BLACK Background - #0B0B0B) */}
        <FeaturedProjects
          onSelectProject={(project) => setSelectedCaseStudy(project)}
        />

        {/* 5. Contact (WHITE Background) */}
        <Contact />
      </main>

      {/* 6. Footer (BLACK Background - #050505) */}
      <Footer />

      {/* Interactive Case Study Detail Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onInquire={(_title) => {
          setSelectedCaseStudy(null);
          handleOpenInquiry();
        }}
      />
    </div>
  );
}
