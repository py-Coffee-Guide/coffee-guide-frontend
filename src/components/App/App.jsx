// import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

	console.log(theme);
	// const { user } = useSelector(state => state);
	return (
		<div className={styles.root}>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/card" element={<CardMedium />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/signup" element={<Register />} />
				<Route path="/favourites" element={<Favourites />} />
				<Route path="/add-coffeeshop" element={<NewCoffeeshop />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
			<NewCoffeeshop />
		</div>
	);
}

export default App;
