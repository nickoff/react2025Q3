'use client';

import { useLocalStorage } from '@/app/lib/hooks/useLocalStorageSearch';
import { Button } from '@/app/ui/components/button';
import { inter } from '@/app/ui/fonts';
import { useTranslations } from 'next-intl';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Search() {
  const { searchTerm, setSearchTerm } = useLocalStorage();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const t = useTranslations('Header');

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
    <form className="flex justify-center items-center gap-2.5" onSubmit={handleSearch}>
      <input
        className={`${inter.className} text-gray-600 bg-amber-50 dark:text-amber-50 dark:bg-gray-600 text-2xl px-2 min-w-96 py-1 rounded-md border border-black outline-none`}
        type="text"
        name="search"
        id="search"
        defaultValue={searchTerm}
      />
      <Button>{t('button')}</Button>
    </form>
  );
}
