import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

import NavigationBar from '@/components/sections/navigation';
import { cn } from '@/lib/utils';
import { inter, build } from '@/styles/fonts';

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
    <html lang='en' className='min-h-screen bg-background text-foreground'>
      <body
        className={cn(
          'font-inter relative flex flex-col justify-center',
          inter.variable,
          build.variable
        )}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
