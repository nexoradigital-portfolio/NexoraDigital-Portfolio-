import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Clock,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { PERSONAL_PROFILE } from "../data/companyData";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    budget: "$2,500 - $5,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setErrorMessage(null);
    setLoading(true);

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
          message: formData.message.trim(),
          source: "Main Portfolio Contact Section",
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Contact submission error:", err);
      setErrorMessage(
        err?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white text-[#111111] relative overflow-hidden border-t border-black/5">
      {/* Subtle green ambient light */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#A4C639]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A4C639]" />
            <span>Initiate Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
            Let's Build Something Great.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555555]">
            Have a website idea, digital marketing project or brand you want to grow? Let's turn your idea into something people remember.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div className="p-8 rounded-3xl bg-[#F5F5F5] border border-black/10">
              <h3 className="text-xl font-display font-bold text-[#111111] mb-6">
                Direct Communication
              </h3>

              <div className="space-y-6">
                <a
                  href={`mailto:${PERSONAL_PROFILE.contact.email}`}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-black text-[#A4C639] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#777777] uppercase tracking-wider font-semibold">Email</span>
                    <p className="text-sm font-semibold text-[#111111] group-hover:text-[#607A16] transition-colors">
                      {PERSONAL_PROFILE.contact.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_PROFILE.contact.phone}`}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-black text-[#A4C639] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#777777] uppercase tracking-wider font-semibold">Phone / WhatsApp</span>
                    <p className="text-sm font-semibold text-[#111111] group-hover:text-[#607A16] transition-colors">
                      {PERSONAL_PROFILE.contact.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-black text-[#A4C639] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#777777] uppercase tracking-wider font-semibold">Location</span>
                    <p className="text-sm font-semibold text-[#111111]">
                      {PERSONAL_PROFILE.contact.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="mt-8 pt-6 border-t border-black/10 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#607A16] animate-pulse" />
                <span className="text-xs font-semibold text-[#111111]">
                  {PERSONAL_PROFILE.contact.availability}
                </span>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="p-8 rounded-3xl bg-[#F5F5F5] border border-black/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#666666] mb-4 block">
                Connect on Social Channels
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PERSONAL_PROFILE.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white border border-black/10 hover:border-[#607A16] hover:bg-[#A4C639]/10 transition-all flex items-center justify-between text-xs font-semibold text-[#111111] group"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#607A16] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Proposal & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F5F5F5] border border-black/10 shadow-sm relative">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-black text-[#A4C639] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-[#111111]">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-[#555555] max-w-md mx-auto">
                    Thank you for reaching out. I personally review all project inquiries and will respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage(null);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "Website Development",
                        budget: "$2,500 - $5,000",
                        message: "",
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold uppercase bg-black text-white hover:bg-[#607A16] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#607A16] focus:ring-1 focus:ring-[#607A16] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#607A16] focus:ring-1 focus:ring-[#607A16] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#607A16] focus:ring-1 focus:ring-[#607A16] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-[#111111] focus:outline-none focus:border-[#607A16] focus:ring-1 focus:ring-[#607A16] text-sm"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="WordPress Development">WordPress Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Brand & Content Strategy">Brand & Content Strategy</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Full Comprehensive Package">Full Comprehensive Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                      Estimated Project Scope or Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["<$2.5K", "$2.5K - $5K", "$5K - $10K", "$10K+"].map((tier) => (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setFormData({ ...formData, budget: tier })}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                            formData.budget === tier
                              ? "bg-black text-white border-black"
                              : "bg-white text-neutral-600 border-black/10 hover:border-black/30"
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                      Project Details & Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your business, timeline, key requirements, or existing website..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:border-[#607A16] focus:ring-1 focus:ring-[#607A16] text-sm resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                      <div className="flex-1 leading-relaxed">
                        <p>{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full font-semibold text-sm tracking-wider uppercase bg-[#050505] text-white hover:bg-[#A4C639] hover:text-[#050505] transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(164,198,57,0.4)] flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#A4C639]" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Start a Project</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
