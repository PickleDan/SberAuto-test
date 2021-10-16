import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export type Movie = {
  id: string;
  title: string;
  image: string;
  movie_banner: string;
  description: string;
  release_date: number;
  rt_score: number;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ghibliapi.herokuapp.com',
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchMovies: builder.query<Movie[], number | void>({
        query(limit = 10) {
          return `/films?limit=${limit}`;
        },
      }),
    };
  },
});

export const {useFetchMoviesQuery} = apiSlice;
