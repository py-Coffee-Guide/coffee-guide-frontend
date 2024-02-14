import { configureStore } from '@reduxjs/toolkit';
import user from '../slices/userSlice/userSlice';
import { api } from '../slices/apiSlice/apiSlice';
import themeReducer from '../slices/themeSlice/themeSlice';
import cardsReducer from '../slices/cardsSlice/cardsSlice';
import filteredCardsReducer from '../slices/filteredCards/filteredCards';

const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		user,
		theme: themeReducer,
		cards: cardsReducer,
		filteredCards: filteredCardsReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export default store;
