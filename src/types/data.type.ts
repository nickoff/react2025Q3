export type DataModel = Country[];

export interface Country {
  name: string;
  iso_code?: string;
  data: CountryData[];
}

export interface CountryData {
  year: number;
  population: number;
  cement_co2: number;
  cement_co2_per_capita: number;
  cumulative_cement_co2: number;
}

export interface RawCountry {
  iso_code?: string;
  data: Partial<CountryData>[];
}
