'use client';

import { useContext, createContext, useState, useEffect } from 'react';

type Cursor = {
  mousePosition: {
    x: number;
    y: number;
  };
  isHovered: boolean;
  isHidden: boolean;
};
type CursorContext = {
  cursor: Cursor;
  setIsHidden: (state: boolean) => void;
};

const defaultValues: Cursor = {
  mousePosition: {
    x: 0,
    y: 0
  },
  isHovered: false,
  isHidden: true
};

const cursorContext = createContext<CursorContext | null>(null);

const CursorContextProvider = ({
  children
}: {
  children?: React.ReactNode;
}) => {
  const [cursor, setCursor] = useState<Cursor>(defaultValues);

  useEffect(() => {
    const updateMousePosition: EventListener = (e: MouseEventInit): void => {
      if (!e.clientX || !e.clientY) {
        return;
      }

      const x = e.clientX;
      const y = e.clientY;
      setCursor(prevState => {
        return { ...prevState, mousePosition: { x, y } };
      });

      setCursor(prevState => {
        return { ...prevState, isHidden: false };
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const setIsHidden = (state: boolean) => {
    setCursor(prevState => {
      return { ...prevState, isHidden: state };
    });
  };

  const onMouseLeave = () => {
    setIsHidden(true);
  };

  return (
    <cursorContext.Provider value={{ cursor, setIsHidden }}>
      <div onMouseLeave={onMouseLeave}>{children}</div>
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
