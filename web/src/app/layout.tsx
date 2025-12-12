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

export const metadata: Metadata = {
  title: "Aditya Real Estate | Chamti Kheda Road, Chittorgarh",
  description:
    "Discover premium plots and residential spaces with Aditya Real Estate on Chamti Kheda Road, Chittorgarh. Connect with Manish Goswami at 9828484565 for site visits and bookings.",
  openGraph: {
    title: "Aditya Real Estate | Chamti Kheda Road, Chittorgarh",
    description:
      "Trusted property consultants for Chittorgarh. Explore plots, investment opportunities, and personalized assistance with Aditya Real Estate.",
    url: "https://agentic-99af3eca.vercel.app",
    siteName: "Aditya Real Estate",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Real Estate | Chamti Kheda Road, Chittorgarh",
    description:
      "Speak with Manish Goswami (9828484565) for curated real estate options along Chamti Kheda Road, Chittorgarh.",
  },
  keywords: [
    "Aditya Real Estate",
    "Chamti Kheda Road",
    "Chittorgarh property",
    "plots in Chittorgarh",
    "Manish Goswami",
    "9828484565",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
