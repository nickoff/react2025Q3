'use client';

import { ReactNode, useEffect } from 'react';
import { Button, Pagination, ResultList, Snackbar } from '@/app/ui/components';
import { useGetSearchAnimeQuery } from '@/app/lib/utils/animeApi';
import { useSearchParams } from 'next/navigation';
import { useQueryUpdater } from '@/app/lib/hooks/useQueryUpdater';
import { useTranslations } from 'next-intl';

export default function HomeWrapper({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('query') ?? '';
  const page = searchParams.get('page') ?? '1';
  const { data, error, isFetching, refetch } = useGetSearchAnimeQuery({ searchTerm, page });
  const { updateParam } = useQueryUpdater();
  const t = useTranslations('ResultList');

  useEffect(() => {
    if (!searchParams.get('page')) {
      updateParam('page', '1');
    }
  }, [searchParams, updateParam]);

  const handleNumberPage = (page: number) => {
    updateParam('page', page.toString());
  };

  const handleRefresh = () => {
    refetch();
  };

  return (
    <>
      <div className="flex flex-col flex-1 gap-4 justify-between min-w-[35%] max-w-[35%] min-h-[85vh]">
        <Button disabled={isFetching} onClick={handleRefresh}>
          {isFetching ? t('refresh_button_fetching') : t('refresh_button')}
        </Button>
        <ResultList data={data?.data} error={error} loading={isFetching} />
        {data?.pagination && <Pagination pagination={data.pagination} handleNumberPage={handleNumberPage} />}
      </div>
      {children}
      <Snackbar />
    </>
  );
}
