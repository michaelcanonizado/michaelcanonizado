import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

import NavigationBar from '@/components/sections/navigation';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Michael Canonizado',
  description: 'A personal portfolio'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={inter.className}>
        <NavigationBar />
        <main className=''>{children}</main>
      </body>
    </html>
  );
}
