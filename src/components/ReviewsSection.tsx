"use client";

import React, { useState } from "react";
import { Star, Quote, CheckCircle2, ChevronDown } from "lucide-react";
import { CUSTOMER_REVIEWS } from "@/data/imprintData";

export function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll
    ? CUSTOMER_REVIEWS
    : CUSTOMER_REVIEWS.slice(0, 6);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Header + Google 5.0 Summary Card */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef7e6] border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>What Our Customers Say</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#0c1f14] tracking-[-0.025em] leading-[1.12]">
              Trusted by Homeowners Across Bournemouth &amp; Dorset.
            </h2>
            <p className="text-[#4a5f51] text-base mt-3">
              From resolving mortgage-blocking loft spray foam to curing rising
              damp and fitting solar panels, read genuine feedback for Jamie and
              our installation team.
            </p>
          </div>

          {/* Google 5.0 Plaque Summary */}
          <div className="bg-[#f7faf6] rounded-2xl border border-[#dce6d9] px-6 py-4 flex items-center gap-5 shrink-0 self-start lg:self-end">
            <div>
              <div className="font-mono font-extrabold text-4xl text-[#0c1f14] leading-none">
                5.0
              </div>
              <div className="flex items-center gap-0.5 text-amber-400 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-[#dce6d9]" />
            <div>
              <div className="font-display font-bold text-sm text-[#0c1f14] flex items-center gap-1.5">
                <span>Google Customer Rating</span>
                <CheckCircle2 className="w-4 h-4 text-[#2f9e35]" />
              </div>
              <p className="text-xs text-[#556b5c] mt-0.5">
                100% 5-Star Verified Homeowner Feedback
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((rev) => (
            <article
              key={rev.id}
              className="bg-[#f9fbf8] hover:bg-white rounded-2xl p-6 border border-[#e0e8dd] hover:border-[#2f9e35]/50 hover:shadow-[0_16px_40px_rgba(12,31,20,0.07)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#e8f4e8] text-[#1d7522] whitespace-nowrap truncate max-w-[190px]">
                    {rev.serviceTag}
                  </span>
                </div>

                <div className="flex items-start gap-2 mb-2">
                  <Quote className="w-4 h-4 text-[#2f9e35]/40 shrink-0 mt-1" />
                  <h3 className="font-display font-bold text-base text-[#0c1f14]">
                    {rev.title}
                  </h3>
                </div>

                <p className="text-sm text-[#43584a] leading-relaxed">
                  &ldquo;{rev.body}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e7eee4] flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-[#0c1f14]">
                    {rev.name}
                  </div>
                  <div className="text-[11px] text-[#607567] flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-[#2f9e35]" />
                    <span>{rev.source}</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#6b7f71]">
                  {rev.date}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Toggle All 8 Reviews */}
        {CUSTOMER_REVIEWS.length > 6 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#d4dfd1] hover:border-[#2f9e35] bg-white text-[#0c1f14] font-semibold text-sm transition-colors cursor-pointer"
            >
              <span>
                {showAll
                  ? "Show Fewer Reviews"
                  : `Read All ${CUSTOMER_REVIEWS.length} Customer Reviews`}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

