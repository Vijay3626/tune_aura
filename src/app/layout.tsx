import type { Metadata } from "next";
import {Inter  } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tune Aura",
  description: "Tunes that match your aura.",
  icons:{
    icon:'/tune_logo.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
