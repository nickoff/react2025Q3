'use client';

import { useContext } from 'react';
import { ThemeIcon } from './theme-icon/theme-icon';
import { ThemeContext } from '@/app/lib/theme-provider';

export const ThemeToggle = () => {
  const { themeDark, changeTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    changeTheme();
    localStorage.setItem('themeDark', themeDark.toString());
  };

  return (
    <div className="flex items-center justify-center border-1 p-1 gap-1 border-gray-500 rounded-full">
      <button
        className={`${themeDark ? `${themeDark ? 'bg-gray-300/20' : 'bg-orange-400/40'}` : ''} cursor-pointer w-9 h-9 p-0.5 rounded-full border-2 border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-orange-400/50`}
        onClick={handleChangeTheme}>
        <ThemeIcon variant="dark" />
      </button>
      <button
        className={`${!themeDark ? `${themeDark ? 'bg-gray-300/20' : 'bg-orange-400/40'}` : ''} cursor-pointer w-9 h-9 p-0.5 rounded-full border-2 border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-orange-400/50`}
        onClick={handleChangeTheme}>
        <ThemeIcon variant="light" />
      </button>
    </div>
  );
};
