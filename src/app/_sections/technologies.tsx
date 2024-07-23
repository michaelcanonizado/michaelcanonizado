import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextDisplay } from '@/components/ui/text';

const Technologies = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'min-h-[40vh] w-full border bg-foreground py-xl',
        className
      )}
    >
      <div className='flex flex-row items-center justify-center'>
        <TextDisplay className='text-background'>Technologies</TextDisplay>
      </div>
    </section>
  );
};

export default Technologies;
