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

  const enterEase = [0.25, 1, 0.5, 1];
  const exitEase = [0.5, 0, 0.75, 0];

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
      x: 'calc(100% + 150px)'
    },
    exit: {
      x: 'calc(100% + 150px)',
      transition: {
        ease: exitEase,
        duration: 0.8
      }
    },
    enter: {
      x: '0%',
      transition: {
        ease: enterEase,
        duration: 0.8
      }
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
        delay: 0.2 * (index + 1)
      }
    })
  };

  const curveInitialPath = `M150 0 L150 ${window.innerHeight} Q-150 ${window.innerHeight / 2} 150 0`;
  const curveFinalPath = `M150 0 L150 ${window.innerHeight} Q150 ${window.innerHeight / 2} 150 0`;
  const curveVariants: Variants = {
    initial: {
      d: curveInitialPath
    },
    exit: {
      d: curveInitialPath,
      transition: {
        ease: exitEase,
        duration: 0.8
      }
    },
    enter: {
      d: curveFinalPath,
      transition: {
        ease: enterEase,
        duration: 1.5
      }
    }
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
            className='fixed right-0 top-0 z-40 flex h-screen w-fit flex-row'
          >
            <svg className='h-full w-[150px] bg-transparent fill-muted'>
              <motion.path
                variants={curveVariants}
                initial='initial'
                animate='enter'
                exit='exit'
              />
            </svg>
            <div className='flex flex-col gap-md bg-muted px-xl py-2xl'>
              {links.map((link, index) => {
                return (
                  <motion.div
                    variants={linkVariants}
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
