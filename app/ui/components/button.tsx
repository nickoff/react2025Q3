import { ReactNode } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return (
    <button
      className={`text-2xl bg-gray-500 dark:bg-gray-600 text-amber-50 px-4 py-1 rounded-md border-2 border-gray-400 outline-none cursor-pointer transition duration-300 ease-in-out hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-600`}
      {...rest}>
      {children}
    </button>
  );
};
