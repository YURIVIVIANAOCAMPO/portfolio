import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://d36ukgikzry0f2.cloudfront.net'),
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
    url: "/",
    siteName: "Viviana Ocampo Portfolio",
    images: [
      {
        url: "/porfolio.png",
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
    images: ["/porfolio.png"],
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
        
        {/* Manual OG Tags Fail-safe */}
        <meta property="og:title" content="Viviana Ocampo | Fullstack Developer & Data Strategist" />
        <meta property="og:description" content="Desarrolladora Fullstack experta en React, Node.js y Estrategia de Datos." />
        <meta property="og:image" content="https://d36ukgikzry0f2.cloudfront.net/porfolio.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://d36ukgikzry0f2.cloudfront.net/porfolio.png" />

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
