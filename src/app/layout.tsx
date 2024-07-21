import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

import NavigationBar from '@/components/sections/navigation';
import { container } from '@/styles/container';
import { cn } from '@/lib/utils';

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
      <body className={'flex flex-col justify-center ' + inter.className}>
        <NavigationBar />
        <main className='flex w-screen justify-center'>
          <div className={cn('border-x-[1px] border-b-[1px]', container)}>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
