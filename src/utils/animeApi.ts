import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ICard } from '../types/card';
import type { IPagination } from '../types/pagination';

type SearchAnimeResponse = {
  pagination: IPagination;
  data: ICard[];
};

const API_URL = 'https://api.jikan.moe/v4/anime';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getSearchAnime: builder.query<SearchAnimeResponse, { searchTerm: string; page: string }>({
      query: ({ searchTerm = '', page = 1 }) => `?page=${page}&limit=10&q=${searchTerm}`,
    }),
  }),
});

export const { useGetSearchAnimeQuery } = animeApi;
