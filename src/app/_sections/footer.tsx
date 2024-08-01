import { cn } from '@/lib/utils';
import { TextBody, TextHeading } from '@/components/ui/text';
import { ComponentBaseProps, Links } from '@/types';
import { NameFirst } from '@/../public/name/';
import InfiniteSlider from '@/components/ui/infinite-slider';

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
  const headerColor = 'text-foreground';

  return (
    <section className={cn('w-full space-y-md', className)}>
      <InfiniteSlider className='' baseVelocity={-3}>
        <span className='mx-lg font-display text-[100px] font-bold group-hover:text-foreground-secondary'>
          michaelxaviercanonizado@gmail.com
        </span>
      </InfiniteSlider>
      <div className='flex flex-col justify-end bg-muted !py-0'>
        <div className='flex grow flex-row justify-between px-xl py-xl'>
          <div className='max-w-[500px]'>
            <TextHeading className={headerColor}>
              Creating a digital experience that bridge aesthetics and
              functionality
            </TextHeading>
          </div>
          <div className='flex flex-row gap-xl'>
            {links.map((linkGroup, index) => {
              return (
                <div className='space-y-md' key={index}>
                  <div className=''>
                    <TextHeading className={headerColor}>
                      {linkGroup.heading}
                    </TextHeading>
                  </div>
                  <div className={headerColor}>
                    {linkGroup.links.map((link, index) => {
                      return <TextBody key={index}>{link.name}</TextBody>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='px-md pb-md'>
          <NameFirst className='fill-brand' />
        </div>
      </div>
    </section>
  );
};

export default Footer;
