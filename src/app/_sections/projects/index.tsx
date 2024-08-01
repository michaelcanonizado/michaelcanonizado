import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

import { TextDisplay, TextHeading } from '@/components/text';
import Project, { ProjectType } from '@/app/_sections/projects/project';

const projectsList: ProjectType[] = [
  {
    image: {
      src: '/projects/react-movies.png',
      alt: 'Project React Movies'
    },
    technologies: ['React', 'TailwindCSS', 'Redux'],
    heading: 'React Movies',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet lectus risus. Proin vitae diam erat. Mauris porttitor felis nec accumsan semper. ',
    url: 'https://google.com'
  }
];

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
        {projectsList.map((project, index) => {
          return (
            <Project
              key={index}
              image={project.image}
              heading={project.heading}
              technologies={project.technologies}
              description={project.description}
              url={project.url}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
