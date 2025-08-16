'use client';

import { type ReactNode } from 'react';
import { useLocalStorageTheme } from '@/app/lib/hooks/useLocalStorageTheme';

import { createContext } from 'react';

export type ThemeContextType = {
  themeDark: boolean;
  changeTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeDark: true,
  changeTheme: () => {},
});

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const { themeDark, changeTheme } = useLocalStorageTheme();

  const { children } = props;
  return <ThemeContext value={{ themeDark, changeTheme }}>{children}</ThemeContext>;
};
