'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-7">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              className={`${pathname === link.url ? 'text-orange-400' : 'text-gray-400'} text-2xl hover:text-orange-400 cursor-pointer transition duration-300 ease-in-out`}
              href={link.url}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
