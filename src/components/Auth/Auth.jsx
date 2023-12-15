import { useSelector } from 'react-redux';
import { useState } from 'react';
import classNames from 'classnames';
import Register from './Register/Register';
import styles from './Auth.module.scss';
import stylesPopupWithForm from '../PopupWithForm/PopupWithForm.module.scss';
import Login from './Login/Login';

function Auth({ privPopup, onClose }) {
	const { user } = useSelector(state => state);
	const [loginPopup, setLoginPopup] = useState(false);
	const [registerPopup, setRegisterPopup] = useState(false);

	function closeAllPopups() {
		setRegisterPopup(false);
		setLoginPopup(false);
	}
	function handleLoginClick() {
		onClose();
		setLoginPopup(prev => !prev);
	}
	function handleRegisterClick() {
		onClose();
		setRegisterPopup(prev => !prev);
	}

	return (
		<>
			<div
				className={classNames(styles.auth, {
					[styles.open]: privPopup,
				})}
			>
				<div className={styles.avatar}>Го</div>
				<p className={styles.name}>{user.name}</p>
				<div className={styles.authContainer}>
					<button onClick={handleLoginClick}>войти</button>
					<span>или</span>
					<button onClick={handleRegisterClick}>Зарегистрироваться</button>
				</div>
				<button onClick={onClose} type="button" className={stylesPopupWithForm.close} />
			</div>
			<Register isOpen={registerPopup} onClose={closeAllPopups} />
			<Login isOpen={loginPopup} onClose={closeAllPopups} />
		</>
	);
}

export default Auth;
