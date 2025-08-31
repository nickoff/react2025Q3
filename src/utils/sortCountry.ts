import type { SortCountryBy } from '../types/context.type';
import type { Country } from '../types/data.type';

export const sortCountry = (sortType: SortCountryBy, data: Country[], setSortedData: (data: Country[]) => void) => {
  const sortedData = [...data];

  switch (sortType) {
    case 'nameDesc':
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }
  setSortedData(sortedData);
};
