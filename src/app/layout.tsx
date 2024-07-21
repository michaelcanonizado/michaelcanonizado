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
    <html lang='en' className='min-h-screen'>
      <body
        className={
          'text-body relative flex flex-col justify-center' + inter.className
        }
      >
        <NavigationBar className='px-md' />
        {children}
      </body>
    </html>
  );
}
