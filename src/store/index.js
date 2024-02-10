import { configureStore } from '@reduxjs/toolkit';
import user from '../slices/userSlice/userSlice';
import themeReducer from '../slices/themeSlice/themeSlice';
import cardsReducer from '../slices/cardsSlice/cardsSlice';
import filteredCardsReducer from '../slices/filteredCards/filteredCards';

const store = configureStore({
	reducer: {
		user,
		theme: themeReducer,
		cards: cardsReducer,
		filteredCards: filteredCardsReducer,
	},
});

export default store;
