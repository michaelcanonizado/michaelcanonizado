import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import MagneticHover from './magnetic-hover';

const Card = ({ className, children, ...props }: ComponentBaseProps) => {
  return (
    <MagneticHover
      className={cn(
        'relative min-w-[82vw] space-y-md rounded-lg border bg-muted/20 p-lg backdrop-blur-[8px] sm:w-[420px] sm:min-w-0 lg:w-[350px]',
        className
      )}
    >
      {children}
    </MagneticHover>
  );
};

const CardImage = ({ className, children }: ComponentBaseProps) => {
  return (
    <div
      className={cn(
        'relative aspect-square w-full overflow-hidden rounded-lg',
        className
      )}
    >
      {children}
    </div>
  );
};

const CardText = ({ className, children }: ComponentBaseProps) => {
  return <div className={cn('', className)}>{children}</div>;
};

Card.Image = CardImage;
Card.Text = CardText;
export default Card;
