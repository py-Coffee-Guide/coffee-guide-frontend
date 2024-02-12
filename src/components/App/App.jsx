// import { useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CardMedium from '../CardMedium/CardMedium';
import Favourites from '../Favourites/Favourites';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';

import { card } from '../../utils/card';
import NewCoffeeshop from '../NewCoffeeshop/NewCoffeeshop';

import styles from './App.module.scss';

function App() {
	const location = useLocation();
	const theme = useSelector(state => state.theme);
	const cards = useSelector(state => state.cards);

	console.log('cards state ==>', cards);

	// a0303f06-4ef8-4bd2-bef5-7e2e5e6b3ff6
	// const { user } = useSelector(state => state);
	return (
		<div className={styles.root}>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route
					path="/card/:cardId"
					element={
						<CardMedium
							card={cards.find(item => item.id === location.pathname.replace('/card/', ''))}
						/>
					}
				/>
				<Route path="/signin" element={<Login />} />
				<Route path="/signup" element={<Register />} />
				<Route path="/favourites" element={<Favourites />} />
				<Route path="/add-coffeeshop" element={<NewCoffeeshop />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
