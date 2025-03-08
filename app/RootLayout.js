"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";
import Footer from "./footer/Page";
import "./globals.css";
import Navbar from "./navbar/Page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
    });
  }, []);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}