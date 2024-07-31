import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import { inter, clashDisplay } from '@/styles/fonts';
import NavigationBar from '@/components/sections/navigation-bar';
import Cursor from './cursor';
import CursorContextProvider from '@/context/cursor';

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
          'relative flex flex-col justify-center font-sans',
          inter.variable,
          clashDisplay.variable
        )}
      >
        <CursorContextProvider>
          {/* <Cursor /> */}
          <NavigationBar />
          {children}
        </CursorContextProvider>
      </body>
    </html>
  );
}
