'use client';

import { ThemeContext } from '@/app/lib/theme-provider';
import { useContext } from 'react';

export default function AppBackground({ children }: { children: React.ReactNode }) {
  const { themeDark } = useContext(ThemeContext);

  const bgClass = themeDark ? "bg-[url('/dark-theme.jpg')]" : "bg-[url('/light-theme.png')]";

  return (
    <div className={`h-[100vh] ${bgClass} [overflow:overlay] bg-center bg-no-repeat bg-fixed bg-[length:100%_auto]`}>
      {children}
    </div>
  );
}
