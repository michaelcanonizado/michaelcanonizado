import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextHeading } from '@/components/ui/text';

const Technologies = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'min-h-[80vh] w-full border bg-foreground py-xl',
        className
      )}
    >
      <div className='flex flex-row items-center justify-center'>
        <TextHeading className='text-background'>Technologies</TextHeading>
      </div>
    </section>
  );
};

export default Technologies;
