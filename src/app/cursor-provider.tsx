'use client';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import React from 'react';

const CursorProvider = ({ className, children }: ComponentBaseProps) => {
  return <div className={cn('', className)}>{children}</div>;
};

export default CursorProvider;
