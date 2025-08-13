'use client';

import { ReactNode, useEffect } from 'react';
import { Button, Pagination, ResultList, Snackbar } from '../ui/components';
import { useGetSearchAnimeQuery } from '../lib/utils/animeApi';
import { useRouter, useSearchParams } from 'next/navigation';

export default function MainSectionLayout({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('query') ?? '';
  const page = searchParams.get('page') ?? '1';
  const { data, error, isFetching, refetch } = useGetSearchAnimeQuery({ searchTerm, page });
  const { replace } = useRouter();

  useEffect(() => {
    if (!searchParams.get('page')) {
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      replace(`/?${params.toString()}`);
    }
  }, [replace, searchParams]);

  const handleNumberPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    replace(`/?${params.toString()}`);
  };

  const handleRefresh = () => {
    refetch();
  };

  return (
    <>
      <div className="flex flex-col flex-1 gap-4 justify-between min-w-[35%] max-w-[35%] min-h-[85vh]">
        <Button disabled={isFetching} onClick={handleRefresh}>
          {isFetching ? 'Refreshing ...' : 'Refresh'}
        </Button>
        <ResultList data={data?.data} error={error} loading={isFetching} />
        {data?.pagination && <Pagination pagination={data.pagination} handleNumberPage={handleNumberPage} />}
      </div>
      {children}
      <Snackbar />
    </>
  );
}
