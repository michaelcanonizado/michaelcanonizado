import { cn } from '@/lib/utils';
import { TextDisplay } from '@/components/ui/text';
import { ComponentBaseProps } from '@/types';

const Closing = ({ className }: ComponentBaseProps) => {
  return (
    <section className={cn('section min-h-[80vh] space-y-xl', className)}>
      <div className='text-center'>
        <TextDisplay>LET'S DO SOMETHING AWESOME TOGETHER!</TextDisplay>
      </div>
    </section>
  );
};

export default Closing;
