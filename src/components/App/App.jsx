import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';
import styles from './App.module.scss';
import FilterModal from '../FilterModal/FilterModal.tsx';

function App() {
	const { user } = useSelector(state => state);

	return (
		<div className={styles.root}>
			<Header />
			<FilterModal />
		</div>
	);
}

export default App;
