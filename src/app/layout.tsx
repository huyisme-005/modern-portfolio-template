import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/providers/ThemeProvider";
import { SmoothScrollProvider } from "../components/providers/SmoothScrollProvider";
import VisitorTracker from "../components/analytics/VisitorTracker";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 🎯 CUSTOMIZATION: Update these values with your information
// Replace all instances of YOUR_NAME, YOUR_TITLE, YOUR_DOMAIN, etc.
export const metadata: Metadata = {
  metadataBase: new URL("https://huyisme-005.github.io"),
  title: "Huy Le - Software Engineering Intern",
  description:
    "Portfolio website showcasing my work in Software Development, Frontend, Backend, Fullstack, and AI Engineering.",
  keywords: [
    "Huy Le",
    "Software Engineering Intern",
    "Software Development",
    "Frontend",
    "Backend",
    "Fullstack",
    "AI Engineering",
    "Portfolio",
    "Python",
    "Java",
    "C/C++",
    "React",
    "Angular",
    "AWS",
    "AI Copilot",
  ],
  authors: [{ name: "Huy Le" }],
  creator: "Huy Le",
  publisher: "Huy Le",
  openGraph: {
    title: "Huy Le - Software Engineering Intern",
    description: "Learn more about Huy Le - Software Engineering Intern and his expertise in software and AI engineering.",
    url: "https://huyisme-005.github.io",
    siteName: "Huy Le Portfolio",
    images: [
      {
        url: "https://huyisme-005.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Huy Le - Software Engineering Intern",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huy Le - Software Engineering Intern",
    description: "Learn more about Huy Le - Software Engineering Intern and his expertise in software and AI engineering.",
    images: ["https://huyisme-005.github.io/og-image.png"],
    creator: "@huyisme005",
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://YOUR_DOMAIN.com",
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content"
        />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <SmoothScrollProvider>
            <VisitorTracker />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
