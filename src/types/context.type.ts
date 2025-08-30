export type Filter = {
  searchCountry: string;
  year: string | null;
  sortCountryByName: 'asc' | 'desc' | null;
  sortCountryByPopulation: 'asc' | 'desc' | null;
};

export type FilterContextType = {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};
