import { type ReactNode } from 'react';
import { ThemeContext } from './themeContext';
import { useLocalStorageTheme } from '../../../hooks/useLocalStorageTheme';

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const { themeDark, changeTheme } = useLocalStorageTheme();

  const { children } = props;
  return <ThemeContext value={{ themeDark, changeTheme }}>{children}</ThemeContext>;
};
