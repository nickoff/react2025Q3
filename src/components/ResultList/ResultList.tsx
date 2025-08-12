import { Card } from '../Card/Card';
import type { ICard } from '../../types/card';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Loading } from '../Loading/Loading';

interface ResultStateProps {
  data: ICard[] | undefined;
  error: FetchBaseQueryError | SerializedError | undefined;
  loading: boolean;
}

const CONTENT = {
  noResults: 'Ups... No results found 😟',
  error: '❌ Loading error: ',
};

export const ResultList = ({ data, error, loading }: ResultStateProps) => {
  const resultList = data ? data : [];

  return (
    <>
      {loading && <Loading />}
      {!loading && resultList.length > 0 && (
        <div className="w-full flex flex-col gap-5">
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
          {CONTENT.error} {'status' in error ? error.status : 'Error not status'}
        </div>
      )}
    </>
  );
};
