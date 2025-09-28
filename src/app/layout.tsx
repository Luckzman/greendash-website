import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

const HUBSPOT_TRACKING_URL = process.env.HUBSPOT_API_KEY;

export const metadata: Metadata = {
  title: "GreenDash: Simplifying ESG Reporting powered by AI",
  description: "Build your Sustainability Report in line with CSRD in a simple and efficient way. Learn about ESG and ESG reporting and start getting certified now!",
  keywords: "Sustainability, CSRD, ESG reports",
  authors: [{ name: "GreenDash" }],
  icons: {
    icon: 'green-dash-favicon.ico',
    shortcut: 'green-dash-favicon.ico',
    apple: 'green-dash-favicon.ico',
  },
  openGraph: {
    title: "GreenDash: Simplifying ESG Reporting powered by AI",
    description: "Build your Sustainability Report in line with CSRD in a simple and efficient way. Learn about ESG and ESG reporting and start getting certified now!",
    url: "https://www.green-dash.com",
    siteName: "GreenDash",
    images: [
      {
        url: "/green-dash-social-share.png",
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
    images: ["/green-dash-social-share.png"],
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
      <body>
        {children}
        <CookieConsent />
      </body>
      <Script
        src="js-eu1.hs-scripts.com/146725220.js"
        id="hs-script-loader"
        type="text/javascript"
      />
    </html>
  );
}