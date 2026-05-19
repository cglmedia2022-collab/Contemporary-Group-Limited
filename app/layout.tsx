import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Contemporary Group Limited | Premier Architectural & Design Consultancy in Nigeria",
  description: "With over 30 years of architectural excellence, Contemporary Group Limited is Nigeria's premier design consultancy and property development group. Discover our legacy of 200+ iconic masterworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
