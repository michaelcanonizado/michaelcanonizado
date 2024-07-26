'use client';

import { useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import Link from '@/components/ui/link';
import { TextBody } from '@/components/ui/text';

const NavigationBar = ({ className }: ComponentBaseProps) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', y => {
    if (y >= 19) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <header
      className={cn('sticky top-0 z-50 flex justify-center', className)}
      style={{
        backgroundColor: 'var(--brand)'
      }}
    >
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className='absolute inset-0 h-full bg-navbar-background'
            initial={{
              translateY: '-100%'
            }}
            exit={{
              translateY: '-100%'
            }}
            animate={{
              translateY: '0%'
            }}
            transition={{
              type: 'tween',
              duration: 0.2
            }}
          />
        )}
      </AnimatePresence>

      <nav
        className={cn(
          'container z-50 !my-0 flex h-[64px] flex-row items-center justify-between bg-transparent !py-0',
          isScrolled ? 'text-navbar-foreground' : 'text-foreground'
        )}
      >
        <div className=''>
          <TextBody className='font-display font-bold'>Logo</TextBody>
        </div>
        <div className='flex flex-row gap-md'>
          <Link>about</Link>
          <Link>experience</Link>
          <Link>projects</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
