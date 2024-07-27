'use client';

import { cn } from '@/lib/utils';
import {
  TextBody,
  TextDisplay,
  TextHeading,
  TextSub
} from '@/components/ui/text';
import { ComponentBaseProps } from '@/types';

const experiences = [
  {
    heading: 'Discovered the world of programming',
    description:
      'Etiam ante lorem, consectetur sit amet magna eu, venenatis aliquet arcu. Vestibulum in lacus a nisl.',
    time: '2020 - 2021'
  },
  {
    heading: 'Freelancing',
    description:
      'venenatis aliquet arcu. Vestibulum in lacus a suscipit condimentum risu.',
    time: '2022-2023'
  },
  {
    heading: 'Studying at Bicol University',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit condimentum risus, vitae fermentum nisi efficitur et.',
    time: '2023 - Present'
  }
];

const Experience = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'container !mt-0 flex flex-col items-center space-y-lg !pt-0',
        className
      )}
    >
      <div className=''>
        <TextHeading className='text-center'>Experience</TextHeading>
      </div>
      <div className='w-full max-w-[600px]'>
        {experiences.map((experience, index) => {
          return (
            <div
              className='flex w-full flex-row items-center justify-between border-b px-0 py-md'
              key={index}
            >
              <div className=''>
                <TextBody className='font-bold'>{experience.heading}</TextBody>
              </div>
              <div className=''>
                <TextSub>{experience.time}</TextSub>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
