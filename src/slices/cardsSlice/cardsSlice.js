import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
	name: 'cards',
	initialState: {
		cards: [],
		favourites: JSON.parse(localStorage.getItem('favourites')) || [],
		filtered: [],
		filters: [],
	},
	reducers: {
		setCards: (state, action) => {
			state.cards = [...state.cards, ...action.payload];
		},
		setFiltered: (state, action) => {
			state.filtered = [...state.filtered, ...action.payload];
		},
		setFilter: (state, action) => {
			if (!state.filters.some(i => i === action.payload)) {
				state.filters.push(action.payload);
			} else {
				state.filters = state.filters.filter(i => i !== action.payload);
			}
		},
		addToFavourite: (state, action) => {
			if (!state.favourites.some(i => i.id === action.payload.id)) {
				state.favourites.push(action.payload);
				localStorage.setItem('favourites', JSON.stringify(state.favourites));
			} else {
				state.favourites = state.favourites.filter(i => i.id !== action.payload.id);
				localStorage.setItem('favourites', JSON.stringify(state.favourites));
			}
		},
		clearFiltered: state => {
			state.filtered = [];
		},
	},
});

export const {
	setCards,
	setFavourites,
	setFiltered,
	clearFiltered,
	addToFavourite,
	setFilter,
	clear,
	reset,
} = cardsSlice.actions;
export default cardsSlice.reducer;
