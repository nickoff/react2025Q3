import { Card } from '@/app/ui/components/card';
import type { CardModel } from '@/app/lib/types/card';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Loading } from './loading/loading';
import { useTranslations } from 'next-intl';

interface ResultStateProps {
  data: CardModel[] | undefined;
  error: FetchBaseQueryError | SerializedError | undefined;
  loading: boolean;
}

export const ResultList = ({ data, error, loading }: ResultStateProps) => {
  const resultList = data ? data : [];
  const t = useTranslations('ResultList');

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
        <div className="flex justify-center items-center text-3xl mt-48 w-full">{t('no_results')}</div>
      )}
      {error && (
        <div className="flex justify-center items-center text-3xl mt-48 w-full text-red-500">
          {t('error')} {'status' in error ? error.status : 'Error not status'}
        </div>
      )}
    </>
  );
};
