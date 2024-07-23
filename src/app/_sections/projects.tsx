import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import Badge from '@/components/ui/badge';

const Project = () => {
  return (
    <div className='flex w-[400px] flex-col gap-md'>
      <div className='h-[550px] w-full rounded-lg bg-foreground' />
      <div className='w-full shrink'>
        <div className='mb-sm flex items-center justify-start'>
          <h1 className='text-heading'>minder</h1>
        </div>
        <div className='mb-md flex flex-row gap-sm'>
          <Badge>NextJS</Badge>
          <Badge>ShadCN</Badge>
          <Badge>MongoDB</Badge>
        </div>
        <div className='flex items-center justify-end'>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            nibh ligula, tempor sed elementum quis, sodales ac erat. Cras
            rhoncus volutpat lectus nec venenatis. Nulla convallis nibh est, a
            convallis dolor venenatis id.
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn('container min-h-[80vh] space-y-xl border-b', className)}
    >
      <div className=''>
        <h1 className='text-display text-center'>Projects</h1>
      </div>
      <div className='flex flex-row flex-wrap gap-xl'>
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
