import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextBody } from '@/components/ui/text';

const Link = ({ className, children }: ComponentBaseProps) => {
  return (
    <TextBody
      className={cn('font-display font-[500] hover:cursor-pointer', className)}
    >
      {children}
    </TextBody>
  );
};

export default Link;
