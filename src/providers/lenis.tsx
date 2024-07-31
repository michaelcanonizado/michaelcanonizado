'use client';

import { ReactLenis, useLenis } from 'lenis/react';

const LenisScrollProvider = ({ children }: { children?: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisScrollProvider;
