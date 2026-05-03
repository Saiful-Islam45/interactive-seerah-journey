import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Seerah Explorer",
  description: "Interactive journey through the life of Prophet Muhammad (PBUH)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body 
        className="h-full flex flex-col md:flex-row overflow-hidden text-[var(--foreground)] bg-black"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none -z-10" />
        
        <Sidebar />
        <main className="flex-1 overflow-y-auto h-full relative z-0 pb-16 md:pb-0">
          {children}
        </main>
      </body>
    </html>
  );
}
