import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Card = ({ className, children }: ComponentBaseProps) => {
  return (
    <div
      className={cn(
        'h-[400px] w-[250px] overflow-hidden rounded-lg bg-foreground',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
