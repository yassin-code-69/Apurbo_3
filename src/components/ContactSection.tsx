"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Paperclip,
  Send,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
  X,
} from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/data/imprintData";

interface ContactSectionProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
  projectNotes: string;
  onProjectNotesChange: (notes: string) => void;
  submitted: boolean;
  onSubmittedChange: (submitted: boolean) => void;
}

export function ContactSection({
  selectedService,
  onServiceChange,
  projectNotes,
  onProjectNotesChange,
  submitted,
  onSubmittedChange,
}: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [files, setFiles] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const names = Array.from(e.target.files).map((f) => f.name);
    setFiles((prev) => [...prev, ...names].slice(0, 5));
  };

  const removeFile = (fileName: string) => {
    setFiles((prev) => prev.filter((f) => f !== fileName));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmittedChange(true);
  };

  const mailtoDirectHref = `mailto:${
    COMPANY_INFO.email
  }?subject=${encodeURIComponent(
    `Free Quote Request — ${selectedService}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nPostcode: ${postcode}\nService: ${selectedService}\n\nProject Details:\n${projectNotes}`
  )}`;

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-white border-t border-[#e1e9de]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Showroom Info, Hours & Bournemouth Map */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6f3e6] text-[#1e7b24] text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Contact Imprint Home Improvements</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0c1f14] tracking-[-0.025em] leading-[1.12]">
                Book Your Free, No-Obligation Home Survey.
              </h2>
              <p className="text-[#4a5f51] text-base mt-3 leading-relaxed">
                Speak directly with our Bournemouth team or send across your
                project details—we respond to every homeowner enquiry promptly.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#f6faf5] hover:bg-[#edf6ec] border border-[#dce6d9] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2f9e35] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#526859]">
                    Freephone Helpline
                  </span>
                  <div className="font-mono font-extrabold text-xl text-[#0c1f14] group-hover:text-[#2f9e35] transition-colors">
                    {COMPANY_INFO.phoneDisplay}
                  </div>
                </div>
              </a>

              <a
                href={COMPANY_INFO.emailHref}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#f8faf7] hover:bg-[#eff5ee] border border-[#e0e8dd] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0c1f14] text-[#5ce65c] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#526859]">
                    Email Our Office
                  </span>
                  <div className="font-semibold text-sm sm:text-base text-[#0c1f14] group-hover:text-[#2f9e35] truncate transition-colors">
                    {COMPANY_INFO.email}
                  </div>
                </div>
              </a>
            </div>

            {/* Showroom Address & Structured Opening Hours */}
            <div className="rounded-2xl border border-[#dde5da] bg-[#fbfcfa] p-5 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display font-bold text-base text-[#0c1f14]">
                    Bournemouth Showroom &amp; Office
                  </h3>
                  <p className="text-sm text-[#4a5f51] mt-0.5">
                    {COMPANY_INFO.fullAddress}
                  </p>
                </div>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-[#2f9e35] hover:underline"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Hours Table */}
              <div className="pt-3 border-t border-[#e8eee6]">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1e7b24] mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Opening Hours</span>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  {COMPANY_INFO.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between text-[#2e4435]"
                    >
                      <span className="font-medium">{h.day}</span>
                      <span
                        className={`font-mono ${
                          h.isOpen
                            ? "text-[#1e7b24] font-semibold"
                            : "text-[#6b7f71]"
                        }`}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Embedded Map Preview */}
              <div className="rounded-xl overflow-hidden border border-[#dce4d9] h-44 w-full bg-[#eef2ec]">
                <iframe
                  title="Imprint Home Improvements 638 Christchurch Road Bournemouth Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-1.8445%2C50.7240%2C-1.8305%2C50.7305&layer=mapnik&marker=50.72725%2C-1.83762"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Free Quote & Survey Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#f8faf7] rounded-2xl sm:rounded-3xl border border-[#d9e3d6] p-4 sm:p-10 shadow-[0_20px_50px_rgba(12,31,20,0.06)]">
              {submitted ? (
                <div className="py-8 sm:py-10 text-center space-y-4 sm:space-y-5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#2f9e35]/15 text-[#2f9e35] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
                  </div>
                  <h3 className="font-display font-extrabold text-xl sm:text-3xl text-[#0c1f14]">
                    Thank You for Your Inquiry!
                  </h3>
                  <p className="text-sm sm:text-base text-[#465b4d] max-w-md mx-auto leading-relaxed">
                    We have prepared your request for{" "}
                    <strong className="text-[#0c1f14]">{selectedService}</strong>{" "}
                    and our Bournemouth team will get back to you within 48
                    hours (usually same working day).
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                    <a
                      href={mailtoDirectHref}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2f9e35] hover:bg-[#25852a] text-white font-semibold text-sm transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Directly via Email Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => onSubmittedChange(false)}
                      className="px-5 py-3 rounded-xl border border-[#d2ded0] bg-white text-[#0c1f14] font-semibold text-sm hover:border-[#2f9e35] cursor-pointer"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 sm:pb-4 border-b border-[#e3ebe0]">
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0c1f14]">
                        Request Your Free Quote
                      </h3>
                      <p className="text-xs sm:text-sm text-[#53685a] mt-0.5">
                        Complete the form below and we&apos;ll arrange a convenient time.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1e7b24] bg-[#e6f3e6] px-3 py-1.5 rounded-full self-start sm:self-center">
                      <ShieldCheck className="w-4 h-4" />
                      <span>100% No Obligation</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label
                        htmlFor="quote-name"
                        className="block text-xs font-bold uppercase tracking-wider text-[#2b4032] mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#d4dfd1] focus:border-[#2f9e35] focus:ring-2 focus:ring-[#2f9e35]/20 outline-none text-base sm:text-sm text-[#0c1f14]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#2b4032] mb-1.5"
                      >
                        Phone / Mobile *
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 07700 900123"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#d4dfd1] focus:border-[#2f9e35] focus:ring-2 focus:ring-[#2f9e35]/20 outline-none text-base sm:text-sm text-[#0c1f14]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="quote-email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#2b4032] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.co.uk"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#d4dfd1] focus:border-[#2f9e35] focus:ring-2 focus:ring-[#2f9e35]/20 outline-none text-base sm:text-sm text-[#0c1f14]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-postcode"
                        className="block text-xs font-bold uppercase tracking-wider text-[#2b4032] mb-1.5"
                      >
                        UK Postcode
                      </label>
                      <input
                        id="quote-postcode"
                        type="text"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        placeholder="e.g. BH1 4BP"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#d4dfd1] focus:border-[#2f9e35] focus:ring-2 focus:ring-[#2f9e35]/20 outline-none text-base sm:text-sm uppercase text-[#0c1f14]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-service"
                      className="block text-xs font-bold uppercase tracking-wider text-[#2b4032] mb-1.5"
                    >
                      Service Required
                    </label>
                    <select
                      id="quote-service"
                      value={selectedService}
                      onChange={(e) => onServiceChange(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#d4dfd1] focus:border-[#2f9e35] focus:ring-2 focus:ring-[#2f9e35]/20 outline-none text-base sm:text-sm text-[#0c1f14]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Multiple Home Efficiency Upgrades">
                        Multiple Home Efficiency Upgrades / Whole-House Survey
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#2b4032] mb-1.5"
                    >
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="quote-message"
                      rows={4}
                      value={projectNotes}
                      onChange={(e) => onProjectNotesChange(e.target.value)}
                      placeholder="Describe any damp, condensation, loft insulation, spray foam, roof, or solar goals..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#d4dfd1] focus:border-[#2f9e35] focus:ring-2 focus:ring-[#2f9e35]/20 outline-none text-base sm:text-sm text-[#0c1f14] resize-y"
                    />
                  </div>

                  {/* Optional File Attachments */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="quote-files"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-dashed border-[#bdd0b9] hover:border-[#2f9e35] text-xs font-semibold text-[#24382b] cursor-pointer transition-colors"
                      >
                        <Paperclip className="w-3.5 h-3.5 text-[#2f9e35]" />
                        <span>Attach Property Photos (Optional)</span>
                        <input
                          id="quote-files"
                          type="file"
                          multiple
                          accept="image/*,.pdf"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                      <span className="text-xs text-[#65796b]">
                        Attachments ({files.length})
                      </span>
                    </div>

                    {files.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2.5">
                        {files.map((fname) => (
                          <span
                            key={fname}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#e6f3e6] text-[#185e1d] text-xs font-medium"
                          >
                            <span className="truncate max-w-[180px]">{fname}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(fname)}
                              aria-label={`Remove ${fname}`}
                              className="hover:text-red-700 cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#2f9e35] hover:bg-[#248429] text-white font-semibold text-base flex items-center justify-center gap-2.5 shadow-[0_12px_28px_rgba(47,158,53,0.3)] transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Free Quote Request</span>
                  </button>

                  <p className="text-[11px] text-[#667a6c] text-center">
                    Your details are kept strictly private and used solely by
                    Imprint Home Improvements to arrange your quotation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
