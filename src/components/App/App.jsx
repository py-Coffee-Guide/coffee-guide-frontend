// import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { api } from '../../utils/Api';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CardMedium from '../CardMedium/CardMedium';
import Favourites from '../Favourites/Favourites';

import NotFound from '../NotFound/NotFound';

import Register from '../Register/Register';
import NewCoffeeshop from '../NewCoffeeshop/NewCoffeeshop';

import styles from './App.module.scss';

function App() {
	const theme = useSelector(state => state.theme);

	const [cards, setCards] = useState([]);

	useEffect(() => {
		Promise.all([api.getOrganizations()])
			.then(([card]) => {
				setCards(card.results);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	// a0303f06-4ef8-4bd2-bef5-7e2e5e6b3ff6
	// const { user } = useSelector(state => state);
	console.log(cards);
	return (
		<div className={styles.root}>
			<Header />
			<Routes>
				<Route path="/" element={<Main cards={cards} />} />
				<Route path="/card" element={<CardMedium />} />
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
