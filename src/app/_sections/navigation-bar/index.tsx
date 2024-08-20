'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { AnchorLinkType, ComponentBaseProps } from '@/types';

import AnchorLink from '@/components/anchor-link';
import SideMenu from './side-menu';
import { Logo } from '@/../public/navigation-bar/logo';
import {
  useMotionValueEvent,
  useScroll,
  motion,
  Variants
} from 'framer-motion';
import useDeviceSize from '@/hooks/use-device-size';
import WarningBanner from './warning-banner';

const links: AnchorLinkType[] = [
  {
    name: 'Projects',
    id: '#projects'
  },
  {
    name: 'About',
    id: '#about'
  },
  {
    name: 'Experience',
    id: '#experience'
  }
];

const NavigationBar = ({ className }: ComponentBaseProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (scrollYProgress.get() >= 0.995) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const enterEase = [0.25, 1, 0.5, 1];
  const exitEase = [0.61, 1, 0.88, 1];
  const navigationBarVariants: Variants = {
    initial: {
      y: '0%'
    },
    hidden: {
      y: '-200%',
      transition: {
        ease: exitEase,
        duration: 0.8
      }
    },
    show: {
      y: '0%',
      transition: {
        ease: enterEase,
        duration: 0.8
      }
    }
  };

  return (
    <div className='sticky top-0 z-50'>
      <WarningBanner className='relative z-50 flex md:hidden' />
      <motion.header
        variants={navigationBarVariants}
        initial='initial'
        animate={isHidden ? 'hidden' : 'show'}
        className={cn(
          'relative z-[49] flex flex-row justify-center',
          className
        )}
      >
        <nav
          className={cn(
            'container relative !my-0 flex h-[72px] flex-row items-center justify-between bg-transparent !py-0 text-foreground'
          )}
        >
          <div>
            <Logo className='size-[48px]' />
          </div>
          <div className='hidden flex-row gap-md md:flex'>
            {links.map((link, index) => {
              return (
                <AnchorLink key={index} target={link.id}>
                  {link.name}
                </AnchorLink>
              );
            })}
          </div>
          <SideMenu links={links} className='block: md:hidden' />
        </nav>
      </motion.header>
    </div>
  );
};

export default NavigationBar;
