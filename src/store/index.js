import { configureStore } from '@reduxjs/toolkit';
import user from '../slices/userSlice/userSlice';

const store = configureStore({
	reducer: { user },
});

export default store;
