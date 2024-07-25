import { TextDisplay } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Experience = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn('section min-h-[100vh] space-y-xl border-b', className)}
    >
      <div className=''>
        <TextDisplay className='text-center'>Experience</TextDisplay>
      </div>
    </section>
  );
};

export default Experience;
