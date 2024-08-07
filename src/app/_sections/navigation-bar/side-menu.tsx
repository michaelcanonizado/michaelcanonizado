'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { AnchorLinkType, ComponentBaseProps } from '@/types';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import AnchorLink from '@/components/anchor-link';
import { TextSub } from '@/components/text';

const SideMenu = ({
  className,
  links
}: {
  links: AnchorLinkType[];
} & ComponentBaseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const curveWidth = 200;
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
      x: `calc(100% + ${curveWidth}px)`
    },
    hidden: {
      x: `calc(100% + ${curveWidth}px)`,
      transition: {
        ease: exitEase,
        duration: 0.8
      }
    },
    show: {
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
    hidden: index => ({
      x: '150%',
      transition: {
        type: 'spring',
        delay: 0.1 * (index + 1)
      }
    }),
    show: index => ({
      x: '0%',
      transition: {
        type: 'spring',
        delay: 0.2 * (index + 1)
      }
    })
  };

  const curveInitialPath = `M100 0 L100 ${window.innerHeight} Q-${curveWidth} ${window.innerHeight / 2} 100 0`;
  const curveFinalPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

  const curveVariants: Variants = {
    initial: {
      d: curveInitialPath
    },
    hidden: {
      d: curveInitialPath,
      transition: {
        ease: exitEase,
        duration: 0.8
      }
    },
    show: {
      d: curveFinalPath,
      transition: {
        ease: enterEase,
        duration: 1.5
      }
    }
  };

  const overlayVariants = {
    initial: {
      opacity: 0
    },
    hidden: {
      opacity: 0
      // transition: {
      //   ease: exitEase,
      //   duration: 0.8
      // }
    },
    show: {
      opacity: 100
      // transition: {
      //   ease: enterEase,
      //   duration: 1.5
      // }
    }
  };
  const closeSideMenu = () => {
    console.log('Closing sidebar!');
    setIsOpen(false);
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
          'absolute top-[12px] z-50 flex aspect-square flex-col items-center justify-center gap-[4px] rounded-full bg-brand p-[12px] hover:cursor-pointer'
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
            variants={overlayVariants}
            initial='initial'
            animate='show'
            exit='hidden'
            onClick={closeSideMenu}
            className='fixed left-0 top-0 h-screen w-screen bg-muted/20 backdrop-blur-[6px]'
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={sideMenuVariants}
            initial='initial'
            animate='show'
            exit='hidden'
            className='fixed right-0 top-0 z-40 flex h-screen w-fit flex-row'
          >
            <svg
              onClick={closeSideMenu}
              className='h-full w-[100px] bg-transparent fill-muted'
            >
              <motion.path variants={curveVariants} />
            </svg>
            <div className='flex flex-col gap-md bg-muted px-xl py-2xl'>
              <motion.div
                onClick={closeSideMenu}
                variants={linkVariants}
                custom={0}
              >
                <TextSub>Site Map</TextSub>
              </motion.div>
              <div className='space-y-md'>
                {links.map((link, index) => {
                  return (
                    <motion.div
                      onClick={closeSideMenu}
                      variants={linkVariants}
                      custom={index + 1}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideMenu;
