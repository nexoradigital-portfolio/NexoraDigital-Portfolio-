import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Sparkles, ArrowUpRight, AlertCircle, Loader2 } from "lucide-react";
import { SERVICES } from "../data/companyData";

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService || "Website Development",
    budget: "$2.5K - $5K",
    timeline: "1 - 2 Months",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.details.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, Project Details).");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.details.trim(),
          source: "Interactive Project Inquiry Modal",
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Modal inquiry submission error:", err);
      setErrorMessage(
        err?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Website Development",
      budget: "$2.5K - $5K",
      timeline: "1 - 2 Months",
      details: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111111] border border-[#A4C639]/40 shadow-[0_24px_80px_rgba(0,0,0,0.95),0_0_50px_rgba(164,198,57,0.15)] z-10 flex flex-col text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-[#111111]/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A4C639] animate-pulse" />
            <h2 id="inquiry-title" className="text-base sm:text-lg font-display font-bold text-white">
              Start Your Project with NEXORA DIGITAL
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#9A9A9A] hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-black text-[#A4C639] border border-[#A4C639]/50 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(164,198,57,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-white">
                Inquiry Received!
              </h3>
              <p className="text-sm text-[#9A9A9A] max-w-md mx-auto">
                Thank you for considering NEXORA DIGITAL. I will personally examine your project parameters and respond with an exploratory roadmap within 24 hours.
              </p>
              <button
                onClick={handleReset}
                className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold uppercase bg-[#A4C639] text-[#050505] hover:bg-[#B5D334] transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#9A9A9A] uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-[#A4C639] focus:ring-1 focus:ring-[#A4C639]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#9A9A9A] uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-[#A4C639] focus:ring-1 focus:ring-[#A4C639]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#9A9A9A] uppercase tracking-wider mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-[#A4C639] focus:ring-1 focus:ring-[#A4C639]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#9A9A9A] uppercase tracking-wider mb-2">
                    Primary Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-[#A4C639] focus:ring-1 focus:ring-[#A4C639]"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Full Development & Marketing Retainer">Full Development & Marketing Retainer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#9A9A9A] uppercase tracking-wider mb-2">
                  Budget Expectation
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["<$2.5K", "$2.5K - $5K", "$5K - $10K", "$10K+"].map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setFormData({ ...formData, budget: tier })}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                        formData.budget === tier
                          ? "bg-[#A4C639] text-[#050505] border-[#A4C639] font-bold"
                          : "bg-black text-[#9A9A9A] border-white/10 hover:border-white/25"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#9A9A9A] uppercase tracking-wider mb-2">
                  Project Brief & Objectives *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Outline your timeline, goals, target audiences, or links to current assets..."
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-[#A4C639] focus:ring-1 focus:ring-[#A4C639] resize-none"
                />
              </div>

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-medium flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                  <div className="flex-1 leading-relaxed">
                    <p>{errorMessage}</p>
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-full text-xs font-semibold text-[#9A9A9A] hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#A4C639] text-[#050505] hover:bg-[#B5D334] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(164,198,57,0.3)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#050505]" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
