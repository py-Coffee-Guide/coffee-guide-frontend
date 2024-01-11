import { useSelector } from 'react-redux';
import Header from '../Header/Header';

import Card from '../Card/Card';
import Main from '../Main/Main';

import styles from './App.module.scss';

function App() {
	const { user } = useSelector(state => state);
	return (
		<div className={styles.root}>
			<Header />
			<Main />
		</div>
	);
}

export default App;
