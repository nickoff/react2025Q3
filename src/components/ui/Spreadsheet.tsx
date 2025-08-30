import { useEffect, useState } from 'react';
import { getData } from '../../utils/getData';
import type { Country } from '../../types/data.type';
import { MainTable } from './MainTable';
import { useFilter } from '../../hooks/useFilter';
import { FilterControls } from './FilterControls';

export const Spreadsheet = () => {
  const [rawData, setRawData] = useState<Country[]>([]);
  const [filteredData, setFilteredData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const { filter } = useFilter();

  const filterDataByYear = (year: number | null, rawData: Country[]) => {
    if (!year) return rawData;

    return rawData
      .map((country) => {
        if (!country.data) return null;
        const match = country.data.find((data) => data.year === year);
        return match ? { ...country, data: [match] } : null;
      })
      .filter(Boolean) as Country[];
  };

  useEffect(() => {
    getData().then(({ data }) => {
      setRawData(data || []);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const result = filterDataByYear(filter.year, rawData);
    setFilteredData(result);
  }, [filter.year, rawData]);

  return (
    <div className="flex flex-col w-full gap-5">
      <FilterControls data={rawData} />
      <MainTable data={filteredData} isLoading={loading} />
    </div>
  );
};
