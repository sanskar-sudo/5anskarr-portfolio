import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "5anskarr | Malware Developer | Red Teamer | Cybersecurity enthusiast",
  description: "Portfolio of 5anskarr - Malware Developer, Red Teamer, and Software Engineer specializing in cybersecurity.",
  keywords: ["5anskarr", "cybersecurity", "red teaming", "malware development", "software engineer", "security", "hacking", "rust", "powershell"],
  authors: [{ name: "5anskarr", url: "https://x.com/5anskarr" }],
  creator: "5anskarr",
  publisher: "5anskarr",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://5anskarr.site",
    title: "5anskarr | Malware Developer | Red Teamer | Software Engineer",
    description: "Portfolio of 5anskarr - Malware Developer, Red Teamer, and Software Engineer specializing in cybersecurity.",
    siteName: "5anskarr Portfolio",
    images: [
      {
        url: "https://ext.same-assets.com/1319243742/1259024389.jpeg",
        width: 1200,
        height: 630,
        alt: "5anskarr Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "5anskarr | Malware Developer | Red Teamer | Software Engineer",
    description: "Portfolio of 5anskarr - Malware Developer, Red Teamer, and Software Engineer specializing in cybersecurity.",
    creator: "@5anskarr",
    images: ["https://ext.same-assets.com/1319243742/1259024389.jpeg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/pfp.jpg" sizes="any" />
      </head>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
