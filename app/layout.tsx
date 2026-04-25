import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Viviana Ocampo | Fullstack Developer & Data Strategist",
    template: "%s | Viviana Ocampo"
  },
  description: "Desarrolladora Fullstack experta en React, Node.js y Estrategia de Datos. Transformo necesidades de negocio en productos escalables con enfoque en ROI y eficiencia técnica.",
  keywords: [
    "Fullstack Developer", "Data Strategist", "Growth Marketing Specialist", 
    "React Expert", "Next.js Solutions", "Node.js Architecture", "PostgreSQL",
    "Business Intelligence Dashboard", "Cloud Architecture AWS", "Viviana Ocampo Baracaldo",
    "Desarrollo de Software Colombia", "Consultoría Tech"
  ],
  authors: [{ name: "Viviana Ocampo Baracaldo" }],
  creator: "Viviana Ocampo",
  publisher: "Viviana Ocampo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Viviana Ocampo | Fullstack Developer & Data Strategist",
    description: "Soluciones tecnológicas escalables con enfoque en datos y resultados de negocio.",
    url: "https://d36ukgikzry0f2.cloudfront.net",
    siteName: "Viviana Ocampo Portfolio",
    images: [
      {
        url: "https://d36ukgikzry0f2.cloudfront.net/porfolio.png",
        width: 1200,
        height: 630,
        alt: "Viviana Ocampo Professional Portfolio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viviana Ocampo | Fullstack Dev & Data",
    description: "Transformando datos en productos digitales de alto impacto.",
    images: ["https://d36ukgikzry0f2.cloudfront.net/porfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Viviana Ocampo Baracaldo",
  "url": "https://d36ukgikzry0f2.cloudfront.net",
  "image": "https://d36ukgikzry0f2.cloudfront.net/porfolio.png",
  "jobTitle": "Fullstack Developer & Data Strategist",
  "sameAs": [
    "https://linkedin.com/in/viviana-ocampo", // Ajustar si es necesario
    "https://github.com/YURIVIVIANAOCAMPO"
  ],
  "knowsAbout": ["Fullstack Development", "Data Strategy", "React", "Next.js", "Growth Marketing", "Business Intelligence"]
};

import Analytics from "../components/Analytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
