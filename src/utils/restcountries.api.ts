import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Country } from '../types/api.type';

const API_URL = 'https://restcountries.com/v3.1/all';

export const restcountries = createApi({
  reducerPath: 'restcountries',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getCountryNames: build.query<string[], null>({
      query: () => '?fields=name',
      transformResponse: (response: Country[]) => response.map((country) => country.name?.common).filter(Boolean),
    }),
  }),
});

export const { useGetCountryNamesQuery } = restcountries;
