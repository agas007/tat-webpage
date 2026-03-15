import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TAT & Partners | Solusi Pajak Jelas & Terukur",
  description: "Kantor Konsultan Pajak TAT & Partners. Mensederhanakan Kerumitan demi Solusi yang Jelas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} antialiased selection:bg-brand-blue selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
