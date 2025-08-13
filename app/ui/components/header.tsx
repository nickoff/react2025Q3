'use client';

import { useLocalStorage } from '@/app/lib/hooks/useLocalStorageSearch';
import { Button } from '@/app/ui/components/button';
import { Navigation } from '@/app/ui/components/navigation';
import { inter } from '../fonts';
import { useSearchParams, useRouter } from 'next/navigation';

const CONTENT = {
  title: 'Anime searcher',
  search: 'Search',
};

export const Header = () => {
  const { searchTerm, setSearchTerm } = useLocalStorage();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputElement = event.target.elements.namedItem('search') as HTMLInputElement;
    const term = inputElement.value.trim();
    setSearchTerm(term);
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.set('query', '');
    }

    replace(`/?${params.toString()}`);
  };

  return (
    <header
      className={`flex justify-between items-center gap-5 px-5 py-2.5 border-b-2 border-amber-100 dark:border-gray-600'`}>
      <form className="flex justify-center items-center gap-2.5" onSubmit={handleSearch}>
        <label htmlFor="search">
          <h3 className="text-3xl font-bold text-orange-400 [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
            {CONTENT.title}
          </h3>
        </label>
        <input
          className={`${inter.className} text-gray-600 bg-amber-50 dark:text-amber-50 dark:bg-gray-600 text-2xl px-2 min-w-96 py-1 rounded-md border border-black outline-none`}
          type="text"
          name="search"
          id="search"
          defaultValue={searchTerm}
        />
        <Button>{CONTENT.search}</Button>
      </form>
      <Navigation />
    </header>
  );
};
