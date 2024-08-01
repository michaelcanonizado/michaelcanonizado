import { cn } from '@/lib/utils';
import { TextBody, TextHeading } from '@/components/text';
import { ComponentBaseProps, Links } from '@/types';
import { NameFirst } from '@/../public/name/';
import InfiniteSlider from '@/components/infinite-slider';

const links: Links[] = [
  {
    heading: 'Site Map',
    links: [
      {
        name: 'About',
        href: '/'
      },
      {
        name: 'Projects',
        href: '/'
      },
      {
        name: 'Experience',
        href: '/'
      }
    ]
  },
  {
    heading: 'Follow Me',
    links: [
      {
        name: 'LinkedIn',
        href: '/'
      },
      {
        name: 'Github',
        href: '/'
      },
      {
        name: 'Discord',
        href: '/'
      }
    ]
  }
];

const Footer = ({ className }: ComponentBaseProps) => {
  const textColor = 'text-foreground';
  const text = {
    heading:
      'Creating a digital experience that bridge aesthetics and functionality'
  };
  const email = 'michaelxaviercanonizado@gmail.com';

  return (
    <section className={cn('w-full space-y-md', className)}>
      <div className='max-height !m-lg flex flex-col justify-end rounded-xl bg-muted py-lg'>
        <div className='flex grow flex-col justify-between'>
          <InfiniteSlider className='' baseVelocity={-3}>
            <span className='mx-lg font-display text-[100px] font-bold group-hover:text-foreground-secondary'>
              {email}
            </span>
          </InfiniteSlider>
          <div className='flex flex-row justify-between gap-lg px-lg py-xl'>
            <div className='max-w-[500px]'>
              <TextHeading className={textColor}>{text.heading}</TextHeading>
            </div>
            <div className='flex flex-row gap-xl'>
              {links.map((linkGroup, index) => {
                return (
                  <div className='h-fit space-y-md' key={index}>
                    <div className=''>
                      <TextHeading className={textColor}>
                        {linkGroup.heading}
                      </TextHeading>
                    </div>
                    <div className={textColor}>
                      {linkGroup.links.map((link, index) => {
                        return <TextBody key={index}>{link.name}</TextBody>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='px-lg'>
          <NameFirst className='fill-brand' />
        </div>
      </div>
    </section>
  );
};

export default Footer;
