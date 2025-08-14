import { Suspense } from 'react';
import Navigation from './navigation';
import Search from './search';
import { Loading } from './loading/loading';

const CONTENT = {
  title: 'Anime searcher',
};

export const Header = () => {
  return (
    <header
      className={`flex justify-between items-center gap-5 px-5 py-2.5 border-b-2 border-amber-100 dark:border-gray-600'`}>
      <h3 className="text-3xl font-bold text-orange-400 [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">{CONTENT.title}</h3>
      <Suspense fallback={<Loading />}>
        <Search />
        <Navigation />
      </Suspense>
    </header>
  );
};
