import { useContext, useEffect } from 'react';
import { ResultList } from '../../components/ResultList/ResultList';
import { SearchContext } from '../Layout/Layout';
import { useSearchParams } from 'react-router';

export const Main = () => {
  const searchTerm = useContext(SearchContext);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('page')) {
      setSearchParams({ page: '1' });
    }
  });

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <ResultList page={searchParams.get('page') ?? '1'} searchTerm={searchTerm} />
    </div>
  );
};
