"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  ArrowRight,
  Check,
  Zap,
  Droplets,
  Flame,
  Sun,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";

interface SavingsCalculatorProps {
  onApplyPlanToQuote: (summaryText: string, primaryService: string) => void;
}

const PROPERTY_TYPES = [
  { id: "detached", label: "Detached House", multiplier: 1.32 },
  { id: "semi", label: "Semi-Detached", multiplier: 1.08 },
  { id: "terraced", label: "Terraced Home", multiplier: 0.88 },
  { id: "bungalow", label: "Bungalow", multiplier: 1.15 },
] as const;

const BEDROOM_SIZES = [
  { id: "2bed", label: "1–2 Bedrooms", multiplier: 0.85 },
  { id: "3bed", label: "3 Bedrooms", multiplier: 1.0 },
  { id: "4bed", label: "4+ Bedrooms", multiplier: 1.28 },
] as const;

const UPGRADE_GOALS = [
  {
    id: "wall-coating",
    label: "Breathable Wall / Roof Coating",
    annualBaseSaving: 390,
    epcPoints: 8,
    icon: Droplets,
    serviceTitle: "Breathable Exterior Wall Coatings",
    recText: "ProPERLA Superhydrophobic Breathable Masonry Protection",
  },
  {
    id: "loft",
    label: "Loft / SuperFOIL Insulation",
    annualBaseSaving: 340,
    epcPoints: 10,
    icon: Flame,
    serviceTitle: "Loft Insulation & SuperFOIL Systems",
    recText: "270mm+ Knauf Mineral Wool or Approved SuperFOIL Barrier",
  },
  {
    id: "solar",
    label: "Solar PV + Sunsynk Battery",
    annualBaseSaving: 890,
    epcPoints: 16,
    icon: Sun,
    serviceTitle: "Solar Panelling / PV & Hybrid Battery Storage",
    recText: "All-Black Solar PV Array + Sunsynk 5.32kWh Hybrid Storage",
  },
  {
    id: "damp-piv",
    label: "Stop Damp / Condensation (PIV)",
    annualBaseSaving: 190,
    epcPoints: 5,
    icon: Zap,
    serviceTitle: "Damp Proofing & Condensation Control (PIV)",
    recText: "Whisper-Quiet Loft PIV Unit & Moisture Barrier Treatment",
  },
  {
    id: "spray-foam",
    label: "Loft Spray Foam Removal",
    annualBaseSaving: 260,
    epcPoints: 7,
    icon: ShieldAlert,
    serviceTitle: "Mortgage-Safe Spray Foam Removal",
    recText: "Hand Strip Spray Foam + Mortgage-Compliant Re-Insulation",
  },
] as const;

export function SavingsCalculator({
  onApplyPlanToQuote,
}: SavingsCalculatorProps) {
  const [propertyType, setPropertyType] = useState<string>("semi");
  const [bedrooms, setBedrooms] = useState<string>("3bed");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([
    "wall-coating",
    "loft",
  ]);

  const toggleGoal = (id: string) => {
    setSelectedGoals((prev) => {
      if (prev.includes(id)) {
        return prev.length > 1 ? prev.filter((item) => item !== id) : prev;
      }
      return [...prev, id];
    });
  };

  const calculation = useMemo(() => {
    const propMult =
      PROPERTY_TYPES.find((p) => p.id === propertyType)?.multiplier ?? 1;
    const bedMult =
      BEDROOM_SIZES.find((b) => b.id === bedrooms)?.multiplier ?? 1;

    const chosenItems = UPGRADE_GOALS.filter((g) =>
      selectedGoals.includes(g.id)
    );

    const rawSaving = chosenItems.reduce(
      (sum, item) => sum + item.annualBaseSaving,
      0
    );
    // Multi-measure synergy cap so numbers stay realistic & trustworthy
    const synergyFactor = chosenItems.length >= 3 ? 0.9 : 1.0;
    const annualSaving = Math.round(
      (rawSaving * propMult * bedMult * synergyFactor) / 10
    ) * 10;

    const tenYearSaving = annualSaving * 10;

    const totalEpcGain = chosenItems.reduce((s, i) => s + i.epcPoints, 0);
    let targetBand = "EPC C";
    if (totalEpcGain >= 24) targetBand = "EPC A / High B";
    else if (totalEpcGain >= 14) targetBand = "EPC B";

    return {
      annualSaving,
      tenYearSaving,
      targetBand,
      chosenItems,
      propLabel:
        PROPERTY_TYPES.find((p) => p.id === propertyType)?.label ?? "Home",
      bedLabel:
        BEDROOM_SIZES.find((b) => b.id === bedrooms)?.label ?? "3 Bedrooms",
    };
  }, [propertyType, bedrooms, selectedGoals]);

  const handleLockPlan = () => {
    const goalNames = calculation.chosenItems.map((c) => c.label).join(", ");
    const summary = `Estimator Plan: ${calculation.propLabel} (${calculation.bedLabel}) — Interested in: ${goalNames}. Est. saving ~£${calculation.annualSaving.toLocaleString()}/yr.`;
    onApplyPlanToQuote(
      summary,
      calculation.chosenItems[0]?.serviceTitle ||
        "Breathable Exterior Wall Coatings"
    );
  };

  return (
    <section
      id="estimator"
      className="py-20 lg:py-26 bg-[#0c1f14] text-white relative overflow-hidden bg-dark-grid"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[420px] rounded-full bg-[#2f9e35]/12 blur-[150px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#7ef47e] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive UK Property Planner</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] tracking-[-0.025em] leading-[1.12]">
            Estimate Your Annual Energy &amp; Heat-Loss Savings.
          </h2>
          <p className="text-white/75 text-base mt-3 leading-relaxed">
            Dry masonry insulates far better than damp brick, and modern loft
            + solar systems slash reliance on expensive grid energy. Configure
            your British property below for an instant ballpark guide.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Controls Card */}
          <div className="lg:col-span-7 bg-white/[0.05] backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/12 p-4 sm:p-8 space-y-6 sm:space-y-7">
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8bf08b] mb-2.5 sm:mb-3">
                1. Select Your UK Property Style
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                {PROPERTY_TYPES.map((prop) => {
                  const active = propertyType === prop.id;
                  return (
                    <button
                      key={prop.id}
                      type="button"
                      onClick={() => setPropertyType(prop.id)}
                      className={`px-2.5 sm:px-3.5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                        active
                          ? "bg-[#3aa63a] border-[#5ce65c] text-white shadow-[0_8px_20px_rgba(58,166,58,0.3)]"
                          : "bg-white/[0.04] border-white/12 text-white/80 hover:bg-white/[0.09]"
                      }`}
                    >
                      {prop.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Property Size */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8bf08b] mb-2.5 sm:mb-3">
                2. Property Size
              </label>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
                {BEDROOM_SIZES.map((bed) => {
                  const active = bedrooms === bed.id;
                  return (
                    <button
                      key={bed.id}
                      type="button"
                      onClick={() => setBedrooms(bed.id)}
                      className={`px-2 sm:px-3.5 py-2.5 sm:py-3 rounded-xl text-[11px] sm:text-sm font-semibold border transition-all cursor-pointer ${
                        active
                          ? "bg-[#3aa63a] border-[#5ce65c] text-white shadow-[0_8px_20px_rgba(58,166,58,0.3)]"
                          : "bg-white/[0.04] border-white/12 text-white/80 hover:bg-white/[0.09]"
                      }`}
                    >
                      {bed.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Home Priorities */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8bf08b] mb-2.5 sm:mb-3">
                3. What Would You Like To Improve? (Select One or More)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {UPGRADE_GOALS.map((goal) => {
                  const Icon = goal.icon;
                  const selected = selectedGoals.includes(goal.id);
                  return (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => toggleGoal(goal.id)}
                      className={`flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        selected
                          ? "bg-[#2f9e35]/20 border-[#5ce65c] text-white"
                          : "bg-white/[0.03] border-white/12 text-white/75 hover:bg-white/[0.07]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            selected
                              ? "bg-[#3aa63a] text-white"
                              : "bg-white/10 text-white/70"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </span>
                        <span className="text-xs sm:text-sm font-semibold">
                          {goal.label}
                        </span>
                      </div>

                      <span
                        className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ${
                          selected
                            ? "bg-[#3aa63a] border-[#3aa63a] text-white"
                            : "border-white/25"
                        }`}
                      >
                        {selected && <Check className="w-3.5 h-3.5" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Live Output Panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#163823] to-[#0e2618] rounded-2xl sm:rounded-3xl border border-[#3aa63a]/40 p-4 sm:p-8 flex flex-col justify-between shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
            <div>
              <div className="flex items-center justify-between gap-2 pb-4 sm:pb-5 border-b border-white/12">
                <div>
                  <span className="text-[11px] sm:text-xs text-white/65">
                    Estimated Bill &amp; Heat-Loss Saving
                  </span>
                  <div className="font-mono font-extrabold text-3xl sm:text-5xl text-[#6bf26b] tracking-tight mt-1">
                    £{calculation.annualSaving.toLocaleString()}
                    <span className="text-base sm:text-lg font-normal text-white/70">
                      /yr
                    </span>
                  </div>
                </div>
                <div className="text-right bg-white/10 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-3.5 sm:py-2.5 border border-white/10 shrink-0">
                  <div className="text-[10px] sm:text-[11px] text-white/65">10-Yr Value</div>
                  <div className="font-mono font-bold text-sm sm:text-lg text-white">
                    £{calculation.tenYearSaving.toLocaleString()}+
                  </div>
                </div>
              </div>

              {/* EPC & Comfort Strip */}
              <div className="mt-5 flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                  <TrendingUp className="w-4 h-4 text-[#5ce65c]" />
                  <span>Potential Efficiency Target:</span>
                </div>
                <span className="font-mono font-bold text-sm text-[#7ef47e]">
                  {calculation.targetBand}
                </span>
              </div>

              {/* Recommended Tailored Specification */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                  Tailored Imprint Specification ({calculation.propLabel})
                </p>
                <ul className="space-y-2.5">
                  {calculation.chosenItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90 bg-white/[0.04] px-3.5 py-2.5 rounded-xl border border-white/8"
                    >
                      <Check className="w-4 h-4 text-[#5ce65c] shrink-0 mt-0.5" />
                      <span>{item.recText}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/12 space-y-3">
              <button
                type="button"
                onClick={handleLockPlan}
                className="w-full py-4 px-5 rounded-xl bg-[#3aa63a] hover:bg-[#2f9e35] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_12px_28px_rgba(58,166,58,0.38)] transition-all cursor-pointer"
              >
                <span>Get Accurate Free Survey With This Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-white/55 text-center leading-relaxed">
                *Figures are indicative UK residential estimates based on typical
                gas/electricity tariffs. Exact savings confirmed during your free
                on-site home survey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

