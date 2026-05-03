import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body 
        className={`${inter.className} h-full flex flex-col md:flex-row overflow-hidden text-[var(--foreground)] bg-black`}
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none -z-10" />
        
        <AuthProvider>
          <Sidebar />
          <main className="flex-1 overflow-y-auto h-full relative z-0 pb-16 md:pb-0">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
