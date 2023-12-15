import { useState } from 'react';
import NavPanel from '../../NavPanel/NavPanel';
import PopupWithForm from '../../PopupWithForm/PopupWithForm';

import styles from '../Auth.module.scss';
import Confirm from '../Confirm/Confirm';
import LoginWithTel from './LoginWithTel/LoginWithTel';
import LoginWithEmail from './LoginWithEmail/LoginWithEmail';

function Login({ isOpen, onClose }) {
	const [enterWith, setEnterWith] = useState(true);
	const [confirmPhone, setConfirmPhone] = useState(false);

	function changeEnterUser(state) {
		setEnterWith(state);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (enterWith) setConfirmPhone(true);
	}

	function renderElements() {
		if (enterWith) {
			if (confirmPhone) {
				return <Confirm />;
			}
			return <LoginWithTel />;
		}
		return <LoginWithEmail />;
	}

	const elements = renderElements();
	return (
		<PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
			<h2 className={styles.title}>Вход в аккаунт</h2>
			<NavPanel onEnter={changeEnterUser} />
			<div className={styles.content}>{elements}</div>
		</PopupWithForm>
	);
}

export default Login;
