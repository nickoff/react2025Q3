import { useState } from 'react';
import type { Filter } from '../types/context.type';
import { FilterContext } from '../context/filterContext';

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<Filter>({
    searchCountry: '',
    year: null,
    sortCountryBy: 'nameAsc',
  });

  return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>;
};
