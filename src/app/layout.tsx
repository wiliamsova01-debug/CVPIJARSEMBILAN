import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV PIJAR SEMBILAN - Konstruksi, Elektrikal & Perdagangan",
  description: "Mitra terpercaya untuk solusi konstruksi bangunan, elektrikal, dan perdagangan material berkualitas tinggi di Blitar, Jawa Timur.",
  keywords: ["CV PIJAR SEMBILAN", "konstruksi bangunan", "konstruksi elektrikal", "perdagangan eceran", "material bangunan", "Blitar", "Jawa Timur"],
  authors: [{ name: "CV PIJAR SEMBILAN" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "CV PIJAR SEMBILAN - Konstruksi & Elektrikal Profesional",
    description: "Solusi terpercaya untuk konstruksi bangunan, elektrikal, dan perdagangan material berkualitas tinggi",
    url: "https://pijarsemblan.co.id",
    siteName: "CV PIJAR SEMBILAN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV PIJAR SEMBILAN - Konstruksi & Elektrikal",
    description: "Mitra terpercaya untuk solusi konstruksi dan elektrikal profesional",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
