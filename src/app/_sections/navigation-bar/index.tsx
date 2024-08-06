import { cn } from '@/lib/utils';
import { AnchorLinkType, ComponentBaseProps } from '@/types';

import AnchorLink from '@/components/anchor-link';
import SideMenu from './side-menu';
import { Logo } from '@/../public/navigation-bar/logo';

const NavigationBar = ({ className }: ComponentBaseProps) => {
  const links: AnchorLinkType[] = [
    {
      name: 'Projects',
      id: '#projects'
    },
    {
      name: 'About',
      id: '#about'
    },
    {
      name: 'Experience',
      id: '#experience'
    }
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 flex flex-row justify-center',
        className
      )}
    >
      <nav
        className={cn(
          'container !my-0 flex h-[72px] flex-row items-center justify-between bg-transparent !py-0 text-foreground'
        )}
      >
        <div>
          <Logo className='size-[48px]' />
        </div>
        <div className='hidden flex-row gap-md md:flex'>
          {links.map((link, index) => {
            return (
              <AnchorLink key={index} target={link.id}>
                {link.name}
              </AnchorLink>
            );
          })}
        </div>
        <SideMenu links={links} className='block: md:hidden' />
      </nav>
    </header>
  );
};

export default NavigationBar;
