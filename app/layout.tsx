import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nissi Corporate Infra Tech Pvt Ltd | Building Infrastructure. Powering Progress.",
  description:
    "Nissi Corporate Infra Tech Private Limited — trusted infrastructure firm specializing in civil, electrical, and telecom works across Andhra Pradesh for over two decades.",
  keywords:
    "telecom infrastructure, civil works, electrical services, OFC laying, tower foundation, Andhra Pradesh, Reliance Jio, Tata Tele, Nissi Corporate",
  openGraph: {
    title: "Nissi Corporate Infra Tech Pvt Ltd",
    description: "Building Infrastructure. Powering Progress Together.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
