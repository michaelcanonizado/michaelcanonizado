import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Projects = ({ className }: ComponentBaseProps) => {
  return (
    <section className={cn('container border-b-[1px]', className)}>
      Projects
    </section>
  );
};

export default Projects;
