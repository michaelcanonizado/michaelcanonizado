import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const WarningBanner = ({ className }: ComponentBaseProps) => {
  return <div className={cn('', className)}>WarningBanner</div>;
};

export default WarningBanner;
