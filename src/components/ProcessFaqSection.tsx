"use client";

import React, { useState } from "react";
import { ChevronDown, Compass, HelpCircle } from "lucide-react";
import { PROCESS_STEPS, FAQS } from "@/data/imprintData";

export function ProcessFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-[#f8f9f6] border-t border-[#e3ebe0] bg-architectural-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Part 1: 4-Step Process */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6f3e6] text-[#1e7b24] text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>How We Work</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0c1f14] tracking-[-0.025em] leading-[1.12]">
              Effortless, Stress-Free From First Survey to Final Handover.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl p-6 border border-[#dde5da] shadow-[0_4px_16px_rgba(12,31,20,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono font-extrabold text-2xl text-[#2f9e35]">
                      {s.step}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#f0f6ef] text-[#26422c]">
                      {s.detail}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0c1f14]">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#4c6153] mt-2 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Technical FAQs */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6f3e6] text-[#1e7b24] text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Homeowner Questions</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0c1f14] tracking-[-0.025em] leading-[1.14]">
              Straightforward Answers Before You Book.
            </h2>
            <p className="text-[#4c6153] text-base mt-3 leading-relaxed">
              Have a specific question about rising damp, spray foam mortgages,
              or whether your roof suits solar PV? Call our friendly Bournemouth
              office free on{" "}
              <a
                href="tel:08000016233"
                className="font-mono font-semibold text-[#1e7b24] hover:underline"
              >
                0800 001 6233
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-all bg-white ${
                    isOpen
                      ? "border-[#2f9e35] shadow-[0_12px_30px_rgba(12,31,20,0.06)]"
                      : "border-[#dde5da] hover:border-[#b7c9b3]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#2f9e35]">
                        {faq.category}
                      </span>
                      <h3 className="font-display font-bold text-base sm:text-lg text-[#0c1f14] mt-0.5">
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 transition-colors ${
                        isOpen
                          ? "bg-[#2f9e35] text-white"
                          : "bg-[#f0f5ee] text-[#24382b]"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-[#465b4d] leading-relaxed border-t border-[#eff4ee] mt-1 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

