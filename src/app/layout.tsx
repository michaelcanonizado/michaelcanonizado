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
    <html lang='en' className='dark min-h-screen'>
      <body
        className={'text-body flex flex-col justify-center' + inter.className}
      >
        <NavigationBar />
        <main className='flex w-screen justify-center'>
          <div className='container border-x-[1px] border-b-[1px]'>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
