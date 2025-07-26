import { NavLink } from 'react-router';

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-7">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-2xl text-orange-300 cursor-auto'
                : 'text-2xl hover:text-orange-400 cursor-pointer transition duration-300 ease-in-out'
            }
            to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-2xl text-orange-300 cursor-auto'
                : 'text-2xl hover:text-orange-400 cursor-pointer transition duration-300 ease-in-out'
            }
            to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
