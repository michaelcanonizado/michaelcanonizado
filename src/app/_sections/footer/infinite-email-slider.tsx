import InfiniteSlider from '@/components/infinite-slider';
import { ComponentBaseProps } from '@/types';

const InfiniteEmailSlider = ({
  email,
  className
}: { email: string } & ComponentBaseProps) => {
  return (
    <InfiniteSlider baseVelocity={-3}>
      <span className='mx-lg font-display text-[64px] font-bold group-hover:text-foreground-secondary lg:text-[100px]'>
        {email}
      </span>
    </InfiniteSlider>
  );
};

export default InfiniteEmailSlider;
