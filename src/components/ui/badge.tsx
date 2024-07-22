import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import React from 'react';

const Badge = ({ className, children }: ComponentBaseProps) => {
  return <div className={cn('text-sub', className)}>{children}</div>;
};

export default Badge;
