import { cn } from '@/lib/utils';
import { TextBody, TextHeading } from '@/components/text';
import { ComponentBaseProps, Links } from '@/types';

import { NameFirst } from '@/../public/name/';
import InfiniteSlider from '@/components/infinite-slider';
import { LinkedinLogo } from '@/../public/footer/linkedin';
import { GithubLogo } from '@/../public/footer/github';
import { DiscordLogo } from '@/../public/footer/discord';

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
        href: 'https://www.linkedin.com/in/michaelcanonizado/',
        icon: <LinkedinLogo />
      },
      {
        name: 'Github',
        href: 'https://github.com/michaelcanonizado',
        icon: <GithubLogo />
      },
      {
        name: 'Discord',
        href: '/',
        icon: <DiscordLogo />
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
      <div className='max-height flex flex-col justify-end bg-muted py-md md:py-lg lg:!m-lg lg:rounded-xl'>
        <div className='flex grow flex-col justify-between'>
          <InfiniteSlider baseVelocity={-3}>
            <span className='mx-lg font-display text-[64px] font-bold group-hover:text-foreground-secondary lg:text-[100px]'>
              {email}
            </span>
          </InfiniteSlider>
          <div className='flex flex-col justify-between gap-lg px-md py-md md:px-lg md:py-xl lg:flex-row'>
            <div className='max-w-[20ch] xs:max-w-[25ch] sm:max-w-[25ch] md:max-w-[30ch] lg:max-w-[50ch]'>
              <TextHeading className={textColor}>{text.heading}</TextHeading>
            </div>
            <div className='flex flex-col gap-md lg:flex-row lg:gap-xl'>
              {links.map((linkGroup, index) => {
                return (
                  <div className='space-y- h-fit lg:space-y-md' key={index}>
                    <div className=''>
                      <TextHeading className={textColor}>
                        {linkGroup.heading}
                      </TextHeading>
                    </div>
                    <div className={textColor}>
                      {linkGroup.links.map((link, index) => {
                        return (
                          <a
                            href={link.href}
                            target='_blank'
                            className='flex w-fit flex-row items-center gap-sm'
                            key={index}
                          >
                            {link.icon && (
                              <div className='size-[20px]'>{link.icon}</div>
                            )}
                            <TextBody>{link.name}</TextBody>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='px-md md:px-lg'>
          <NameFirst className='fill-brand' />
        </div>
      </div>
    </section>
  );
};

export default Footer;
