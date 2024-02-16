import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState: {
		favourites: JSON.parse(localStorage.getItem('favourite')) || [],
	},

	reducers: {
		addToFavourite: (state, action) => {
			state.favourites.push({ ...action.payload, isLiked: true });
		},
	},
});

export const { addToFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
