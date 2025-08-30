import { useState } from 'react';
import type { Filter } from '../types/context.type';
import { FilterContext } from '../context/filterContext';

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<Filter>({
    searchCountry: '',
    year: null,
    sortCountryByName: 'asc',
    sortCountryByPopulation: null,
  });

  return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>;
};
