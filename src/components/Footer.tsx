"use client";

import React, { useState, useSyncExternalStore } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Cookie,
} from "lucide-react";
import { ImprintLogo } from "./ImprintLogo";
import { COMPANY_INFO, SERVICES, ServiceItem } from "@/data/imprintData";

interface FooterProps {
  onSelectService: (service: ServiceItem) => void;
  onBookSurvey: (preselectedService?: string) => void;
}

const subscribeCookieStore = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener("imprint-cookie-update", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("imprint-cookie-update", callback);
  };
};

const getCookieSnapshot = () => {
  try {
    return Boolean(window.localStorage.getItem("imprint_cookie_consent"));
  } catch {
    return true;
  }
};

const getCookieServerSnapshot = () => true;

export function Footer({ onSelectService, onBookSurvey }: FooterProps) {
  const [subEmail, setSubEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const cookieChoiceMade = useSyncExternalStore(
    subscribeCookieStore,
    getCookieSnapshot,
    getCookieServerSnapshot
  );

  const handleCookieChoice = (choice: "accepted" | "declined") => {
    try {
      window.localStorage.setItem("imprint_cookie_consent", choice);
      window.dispatchEvent(new Event("imprint-cookie-update"));
    } catch {}
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail.trim()) {
      setSubscribed(true);
      setSubEmail("");
    }
  };

  return (
    <>
      <footer className="bg-[#09180f] text-white pt-16 pb-24 md:pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Top CTA Banner Inside Footer */}
          <div className="rounded-3xl bg-gradient-to-r from-[#173d25] via-[#13321e] to-[#0e2617] border border-[#3aa63a]/35 p-6 sm:p-10 mb-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Ready for a Warmer, Drier, Lower-Bill Home?
              </h3>
              <p className="text-sm sm:text-base text-white/75 mt-1.5">
                Speak directly with Jamie and our Bournemouth specialists today
                on Freephone{" "}
                <span className="font-mono text-white font-semibold">
                  {COMPANY_INFO.phoneDisplay}
                </span>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={() => onBookSurvey()}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[#3aa63a] hover:bg-[#2f9e35] text-white font-semibold text-sm whitespace-nowrap shadow-lg transition-colors cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-mono font-semibold text-sm whitespace-nowrap transition-colors"
              >
                <Phone className="w-4 h-4 text-[#5ce65c] shrink-0" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Main 4-Column Footer Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Brand & Socials */}
            <div className="lg:col-span-4 space-y-4">
              <ImprintLogo variant="light" />
              <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                Creating better, warmer, and more sustainable British homes with
                experienced craftsmen across Bournemouth, Dorset, and the South
                Coast.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Imprint Home Improvements on Facebook"
                  className="w-10 h-10 rounded-xl bg-white/8 hover:bg-[#3aa63a] border border-white/12 flex items-center justify-center transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Imprint Home Improvements on Instagram"
                  className="w-10 h-10 rounded-xl bg-white/8 hover:bg-[#3aa63a] border border-white/12 flex items-center justify-center transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services Column 1 */}
            <div className="lg:col-span-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#6bf26b] mb-4">
                Core Services
              </h4>
              <ul className="space-y-2.5 text-sm text-white/75">
                {SERVICES.slice(0, 5).map((srv) => (
                  <li key={srv.id}>
                    <button
                      type="button"
                      onClick={() => onSelectService(srv)}
                      className="hover:text-white transition-colors text-left cursor-pointer"
                    >
                      {srv.shortTitle}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column 2 */}
            <div className="lg:col-span-2">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#6bf26b] mb-4">
                More Upgrades
              </h4>
              <ul className="space-y-2.5 text-sm text-white/75">
                {SERVICES.slice(5).map((srv) => (
                  <li key={srv.id}>
                    <button
                      type="button"
                      onClick={() => onSelectService(srv)}
                      className="hover:text-white transition-colors text-left cursor-pointer"
                    >
                      {srv.shortTitle}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter ("Connect With Us") */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#6bf26b]">
                Connect With Us
              </h4>

              <div className="space-y-2 text-xs text-white/75">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#5ce65c] shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#5ce65c] shrink-0" />
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="font-mono hover:text-white"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#5ce65c] shrink-0" />
                  <a
                    href={COMPANY_INFO.emailHref}
                    className="hover:text-white truncate"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Seasonal Energy Tips & Specials Signup */}
              <div className="pt-2">
                {subscribed ? (
                  <div className="flex items-center gap-2 text-xs text-[#7ef47e] bg-white/8 px-3 py-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Thanks for signing up!</span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletter} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={subEmail}
                      onChange={(e) => setSubEmail(e.target.value)}
                      placeholder="Email for seasonal offers"
                      aria-label="Email address for updates"
                      className="min-w-0 flex-1 px-3 py-2.5 rounded-xl bg-white/8 border border-white/15 text-xs text-white placeholder:text-white/45 focus:border-[#5ce65c] outline-none"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2.5 rounded-xl bg-[#3aa63a] hover:bg-[#2f9e35] text-white text-xs font-semibold shrink-0 cursor-pointer"
                    >
                      Sign up
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Legal Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/55">
            <p>
              Copyright &copy; {new Date().getFullYear()} Imprint Home
              Improvements &mdash; All Rights Reserved.
            </p>
            <div className="flex items-center gap-5">
              <a href="#showroom" className="hover:text-white transition-colors">
                Showroom (BH1 4BP)
              </a>
              <a href="#services" className="hover:text-white transition-colors">
                Our Services
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Free Quote
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Quick-Call & Quote Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0c1f14]/95 backdrop-blur-lg border-t border-white/15 px-3 py-2.5 grid grid-cols-2 gap-2.5">
        <a
          href={COMPANY_INFO.phoneHref}
          className="py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-mono font-semibold text-xs flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#5ce65c]" />
          <span>0800 001 6233</span>
        </a>
        <button
          type="button"
          onClick={() => onBookSurvey()}
          className="py-2.5 rounded-xl bg-[#3aa63a] text-white font-semibold text-xs flex items-center justify-center gap-1.5"
        >
          <span>Free Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Sleek Non-Intrusive Cookie Notice */}
      {!cookieChoiceMade && (
        <div className="fixed bottom-16 md:bottom-5 right-4 left-4 sm:left-auto sm:max-w-sm z-50 bg-white rounded-2xl p-4 shadow-[0_20px_50px_rgba(12,31,20,0.22)] border border-[#d6e0d3]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#eaf5ea] text-[#2f9e35] flex items-center justify-center shrink-0 mt-0.5">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-[#0c1f14]">
                This website uses cookies
              </h4>
              <p className="text-[11px] text-[#526758] mt-1 leading-relaxed">
                We use cookies to analyse website traffic and optimise your
                browsing experience.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => handleCookieChoice("accepted")}
                  className="px-3.5 py-1.5 rounded-lg bg-[#2f9e35] hover:bg-[#248229] text-white text-xs font-semibold cursor-pointer"
                >
                  Accept
                </button>
                <button
                  type="button"
                  onClick={() => handleCookieChoice("declined")}
                  className="px-3.5 py-1.5 rounded-lg border border-[#d6e0d3] text-[#2d4234] hover:bg-[#f4f7f2] text-xs font-medium cursor-pointer"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
