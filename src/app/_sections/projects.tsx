import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Projects = ({ className }: ComponentBaseProps) => {
  return (
    <section className={cn('container border-b', className)}>Projects</section>
  );
};

export default Projects;
