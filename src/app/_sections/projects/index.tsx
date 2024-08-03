import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

import { TextDisplay, TextHeading } from '@/components/text';
import Project, { ProjectType } from '@/app/_sections/projects/project';

const projectsList: ProjectType[] = [
  {
    image: {
      src: '/projects/minder.png',
      alt: 'Project React Movies'
    },
    technologies: ['NextJS', 'TailwindCSS', 'MongoDB'],
    heading: 'Minder',
    description:
      'Due to my lack of knowledge in Excel, I created a personal finance tracker. Since I am more skilled in web development, I created a website that tracks my finances and provides analytics.',
    url: 'https://www.google.com/search?sca_esv=9267af3241730e66&sca_upv=1&sxsrf=ADLYWIIVyDV_Fpv-ecnUUlRBWOuXghCXQA:1722605376684&q=cats&source=lnms&fbs=AEQNm0B8dVdIWR07uWWlg1TdKnNtA1cwMugrQsIKmAo5AEZHWRFlUeGLxYlhagMfUatSvHu3MSamP9Qd2SfjyZyVIdPFrZFmdorP0BQX-5QUvERZ7CgntLysKxPYR85LNkkQ-ODVQlzCBgHDwYGwBEtb1wyzIiqYOAGOFOhRLG73H-MUdJY1ZFjTgiSsk2gQgTHDHU_Mnn5ewYy4nGfZAENFgsXyYdMtYQ&sa=X&ved=2ahUKEwjv2cKMtdaHAxUyj68BHV1fE_cQ0pQJegQIFBAB&biw=1051&bih=835&dpr=1.1'
  },
  {
    image: {
      src: '/projects/react-movies.png',
      alt: 'Project React Movies'
    },
    technologies: ['ReactJS', 'TailwindCSS', 'Redux'],
    heading: 'React Movies',
    description:
      'Developed as a freshman project, this movie database web app provides detailed movie information, ratings, and trailers, providing users with comprehensive movie information.',
    url: 'https://michaelcanonizado.github.io/react-movies-website/#/popular'
  }
];

const Projects = ({ className }: ComponentBaseProps) => {
  return (
    <section className={cn('container space-y-lg md:space-y-xl', className)}>
      <div className='flex flex-col items-center space-y-md md:space-y-lg'>
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
      <div className='flex flex-col gap-md md:gap-lg'>
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
