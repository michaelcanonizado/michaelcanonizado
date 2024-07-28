import { useState, useEffect } from 'react';

type MousePosition = {
  x: number | undefined;
  y: number | undefined;
};

const useCursor = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0
  });

  const updateMousePosition: EventListener = (e: MouseEventInit): void => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    console.log('Mouse Pos: ', mousePosition);
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};
export default useCursor;
