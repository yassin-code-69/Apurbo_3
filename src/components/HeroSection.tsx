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
      className="relative overflow-hidden bg-[#08170e] text-white pt-12 pb-16 lg:pt-18 lg:pb-22"
    >
      {/* Full-Bleed Bournemouth Coastal Luxury Home Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-bournemouth.jpg"
          alt="Luxury sustainable British home overlooking Bournemouth coast at dusk"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center scale-[1.01]"
        />
        {/* Directional Left-to-Right Scrim so Typography Reads Effortlessly While Background Shines */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06130b]/90 via-[#08190f]/75 to-[#08190f]/52" />
        {/* Top & Bottom Architectural Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07160d] via-transparent to-[#06130b]/45" />
        {/* Subtle Architectural Grid Texture Overlay */}
        <div className="absolute inset-0 bg-dark-grid opacity-45" />
      </div>

      {/* Soft Emerald Accent Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 -left-36 z-0 w-[500px] h-[500px] rounded-full bg-[#2f9e35]/20 blur-[130px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Conversion */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2215]/75 backdrop-blur-md border border-[#5ce65c]/30 text-xs sm:text-sm text-[#8bf08b] font-medium shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#4ade4a] shrink-0" />
              <span>Bournemouth, Dorset &amp; UK Sustainable Home Specialists</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[54px] leading-[1.1] sm:leading-[1.08] tracking-[-0.03em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
              Making Your Home{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#67ef67] via-[#4ade4a] to-[#a6f7a6]">
                Warmer, Drier
              </span>{" "}
              &amp; Energy-Smart.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              Experienced quality craftsmen delivering tailored damp proofing,
              breathable{" "}
              <span className="text-white font-semibold">ProPERLA</span> wall
              &amp; roof coatings,{" "}
              <span className="text-white font-semibold">
                Knauf &amp; SuperFOIL
              </span>{" "}
              loft insulation, mortgage-safe spray foam removal, and{" "}
              <span className="text-white font-semibold">Sunsynk</span> solar PV
              systems.
            </p>

            {/* Quick Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1 text-xs sm:text-sm text-white/90">
              {[
                "Watertight yet 100% breathable walls",
                "Mortgage-ready spray foam removal",
                "Lower heating & electricity bills",
                "Local Bournemouth showroom & team",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5ce65c] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onBookSurvey()}
                className="inline-flex items-center justify-center gap-2 h-12 sm:h-13 px-5 sm:px-7 rounded-xl bg-[#3aa63a] hover:bg-[#2f9e35] text-white font-semibold text-sm sm:text-base whitespace-nowrap shadow-[0_12px_32px_rgba(58,166,58,0.45)] hover:shadow-[0_16px_38px_rgba(58,166,58,0.58)] transition-all cursor-pointer"
              >
                <span>Get Your Free Home Survey</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 h-12 sm:h-13 px-5 sm:px-6 rounded-xl bg-[#0c2114]/75 hover:bg-[#0c2114]/95 backdrop-blur-md border border-white/25 text-white font-semibold text-sm sm:text-base whitespace-nowrap transition-all"
              >
                <Phone className="w-4 h-4 text-[#5ce65c] shrink-0" />
                <span className="font-mono">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Compact Trust Proof Strip — Fully Responsive */}
            <div className="pt-4 sm:pt-5 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-6 max-w-lg">
              <div>
                <div className="h-6 sm:h-7 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                  <span className="font-mono font-bold text-lg sm:text-xl text-white">
                    5.0
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-400" />
                    <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-400" />
                    <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-400" />
                    <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-400 hidden xs:inline" />
                    <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-400 hidden xs:inline" />
                  </div>
                </div>
                <p className="text-[10px] sm:text-xs text-white/75 mt-0.5 sm:mt-1 truncate">
                  Google Rated
                </p>
              </div>
              <div>
                <div className="h-6 sm:h-7 flex items-center font-mono font-bold text-lg sm:text-xl text-white whitespace-nowrap">
                  Up to 35%
                </div>
                <p className="text-[10px] sm:text-xs text-white/75 mt-0.5 sm:mt-1 truncate">
                  Heat Saved
                </p>
              </div>
              <div>
                <div className="h-6 sm:h-7 flex items-center font-mono font-bold text-lg sm:text-xl text-[#67ef67] whitespace-nowrap">
                  100% Free
                </div>
                <p className="text-[10px] sm:text-xs text-white/75 mt-0.5 sm:mt-1 truncate">
                  No Obligation
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive British Sustainable Property Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/25 shadow-[0_30px_80px_rgba(0,0,0,0.65)] bg-[#0d2216]/90 backdrop-blur-md">
              {/* Top Interactive Instruction Pill */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0c1f14]/85 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-medium text-white/95">
                <span className="w-2 h-2 rounded-full bg-[#4ade4a] animate-pulse shrink-0" />
                <span className="hidden sm:inline">Tap any green hotspot to inspect whole-home upgrades</span>
                <span className="sm:hidden">Tap hotspots to inspect</span>
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
              <div className="relative z-20 px-5 py-4 bg-[#0b1f13]/95 backdrop-blur-md border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
                  className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/12 hover:bg-[#3aa63a] text-white text-xs font-semibold transition-colors cursor-pointer self-start sm:self-center"
                >
                  <span>View Spec</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Frosted Glassmorphic Accredited Hardware & Systems Partner Bar */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/15">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/75 font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-[#5ce65c] shrink-0" />
            <span>
              Installed Using Industry-Leading Accredited UK Systems &amp; Partners
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {ACCREDITED_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="rounded-xl bg-[#0a1e12]/65 hover:bg-[#0d2718]/85 backdrop-blur-md border border-white/15 px-3.5 py-3 transition-colors shadow-sm"
              >
                <div className="font-display font-bold text-sm text-white tracking-tight">
                  {partner.name}
                </div>
                <div className="text-[11px] text-[#7ef47e] font-medium mt-0.5">
                  {partner.role}
                </div>
                <div className="text-[11px] text-white/65 mt-0.5 line-clamp-1">
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
