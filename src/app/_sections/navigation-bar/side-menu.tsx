'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { AnchorLinkType, ComponentBaseProps } from '@/types';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import AnchorLink from '@/components/anchor-link';

const SideMenu = ({
  className,
  links
}: {
  links: AnchorLinkType[];
} & ComponentBaseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerTVariants: Variants = {
    close: {
      translateY: '0px'
    },
    open: {
      translateY: '3px',
      rotate: '45deg'
    }
  };
  const hamburgerBVariants: Variants = {
    close: {
      translateY: '0px'
    },
    open: {
      translateY: '-3px',
      rotate: '-45deg'
    }
  };

  const sideMenuVariants: Variants = {
    initial: {
      x: '100%'
    },
    exit: {
      x: '100%'
    },
    enter: {
      x: '0%'
    }
  };
  const linkVariants: Variants = {
    initial: {
      x: '150%'
    },
    exit: index => ({
      x: '150%',
      transition: {
        type: 'spring',
        delay: 0.1 * (index + 1)
      }
    }),
    enter: index => ({
      x: '0%',
      transition: {
        type: 'spring',
        delay: 0.4 * (index + 1)
      }
    })
  };

  return (
    <div
      className={cn(
        'relative grid aspect-square h-full place-items-center',
        className
      )}
    >
      <motion.div
        whileTap={{
          scale: 1.2
        }}
        animate={isOpen ? 'open' : 'close'}
        onClick={() => setIsOpen(prev => !prev)}
        className={
          'fixed top-[12px] z-50 flex aspect-square flex-col items-center justify-center gap-[4px] rounded-full bg-brand p-[12px] hover:cursor-pointer'
        }
      >
        <motion.div
          variants={hamburgerTVariants}
          className='h-[2px] w-[24px] bg-foreground'
        />
        <motion.div
          variants={hamburgerBVariants}
          className='h-[2px] w-[24px] bg-foreground'
        />
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={sideMenuVariants}
            initial='initial'
            animate='enter'
            exit='exit'
            transition={{
              ease: [0.5, 0, 0.75, 0],
              duration: 0.8
            }}
            className='fixed right-0 top-0 z-40 h-screen translate-x-[90%] bg-muted'
          >
            <div className='mt-xl flex flex-col gap-md px-xl py-xl'>
              {links.map((link, index) => {
                return (
                  <motion.div
                    variants={linkVariants}
                    initial='initial'
                    animate='enter'
                    exit='exit'
                    custom={index}
                    key={index}
                  >
                    <AnchorLink
                      className='font-display text-[calc((20/16)*1rem)] font-[600] leading-[1.1] tracking-[calc((0/16)*1rem)] xs:!text-[calc((24/16)*1rem)]'
                      target={link.id}
                    >
                      {link.name}
                    </AnchorLink>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideMenu;
