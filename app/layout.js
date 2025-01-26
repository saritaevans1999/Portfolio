'use client';

import './globals.css';
import localFont from "next/font/local";

const blacker = localFont({
  src: [
    {
      path: "../public/fonts/BlackerDisplayMediumItalic.ttf",
    },
  ],
  variable: "--font-blacker",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${blacker.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}