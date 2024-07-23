import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import {
  TextBody,
  TextDisplay,
  TextHeading,
  TextSub
} from '@/components/ui/text';

const Project = () => {
  return (
    <div className='flex w-[400px] flex-col gap-md'>
      <div className='h-[550px] w-full rounded-lg bg-foreground' />
      <div className='w-full shrink'>
        <div className='mb-sm flex items-center justify-start'>
          <TextHeading>minder</TextHeading>
        </div>
        <div className='mb-md flex flex-row gap-sm'>
          <TextSub>NextJS</TextSub>
          <TextSub>ShadCN</TextSub>
          <TextSub>MongoDB</TextSub>
        </div>
        <div className='flex items-center justify-end'>
          <TextBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            nibh ligula, tempor sed elementum quis, sodales ac erat. Cras
            rhoncus volutpat lectus nec venenatis. Nulla convallis nibh est, a
            convallis dolor venenatis id.
          </TextBody>
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
        <TextDisplay className='text-center'>Projects</TextDisplay>
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
