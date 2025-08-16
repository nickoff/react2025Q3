'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const t = useTranslations('Header');

  const navLinks = [
    { title: t('nav_link_home'), url: '/' },
    { title: t('nav_link_about'), url: '/about' },
  ];

  const isActiveLocalizedPath = (url: string) => {
    return pathname === '/' + pathname.split('/')[1] + (url !== '/' ? url : '');
  };

  return (
    <nav>
      <ul className="flex gap-7">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              className={`${isActiveLocalizedPath(link.url) ? 'text-orange-400' : 'text-gray-400'} text-2xl hover:text-orange-400 cursor-pointer transition duration-300 ease-in-out`}
              href={link.url}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
