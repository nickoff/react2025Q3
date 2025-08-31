import { useState } from 'react';
import type { Filter } from '../types/context.type';
import { FilterContext } from '../context/filterContext';

const initialVisibleFields = {
  year: true,
  population: true,
  co2: true,
  co2_per_capita: true,
  methane: false,
  oil_co2: false,
  temperature_change_from_co2: false,
};

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<Filter>({
    searchCountry: '',
    year: null,
    sortCountryBy: 'nameAsc',
    visibleFields: initialVisibleFields,
  });

  return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>;
};
