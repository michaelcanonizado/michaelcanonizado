'use client';

import { useState, useEffect } from 'react';

type MousePosition = {
  x: number;
  y: number;
};

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0
  });

  const updateMousePosition: EventListener = (e: MouseEventInit): void => {
    if (!e.clientX || !e.clientY) {
      return;
    }

    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    console.log('MOUNTED MOUSE!');

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  console.log('Mouse Pos: ', mousePosition);
  return mousePosition;
};
export default useMousePosition;
