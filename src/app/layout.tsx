import type { Metadata } from "next";
import {Inter  } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chat App",
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
      <body
        className={`${inter.variable} antialiased`}
      >
        <div className="max-w-[1920px] mx-auto">

        {children}
        </div>
      </body>
    </html>
  );
}
