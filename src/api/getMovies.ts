import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export type Movie = {
  id: string;
  title: string;
  image: string;
  movie_banner: string;
  description: string;
  release_date: number;
  score: number;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ghibliapi.herokuapp.com',
    prepareHeaders(headers) {
      // headers.set('x-api-key', KEY);
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