import { Suspense } from 'react';
import Navigation from './navigation';
import Search from './search';
import { Loading } from './loading/loading';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle/theme-toggle';

const CONTENT = {
  title: 'Anime searcher',
};

export const Header = () => {
  return (
    <header
      className={`flex justify-between items-center gap-5 px-5 py-2.5 border-b-2 border-amber-100 dark:border-gray-600'`}>
      <h3 className="text-4xl font-bold cursor-pointer text-orange-600 text-shadow-amber-950">
        <Link href={'/'}>{CONTENT.title}</Link>
      </h3>
      <Suspense fallback={<Loading />}>
        <Search />
        <Navigation />
        <ThemeToggle />
      </Suspense>
    </header>
  );
};
