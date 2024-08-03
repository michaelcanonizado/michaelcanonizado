import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextDisplay } from '@/components/text';
import Dropdown from './dropdown';

const experiences = [
  {
    heading: 'The start of my journey 🚀',
    description:
      'My journey into the world of programming started with the renowned Harvard CS50 course. This foundational experience became my gateway drug to programming. This led me to choose web-development and master the essentials: HTML, CSS, and JavaScript. Driven by desire, I dove into full-stack development, ReactJS, Typescript, and other technologies.',
    time: '2020 - 2021'
  },
  {
    heading: 'Freelancing 👨‍💻',
    description:
      'Eager to put my skills to the test, I challenged myself to start freelancing. Working with diverse clients and projects honed my ability to communicate effectively and deliver top-notch solutions. This experience taught me more than just coding; it was a masterclass in time management and collaboration.',
    time: '2022 - 2023'
  },
  {
    heading: 'Academic Adventure 🎓',
    description:
      'Taking my passion for programming to the next level, I embarked on a formal education journey by pursuing a degree in Computer Science at Bicol University. I am currently deepening my understanding on data-structures, algorithms, and software engineering principles.',
    time: '2023 - Present'
  }
];

const Experience = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'container !mt-lg flex !max-w-[1000px] flex-col items-center space-y-lg',
        className
      )}
    >
      <div className=''>
        <TextDisplay className='text-center'>Experience</TextDisplay>
      </div>
      <div className='w-full overflow-hidden'>
        {experiences.map((experience, index) => {
          return (
            <Dropdown
              heading={experience.heading}
              description={experience.description}
              time={experience.time}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
