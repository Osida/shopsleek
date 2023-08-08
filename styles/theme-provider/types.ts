import { ReactNode } from 'react';

export type ThemeType = 'light' | 'dark';

export const LIGHT_THEME: ThemeType = 'light';
export const DARK_THEME: ThemeType = 'dark';

export type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

export type ThemeProviderType = {
  children: ReactNode | ReactNode[];
};
