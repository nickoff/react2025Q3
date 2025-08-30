import { useState } from 'react';
import type { Country } from '../../types/data.type';
import { useFilter } from '../../hooks/useFilter';

export const FilterControls = ({ data }: { data: Country[] }) => {
  const [year, setYear] = useState('');
  const [country, setCountry] = useState('');
  const { filter, setFilter } = useFilter();

  const yearsSet = new Set<number>();
  data.forEach((country) => country.data.forEach((data) => yearsSet.add(data.year)));
  const years = Array.from(yearsSet);

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedYear = e.target.value;
    setYear(selectedYear);
    setFilter({ ...filter, year: Number(selectedYear) });
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setFilter({ ...filter, searchCountry: selectedCountry });
  };

  return (
    <div className="flex w-full uppercase gap-4 items-center">
      <h4 className="text-base font-bold text-gray-400">Filters:</h4>
      <input
        className="text-base p-1 bg-gray-500 outline-0 placeholder:uppercase"
        placeholder="Search country..."
        type="text"
        value={country}
        id="year"
        onChange={handleCountryChange}
      />
      <input
        className="text-base p-1 bg-gray-500 outline-0 placeholder:uppercase"
        placeholder="Select year..."
        type="text"
        list="years-list"
        value={year}
        id="year"
        onChange={handleYearChange}
      />
      <datalist id="years-list">
        {years && years.map((year, index) => <option key={index} value={year.toString()}></option>)}
      </datalist>
    </div>
  );
};
