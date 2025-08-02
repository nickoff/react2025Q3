import { useEffect } from 'react';
import { ResultList } from '../../components/ResultList/ResultList';
import { Outlet, useSearchParams } from 'react-router';
import { Pagination } from '../../components/Pagination/Pagination';
import { useAppSelector } from '../../app/hooks';
import { useGetSearchAnimeQuery } from '../../utils/animeApi';
import { Snackbar } from '../../components/Snackbar/Snackbar';

export const Main = () => {
  const searchTerm = useAppSelector((state) => state.search.value);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const { data, error, isLoading } = useGetSearchAnimeQuery({ searchTerm, page });

  useEffect(() => {
    if (!searchParams.get('page')) {
      setSearchParams({ page: '1' });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    if (page !== '1') {
      setSearchParams({ page: '1' });
    }
  }, [searchTerm]);

  const handleNumberPage = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <>
      <div className="flex flex-col flex-1 justify-between min-w-[35%] max-w-[35%] min-h-[85vh]">
        <ResultList data={data?.data} error={error} loading={isLoading} />
        {data?.pagination && <Pagination pagination={data.pagination} handleNumberPage={handleNumberPage} />}
      </div>
      <Outlet />
      <Snackbar />
    </>
  );
};
