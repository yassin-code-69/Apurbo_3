import React from "react";

interface ImprintLogoProps {
  variant?: "light" | "dark";
  className?: string;
  compact?: boolean;
}

export function ImprintLogo({
  variant = "dark",
  className = "",
  compact = false,
}: ImprintLogoProps) {
  const wordmarkColor = variant === "light" ? "text-white" : "text-[#111814]";
  const subtitleColor =
    variant === "light" ? "text-[#5ce05c]" : "text-[#2f9e35]";

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none shrink-0 whitespace-nowrap ${className}`}
    >
      {/* Signature Green Fingerprint Mark */}
      <svg
        viewBox="0 0 64 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={compact ? "w-8 h-9 shrink-0" : "w-9 h-10 shrink-0"}
        aria-hidden="true"
      >
        <path
          d="M17 11.5C25.5 6.8 38.5 6.8 47 11.5"
          stroke="#3AA63A"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M11 20C21.5 10.5 42.5 10.5 53 20"
          stroke="#3AA63A"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M8 32C9.5 18.5 23 14.5 34 15.5C44.5 16.5 52.5 23 55.5 31.5"
          stroke="#3AA63A"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M7.5 41.5C7.2 46 8.5 50.5 10.5 54"
          stroke="#3AA63A"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M13.5 48C12 34 19.5 22 32 22C43.5 22 49.5 30.5 54 39.5"
          stroke="#3AA63A"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M13 60.5C18 55.5 18.5 46 19 39C19.6 31.2 25.2 28.2 32 28.5C38.8 28.8 43 34.5 49.5 45.5"
          stroke="#3AA63A"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M19.5 67C24 61 25 52 25 43C25 36.8 28.2 34.5 32 34.8C35.8 35.1 38.5 40 46 51.5"
          stroke="#3AA63A"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M31.5 41.5C33.5 48.5 38.5 56 43.5 60.5"
          stroke="#3AA63A"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M26 70.5C28.5 64.5 33.5 64.5 36.5 70"
          stroke="#3AA63A"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Single-Line Crisp Wordmark */}
      <div className="flex flex-col justify-center leading-none whitespace-nowrap">
        <span
          className={`font-display font-extrabold tracking-[-0.03em] whitespace-nowrap ${
            compact ? "text-xl" : "text-[22px] sm:text-[24px]"
          } ${wordmarkColor}`}
        >
          Imprint
        </span>
        <span
          className={`font-display font-bold uppercase tracking-[0.1em] mt-1 whitespace-nowrap ${
            compact ? "text-[8px]" : "text-[8.5px]"
          } ${subtitleColor}`}
        >
          Home Improvements
        </span>
      </div>
    </div>
  );
}
