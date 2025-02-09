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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}