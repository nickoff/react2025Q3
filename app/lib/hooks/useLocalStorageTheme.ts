import { useState } from 'react';

export const useLocalStorageTheme = () => {
  const [themeDark, setThemeDark] = useState(false);
  const changeTheme = () => {
    if (themeDark) {
      localStorage.setItem('themeDark', 'false');
      setThemeDark(false);
    } else {
      localStorage.setItem('themeDark', 'true');
      setThemeDark(true);
    }
  };

  return {
    themeDark,
    changeTheme,
  };
};
