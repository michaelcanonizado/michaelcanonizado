import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import React from 'react';

const Introduction = ({ className }: ComponentBaseProps) => {
  return <section className={cn('container', className)}>Introduction</section>;
};

export default Introduction;
