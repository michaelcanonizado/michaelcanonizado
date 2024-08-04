import { cn } from '@/lib/utils';
import { AnchorLinkType, ComponentBaseProps, ExternalLinkType } from '@/types';

import { TextBody, TextHeading } from '@/components/text';
import { NameFirst } from '@/../public/name/';
import AnchorLink from '@/components/anchor-link';
import InfiniteSlider from '@/components/infinite-slider';
import { LinkedinLogo } from '@/../public/footer/linkedin';
import { GithubLogo } from '@/../public/footer/github';

const externalLinks: {
  heading: string;
  links: ExternalLinkType[];
} = {
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
    }
  ]
};

const anchorLinks: {
  heading: string;
  links: AnchorLinkType[];
} = {
  heading: 'Site Map',
  links: [
    {
      name: 'About',
      id: '#about'
    },
    {
      name: 'Projects',
      id: '#projects'
    },
    {
      name: 'Experience',
      id: '#experience'
    }
  ]
};

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
              <div className='space-y- h-fit lg:space-y-md'>
                <div className=''>
                  <TextHeading className={textColor}>
                    {externalLinks.heading}
                  </TextHeading>
                </div>
                <div className={textColor}>
                  {externalLinks.links.map((link, index) => {
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

              <div className='space-y- h-fit lg:space-y-md'>
                <div className=''>
                  <TextHeading className={textColor}>
                    {anchorLinks.heading}
                  </TextHeading>
                </div>
                <div className={textColor}>
                  {anchorLinks.links.map((link, index) => {
                    return (
                      <AnchorLink
                        target={link.id}
                        className='flex w-fit flex-row items-center gap-sm'
                        key={index}
                      >
                        {link.name}
                      </AnchorLink>
                    );
                  })}
                </div>
              </div>
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
