import { createSlice } from '@reduxjs/toolkit';
import { cardsArray } from '../../utils/cardsArray';

const cardsSlice = createSlice({
	name: 'cards',
	initialState: {
		cards: [],
		favourites: JSON.parse(localStorage.getItem('favourites')) || [],
		filterd: [],
	},
	reducers: {
		setCards: (state, action) => {
			state.cards = [...state.cards, ...action.payload];
		},
		setFiltered: (state, action) => {
			state.filtered = [...state.filterd, ...action.payload];
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
		reset: state => {
			state.cards = [];
		},
		clearFiltered: state => {
			state.filtered = [];
		},
	},
});

export const { setCards, setFavourites, setFiltered, clearFiltered, addToFavourite, clear, reset } =
	cardsSlice.actions;
export default cardsSlice.reducer;
