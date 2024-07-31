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
    <div className='flex w-full flex-col justify-start overflow-hidden rounded-lg border bg-muted lg:flex-row'>
      <div className='h-[350px] w-full min-w-[400px] lg:max-w-[700px]'>
        <div className='h-full w-full bg-muted' />
      </div>
      <div className='flex flex-col justify-between p-lg'>
        <div className='mb-lg'>
          <div className='mb-xs flex items-center justify-start'>
            <TextHeading showAnimation={false}>minder</TextHeading>
          </div>
          <div className='mb-md flex flex-row gap-sm'>
            <TextSub showAnimation={false} className='font-semibold'>
              NextJS
            </TextSub>
            <TextSub showAnimation={false} className='font-semibold'>
              ShadCN
            </TextSub>
            <TextSub showAnimation={false} className='font-semibold'>
              MongoDB
            </TextSub>
          </div>
          <div className='flex items-center justify-end'>
            <TextBody showAnimation={false}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nibh ligula, tempor sed elementum quis, sodales ac erat. Cras
              rhoncus volutpat lectus nec venenatis.
            </TextBody>
          </div>
        </div>
        <Link>View</Link>
      </div>
    </div>
  );
};

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
