import { useState } from 'react';
import Header from '../Header/Header';
import styles from './App.module.scss';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import Auth from '../Auth/Auth';

function App() {
	const [privPopup, setPrivPopup] = useState(false);

	function closePrivPopups() {
		setPrivPopup(false);
	}
	function openPrivPopup() {
		setPrivPopup(prev => !prev);
	}

	return (
		<div className={styles.root}>
			<Header isOpen={openPrivPopup} />
			<Auth onClose={closePrivPopups} privPopup={privPopup} />
			{/* <Login /> */}
			{/* <Register /> */}
		</div>
	);
}

export default App;
