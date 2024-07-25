import { TextDisplay } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Experience = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'section mb-xl min-h-[100vh] space-y-xl pt-[150px]',
        className
      )}
    >
      <div className=''>
        <TextDisplay className='text-center'>Experience</TextDisplay>
      </div>
    </section>
  );
};

export default Experience;
