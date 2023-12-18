import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Card from '../Card/Card';
import styles from './App.module.scss';

function App() {
	const { user } = useSelector(state => state);
	return (
		<div className={styles.root}>
			<Header />
			<Card />
		</div>
	);
}

export default App;
