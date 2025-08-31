import { useEffect, useMemo, useState } from 'react';
import { getData } from '../../utils/getData';
import type { Country } from '../../types/data.type';
import { MainTable } from './MainTable';
import { useFilter } from '../../hooks/useFilter';
import { FilterControls } from './FilterControls';
import { getSortCountry } from '../../utils/getSortCountry';
import { filterDataByCountry, filterDataByYear } from '../../utils/filterData';

export default function Spreadsheet() {
  const [rawData, setRawData] = useState<Country[]>([]);
  const [sortedData, setSortedData] = useState<Country[]>([]);
  const [filteredData, setFilteredData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const { filter } = useFilter();

  const filterByCountry = useMemo(() => {
    return filterDataByCountry(filter.searchCountry, rawData);
  }, [rawData, filter.searchCountry]);

  const filterByYear = useMemo(() => {
    return filterDataByYear(filter.year, filterByCountry);
  }, [filter.year, filterByCountry]);

  const sortCountry = useMemo(() => {
    return getSortCountry(filter.sortCountryBy, filteredData, filter.year);
  }, [filter.sortCountryBy, filteredData, filter.year]);

  useEffect(() => {
    getData().then(({ data }) => {
      setRawData(data || []);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setFilteredData(filterByCountry);
    setFilteredData(filterByYear);
  }, [filterByYear, filterByCountry]);

  useEffect(() => {
    setSortedData(sortCountry);
  }, [sortCountry]);

  return (
    <div className="flex flex-col w-full gap-5">
      <FilterControls data={rawData} />
      <MainTable data={sortedData} isLoading={loading} />
    </div>
  );
}
