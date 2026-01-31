import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextDisplay } from '@/components/text';
import Dropdown from './dropdown';

const experiences = [
  {
    heading: 'Academic Adventure 🎓',
    description: `I embarked on a formal education journey by pursuing a degree in Computer Science at Bicol University. Where I'm not only deeping my understanding in the field, but also taking lead roles in organizations such as Google Developer Groups on Campus BU and College of Science Student Council.`,
    time: '2023 - Present'
  },
  {
    heading: 'Freelancing 👨‍💻',
    description:
      'Eager to put my skills to the test, I challenged myself to start freelancing. Working with local clients and which honed my ability to communicate effectively and put my knowledge to practical use.',
    time: '2022 - 2023'
  },
  {
    heading: 'Hello, World! 🚀',
    description:
      'My journey into the world of programming started with the renowned Harvard CS50 course. This foundational experience became my gateway drug to programming. This led me to dive into web-development and master the essentials: HTML, CSS, and JavaScript.',
    time: '2020 - 2021'
  }
];

const Experience = ({ className }: ComponentBaseProps) => {
  return (
    <section
      id='experience'
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
