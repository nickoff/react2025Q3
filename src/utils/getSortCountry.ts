import type { SortCountryBy } from '../types/context.type';
import type { Country } from '../types/data.type';

const compareByPopulationAsc = (year: number) => {
  return (a: Country, b: Country): number => {
    const aData = a.data.find((d) => d.year === year);
    const bData = b.data.find((d) => d.year === year);

    const aRaw = aData?.population;
    const bRaw = bData?.population;

    const aPop = typeof aRaw === 'string' ? parseFloat(aRaw) : aRaw;
    const bPop = typeof bRaw === 'string' ? parseFloat(bRaw) : bRaw;

    const aValid = !isNaN(aPop as number) && aPop !== null && aPop !== undefined;
    const bValid = !isNaN(bPop as number) && bPop !== null && bPop !== undefined;

    if (!aValid && !bValid) return 0;
    if (!aValid) return 1;
    if (!bValid) return -1;

    return (aPop as number) - (bPop as number);
  };
};

const comparePopulationDesc = (year: number) => {
  return (a: Country, b: Country): number => {
    const aData = a.data.find((d) => d.year === year);
    const bData = b.data.find((d) => d.year === year);

    const aRaw = aData?.population;
    const bRaw = bData?.population;

    const aPop = typeof aRaw === 'string' ? parseFloat(aRaw) : aRaw;
    const bPop = typeof bRaw === 'string' ? parseFloat(bRaw) : bRaw;

    const aValid = !isNaN(aPop as number) && aPop !== null && aPop !== undefined;
    const bValid = !isNaN(bPop as number) && bPop !== null && bPop !== undefined;

    if (!aValid && !bValid) return 0;
    if (!aValid) return 1;
    if (!bValid) return -1;

    return (bPop as number) - (aPop as number);
  };
};

export const getSortCountry = (sortType: SortCountryBy, data: Country[], year: number | null) => {
  const sortedData = [...data];
  const allYears = data.flatMap((country) => country.data.map((d) => d.year));
  const latestYear = Math.max(...allYears);
  const currentYear = year ? year : latestYear;

  switch (sortType) {
    case 'nameDesc':
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'populationAsc':
      sortedData.sort(compareByPopulationAsc(currentYear));
      break;
    case 'populationDesc':
      sortedData.sort(comparePopulationDesc(currentYear));
      break;
    default:
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  return sortedData;
};
