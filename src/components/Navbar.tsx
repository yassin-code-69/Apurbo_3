"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { ImprintLogo } from "./ImprintLogo";
import { COMPANY_INFO, SERVICES, ServiceItem } from "@/data/imprintData";

interface NavbarProps {
  onSelectService: (service: ServiceItem) => void;
  onBookSurvey: (preselectedService?: string) => void;
}

export function Navbar({ onSelectService, onBookSurvey }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Main Sticky Header — Fully Responsive 3-Zone Layout */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(12,31,20,0.08)] border-b border-[#dfe6dc]"
            : "bg-white/95 backdrop-blur-md border-b border-[#e5ece2]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] sm:h-[76px] flex items-center justify-between xl:grid xl:grid-cols-[auto_1fr_auto] gap-3 sm:gap-4">
          {/* Left Zone: Crisp Logo */}
          <div className="flex items-center justify-start shrink-0">
            <a
              href="#top"
              className="focus:outline-none inline-flex items-center"
              aria-label="Imprint Home Improvements Home"
            >
              <ImprintLogo variant="dark" />
            </a>
          </div>

          {/* Center Zone: Full Nav on Desktop (xl:flex) */}
          <nav className="hidden xl:flex items-center justify-center gap-1.5">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                onMouseEnter={() => setServicesOpen(true)}
                className={`inline-flex items-center gap-1.5 h-10 px-3.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  servicesOpen
                    ? "bg-[#f0f5ee] text-[#1f7a24]"
                    : "text-[#1b2e22] hover:text-[#2f9e35] hover:bg-[#f4f7f2]"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-[#2f9e35]" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px] z-50"
                >
                  <div className="bg-white rounded-2xl shadow-[0_24px_60px_rgba(12,31,20,0.16)] border border-[#dfe6dc] p-5">
                    <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#edf2ea]">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#2f9e35]">
                          Specialist UK Home Upgrades
                        </p>
                        <p className="text-xs text-[#526558] mt-0.5">
                          Click any service to view technical specifications &amp; free survey details
                        </p>
                      </div>
                      <a
                        href="#services"
                        onClick={() => setServicesOpen(false)}
                        className="text-xs font-semibold text-[#0c1f14] hover:text-[#2f9e35] inline-flex items-center gap-1 whitespace-nowrap"
                      >
                        View all 10 <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {SERVICES.map((srv) => (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => {
                            setServicesOpen(false);
                            onSelectService(srv);
                          }}
                          className="text-left p-2.5 rounded-xl hover:bg-[#f3f8f2] transition-colors group flex items-start justify-between gap-2 cursor-pointer"
                        >
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-[#0f1f15] group-hover:text-[#2f9e35] transition-colors truncate">
                              {srv.shortTitle}
                            </div>
                            <div className="text-[11px] text-[#5c7063] truncate mt-0.5">
                              {srv.keyMetric} · {srv.keyMetricLabel}
                            </div>
                          </div>
                          <span className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#eaf4ea] text-[#1f7a24] whitespace-nowrap">
                            {srv.badge.split(" ")[0]}
                          </span>
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-[#edf2ea] flex items-center justify-between bg-[#f7faf6] -mx-5 -mb-5 px-5 py-3 rounded-b-2xl">
                      <div className="flex items-center gap-2 text-xs text-[#2d4234]">
                        <ShieldCheck className="w-4 h-4 text-[#2f9e35] shrink-0" />
                        <span>Not sure what your property needs? Book a free moisture &amp; thermal check.</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setServicesOpen(false);
                          onBookSurvey();
                        }}
                        className="text-xs font-semibold text-[#2f9e35] hover:underline shrink-0 whitespace-nowrap cursor-pointer"
                      >
                        Free Survey →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {[
              { label: "Estimator", href: "#estimator" },
              { label: "Showroom", href: "#showroom" },
              { label: "Gallery", href: "#gallery" },
              { label: "Reviews", href: "#reviews" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center h-10 px-3.5 rounded-lg text-sm font-medium text-[#1b2e22] hover:text-[#2f9e35] hover:bg-[#f4f7f2] whitespace-nowrap transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Zone: Action Buttons + Mobile/Tablet Drawer Toggle */}
          <div className="flex items-center justify-end gap-2 sm:gap-2.5 shrink-0">
            {/* Phone link on tablet & desktop */}
            <a
              href={COMPANY_INFO.phoneHref}
              className="hidden sm:inline-flex items-center gap-2 h-10 px-3 sm:px-3.5 rounded-xl border border-[#d6e2d3] bg-[#f7faf6] hover:border-[#2f9e35] text-[#0c1f14] whitespace-nowrap shrink-0 transition-all group"
            >
              <Phone className="w-3.5 h-3.5 text-[#2f9e35] shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-mono font-bold text-xs sm:text-sm tracking-tight text-[#0c1f14] whitespace-nowrap">
                {COMPANY_INFO.phoneDisplay}
              </span>
            </a>

            {/* Quote CTA Button */}
            <button
              type="button"
              onClick={() => onBookSurvey()}
              className="hidden xs:inline-flex items-center justify-center gap-1.5 sm:gap-2 h-10 px-3 sm:px-4.5 rounded-xl bg-[#2f9e35] hover:bg-[#25852a] text-white font-semibold text-xs sm:text-sm whitespace-nowrap shrink-0 shadow-[0_6px_16px_rgba(47,158,53,0.24)] hover:shadow-[0_10px_22px_rgba(47,158,53,0.34)] transition-all cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 shrink-0 hidden sm:inline" />
            </button>

            {/* Phone on Extra-Small screens */}
            <a
              href={COMPANY_INFO.phoneHref}
              aria-label="Call Freephone 0800 001 6233"
              className="xs:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#eef6ee] text-[#1e7b24]"
            >
              <Phone className="w-4 h-4 shrink-0" />
            </a>

            {/* Hamburger Menu Toggle (Visible on < xl screens) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Navigation Menu"
              className="xl:hidden w-10 h-10 rounded-xl border border-[#dfe6dc] text-[#0c1f14] hover:bg-[#f0f4ee] flex items-center justify-center transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Nav Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-[#dfe6dc] px-4 pt-3 pb-6 shadow-2xl max-h-[calc(100vh-4.625rem)] overflow-y-auto">
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-left font-semibold text-[#0f1f15] hover:bg-[#f4f7f2]"
              >
                <span>Our 10 Specialist Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileServicesOpen ? "rotate-180 text-[#2f9e35]" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pr-1 py-1.5 grid grid-cols-1 sm:grid-cols-2 gap-1.5 bg-[#f8faf7] rounded-xl">
                  {SERVICES.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onSelectService(srv);
                      }}
                      className="text-left px-3 py-2 rounded-lg text-sm font-medium text-[#24382b] hover:bg-white hover:text-[#2f9e35] flex items-center justify-between gap-2"
                    >
                      <span className="truncate">{srv.shortTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#2f9e35] shrink-0" />
                    </button>
                  ))}
                </div>
              )}

              {[
                { label: "Home Savings Estimator", href: "#estimator" },
                { label: "Bournemouth Showroom & About", href: "#showroom" },
                { label: "Previous Installations Gallery", href: "#gallery" },
                { label: "5.0★ Customer Reviews", href: "#reviews" },
                { label: "FAQs & Process", href: "#faq" },
                { label: "Contact & Directions", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-xl font-medium text-[#1b2e22] hover:bg-[#f4f7f2] hover:text-[#2f9e35]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-[#e5ece2] space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookSurvey();
                }}
                className="w-full py-3.5 rounded-xl bg-[#2f9e35] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <span>Request Free Home Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-[#556b5c] pt-1">
                {COMPANY_INFO.fullAddress} · Open Mon–Fri 09:00–17:00
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
