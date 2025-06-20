import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";

import "./globals.css";

const inter = Inter({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased pattern`}>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
