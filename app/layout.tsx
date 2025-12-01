import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Root layout for the Walter Farm website.
 * This layout wraps every page with a Navbar, content area, and Footer.
 */
export const metadata: Metadata = {
  title: "Walter Farm - Segamat",
  description:
    "Walter Farm – Family-friendly farm experience in Segamat, Johor.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
        <Navbar />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}