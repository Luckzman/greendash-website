import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenDash: Simplifying ESG Reporting powered by AI",
  description: "Build your Sustainability Report in line with CSRD in a simple and efficient way. Learn about ESG and ESG reporting and start getting certified now!",
  keywords: "Sustainability, CSRD, ESG reports",
  authors: [{ name: "GreenDash" }],
  icons: {
    icon: '/green-dash-small-logo.ico',
    shortcut: '/green-dash-small-logo.ico',
    apple: '/green-dash-small-logo.ico',
  },
  openGraph: {
    title: "GreenDash: Simplifying ESG Reporting powered by AI",
    description: "Build your Sustainability Report in line with CSRD in a simple and efficient way. Learn about ESG and ESG reporting and start getting certified now!",
    url: "https://www.green-dash.com",
    siteName: "GreenDash",
    images: [
      {
        url: "https://res.cloudinary.com/dpnkoawy4/image/upload/v1741803466/greendash-banner_bxwvze.jpg",
        width: 1200,
        height: 630,
        alt: "GreenDash - ESG Reporting Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenDash: Simplifying ESG Reporting powered by AI",
    description: "Build your Sustainability Report in line with CSRD in a simple and efficient way. Learn about ESG and ESG reporting and start getting certified now!",
    images: ["https://res.cloudinary.com/dpnkoawy4/image/upload/v1741803466/greendash-banner_bxwvze.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} antialiased`}
      >
        <div className="min-h-screen">
          <Navbar />
          <div className="pt-20">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
