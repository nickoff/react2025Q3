import { Card } from '../Card/Card';
import { useApiSearch } from '../../hooks/useApiSearch';
import type { ICard } from '../../types/card';

interface ResultStateProps {
  searchTerm: string;
}

const CONTENT = {
  loading: 'Loading...',
  noResults: 'Ups... No results found 😟'
};

export const ResultList = ({ searchTerm }: ResultStateProps) => {
  const { data, error, loading } = useApiSearch(searchTerm ?? '');
  const resultList = data ? (data as ICard[]) : [];

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center text-3xl mt-48 w-full animate-pulse">{CONTENT.loading}</div>
      )}
      {!loading && resultList.length > 0 && (
        <div className="w-full grid grid-cols-3 gap-5 p-5">
          {resultList.map((result, index) => (
            <Card key={index} card={result} />
          ))}
        </div>
      )}
      {!loading && resultList.length === 0 && (
        <div className="flex justify-center items-center text-3xl mt-48 w-full">{CONTENT.noResults}</div>
      )}
      {error && (
        <div className="flex justify-center items-center text-3xl mt-48 w-full text-red-500">
          ❌ Ошибка загрузки: {error.message}
        </div>
      )}
    </>
  );
};
