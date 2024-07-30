import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import {
  TextBody,
  TextDisplay,
  TextHeading,
  TextSub
} from '@/components/ui/text';
import Link from '@/components/ui/link';

const Project = () => {
  return (
    <div className='grid grid-cols-2 gap-lg'>
      <div className='flex flex-row justify-end'>
        <div className='h-[350px] w-[550px] rounded-lg bg-foreground' />
      </div>
      <div className='w-full max-w-[550px] shrink'>
        <div className='mb-sm flex items-center justify-start'>
          <TextHeading>minder</TextHeading>
        </div>
        <div className='mb-md flex flex-row gap-sm'>
          <TextSub className='font-semibold'>NextJS</TextSub>
          <TextSub className='font-semibold'>ShadCN</TextSub>
          <TextSub className='font-semibold'>MongoDB</TextSub>
        </div>
        <div className='mb-lg flex items-center justify-end'>
          <TextBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            nibh ligula, tempor sed elementum quis, sodales ac erat. Cras
            rhoncus volutpat lectus nec venenatis. Nulla convallis nibh est, a
            convallis dolor venenatis id.
          </TextBody>
        </div>
        <Link>View</Link>
      </div>
    </div>
  );
};

const Projects = ({ className }: ComponentBaseProps) => {
  return (
    <section className={cn('container space-y-xl', className)}>
      <div className=''>
        <TextDisplay className='text-center'>Projects</TextDisplay>
      </div>
      <div className='flex flex-col gap-xl'>
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
