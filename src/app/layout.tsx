import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  generator: "Next.js",
  title: "Latemarch",
  description: "Latemarch blog",
  referrer: "origin-when-cross-origin",
  applicationName: "Latemarch - blog",
  keywords: ["Next.js", "blog", "기술 블로그", "자바스크립트", "latemarch"],
  authors: { name: "Latemarch", url: "jjh@catholic.ac.kr" },
  colorScheme: "dark",
  creator: "Latemarch",
  publisher: "Latemarch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Latemarch - blog",
    siteName: "Latemarch",
    description: "Latemarch - blog",
    // image: { url: "/images/frontend.png", alt: "My blog image" },
    locale: "kr_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
