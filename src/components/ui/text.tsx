import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

export const TextDisplay = ({ className, children }: ComponentBaseProps) => {
  return (
    <h1
      className={cn(
        'text-[calc((80/16)*1rem)] font-[700] leading-[1.1] tracking-[calc((-4.5/16)*1rem)]',
        className
      )}
    >
      {children}
    </h1>
  );
};

export const TextHeading = ({ className, children }: ComponentBaseProps) => {
  return (
    <h2
      className={cn(
        'text-[calc((40/16)*1rem)] font-[700] leading-[1.1] tracking-[calc((-2.5/16)*1rem)]',
        className
      )}
    >
      {children}
    </h2>
  );
};
