import { Card } from '../Card/Card';
import { useApiSearch } from '../../hooks/useApiSearch';
import type { ICard } from '../../types/card';

interface ResultStateProps {
  searchTerm: string;
  page: string;
}

const CONTENT = {
  loading: 'Loading...',
  noResults: 'Ups... No results found 😟',
  error: '❌ Ошибка загрузки: '
};

export const ResultList = ({ searchTerm, page }: ResultStateProps) => {
  const { data, error, loading } = useApiSearch(searchTerm ?? '', page);
  const resultList = data ? (data as ICard[]) : [];

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center text-3xl mt-48 w-full animate-pulse">{CONTENT.loading}</div>
      )}
      {!loading && resultList.length > 0 && (
        <div className="w-full flex flex-col gap-5 p-5">
          {resultList.map((result, index) => (
            <Card key={index} card={result} />
          ))}
        </div>
      )}
      {!loading && !error && resultList.length === 0 && (
        <div className="flex justify-center items-center text-3xl mt-48 w-full">{CONTENT.noResults}</div>
      )}
      {error && (
        <div className="flex justify-center items-center text-3xl mt-48 w-full text-red-500">
          {CONTENT.error} {error.message}
        </div>
      )}
    </>
  );
};
