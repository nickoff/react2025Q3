export type DataModel = Country[];

export interface Country {
  name: string;
  iso_code?: string;
  data: CountryData[];
}

export interface CountryData {
  year: number;
  population?: number | string;
  co2?: number | string;
  co2_per_capita?: number | string;
  methane?: number | string;
  oil_co2?: number | string;
  temperature_change_from_co2?: number | string;
}

export interface RawCountry {
  iso_code?: string;
  data: Partial<CountryData>[];
}
