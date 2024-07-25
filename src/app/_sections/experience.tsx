import { TextDisplay } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Experience = ({ className }: ComponentBaseProps) => {
  return (
    <section className={cn('container min-h-[100vh] space-y-xl', className)}>
      <div className=''>
        <TextDisplay className='text-center'>Experience</TextDisplay>
      </div>
    </section>
  );
};

export default Experience;
