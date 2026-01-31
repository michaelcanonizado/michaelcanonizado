import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

import { TextDisplay, TextHeading, TextSub } from '@/components/text';
import Project, { ProjectType } from '@/app/_sections/projects/project';

const projectsList: ProjectType[] = [
  {
    image: {
      src: '/projects/bu-tabulation-system.png',
      alt: 'BU Tabulation System'
    },
    technologies: ['React', 'Spring Boot', 'PostreSQL', 'Redis'],
    heading: 'BU Tabulation System',
    description: `Being the Software Engineering Lead in GDGoC BU, I led the design and development of our flagship project. It's an offline pageant tabulation system built to handle multiple pageants across the university. It includes real-time judge-admin updates, leaderboards, and a dynamic formula engine using Google's Blockly library. This project taught me invaluable lessons in system design, managing critical computations, and project management.`,
    url: 'https://github.com/GDGoC-BU/tabulation-system'
  },
  {
    image: {
      src: '/projects/minder.png',
      alt: 'Project React Movies'
    },
    technologies: ['NextJS', 'TailwindCSS', 'MongoDB'],
    heading: 'Minder',
    description:
      'Due to my lack of knowledge in Excel, I created a personal finance tracker. Since I am more skilled in web development, I created a full-stack webapp that tracks my finances and provides analytics.',
    url: 'https://github.com/michaelcanonizado/minder'
  },
  {
    image: {
      src: '/projects/markup.png',
      alt: 'Markup'
    },
    technologies: ['Java', 'Java Swing'],
    heading: 'Markup',
    description:
      'Developed as a sophomore capstone project for Programming Languages (CS-112), Markup is a custom Markdown-inspired language. It features its own grammar, a fully functional parser, all accessible through an interactive GUI. This deepened my understanding of language theory, semantics, and compiler design.',
    url: 'https://github.com/michaelcanonizado/markup'
  },
  {
    image: {
      src: '/projects/rsa-cipher-tool.png',
      alt: 'RSA Cipher Tool'
    },
    technologies: ['C'],
    heading: 'RSA Cipher Tool',
    description:
      'Developed as a freshman capstone project for Computer Programming 2 (CS-103), The RSA Cipher Tool is a C-based encryption tool with a custom bignum library that implements the RSA (Rivest–Shamir–Adleman) algorithm to generate keys, encrypt, and decrypt data. This taught me a lot about low-level concepts, cryptography, and number theory.',
    url: 'https://github.com/michaelcanonizado/rsa-cipher-tool'
  }
];

const Projects = ({ className }: ComponentBaseProps) => {
  return (
    <section
      id='projects'
      className={cn('container !mb-0 space-y-lg md:space-y-xl', className)}
    >
      <div className='flex flex-col items-center space-y-md md:space-y-lg'>
        <div className=''>
          <TextDisplay className='text-center'>Projects</TextDisplay>
        </div>
        <div className='max-w-[600px]'>
          <TextHeading className='text-center'>
            Wearing multiple hats as a designer, developer, and leader!
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
