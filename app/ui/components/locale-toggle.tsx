'use client';

import { usePathname } from '@/i18n/navigation';
import Link from 'next/link';

export const LocaleToggle = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="flex items-center justify-center border-1 p-1 gap-1 border-gray-500 rounded-full">
      <Link
        className={`${locale === 'en' ? 'bg-gray-300/20' : ''} flex items-center justify-center cursor-pointer w-9 h-9 p-0.5 rounded-full border-2 border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-orange-400/50`}
        href={'/en'}>
        EN
      </Link>
      <Link
        className={`${locale === 'jp' ? 'bg-gray-300/20' : ''} flex items-center justify-center cursor-pointer w-9 h-9 p-0.5 rounded-full border-2 border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-orange-400/50`}
        href={'/jp'}>
        JP
      </Link>
    </div>
  );
};
