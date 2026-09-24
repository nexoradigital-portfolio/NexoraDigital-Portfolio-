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
import { Statistics } from "./components/Statistics";
import { Process } from "./components/Process";
import { BrandStatement } from "./components/BrandStatement";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CaseStudyModal } from "./components/CaseStudyModal";
import { ProjectInquiryModal } from "./components/ProjectInquiryModal";
import { ProjectItem, ServiceItem } from "./data/companyData";

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>("Website Development");

  const handleOpenInquiry = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForInquiry(serviceTitle);
    }
    setInquiryModalOpen(true);
  };

  const handleViewWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    handleOpenInquiry(service.title);
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#A4C639]/30 selection:text-black">
      {/* Sticky Top Navigation Bar */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Flow with Alternating Backgrounds */}
      <main>
        {/* 1. Hero Section (WHITE Background) */}
        <Hero
          onOpenInquiry={() => handleOpenInquiry()}
          onViewWork={handleViewWork}
        />

        {/* 2. About / Personal Introduction (BLACK Background - #050505) */}
        <About onOpenInquiry={() => handleOpenInquiry()} />

        {/* 3. Skills: "What I Do" (WHITE Background) */}
        <Skills />

        {/* 4. Services I Offer (BLACK Background - #0B0B0B) */}
        <Services
          onSelectService={handleSelectService}
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* 5. Selected Work (WHITE Background) */}
        <SelectedWork
          onSelectProject={(project) => setSelectedCaseStudy(project)}
        />

        {/* 6. Experience / Statistics (BLACK Background - #050505) */}
        <Statistics />

        {/* 7. How I Work / Process (WHITE Background) */}
        <Process />

        {/* 8. Personal Brand Section: "Code. Create. Grow." (BLACK Background - #050505) */}
        <BrandStatement onOpenInquiry={() => handleOpenInquiry()} />

        {/* 9. Testimonials (WHITE Background) */}
        <Testimonials />

        {/* 10. Contact: "Let's Build Something Great" (WHITE Background) */}
        <Contact />
      </main>

      {/* 11. Footer (BLACK Background - #050505) */}
      <Footer />

      {/* Interactive Case Study Detail Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onInquire={(title) => {
          setSelectedCaseStudy(null);
          handleOpenInquiry(title);
        }}
      />

      {/* Quick Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultService={selectedServiceForInquiry}
      />
    </div>
  );
}
