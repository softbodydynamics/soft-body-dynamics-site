import type { Metadata } from "next";
import { Jost, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-jost",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soft Body Dynamics — AI Content & VFX Studio",
  description:
    "High-end AI content creation, custom character packages, and educational consultation. Cinematic-grade digital imagery with full pipeline control.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${sourceSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
