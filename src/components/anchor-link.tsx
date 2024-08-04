'use client';

import { ComponentBaseProps } from '@/types';
import { cn } from '@/lib/utils';
import { TextBody } from './text';

export const AnchorLink = ({
  className,
  children,
  scrollTo
}: { scrollTo: string } & ComponentBaseProps) => {
  return (
    <TextBody
      onClick={() => {
        document.getElementById(scrollTo)?.scrollIntoView();
      }}
      showAnimation={false}
      className={cn('font-display font-[500] hover:cursor-pointer', className)}
    >
      {children}
    </TextBody>
  );
};

export default AnchorLink;
