import { useContext } from 'react';
import { ThemeContext } from '../../app/Providers/ThemeContextProvider/themeContext';
import { ThemeIcon } from './ThemeIcon/ThemeIcon';

export const ThemeToggle = () => {
  const { themeDark, changeTheme } = useContext(ThemeContext);

  return (
    <button
      className="cursor-pointer w-9 h-9 p-0.5 rounded-full border-2 border-gray-500 transition duration-300 ease-in-out hover:border-2 hover:border-orange-400"
      onClick={changeTheme}>
      {themeDark ? <ThemeIcon variant="dark" /> : <ThemeIcon variant="light" />}
    </button>
  );
};
