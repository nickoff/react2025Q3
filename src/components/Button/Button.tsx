import { useContext, type ReactNode } from 'react';
import { ThemeContext } from '../../app/Providers/ThemeContextProvider/themeContext';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  const { themeDark } = useContext(ThemeContext);

  return (
    <button
      className={`${themeDark ? 'bg-gray-600' : 'bg-gray-500'} text-2xl text-amber-50 px-4 py-1 rounded-md border-2 border-gray-400 outline-none cursor-pointer transition duration-300 ease-in-out hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-600`}
      {...rest}>
      {children}
    </button>
  );
};
