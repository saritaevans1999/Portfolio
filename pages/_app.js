import { Inter } from 'next/font/google'
import '../globals.css' // Ensure your global styles are included

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}