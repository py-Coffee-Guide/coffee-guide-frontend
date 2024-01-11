import { useSelector } from 'react-redux';
import Header from '../Header/Header';

import Card from '../Card/Card';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import styles from './App.module.scss';

function App() {
	const { user } = useSelector(state => state);
	return (
		<div className={styles.root}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
