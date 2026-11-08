"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Flame,
  Sun,
  Home,
  Layers,
  ShieldCheck,
  X,
  Phone,
  Sparkles,
} from "lucide-react";
import { SERVICES, ServiceItem, COMPANY_INFO } from "@/data/imprintData";

interface ServicesSectionProps {
  selectedServiceModal: ServiceItem | null;
  onSelectServiceModal: (service: ServiceItem | null) => void;
  onBookSurvey: (preselectedService?: string) => void;
}

const CATEGORIES = [
  { id: "all", label: "All 10 Services", icon: Layers },
  { id: "moisture", label: "Damp & Wall Coatings", icon: Droplets },
  { id: "thermal", label: "Insulation & Spray Foam", icon: Flame },
  { id: "renewables", label: "Solar, EV & Air Con", icon: Sun },
  { id: "exterior", label: "Roofing, Cladding & Driveways", icon: Home },
] as const;

export function ServicesSection({
  selectedServiceModal,
  onSelectServiceModal,
  onBookSurvey,
}: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#f8f9f6] bg-architectural-grid relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6f3e6] text-[#1e7b24] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Whole-Home Solutions</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#0c1f14] tracking-[-0.025em] leading-[1.12]">
              Complete Protection, Thermal Warmth &amp; Clean Energy Under One Roof.
            </h2>
          </div>
          <p className="text-[#4a5f51] text-base max-w-md leading-relaxed">
            Every British property breathes and ages differently. Select any
            service below to inspect how we solve moisture, heat loss, and high
            energy bills permanently.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  active
                    ? "bg-[#0c1f14] text-white shadow-[0_8px_20px_rgba(12,31,20,0.18)]"
                    : "bg-white text-[#2c4233] border border-[#dce4d9] hover:border-[#2f9e35] hover:text-[#1f7a24]"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    active ? "text-[#5ce65c]" : "text-[#2f9e35]"
                  }`}
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Architectural Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((srv) => (
            <article
              key={srv.id}
              className="group bg-white rounded-2xl border border-[#dde5da] hover:border-[#2f9e35]/60 shadow-[0_4px_20px_rgba(12,31,20,0.04)] hover:shadow-[0_18px_45px_rgba(12,31,20,0.1)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Image Header */}
              <div className="relative h-52 w-full overflow-hidden bg-[#102418]">
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f14]/80 via-[#0c1f14]/15 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#0c1f14] text-[11px] font-bold shadow-sm">
                  {srv.badge}
                </div>

                {/* Bottom Key Metric Overlay */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-baseline justify-between text-white">
                  <div>
                    <span className="font-mono font-bold text-lg text-[#6bf26b]">
                      {srv.keyMetric}
                    </span>
                    <span className="text-xs text-white/85 ml-1.5">
                      {srv.keyMetricLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-xl text-[#0c1f14] group-hover:text-[#2f9e35] transition-colors leading-snug">
                  {srv.title}
                </h3>

                <p className="text-sm text-[#4a5f51] leading-relaxed mt-2.5">
                  {srv.summary}
                </p>

                {/* Symptoms Solved Preview */}
                <div className="mt-4 pt-4 border-t border-[#edf2ea] space-y-2 flex-1">
                  {srv.symptomsSolved.slice(0, 2).map((sym) => (
                    <div
                      key={sym}
                      className="flex items-start gap-2 text-xs text-[#2d4234]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2f9e35] shrink-0 mt-0.5" />
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="mt-5 pt-4 border-t border-[#edf2ea] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectServiceModal(srv)}
                    className="text-xs font-semibold text-[#0c1f14] hover:text-[#2f9e35] underline underline-offset-4 whitespace-nowrap cursor-pointer"
                  >
                    Technical Spec &amp; Process
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookSurvey(srv.title)}
                    className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg bg-[#eef6ee] group-hover:bg-[#2f9e35] text-[#1e7b24] group-hover:text-white text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer"
                  >
                    <span>Free Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Service Specification Modal */}
      {selectedServiceModal && (
        <div
          className="fixed inset-0 z-[70] bg-[#07130c]/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => onSelectServiceModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.45)] border border-[#dce4d9] my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-60 sm:h-68 w-full bg-[#0c1f14]">
              <Image
                src={selectedServiceModal.image}
                alt={selectedServiceModal.title}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f14] via-[#0c1f14]/35 to-transparent" />

              <button
                type="button"
                onClick={() => onSelectServiceModal(null)}
                aria-label="Close specification modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/55 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[#3aa63a] text-white text-xs font-semibold mb-2">
                  {selectedServiceModal.badge}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl leading-tight">
                  {selectedServiceModal.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
              <p className="text-sm sm:text-base text-[#394e40] leading-relaxed">
                {selectedServiceModal.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-[#f6f9f5] rounded-2xl p-4 border border-[#e2ebe0]">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#1e7b24] mb-3">
                    Problems This Solves
                  </h4>
                  <ul className="space-y-2">
                    {selectedServiceModal.symptomsSolved.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2 text-xs sm:text-sm text-[#24382b]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#2f9e35] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#f6f9f5] rounded-2xl p-4 border border-[#e2ebe0]">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#0c1f14] mb-3">
                    Our Technical Specification
                  </h4>
                  <ul className="space-y-2">
                    {selectedServiceModal.specifications.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-2 text-xs sm:text-sm text-[#24382b]"
                      >
                        <ShieldCheck className="w-4 h-4 text-[#2f9e35] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#eef6ee] text-[#185e1d] text-xs sm:text-sm font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#2f9e35]" />
                <span>{selectedServiceModal.warrantyText}</span>
              </div>

              {/* Modal Bottom CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-[#d2ded0] text-[#0c1f14] hover:border-[#2f9e35] font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#2f9e35]" />
                  <span>Ask an Expert: {COMPANY_INFO.phoneDisplay}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    const chosen = selectedServiceModal.title;
                    onSelectServiceModal(null);
                    onBookSurvey(chosen);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2f9e35] hover:bg-[#248229] text-white font-semibold text-sm shadow-lg transition-colors cursor-pointer"
                >
                  <span>Book Free Survey for {selectedServiceModal.shortTitle}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

