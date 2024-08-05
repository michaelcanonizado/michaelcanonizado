import { cn } from '@/lib/utils';
import { AnchorLinkType, ComponentBaseProps } from '@/types';
import { TextBody } from '@/components/text';
import AnchorLink from '@/components/anchor-link';
import SideMenu from './side-menu';

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
    <header className={cn('flex flex-row justify-center', className)}>
      <nav
        className={cn(
          'container !my-0 flex h-[72px] flex-row items-center justify-between bg-transparent !py-0 text-foreground'
        )}
      >
        <div>
          <TextBody
            showAnimation={false}
            className='font-display font-bold text-brand'
          >
            Logo
          </TextBody>
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
        <div className='block: md:hidden'>
          <SideMenu />
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
