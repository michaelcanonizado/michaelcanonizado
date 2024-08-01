import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Card = ({ className, children, ...props }: ComponentBaseProps) => {
  return (
    <div
      {...props}
      className={cn(
        'relative h-[500px] w-[350px] space-y-md rounded-lg border bg-muted/20 p-lg backdrop-blur-[8px]',
        className
      )}
    >
      {children}
    </div>
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
