export type DataModel = Country[];

export interface Country {
  name: string;
  iso_code?: string;
  data: CountryData[];
}

export interface CountryData {
  year: number;
  population?: number | string;
  cement_co2?: number | string;
  cement_co2_per_capita?: number | string;
  cumulative_cement_co2?: number | string;
}

export interface RawCountry {
  iso_code?: string;
  data: Partial<CountryData>[];
}
