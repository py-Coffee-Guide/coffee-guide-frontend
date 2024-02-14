import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/v1/' }),
	endpoints: build => ({
		getCards: build.query({
			query: (page = 1) => `cafes/?page=${page}`,
			// serializeQueryArgs: ({ endpointName }) => endpointName,
			// merge: (currentCache, newItems) => currentCache.push([...newItems]),
			// forceRefetch({ currentArg, previousArg }) {
			// 	return currentArg !== previousArg;
			// },
		}),
	}),
});

export const { useGetCardsQuery } = api;
