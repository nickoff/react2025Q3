export type SortCountryBy = 'nameAsc' | 'nameDesc' | 'populationAsc' | 'populationDesc';
export type VisibleField = {
  year: boolean;
  population: boolean;
  co2: boolean;
  co2_per_capita: boolean;
  methane: boolean;
  oil_co2: boolean;
  temperature_change_from_co2: boolean;
};

export type Filter = {
  searchCountry: string;
  year: number | null;
  sortCountryBy: SortCountryBy;
  visibleFields: VisibleField;
};

export type FilterContextType = {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};
