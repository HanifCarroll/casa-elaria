import type { Metadata } from "next";
import Clarity from "@microsoft/clarity";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

Clarity.init("t4p7xwzuf0");

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casa Elaria - Cosmética Consciente y Natural",
  description:
    "Productos de cuidado personal derivados de la oliva sanjuanina. 100% natural, 100% argentino, 100% con propósito. Regalá consciencia, belleza y cuidado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
