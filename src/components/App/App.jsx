import { useSelector } from 'react-redux';
import Header from '../Header/Header';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NewCoffeeshop from '../NewCoffeeshop/NewCoffeeshop';

import styles from './App.module.scss';

function App() {
	// const { user } = useSelector(state => state);
	return (
		<div className={styles.root}>
			<Header />
			<Main />
			<Footer />
			<NewCoffeeshop />
		</div>
	);
}

export default App;
