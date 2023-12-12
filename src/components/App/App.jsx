import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import styles from './App.module.scss';

function App() {
	const { user } = useSelector(state => state);
	return (
		<div className={styles.root}>
			<Header />
		</div>
	);
}

export default App;
