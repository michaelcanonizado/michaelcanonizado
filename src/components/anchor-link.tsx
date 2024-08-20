'use client';

import { ComponentBaseProps } from '@/types';
import { cn } from '@/lib/utils';
import { TextBody } from './text';
import { useLenis } from 'lenis/react';
import useDeviceSize from '@/hooks/use-device-size';

export const AnchorLink = ({
  className,
  children,
  target
}: { target: string } & ComponentBaseProps) => {
  const lenis = useLenis();
  const [width, height] = useDeviceSize();

  return (
    <TextBody
      onClick={() => {
        lenis?.scrollTo(target, { offset: width < 768 ? -100 : 0 });
      }}
      showAnimation={false}
      className={cn('font-display font-[500] hover:cursor-pointer', className)}
    >
      {children}
    </TextBody>
  );
};

export default AnchorLink;
