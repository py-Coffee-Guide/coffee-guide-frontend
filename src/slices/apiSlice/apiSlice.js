import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://127.0.0.1:8000/api/v1/',
		prepareHeaders: headers => {
			headers.set('Content-type', 'application/json');
			return headers;
		},
	}),
	tagTypes: ['Cards'],
	endpoints: build => ({
		getCards: build.query({
			query: args => {
				const { page, limit, offset, availables } = args;
				return {
					url: 'cafes',
					params: {
						limit,
						offset,
						page,
						availables,
					},
				};
			},
			providesTags: ['Cards'],
			// serializeQueryArgs: ({ endpointName }) => endpointName,
			// merge: (currentCache, newItems) => currentCache.push([...newItems]),
			// forceRefetch({ currentArg, previousArg }) {
			// 	return currentArg !== previousArg;
			// },
		}),
		getCardById: build.query({
			query: id => `cafes/${id}`,
		}),

		getUsers: build.query({
			query: () => 'users',
		}),

		addUser: build.mutation({
			query: body => ({
				url: 'users',
				method: 'POST',
				body,
			}),
		}),

		login: build.mutation({
			query: body => ({
				url: 'auth/token/login/',
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const {
	useGetCardsQuery,
	useGetCardByIdQuery,
	useLazyGetCardsQuery,
	useGetUsersQuery,
	useAddUserMutation,
	useLoginMutation,
} = api;
