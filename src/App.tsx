/**
 * NEXORA DIGITAL - Personal Portfolio Website
 * Web Developer & Digital Marketer
 * 
 * Strict Black, White & Green Palette
 * Alternating White and Black background sections
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Services } from "./components/Services";
import { SelectedWork } from "./components/SelectedWork";
import { Process } from "./components/Process";
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
    const workSection = document.getElementById("work");
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

        {/* 2. About Me (BLACK Background - #050505) */}
        <About onOpenInquiry={handleOpenInquiry} />

        {/* 3. Skills / Expertise (WHITE Background) */}
        <Skills />

        {/* 4. Services (BLACK Background - #0B0B0B) */}
        <Services
          onSelectService={handleSelectService}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 5. Selected Work / Projects (WHITE Background) */}
        <SelectedWork
          onSelectProject={(project) => setSelectedCaseStudy(project)}
        />

        {/* 6. Simple Process (BLACK Background - #050505) */}
        <Process />

        {/* 7. Contact (WHITE Background) */}
        <Contact />
      </main>

      {/* Footer (BLACK Background - #050505) */}
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
