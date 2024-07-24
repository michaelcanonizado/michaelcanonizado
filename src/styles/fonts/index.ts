import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const build = localFont({
  src: './build.ttf',
  variable: '--font-build'
});
