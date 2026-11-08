"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  ShieldCheck,
  Award,
  Users,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/imprintData";

interface AboutShowroomSectionProps {
  onBookSurvey: (preselectedService?: string) => void;
}

export function AboutShowroomSection({
  onBookSurvey,
}: AboutShowroomSectionProps) {
  return (
    <section id="showroom" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Real Bournemouth Showroom Photography Collage */}
          <div className="lg:col-span-6 relative sm:pb-8">
            {/* Main Showroom Hardware Photo */}
            <div className="relative rounded-3xl overflow-hidden border border-[#dce4d9] shadow-[0_24px_60px_rgba(12,31,20,0.12)] aspect-[4/3] bg-[#0c1f14]">
              <Image
                src="/images/showroom-sunsynk-zappi.jpg"
                alt="Inside the Imprint Home Improvements Bournemouth Showroom featuring Sunsynk hybrid solar inverters, home battery storage, myenergi zappi EV charger and SuperFOIL insulation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f14]/65 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0c1f14]/85 backdrop-blur-md text-white text-xs border border-white/15">
                <MapPin className="w-4 h-4 text-[#5ce65c] shrink-0" />
                <span>
                  Real Showroom Display · 638 Christchurch Rd, Bournemouth
                </span>
              </div>
            </div>

            {/* Secondary Overlapping Consultation Photo Card */}
            <div className="mt-4 sm:mt-0 sm:w-64 sm:absolute sm:-bottom-8 sm:-right-4 rounded-2xl overflow-hidden border-4 border-white shadow-[0_18px_45px_rgba(12,31,20,0.18)] bg-white">
              <div className="relative h-40 w-full">
                <Image
                  src="/images/showroom-consultation.png"
                  alt="Homeowners discussing energy-saving solutions in the Imprint Home Improvements Bournemouth office"
                  fill
                  sizes="260px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-3 bg-[#0c1f14] text-white">
                <p className="text-[11px] font-bold text-[#6bf26b] uppercase tracking-wider">
                  Face-to-Face Advice
                </p>
                <p className="text-xs text-white/85 mt-0.5">
                  Pop in for a coffee &amp; inspect working kit before you decide.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Authentic Brand Story & Why Homeowners Choose Imprint */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6f3e6] text-[#1e7b24] text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>About Imprint Home Improvements</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0c1f14] tracking-[-0.025em] leading-[1.14]">
              A Real Local Bournemouth Team—Never a Faceless Call Centre.
            </h2>

            <p className="text-[#43584a] text-base leading-relaxed">
              Imprint Home Improvements specialises in making your home run more
              efficiently, stay bone-dry through harsh British winters, and hold
              long-term structural value. Whether adding{" "}
              <strong className="text-[#0c1f14] font-semibold">
                solar PV &amp; Sunsynk battery storage
              </strong>{" "}
              to your roof space, upgrading to the{" "}
              <strong className="text-[#0c1f14] font-semibold">
                best Knauf &amp; SuperFOIL insulation systems in the UK
              </strong>
              , or applying{" "}
              <strong className="text-[#0c1f14] font-semibold">
                watertight yet breathable exterior wall coatings
              </strong>
              , our experienced craftsmen tailor every specification to your
              property.
            </p>

            {/* Three Core Differentiator Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-[#f6f9f5] border border-[#e1eae0]">
                <div className="w-9 h-9 rounded-xl bg-[#2f9e35]/12 text-[#2f9e35] flex items-center justify-center mb-2.5">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-display font-bold text-sm text-[#0c1f14]">
                  Visit Our Bournemouth Showroom
                </h3>
                <p className="text-xs text-[#4f6456] mt-1 leading-relaxed">
                  Touch SuperFOIL cross-sections, see myenergi zappi EV chargers
                  &amp; Sunsynk batteries live at 638 Christchurch Road.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f6f9f5] border border-[#e1eae0]">
                <div className="w-9 h-9 rounded-xl bg-[#2f9e35]/12 text-[#2f9e35] flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-display font-bold text-sm text-[#0c1f14]">
                  Zero Pushy Salesmen
                </h3>
                <p className="text-xs text-[#4f6456] mt-1 leading-relaxed">
                  Jamie and our surveyors listen first, diagnose accurately, and
                  give fair, transparent written quotes.
                </p>
              </div>
            </div>

            {/* Key Assurances List */}
            <div className="space-y-2 pt-1">
              {[
                "Approved installers for SuperFOIL, Knauf, Sunsynk, zappi & ProPERLA",
                "Specialists in mortgage-blocked loft spray foam removal",
                "5.0-star rated across verified local homeowner reviews",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-[#24382b] font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2f9e35] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => onBookSurvey()}
                className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-xl bg-[#0c1f14] hover:bg-[#2f9e35] text-white font-semibold text-sm whitespace-nowrap shrink-0 transition-colors cursor-pointer"
              >
                <span>Arrange Free Home Visit</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-4 rounded-xl border border-[#d6e0d3] hover:border-[#2f9e35] text-[#0c1f14] font-semibold text-sm whitespace-nowrap shrink-0 transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#2f9e35] shrink-0" />
                <span>Showroom Directions (BH1 4BP)</span>
              </a>

              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 h-12 px-3 text-sm font-mono font-semibold text-[#1e7b24] hover:underline whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

