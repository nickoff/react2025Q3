import { useEffect } from 'react';
import { ResultList } from '../../components/ResultList/ResultList';
import { Outlet, useSearchParams } from 'react-router';
import { Pagination } from '../../components/Pagination/Pagination';
import { useAppSelector } from '../../app/hooks';
import { useGetSearchAnimeQuery } from '../../utils/animeApi';
import { Snackbar } from '../../components/Snackbar/Snackbar';
import { Button } from '../../components/Button/Button';

export const Main = () => {
  const searchTerm = useAppSelector((state) => state.search.value);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const { data, error, isFetching, refetch } = useGetSearchAnimeQuery({ searchTerm, page });

  useEffect(() => {
    if (!searchParams.get('page')) {
      setSearchParams({ page: '1' });
    }
  }, [searchParams, setSearchParams]);

  const handleNumberPage = (page: number) => {
    setSearchParams({ page: page.toString() });
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
      <Outlet />
      <Snackbar />
    </>
  );
};
