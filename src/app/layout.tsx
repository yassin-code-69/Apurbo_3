import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imprinthomeimprovements.co.uk"),
  title: "Imprint Home Improvements | Damp Proofing, Insulation, Solar & Roofing in Bournemouth",
  description:
    "Making your home warmer, drier, and more energy-efficient. Bournemouth & Dorset specialists in damp proofing, ProPERLA breathable wall coatings, loft insulation, spray foam removal, solar PV, EV chargers & roofing.",
  keywords: [
    "Imprint Home Improvements",
    "Damp Proofing Bournemouth",
    "Exterior Wall Coating Dorset",
    "ProPERLA Approved Installer",
    "Loft Insulation Bournemouth",
    "Spray Foam Removal UK",
    "Solar Panels Bournemouth",
    "PIV Condensation Control",
    "Roofing Bournemouth",
  ],
  openGraph: {
    title: "Imprint Home Improvements | Sustainable British Home Upgrades",
    description:
      "Experienced quality craftsmen offering tailored solutions for damp proofing, breathable wall coatings, loft insulation, spray foam removal, roofing & solar PV.",
    url: "https://imprinthomeimprovements.co.uk/",
    siteName: "Imprint Home Improvements",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/hero-uk-home.jpg",
        width: 1408,
        height: 768,
        alt: "Imprint Home Improvements — Sustainable Home Upgrades in Bournemouth & Dorset",
      },
    ],
  },
  icons: {
    icon: "/images/imprint-logo.png",
    apple: "/images/imprint-logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Imprint Home Improvements",
  url: "https://imprinthomeimprovements.co.uk",
  telephone: "0800 001 6233",
  email: "admin@imprinthomeimprovements.co.uk",
  image: "https://imprinthomeimprovements.co.uk/images/imprint-logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "638 Christchurch Road",
    addressLocality: "Bournemouth",
    postalCode: "BH1 4BP",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.72725,
    longitude: -1.83762,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "8",
    bestRating: "5",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/495493706991678",
    "https://www.instagram.com/imprinthomeimprovements_",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#f8f9f6] text-[#0f1f15] selection:bg-[#2f9e35]/20 selection:text-[#0c1f14]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
