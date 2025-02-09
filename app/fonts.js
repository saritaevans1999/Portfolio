import { Inter, Open_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const blacker = localFont({
  src: '../public/fonts/BlackerDisplayMediumItalic.ttf',
  variable: '--font-blacker',
  display: 'swap',
});
