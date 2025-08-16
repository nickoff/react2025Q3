'use client';

import { useState } from 'react';
import { ThemeIcon } from './theme-icon/theme-icon';

export const ThemeToggle = () => {
  const [themeDark, setThemeDark] = useState(false);

  const handleChangeTheme = () => {
    setThemeDark(!themeDark);
    localStorage.setItem('themeDark', themeDark.toString());
  };

  return (
    <div className="flex items-center justify-center border-1 p-1 gap-1 border-gray-500 rounded-full">
      <button
        className={`${themeDark ? 'bg-gray-300/20' : ''} cursor-pointer w-9 h-9 p-0.5 rounded-full border-2 border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-orange-400/50`}
        onClick={handleChangeTheme}>
        <ThemeIcon variant="dark" />
      </button>
      <button
        className={`${!themeDark ? 'bg-gray-300/20' : ''} cursor-pointer w-9 h-9 p-0.5 rounded-full border-2 border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-orange-400/50`}
        onClick={handleChangeTheme}>
        <ThemeIcon variant="light" />
      </button>
    </div>
  );
};
