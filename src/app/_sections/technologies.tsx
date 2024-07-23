import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import React from 'react';

const Technologies = ({ className }: ComponentBaseProps) => {
  return <section className={cn('', className)}>Technologies</section>;
};

export default Technologies;
