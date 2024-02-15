import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const offsetSlice = createSlice({
	name: 'offset',
	initialState: 0,
	reducers: {
		increment: state => state + 6,
	},
});

export const { increment } = offsetSlice.actions;
export default offsetSlice.reducer;
