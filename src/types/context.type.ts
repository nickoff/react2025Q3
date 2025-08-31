export type SortCountryBy = 'nameAsc' | 'nameDesc' | 'populationAsc' | 'populationDesc';

export type Filter = {
  searchCountry: string;
  year: number | null;
  sortCountryBy: SortCountryBy;
};

export type FilterContextType = {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};
