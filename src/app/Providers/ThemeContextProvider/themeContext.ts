import { createContext } from 'react';

export type ThemeContextType = {
  themeDark: boolean;
  changeTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeDark: true,
  changeTheme: () => {}
});
