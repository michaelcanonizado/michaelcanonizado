import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextBody } from '@/components/text';

const Link = ({ className, children }: ComponentBaseProps) => {
  return (
    <div
      className={cn(
        'group w-fit rounded-full border px-lg py-sm hover:bg-background/50',
        className
      )}
    >
      <TextBody showAnimation={false} className=''>
        {children}
      </TextBody>
    </div>
  );
};

export default Link;
