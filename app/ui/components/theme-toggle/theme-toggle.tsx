'use client';

import { useState } from 'react';
import { ThemeIcon } from './theme-icon/theme-icon';

export const ThemeToggle = () => {
  const [themeDark, setThemeDark] = useState(false);
  const handleChangeTheme = () => {
    setThemeDark(!themeDark);
  };

  return (
    <button
      className="cursor-pointer w-9 h-9 p-0.5 rounded-full border-2 border-gray-500 transition duration-300 ease-in-out hover:border-2 hover:border-orange-400"
      onClick={handleChangeTheme}>
      {themeDark ? <ThemeIcon variant="dark" /> : <ThemeIcon variant="light" />}
    </button>
  );
};
