import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const satoshi = localFont({
  display: "swap",
  src: [
    { path: "./fonts/satoshi-light.woff2", style: "normal", weight: "300" },
    { path: "./fonts/satoshi-regular.woff2", style: "normal", weight: "400" },
    { path: "./fonts/satoshi-medium.woff2", style: "normal", weight: "500" },
    { path: "./fonts/satoshi-bold.woff2", style: "normal", weight: "700" },
    { path: "./fonts/satoshi-black.woff2", style: "normal", weight: "900" },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Crafter Academy Cohort 01 | Ship a Real AI Product",
  description:
    "A 10-week live cohort by Crafter Station for programmers ready to build, demo, and launch a real AI product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        satoshi.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
