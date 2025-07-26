import { useContext, useEffect } from 'react';
import { ResultList } from '../../components/ResultList/ResultList';
import { SearchContext } from '../Layout/Layout';
import { useSearchParams } from 'react-router';
import { useApiSearch } from '../../hooks/useApiSearch';
import { Pagination } from '../../components/Pagination/Pagination';

export const Main = () => {
  const searchTerm = useContext(SearchContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const { data, error, loading, pagination } = useApiSearch(searchTerm ?? '', page);

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
    <div className="flex flex-col justify-between max-w-128 min-h-[85vh]">
      <ResultList data={data} error={error} loading={loading} />
      {pagination && <Pagination pagination={pagination} handleNumberPage={handleNumberPage} />}
    </div>
  );
};
