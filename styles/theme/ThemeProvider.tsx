'use client';
import { createContext, useEffect, useState } from 'react';
import {
  LIGHT_THEME,
  ThemeContextType,
  ThemeProviderType,
  ThemeType,
} from './types';

export const ThemeContext = createContext<ThemeContextType>({
  theme: LIGHT_THEME,
  setTheme: () => {
    throw new Error('ThemeContext provider is missing.');
  },
});

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [theme, setTheme] = useState<ThemeType>(LIGHT_THEME);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
