import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextBody } from '@/components/ui/text';

const Link = ({ className, children }: ComponentBaseProps) => {
  return (
    <div
      className={cn(
        'group w-fit rounded-full border px-lg py-sm hover:bg-foreground',
        className
      )}
    >
      <TextBody className='group-hover:text-foreground-secondary'>
        {children}
      </TextBody>
    </div>
  );
};

export default Link;
