import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextSub } from '@/components/text';

const WarningBanner = ({ className }: ComponentBaseProps) => {
  return (
    <div className={cn('min-h-[64px] bg-foreground p-md', className)}>
      <TextSub className='flex flex-row items-center font-medium text-background'>
        Open on desktop or increase the window size for the full experience.
      </TextSub>
    </div>
  );
};

export default WarningBanner;
