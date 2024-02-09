import { createSlice } from '@reduxjs/toolkit';

import { cardsArray } from '../../utils/cardsArray';

const initialState = [];

const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		reset: () => initialState,
		setCards: (state, action) => [...state, ...action.payload],
	},
});

export const { setCards, reset } = cardsSlice.actions;
export default cardsSlice.reducer;
