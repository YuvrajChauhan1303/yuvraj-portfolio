import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Roboto_Condensed,
  Playwrite_CO,
} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const playwriteCo = Playwrite_CO({
  variable: "--font-playwrite",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuvraj Chauhan",
  description:
    "A Portfolio Website for Yuvraj Chauhan, to view his works, achievements and contact with him.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoCondensed.variable} ${playwriteCo.variable} antialiased overflow-x-hidden `}
      >
        <Analytics />
        <SpeedInsights />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
