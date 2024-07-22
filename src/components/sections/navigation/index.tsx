'use client';

import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import Link from '@/components/ui/link';

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
      className={cn(
        'sticky top-0 flex justify-center border-b-[1px]',
        className
      )}
      style={{
        backgroundColor: 'var(--brand)'
      }}
      
    >
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className='absolute inset-0 h-full bg-foreground'
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
          'container z-50 flex h-[64px] flex-row items-center justify-between border-x-[1px] bg-transparent',
          isScrolled ? 'text-background' : 'text-foreground'
        )}
      >
        <div className=''>
          <h1>Logo</h1>
        </div>
        <div className='flex flex-row gap-md'>
          <Link>About</Link>
          <Link>Experience</Link>
          <Link>Projects</Link>
        </div>
        <div className=''>
          <h1>O</h1>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
