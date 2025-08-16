'use client';

import { redirect, usePathname } from '@/i18n/navigation';
import { useSearchParams } from 'next/navigation';
import { Button } from './button';
import { useContext } from 'react';
import { ThemeContext } from '@/app/lib/theme-provider';

export const LocaleToggle = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { themeDark } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-center border-1 p-1 gap-1 border-gray-500 rounded-full">
      <Button
        className={`${locale === 'en' ? `${themeDark ? 'bg-gray-300/20' : 'bg-orange-400/40'}` : ''} flex items-center justify-center cursor-pointer w-9 h-9 p-0.5 rounded-full border-2 border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-orange-400/50`}
        onClick={() => redirect({ href: `${pathname}?page=${searchParams.get('page')}`, locale: 'en' })}>
        EN
      </Button>
      <Button
        className={`${locale === 'jp' ? `${themeDark ? 'bg-gray-300/20' : 'bg-orange-400/40'}` : ''} flex items-center justify-center cursor-pointer w-9 h-9 p-0.5 rounded-full border-2 border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-orange-400/50`}
        onClick={() => redirect({ href: `${pathname}?page=${searchParams.get('page')}`, locale: 'jp' })}>
        JP
      </Button>
    </div>
  );
};
