import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app-testing.mergdata.net/assessment',
  }),
  endpoints: builder => ({
    getDataOne: builder.query({
      query: () => '/testjson1.json',
    }),
    getDataTwo: builder.query({
      query: () => '/testjson2.json',
    }),
  }),
});

export const {useGetDataOneQuery, useGetDataTwoQuery} = api;
