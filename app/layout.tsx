import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr Magerman | General Practitioner — Athlone, Cape Town",
    template: "%s | Dr Magerman GP Practice",
  },
  description:
    "Book an appointment with Dr Magerman, a trusted GP in Athlone, Cape Town. Offering comprehensive primary healthcare, chronic disease management, and preventive care.",
  keywords: [
    "GP Athlone",
    "Doctor Cape Town",
    "General Practitioner Athlone",
    "Family Doctor Cape Town",
    "Dr Magerman",
    "GP Cape Town Southern Suburbs",
    "chronic disease management Cape Town",
    "family doctor Athlone",
  ],
  openGraph: {
    title: "Dr Magerman | GP Practice — Athlone, Cape Town",
    description:
      "Trusted primary healthcare in Athlone, Cape Town. Comprehensive GP services for the whole family.",
    url: "https://www.drmagerman.co.za",
    siteName: "Dr Magerman Medical Practice",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "https://www.drmagerman.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Magerman General Practice — Athlone, Cape Town",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Magerman | GP Practice — Athlone, Cape Town",
    description: "Trusted primary healthcare in Athlone, Cape Town.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.drmagerman.co.za" },
  metadataBase: new URL("https://www.drmagerman.co.za"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Dr Magerman General Practice",
  image: "https://www.drmagerman.co.za/og-image.jpg",
  url: "https://www.drmagerman.co.za",
  telephone: "+27-XX-XXX-XXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[Practice Street Address]",
    addressLocality: "Athlone",
    addressRegion: "Western Cape",
    postalCode: "7764",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.9706,
    longitude: 18.5173,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  medicalSpecialty: "General Practice",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
