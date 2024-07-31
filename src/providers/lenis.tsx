'use client';

import { ReactLenis } from 'lenis/react';

const LenisScrollProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        easing: t => {
          return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        },
        wheelMultiplier: 1.2
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
