import { useEffect, useState } from 'react';
import { getData } from '../../utils/getData';
import type { Country } from '../../types/data.type';
import { MainTable } from './MainTable';
import { useFilter } from '../../hooks/useFilter';
import { FilterControls } from './FilterControls';
import { sortCountry } from '../../utils/sortCountry';
import { filterDataByCountry, filterDataByYear } from '../../utils/filterData';

export const Spreadsheet = () => {
  const [rawData, setRawData] = useState<Country[]>([]);
  const [sortedData, setSortedData] = useState<Country[]>([]);
  const [filteredData, setFilteredData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const { filter } = useFilter();

  useEffect(() => {
    getData().then(({ data }) => {
      setRawData(data || []);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const filteredCountry = filterDataByCountry(filter.searchCountry, rawData);
    setFilteredData(filteredCountry);
    const result = filterDataByYear(filter.year, filteredCountry);
    setFilteredData(result);
  }, [filter.searchCountry, filter.year, rawData]);

  useEffect(() => {
    sortCountry(filter.sortCountryBy, filteredData, filter.year, setSortedData);
  }, [filter.sortCountryBy, filteredData, filter.year]);

  return (
    <div className="flex flex-col w-full gap-5">
      <FilterControls data={rawData} />
      <MainTable data={sortedData} isLoading={loading} />
    </div>
  );
};
