'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { AnchorLinkType, ComponentBaseProps } from '@/types';
import { motion, Variants } from 'framer-motion';
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
      {isOpen && (
        <div className='fixed right-0 top-0 z-40 h-screen bg-muted'>
          <div className='mt-xl flex flex-col gap-md px-xl py-xl'>
            {links.map((link, index) => {
              return (
                <AnchorLink
                  className='font-display text-[calc((20/16)*1rem)] font-[600] leading-[1.1] tracking-[calc((0/16)*1rem)] xs:!text-[calc((24/16)*1rem)]'
                  key={index}
                  target={link.id}
                >
                  {link.name}
                </AnchorLink>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
