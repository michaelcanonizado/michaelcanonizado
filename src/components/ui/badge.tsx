import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextSub } from './text';

const Badge = ({ className, children }: ComponentBaseProps) => {
  return <TextSub className={cn('', className)}>{children}</TextSub>;
};

export default Badge;
