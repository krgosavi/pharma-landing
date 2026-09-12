import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Solunist Research",
    template: "%s | Solunist",
  },

  description:
    "PharmaLab provides pharmaceutical research, analytical testing, bioanalytical services, formulation development, quality support, and regulatory solutions.",

  keywords: [
    "pharmaceutical research",
    "pharmaceutical R&D",
    "analytical testing",
    "bioanalytical services",
    "formulation development",
    "pharmaceutical research laboratory",
    "drug development",
    "pharma research",
  ],

  authors: [
    {
      name: "PharmaLab",
    },
  ],

  creator: "PharmaLab",

  metadataBase: new URL("https://www.pharmalab.com"),

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pharmalab.com",
    siteName: "PharmaLab",
    title: "PharmaLab | Pharmaceutical Research & Innovation",
    description:
      "Advanced pharmaceutical research, analytical testing, formulation development, and scientific solutions.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PharmaLab Pharmaceutical Research & Innovation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PharmaLab | Pharmaceutical Research & Innovation",
    description:
      "Advanced pharmaceutical research and scientific solutions.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}