import React, { useState } from "react";
import {
  Mail,
  Phone,
  ArrowUpRight,
  Sparkles,
  Check,
  Copy,
  Clock,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { PERSONAL_PROFILE } from "../data/companyData";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("nexoradigital1143@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("03152955520");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-32 bg-white text-[#111111] relative overflow-hidden border-t border-black/5"
    >
      {/* Subtle green ambient light */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#A4C639]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#A4C639]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black text-white text-xs font-semibold tracking-widest uppercase mb-3 md:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A4C639]" />
            <span>Direct Contact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-3 md:mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            Have a project in mind? Get in touch with me directly.
          </p>
        </div>

        {/* 3 Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mb-6 md:mb-14">
          {/* Card 1: EMAIL */}
          <div className="rounded-3xl bg-[#F5F5F5] border border-black/10 p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#607A16]/50 hover:bg-[#F9FAF5] hover:shadow-[0_12px_35px_rgba(164,198,57,0.12)] group">
            <div>
              <div className="flex items-center justify-between mb-3.5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black text-[#A4C639] flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-[#050505] transition-all">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-black/10 text-neutral-600 hover:text-black hover:border-black/30 transition-all cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#607A16]" />
                      <span className="text-[#607A16] font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#777777] block mb-1">
                Email
              </span>
              <h3 className="text-base sm:text-xl font-display font-bold text-[#111111] break-all mb-2 sm:mb-3 group-hover:text-[#607A16] transition-colors">
                nexoradigital1143@gmail.com
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4 sm:mb-6">
                Send your requirements, RFPs, or collaboration inquiries directly to my primary inbox.
              </p>
            </div>

            <a
              href="mailto:nexoradigital1143@gmail.com"
              className="w-full py-3 sm:py-3.5 px-5 rounded-full font-semibold text-xs uppercase tracking-wider bg-black text-white hover:bg-[#A4C639] hover:text-black transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(164,198,57,0.35)]"
            >
              <span>Send Email</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Card 2: PHONE / CALL */}
          <div className="rounded-3xl bg-[#F5F5F5] border border-black/10 p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#607A16]/50 hover:bg-[#F9FAF5] hover:shadow-[0_12px_35px_rgba(164,198,57,0.12)] group">
            <div>
              <div className="flex items-center justify-between mb-3.5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black text-[#A4C639] flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-[#050505] transition-all">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-black/10 text-neutral-600 hover:text-black hover:border-black/30 transition-all cursor-pointer"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#607A16]" />
                      <span className="text-[#607A16] font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#777777] block mb-1">
                Phone
              </span>
              <h3 className="text-base sm:text-xl font-display font-bold text-[#111111] mb-2 sm:mb-3 group-hover:text-[#607A16] transition-colors">
                03152955520
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4 sm:mb-6">
                Call directly for immediate project consultation, timeline estimation, and discussions.
              </p>
            </div>

            <a
              href="tel:+923152955520"
              className="w-full py-3 sm:py-3.5 px-5 rounded-full font-semibold text-xs uppercase tracking-wider bg-black text-white hover:bg-[#A4C639] hover:text-black transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(164,198,57,0.35)]"
            >
              <span>Call Now</span>
              <Phone className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
            </a>
          </div>

          {/* Card 3: WHATSAPP */}
          <div className="rounded-3xl bg-[#F5F5F5] border border-black/10 p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#607A16]/50 hover:bg-[#F9FAF5] hover:shadow-[0_12px_35px_rgba(164,198,57,0.12)] group">
            <div>
              <div className="flex items-center justify-between mb-3.5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#050505] text-[#A4C639] flex items-center justify-center shadow-md group-hover:scale-105 transition-all">
                  {/* WhatsApp SVG Icon */}
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#A4C639]/15 text-[#4A600F] border border-[#A4C639]/30">
                  Instant Reply
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#777777] block mb-1">
                WhatsApp
              </span>
              <h3 className="text-base sm:text-xl font-display font-bold text-[#111111] mb-2 sm:mb-3 group-hover:text-[#607A16] transition-colors">
                03152955520
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4 sm:mb-6">
                Fastest way to reach me for real-time messaging, quick voice notes, and fast project kickoff.
              </p>
            </div>

            <a
              href="https://wa.me/923152955520"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 sm:py-3.5 px-5 rounded-full font-semibold text-xs uppercase tracking-wider bg-black text-white hover:bg-[#A4C639] hover:text-black transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(164,198,57,0.35)]"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Supporting Information & Social Channels Banner */}
        <div className="rounded-3xl bg-[#F5F5F5] border border-black/10 p-4 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#607A16] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-[#111111]">
                {PERSONAL_PROFILE.contact.availability}
              </span>
            </div>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#666666]">
              <MapPin className="w-4 h-4 text-[#A4C639]" />
              <span>{PERSONAL_PROFILE.contact.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {PERSONAL_PROFILE.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-black/10 hover:border-[#607A16] hover:bg-[#A4C639]/10 text-xs font-semibold text-[#111111] transition-all flex items-center gap-1.5"
              >
                <span>{social.name}</span>
                <ArrowUpRight className="w-3 h-3 text-[#607A16]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
