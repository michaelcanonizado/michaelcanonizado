import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextSub } from '@/components/ui/text';

const Link = ({ className, children }: ComponentBaseProps) => {
  return (
    <TextSub className={cn('hover:cursor-pointer', className)}>
      {children}
    </TextSub>
  );
};

export default Link;
