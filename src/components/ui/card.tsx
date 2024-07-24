import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Card = ({ className }: ComponentBaseProps) => {
  return (
    <div
      className={cn('h-[400px] w-[250px] rounded-lg bg-foreground', className)}
    />
  );
};

export default Card;
