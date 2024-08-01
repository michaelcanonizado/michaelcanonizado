import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextHeading, TextSub } from './text';

const Badge = ({ className, children }: ComponentBaseProps) => {
  return (
    <div
      className={cn(
        'flex w-fit flex-row gap-sm rounded-xl border-2 border-background px-md py-sm',
        className
      )}
    >
      {children}
    </div>
  );
};

const Title = ({ className, children }: ComponentBaseProps) => {
  return <TextHeading className={cn('', className)}>{children}</TextHeading>;
};

const Image = ({ className, children }: ComponentBaseProps) => {
  return (
    <div className={cn('relative h-[50px] w-[50px]', className)}>
      {children}
    </div>
  );
};

Badge.Title = Title;
Badge.Image = Image;

export default Badge;
