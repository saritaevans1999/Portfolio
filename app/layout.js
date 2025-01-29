'use client';

import '../app/styles/globals.css' // Ensure your global styles are included
import localFont from "next/font/local";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });

const blacker = localFont({
  src: "../public/fonts/BlackerDisplayMediumItalic.ttf",
  variable: "--font-blacker",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${blacker.variable}`}>
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}