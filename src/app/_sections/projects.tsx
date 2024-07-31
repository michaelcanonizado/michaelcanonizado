import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

import { TextDisplay, TextHeading } from '@/components/ui/text';
import Project from '@/components/ui/project';

const Projects = ({ className }: ComponentBaseProps) => {
  return (
    <section className={cn('container space-y-xl', className)}>
      <div className='flex flex-col items-center space-y-lg'>
        <div className=''>
          <TextDisplay className='text-center'>Projects</TextDisplay>
        </div>
        <div className='max-w-[600px]'>
          <TextHeading className='text-center'>
            I really enjoy working on side projects. Wearing multiple hats as a
            designer, thinker, and a manager!
          </TextHeading>
        </div>
      </div>
      <div className='flex flex-col gap-lg'>
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
