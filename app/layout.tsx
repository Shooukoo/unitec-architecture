import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "UNITEC 2025 - Arquitectura",
    template: "%s | UNITEC 2025 - Arquitectura",
  },
  description:
    "Celebra con nosotros el UNITEC 2025.",
  keywords: [
    "UNITEC",
    "UNITEC 2025",
    "Arquitectura",
    "Italia",
    "Eventos universitarios",
  ],
  authors: [{ name: "Santiago Nuñez" }],
  creator: "Santiago Nuñez",
  publisher: "Santiago Nuñez",
  metadataBase: new URL("https://unitec-arquitectura.vercel.app/"), // tu dominio real
  alternates: {
    canonical: "https://unitec-arquitectura.vercel.app/",
  },
  openGraph: {
    title: "UNITEC 2025 - Arquitectura",
    description:
      "Vive el Carnaval UNITEC con temática italiana. Cultura y arquitectura en un solo lugar.",
    url: "https://unitec-arquitectura.vercel.app/",
    siteName: "UNITEC 2025",
    images: [
      {
        url: "/og-arquitectura.png",
        width: 1200,
        height: 630,
        alt: "UNITEC 2025 con temática italiana",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNITEC 2025",
    description:
      "Celebra el Carnaval UNITEC con temática italiana. Innovación y cultura en un solo evento.",
    images: ["/og-arquitectura.png"],
    creator: "@XdSho33181",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-arqui.png",
    shortcut: "/logo-arqui.png",
    apple: "/logo-arqui.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
