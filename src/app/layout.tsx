import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Cormorant_Garamond({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const komika = localFont({
  src: "../fonts/KomikaAxis.woff2",
  variable: "--nf-komika",
  display: "block",
});
const blackrush = localFont({
  src: "../fonts/Blackrush.woff2",
  variable: "--nf-blackrush",
  display: "block",
});
const kgred = localFont({
  src: "../fonts/KGRedHands.woff2",
  variable: "--nf-kgred",
  display: "block",
});
const traffic = localFont({
  src: "../fonts/Traffic.woff2",
  variable: "--nf-traffic",
  display: "block",
});
const hackney = localFont({
  src: "../fonts/Hackney.woff2",
  variable: "--nf-hackney",
  display: "block",
});
const kong = localFont({
  src: "../fonts/Kong.woff2",
  variable: "--nf-kong",
  display: "block",
});

export const metadata: Metadata = {
  title: "Hiddenhall Tattoo — Estudio de Tatuajes",
  description: "Arte en tu piel. Estudio de tatuajes en Río Gallegos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${serif.variable} ${sans.variable} ${komika.variable} ${blackrush.variable} ${kgred.variable} ${traffic.variable} ${hackney.variable} ${kong.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-200 overflow-x-clip">{children}<ScrollReveal /></body>
    </html>
  );
}
