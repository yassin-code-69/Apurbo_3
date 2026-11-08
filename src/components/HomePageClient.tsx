"use client";

import React, { useState } from "react";
import { SERVICES, ServiceItem } from "@/data/imprintData";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import { SavingsCalculator } from "./SavingsCalculator";
import { AboutShowroomSection } from "./AboutShowroomSection";
import { GallerySection } from "./GallerySection";
import { ReviewsSection } from "./ReviewsSection";
import { ProcessFaqSection } from "./ProcessFaqSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export function HomePageClient() {
  const [selectedServiceModal, setSelectedServiceModal] =
    useState<ServiceItem | null>(null);
  const [selectedService, setSelectedService] = useState<string>(
    "Damp Proofing & Condensation Control (PIV)"
  );
  const [projectNotes, setProjectNotes] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBookSurvey = (serviceHint?: string) => {
    if (serviceHint) {
      const matched = SERVICES.find(
        (s) =>
          s.title.toLowerCase().includes(serviceHint.toLowerCase()) ||
          serviceHint.toLowerCase().includes(s.shortTitle.toLowerCase())
      );
      setSelectedService(matched ? matched.title : serviceHint);
    }
    setSubmitted(false);
    scrollToContact();
  };

  const handleApplyPlanToQuote = (
    summaryText: string,
    primaryService: string
  ) => {
    setSelectedService(primaryService);
    setProjectNotes(summaryText);
    setSubmitted(false);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        onSelectService={(srv) => setSelectedServiceModal(srv)}
        onBookSurvey={handleBookSurvey}
      />

      <main className="flex-1">
        <HeroSection
          onBookSurvey={handleBookSurvey}
          onSelectService={(srv) => setSelectedServiceModal(srv)}
        />

        <ServicesSection
          selectedServiceModal={selectedServiceModal}
          onSelectServiceModal={setSelectedServiceModal}
          onBookSurvey={handleBookSurvey}
        />

        <SavingsCalculator onApplyPlanToQuote={handleApplyPlanToQuote} />

        <AboutShowroomSection onBookSurvey={handleBookSurvey} />

        <GallerySection onBookSurvey={handleBookSurvey} />

        <ReviewsSection />

        <ProcessFaqSection />

        <ContactSection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
          projectNotes={projectNotes}
          onProjectNotesChange={setProjectNotes}
          submitted={submitted}
          onSubmittedChange={setSubmitted}
        />
      </main>

      <Footer
        onSelectService={(srv) => setSelectedServiceModal(srv)}
        onBookSurvey={handleBookSurvey}
      />
    </div>
  );
}
