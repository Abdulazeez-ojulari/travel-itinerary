/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FORM_METHODS } from "../../../utils/helpers";
import { State } from "../../../model/application/state";

export const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    headers.set('X-RapidAPI-Key', process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string);
    headers.set('X-RapidAPI-Host', 'booking-com15.p.rapidapi.com');
    return headers;
  },
});

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: baseQuery,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  tagTypes: ["GetData"],
  endpoints: (builder) => ({
    getData: builder.query({
      query: (data) => {
        return {
          url: data.getUrl,
          params: data.params
        };
      },
      providesTags: ["GetData"],
    }),
    postData: builder.mutation({
      query: (data: State.App | any) => {
        return {
          url: data.postUrl,
          method: FORM_METHODS.POST,
          body: data.request,
        };
      },
      invalidatesTags: (_result, _error, arg) => [
        { type: "GetData", id: arg._id },
      ],
    })
  }),
});

export const {
  useGetDataQuery,
  useLazyGetDataQuery,
  usePostDataMutation,
} = bookingApi;
