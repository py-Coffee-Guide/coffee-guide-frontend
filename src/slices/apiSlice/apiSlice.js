import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/v1/' }), // в случае пожара заменить localhost:8000 или 127.0.0.1:8000 на coffee-gid.ddns.net
	tagTypes: ['Cards'],
	endpoints: build => ({
		getCards: build.query({
			query: args => {
				const { page, availables } = args;
				return {
					url: `cafes?${availables}`,
					params: {
						page,
					},
				};
			},
			providesTags: ['Cards'],
		}),

		getCardById: build.query({
			query: id => `cafes/${id}`,
		}),
	}),
});

export const { useGetCardsQuery, useGetCardByIdQuery, useLazyGetCardsQuery } = api;
