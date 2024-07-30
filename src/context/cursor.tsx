'use client';

import { useContext, createContext, useState, useEffect } from 'react';

type Cursor = {
  mousePosition: {
    x: number;
    y: number;
  };
  isHovered: boolean;
};
type CursorContext = {
  cursor: Cursor;
};

const defaultValues: Cursor = {
  mousePosition: {
    x: 0,
    y: 0
  },
  isHovered: false
};

const cursorContext = createContext<CursorContext | null>(null);

const CursorContextProvider = ({
  children
}: {
  children?: React.ReactNode;
}) => {
  const [cursor, setCursor] = useState<Cursor>(defaultValues);

  const updateMousePosition: EventListener = (e: MouseEventInit): void => {
    if (!e.clientX || !e.clientY) {
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    setCursor(prevState => {
      return { ...prevState, mousePosition: { x, y } };
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <cursorContext.Provider value={{ cursor }}>
      {children}
    </cursorContext.Provider>
  );
};
export default CursorContextProvider;

export const useCursorContext = () => {
  const context = useContext(cursorContext);
  if (!context) {
    throw new Error(
      'useCursorContext must be used within a CursorContextProvider'
    );
  }

  return context;
};
