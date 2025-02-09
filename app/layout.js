'use client';

import '../app/styles/globals.css';
import { inter, openSans, blacker } from './fonts';

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${blacker.variable} ${openSans.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  );
}
