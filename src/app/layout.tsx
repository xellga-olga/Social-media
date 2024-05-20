import type { Metadata } from "next";
import { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import LayoutClient from "@/components/layout/Layout";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social media",
  description: "Social media web app for everyone!",
  icons: '/icon.svg',
};

export const viewport: Viewport = {
  themeColor: '#000',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
