'use client';

import { useContext, createContext, useState } from 'react';

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

  return (
    <cursorContext.Provider value={{ cursor }}>
      {children}
    </cursorContext.Provider>
  );
};

const useCursorContext = () => {
  const context = useContext(cursorContext);
  if (!context) {
    throw new Error(
      'useCursorContext must be used within a CursorContextProvider'
    );
  }

  return context;
};
