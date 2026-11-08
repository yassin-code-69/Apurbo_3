"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Camera,
  MapPin,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { GALLERY_PROJECTS, ProjectItem } from "@/data/imprintData";

interface GallerySectionProps {
  onBookSurvey: (preselectedService?: string) => void;
}

const GALLERY_FILTERS = [
  "All Installations",
  "Roof & ProPERLA",
  "Loft & SuperFOIL",
  "Solar PV",
  "Damp & PIV",
  "Spray Foam Removal",
] as const;

export function GallerySection({ onBookSurvey }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] =
    useState<string>("All Installations");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleProjects: ProjectItem[] =
    activeFilter === "All Installations"
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === activeFilter);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % visibleProjects.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + visibleProjects.length) % visibleProjects.length
    );
  };

  const activeLightboxItem =
    lightboxIndex !== null ? visibleProjects[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#f3f6f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e2f1e2] text-[#1e7b24] text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Real Installations Across Dorset &amp; UK</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#0c1f14] tracking-[-0.025em] leading-[1.12]">
              Proven Workmanship You Can See for Yourself.
            </h2>
          </div>
          <p className="text-[#4b6052] text-base max-w-md">
            No stock filler—every photograph below is an authentic installation
            completed by our own Imprint craftsmen.
          </p>
        </div>

        {/* Spotlight Real Transformation Banner */}
        <div className="mb-12 rounded-3xl overflow-hidden bg-[#0c1f14] text-white border border-[#243d2d] shadow-[0_20px_50px_rgba(12,31,20,0.14)] grid lg:grid-cols-12">
          <div className="lg:col-span-7 relative min-h-[290px] sm:min-h-[380px]">
            <Image
              src="/images/project-semi-roof-compare.jpg"
              alt="Side-by-side semi-detached roof comparison: Imprint cleaned and ProPERLA protected roof on the left vs untreated weathered roof on the right"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            {/* Clean Left vs Right Indicators */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#2f9e35] text-white text-xs font-bold shadow-lg">
              ← Imprint Cleaned &amp; ProPERLA Protected
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-sm text-white/85 text-xs font-medium">
              Untreated Neighbouring Roof →
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-9 flex flex-col justify-center space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6bf26b]">
              Featured Transformation · Semi-Detached UK Roof
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl leading-tight">
              Look at the Difference One Breathable Coating Makes.
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Instead of paying tens of thousands for premature tile replacement,
              deep steam preparation followed by{" "}
              <strong className="text-white">ProPERLA</strong> restores original
              colour, stops water absorption by over 95%, and inhibits moss
              regrowth for years.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5ce65c]" />
                <span>Self-cleaning superhydrophobic rain beading</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5ce65c]" />
                <span>100% vapour-permeable so roof timbers stay dry</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  onBookSurvey("Roofing, Restoration & ProPERLA Roof Coatings")
                }
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#3aa63a] hover:bg-[#2f9e35] text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                <span>Request Free Roof &amp; Wall Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {GALLERY_FILTERS.map((f) => {
            const active = activeFilter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setActiveFilter(f);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  active
                    ? "bg-[#2f9e35] text-white shadow-sm"
                    : "bg-white text-[#2c4233] border border-[#d8e2d5] hover:border-[#2f9e35]"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Real Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => openLightbox(idx)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#dce4d9] hover:border-[#2f9e35] shadow-sm hover:shadow-[0_16px_38px_rgba(12,31,20,0.1)] transition-all flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#102418]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[#0c1f14] text-[10px] font-bold uppercase tracking-wide">
                  {project.highlightMetric}
                </span>

                <span className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#3aa63a] transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[11px] text-[#2f9e35] font-semibold">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-[#0c1f14] mt-1 leading-snug group-hover:text-[#2f9e35] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#53685a] mt-1.5 line-clamp-2 leading-relaxed">
                    {project.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0c1f14] rounded-3xl overflow-hidden border border-white/15 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery preview"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[52vh] sm:h-[62vh] w-full bg-black">
              <Image
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
              />

              {visibleProjects.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Previous installation"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#3aa63a] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next installation"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#3aa63a] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/12">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#6bf26b] font-semibold">
                  <span>{activeLightboxItem.category}</span>
                  <span>·</span>
                  <span>{activeLightboxItem.location}</span>
                </div>
                <h4 className="font-display font-bold text-lg sm:text-xl mt-0.5">
                  {activeLightboxItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/75 mt-1 max-w-2xl">
                  {activeLightboxItem.caption}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const cat = activeLightboxItem.category;
                  closeLightbox();
                  onBookSurvey(cat);
                }}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#3aa63a] hover:bg-[#2f9e35] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <span>Quote Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

