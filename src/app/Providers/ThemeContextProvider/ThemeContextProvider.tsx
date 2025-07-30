import { useState, type ReactNode } from 'react';
import { ThemeContext } from './themeContext';

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const [themeDark, setThemeDark] = useState(true);
  const changeTheme = () => {
    setThemeDark(!themeDark);
  };

  const { children } = props;
  return <ThemeContext value={{ themeDark, changeTheme }}>{children}</ThemeContext>;
};
