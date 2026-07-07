import type { Metadata } from "next";
import { Inter, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // Import provider yang kita buat

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Favian Rifqi | Web Studio",
  description: "Web Developer & Cybersecurity Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Tambahkan suppressHydrationWarning agar Next.js tidak error saat membaca tema dari browser
    <html lang="id" className={`scroll-smooth ${inter.variable} ${lora.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} font-sans`}>
        {/* Bungkus seluruh aplikasi dengan Providers */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}