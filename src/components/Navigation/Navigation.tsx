import { useContext } from 'react';
import { NavLink } from 'react-router';
import { ThemeContext } from '../../app/Providers/ThemeContextProvider/themeContext';

const navLinks = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' }
];

export const Navigation = () => {
  const { themeDark } = useContext(ThemeContext);

  return (
    <nav>
      <ul className="flex gap-7">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-2xl ${themeDark ? 'text-orange-300' : 'text-orange-400  font-bold [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]'} cursor-auto`
                  : `text-2xl hover:text-orange-400 ${!themeDark && 'text-gray-500 font-bold'} cursor-pointer transition duration-300 ease-in-out`
              }
              to={link.url}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
