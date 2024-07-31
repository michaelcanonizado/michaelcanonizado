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
import { TextBody } from '@/components/ui/text';

const Link = ({ className, children }: ComponentBaseProps) => {
  return (
    <TextBody
      showAnimation={false}
      className={cn('font-display font-[500] hover:cursor-pointer', className)}
    >
      {children}
    </TextBody>
  );
};

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
        <div>
          <TextBody
            showAnimation={false}
            className='font-display font-bold text-brand'
          >
            Logo
          </TextBody>
        </div>
        <div className='flex flex-row gap-md'>
          <Link className=''>about</Link>
          <Link className=''>experience</Link>
          <Link className=''>projects</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
