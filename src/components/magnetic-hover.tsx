import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const MagneticHover = ({ className, children }: ComponentBaseProps) => {
  return <div className={cn('bg-red-500', className)}>{children}</div>;
};

export default MagneticHover;
