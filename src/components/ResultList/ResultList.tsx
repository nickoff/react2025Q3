import { Card } from '../Card/Card';
import type { ICard } from '../../types/card';

interface ResultStateProps {
  data: ICard[] | null;
  error: Error | null;
  loading: boolean;
}

const CONTENT = {
  loading: 'Loading...',
  noResults: 'Ups... No results found 😟',
  error: '❌ Ошибка загрузки: '
};

export const ResultList = ({ data, error, loading }: ResultStateProps) => {
  const resultList = data ? data : [];

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
