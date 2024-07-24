import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const clashDisplay = localFont({
  src: './ClashDisplay-Variable.ttf',
  variable: '--font-clash-display'
});
