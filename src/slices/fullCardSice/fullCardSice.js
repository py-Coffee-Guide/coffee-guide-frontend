import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const fullCardSlice = createSlice({
	name: 'fullCard',
	initialState,
	reducers: {
		setFullCard: (state, action) => [...state, ...action.payload],
	},
});

export const { setFullCard } = fullCardSlice.actions;
export default fullCardSlice.reducer;
