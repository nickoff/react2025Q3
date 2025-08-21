import type { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger';
  children: ReactNode;
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyle = 'p-3 min-w-50 uppercase font-bold border-2 rounded-md cursor-pointer disabled:cursor-not-allowed';

  const variantsStyle = {
    primary: 'bg-cyan-700 border-cyan-800 hover:bg-cyan-800 disabled:bg-cyan-700/30',
    danger: 'bg-red-700 border-red-800 hover:bg-red-800 disabled:bg-red-700/30',
  };

  return (
    <button className={`${baseStyle} ${variantsStyle[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
