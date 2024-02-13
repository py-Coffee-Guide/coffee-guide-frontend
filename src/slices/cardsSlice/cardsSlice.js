import { createSlice } from '@reduxjs/toolkit';

import { cardsArray } from '../../utils/cardsArray';

const initialState = cardsArray;

const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		reset: () => initialState,
		clear: () => [],
		setCards: (state, action) => [...state, ...action.payload],
	},
});

export const { setCards, reset, clear } = cardsSlice.actions;
export default cardsSlice.reducer;
