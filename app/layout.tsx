import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Add your metadata here
  // title for the browser tab
  title: "Template cv site",
  // description for search engines, describes the content of the page
  description: "Template cv site, template created by Herman Kristiansen",
  // keywords for search engines, keywords are used to find the page
  keywords: ["Template", "cv", "site", "Herman Kristiansen"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
