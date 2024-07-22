import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Projects = ({ className }: ComponentBaseProps) => {
  return (
    <section className={cn('container border-b', className)}>
      <div>
        <h1 className='text-heading text-center'>Projects</h1>
      </div>
    </section>
  );
};

export default Projects;
