import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import React from 'react';

const Link = ({ className, children }: ComponentBaseProps) => {
  return (
    <div className={cn('text-sub hover:cursor-pointer', className)}>
      {children}
    </div>
  );
};

export default Link;
