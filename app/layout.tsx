import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viviana | Fullstack Developer - Soluciones Reales de Negocio",
  description: "Desarrolladora Fullstack enfocada en construir productos funcionales y escalables que resuelven problemas reales. Especialista en React, Next.js, Node.js y PostgreSQL.",
  keywords: ["Fullstack Developer", "Next.js", "React", "Node.js", "PostgreSQL", "Soluciones de Negocio", "Viviana Portfolio"],
  authors: [{ name: "Viviana" }],
  openGraph: {
    title: "Viviana | Fullstack Developer",
    description: "Desarrolladora Fullstack enfocada en soluciones reales de negocio.",
    url: "https://viviana.dev", // User can change this later
    siteName: "Viviana Portfolio",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Analytics from "@/components/Analytics";

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
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
