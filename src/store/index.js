import { configureStore } from '@reduxjs/toolkit';
import user from '../slices/userSlice/userSlice';
import themeReducer from '../slices/themeSlice/themeSlice';
import cardsReducer from '../slices/cardsSlice/cardsSlice';
import filteredCardsReducer from '../slices/filteredCards/filteredCards';
import cardReducer from '../slices/cardSice/cardSice';

const store = configureStore({
	reducer: {
		user,
		theme: themeReducer,
		cards: cardsReducer,
		filteredCards: filteredCardsReducer,
		card: cardReducer,
	},
});

export default store;
