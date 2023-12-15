import { useState } from 'react';
import NavPanel from '../../NavPanel/NavPanel';
import PopupWithForm from '../../PopupWithForm/PopupWithForm';
import RegisterWithTel from './RegisterWithTel/RegisterWithTel';
import RegisterWithEmail from './RegisterWithEmail/RegisterWithEmail';
import styles from '../Auth.module.scss';
import Confirm from '../Confirm/Confirm';

function Register({ isOpen, onClose }) {
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
			return <RegisterWithTel />;
		}
		return <RegisterWithEmail />;
	}

	const elements = renderElements();
	return (
		<PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
			<h2 className={styles.title}>Создать аккаунт</h2>
			<NavPanel onEnter={changeEnterUser} />
			<div className={styles.content}>{elements}</div>
		</PopupWithForm>
	);
}

export default Register;
