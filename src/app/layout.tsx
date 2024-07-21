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
        <NavigationBar className='px-md' />
        <main className='flex justify-center px-md'>
          <div className='container border-x-[1px] pb-[100px]'>{children}</div>
        </main>
      </body>
    </html>
  );
}
