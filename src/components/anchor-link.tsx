'use client';

import { ComponentBaseProps } from '@/types';
import { cn } from '@/lib/utils';
import { TextBody } from './text';
import { useLenis } from 'lenis/react';

export const AnchorLink = ({
  className,
  children,
  target
}: { target: string } & ComponentBaseProps) => {
  const lenis = useLenis();

  return (
    <TextBody
      onClick={() => {
        lenis?.scrollTo(target);
      }}
      showAnimation={false}
      className={cn('font-display font-[500] hover:cursor-pointer', className)}
    >
      {children}
    </TextBody>
  );
};

export default AnchorLink;
