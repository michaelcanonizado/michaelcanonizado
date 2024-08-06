import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import { inter, clashDisplay } from '@/styles/fonts';
import CursorContextProvider from '@/context/cursor';
import LenisScrollProvider from '@/providers/lenis';

import NavigationBar from '@/app/_sections/navigation-bar';
import Cursor from './cursor';
import LoadingScreen from './loading-screen';

export const metadata: Metadata = {
  title: 'Michael Canonizado',
  description: 'A personal portfolio'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark bg-background text-foreground'>
      {/* bg-red-500 xs:bg-orange-500 sm:bg-yellow-500 md:bg-green-500 lg:bg-blue-500  */}
      <body
        className={cn(
          'relative flex min-h-screen flex-col justify-center font-sans',
          inter.variable,
          clashDisplay.variable
        )}
      >
        <LenisScrollProvider>
          <CursorContextProvider>
            {/* <LoadingScreen /> */}
            {/* <Cursor /> */}
            <NavigationBar />
            {children}
          </CursorContextProvider>
        </LenisScrollProvider>
      </body>
    </html>
  );
}
