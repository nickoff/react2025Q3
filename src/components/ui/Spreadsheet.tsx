import { useEffect, useState } from 'react';
import { getData } from '../../utils/getData';
import type { Country } from '../../types/data.type';
import { MainTable } from './MainTable';

export const Spreadsheet = () => {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData().then(({ data }) => {
      setData(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col w-full">
      <MainTable data={data} isLoading={loading} />
    </div>
  );
};
