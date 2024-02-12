import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		setCard: (state, action) => [...state, ...action.payload],
	},
});

export const { setCard } = cardSlice.actions;
export default cardSlice.reducer;
