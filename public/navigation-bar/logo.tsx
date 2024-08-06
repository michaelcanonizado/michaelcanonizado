import React from 'react';

export const Logo = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => {
  return (
    <svg
      className={className}
      {...props}
      ref={ref}
      viewBox='0 0 454 522'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M203 13.8564C217.851 5.28203 236.149 5.28203 251 13.8564L429.033 116.644C443.884 125.218 453.033 141.064 453.033 158.213V363.787C453.033 380.936 443.884 396.782 429.033 405.356L251 508.144C236.149 516.718 217.851 516.718 203 508.144L24.9674 405.356C10.1161 396.782 0.967377 380.936 0.967377 363.787V158.213C0.967377 141.064 10.1161 125.218 24.9674 116.644L203 13.8564Z'
        fill='#AD5CFF'
      />
      <path
        d='M142.4 337H86V185.8H138.8V231.7H141.8C145.1 206.5 158.9 182.8 197 182.8C232.7 182.8 249.8 204.4 252.8 231.7H255.8C259.1 206.5 273.5 182.8 312.8 182.8C351.5 182.8 369.8 207.4 369.8 240.1V337H313.4V260.8C313.4 239.8 307.4 233.2 284 233.2C260.9 233.2 256.1 239.5 256.1 259V337H199.7V260.8C199.7 239.8 193.7 233.2 170.3 233.2C147.2 233.2 142.4 239.5 142.4 259V337Z'
        fill='white'
      />
    </svg>
  );
});
Logo.displayName = 'Logo';
