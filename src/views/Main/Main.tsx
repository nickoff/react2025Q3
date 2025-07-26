import { useContext, useEffect } from 'react';
import { ResultList } from '../../components/ResultList/ResultList';
import { SearchContext } from '../Layout/Layout';
import { useSearchParams } from 'react-router';
import { useApiSearch } from '../../hooks/useApiSearch';

export const Main = () => {
  const searchTerm = useContext(SearchContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, error, loading } = useApiSearch(searchTerm ?? '', searchParams.get('page') ?? '1');

  useEffect(() => {
    if (!searchParams.get('page')) {
      setSearchParams({ page: '1' });
    }
  });

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <ResultList data={data} error={error} loading={loading} />
    </div>
  );
};
