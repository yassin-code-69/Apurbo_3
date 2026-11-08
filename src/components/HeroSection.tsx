"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Star,
  Plus,
} from "lucide-react";
import {
  COMPANY_INFO,
  HERO_HOTSPOTS,
  ACCREDITED_PARTNERS,
  SERVICES,
  ServiceItem,
} from "@/data/imprintData";

interface HeroSectionProps {
  onBookSurvey: (preselectedService?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export function HeroSection({
  onBookSurvey,
  onSelectService,
}: HeroSectionProps) {
  const [activeHotspotId, setActiveHotspotId] = useState<string>("wall");

  const activeHotspot =
    HERO_HOTSPOTS.find((h) => h.id === activeHotspotId) || HERO_HOTSPOTS[0];

  const handleInspectService = (serviceId: string) => {
    const found = SERVICES.find((s) => s.id === serviceId);
    if (found) {
      onSelectService(found);
    } else {
      onBookSurvey();
    }
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#0c1f14] text-white pt-10 pb-14 lg:pt-16 lg:pb-20 bg-dark-grid"
    >
      {/* Ambient Radial Emerald Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-[#2f9e35]/20 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-[#3aa63a]/15 blur-[140px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Conversion */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm text-[#8bf08b] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#4ade4a]" />
              <span>Bournemouth, Dorset &amp; UK Sustainable Home Specialists</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-[-0.03em] text-white">
              Making Your Home{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ce65c] via-[#3aa63a] to-[#9ef59e]">
                Warmer, Drier
              </span>{" "}
              &amp; Energy-Smart.
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              Experienced quality craftsmen delivering tailored damp proofing,
              breathable{" "}
              <span className="text-white font-medium">ProPERLA</span> wall
              &amp; roof coatings,{" "}
              <span className="text-white font-medium">
                Knauf &amp; SuperFOIL
              </span>{" "}
              loft insulation, mortgage-safe spray foam removal, and{" "}
              <span className="text-white font-medium">Sunsynk</span> solar PV
              systems.
            </p>

            {/* Quick Value Bullets */}
            <div className="grid sm:grid-cols-2 gap-2.5 pt-1 text-sm text-white/85">
              {[
                "Watertight yet 100% breathable walls",
                "Mortgage-ready spray foam removal",
                "Lower heating & electricity bills",
                "Local Bournemouth showroom & team",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade4a] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => onBookSurvey()}
                className="inline-flex items-center justify-center gap-2.5 h-13 px-6 sm:px-7 rounded-xl bg-[#3aa63a] hover:bg-[#2f9e35] text-white font-semibold text-sm sm:text-base whitespace-nowrap shrink-0 shadow-[0_12px_32px_rgba(58,166,58,0.4)] hover:shadow-[0_16px_38px_rgba(58,166,58,0.52)] transition-all cursor-pointer"
              >
                <span>Get Your Free Home Survey</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 h-13 px-5 sm:px-6 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm sm:text-base whitespace-nowrap shrink-0 transition-all"
              >
                <Phone className="w-4 h-4 text-[#5ce65c] shrink-0" />
                <span className="font-mono">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Compact Trust Proof Strip — Baseline Aligned */}
            <div className="pt-5 border-t border-white/12 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
              <div>
                <div className="h-7 flex items-center gap-1.5 whitespace-nowrap">
                  <span className="font-mono font-bold text-xl text-white">
                    5.0
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                </div>
                <p className="text-xs text-white/65 mt-1">
                  Verified Google Rating
                </p>
              </div>
              <div>
                <div className="h-7 flex items-center font-mono font-bold text-xl text-white whitespace-nowrap">
                  Up to 35%
                </div>
                <p className="text-xs text-white/65 mt-1">
                  Heat Retention Gain
                </p>
              </div>
              <div>
                <div className="h-7 flex items-center font-mono font-bold text-xl text-[#5ce65c] whitespace-nowrap">
                  100% Free
                </div>
                <p className="text-xs text-white/65 mt-1">
                  No-Obligation Quote
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive British Sustainable Property Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_28px_70px_rgba(0,0,0,0.55)] bg-[#102619]">
              {/* Top Interactive Instruction Pill */}
              <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0c1f14]/80 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white/90">
                <span className="w-2 h-2 rounded-full bg-[#4ade4a] animate-pulse" />
                <span>Tap any green hotspot to inspect whole-home upgrades</span>
              </div>

              {/* Property Image */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full">
                <Image
                  src="/images/hero-uk-home.jpg"
                  alt="Modern British detached property upgraded with solar PV, breathable wall coating, ProPERLA slate roof, EV charger and resin driveway"
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* Subtle bottom vignette so inspector card reads clearly */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08150d]/90 via-transparent to-[#08150d]/25" />

                {/* Interactive Architectural Hotspots */}
                {HERO_HOTSPOTS.map((spot) => {
                  const isActive = spot.id === activeHotspotId;
                  return (
                    <button
                      key={spot.id}
                      type="button"
                      style={{ left: spot.x, top: spot.y }}
                      onClick={() => setActiveHotspotId(spot.id)}
                      onMouseEnter={() => setActiveHotspotId(spot.id)}
                      aria-label={`Inspect ${spot.label}`}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group focus:outline-none cursor-pointer"
                    >
                      <span
                        className={`absolute inset-0 rounded-full ${
                          isActive
                            ? "bg-[#4ade4a] animate-hotspot"
                            : "bg-[#3aa63a]/50 group-hover:bg-[#4ade4a]"
                        }`}
                      />
                      <span
                        className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 border-2 ${
                          isActive
                            ? "bg-[#3aa63a] border-white text-white scale-115 shadow-[0_0_20px_rgba(74,222,74,0.85)]"
                            : "bg-[#0c1f14]/85 border-[#5ce65c] text-[#5ce65c] hover:scale-110"
                        }`}
                      >
                        <Plus
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isActive ? "rotate-45" : ""
                          }`}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Hotspot Live Specification Bar */}
              <div className="relative z-20 px-5 py-4 bg-[#0d2316]/95 backdrop-blur-md border-t border-white/12 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#3aa63a]/25 text-[#7ef47e] border border-[#3aa63a]/40 whitespace-nowrap shrink-0">
                      {activeHotspot.metric}
                    </span>
                    <h2 className="font-display font-bold text-sm sm:text-base text-white">
                      {activeHotspot.label}
                    </h2>
                  </div>
                  <p className="text-xs text-white/75 mt-1">
                    {activeHotspot.detail}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleInspectService(activeHotspot.serviceId)}
                  className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-[#3aa63a] text-white text-xs font-semibold transition-colors cursor-pointer self-start sm:self-center"
                >
                  <span>View Spec</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Accredited Hardware & Systems Partner Bar */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/55 font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-[#4ade4a]" />
            <span>
              Installed Using Industry-Leading Accredited UK Systems &amp; Partners
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {ACCREDITED_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 px-3.5 py-3 transition-colors"
              >
                <div className="font-display font-bold text-sm text-white tracking-tight">
                  {partner.name}
                </div>
                <div className="text-[11px] text-[#7ef47e] font-medium mt-0.5">
                  {partner.role}
                </div>
                <div className="text-[11px] text-white/55 mt-0.5 line-clamp-1">
                  {partner.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

