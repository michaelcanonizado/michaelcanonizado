import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const MagneticHover = ({ className, children }: ComponentBaseProps) => {
  return <div className={cn('', className)}>{children}</div>;
};

export default MagneticHover;
