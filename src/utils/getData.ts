import type { Country, CountryData, RawCountry } from '../types/data.type';

const URL = 'https://nyc3.digitaloceanspaces.com/owid-public/data/co2/owid-co2-data.json';

export const getData = async () => {
  try {
    const res = await fetch(URL);
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    const rawJson: Record<string, RawCountry> = await res.json();

    const countries: Country[] = Object.entries(rawJson).map(([countryName, countryInfo]) => {
      const iso_code = countryInfo.iso_code;

      const data: CountryData[] = countryInfo.data.map((entry) => ({
        year: entry.year ?? 0,
        population: entry.population ?? 'N/A',
        cement_co2: entry.cement_co2 ?? 'N/A',
        cement_co2_per_capita: entry.cement_co2_per_capita ?? 'N/A',
      }));

      return {
        name: countryName,
        iso_code,
        data,
      };
    });

    return { data: countries, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
