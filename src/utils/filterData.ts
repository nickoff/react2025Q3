import type { Country } from '../types/data.type';

export const filterDataByYear = (year: number | null, data: Country[]) => {
  if (!year) return data;

  return data
    .map((country) => {
      if (!country.data) return null;
      const match = country.data.find((data) => data.year === year);
      return match ? { ...country, data: [match] } : null;
    })
    .filter(Boolean) as Country[];
};

export const filterDataByCountry = (term: string, data: Country[]) => {
  if (!term) return data;
  return data.filter((country) => country.name.toLowerCase().startsWith(term.toLowerCase()));
};
