import Button from '../../../UI/Button/Button';

import styles from '../../Auth.module.scss';

function RegisterWithEmail() {
	return (
		<>
			<label className={styles.container} htmlFor="name">
				Введите ваше имя
				<input placeholder="Иванов Иван" className={styles.input} id="name" type="text" />
			</label>
			<label className={styles.container} htmlFor="password">
				Введите ваш пароль
				<input placeholder="****" className={styles.input} id="password" type="password" />
			</label>
			<div className={styles.btnContainer}>
				<Button cls="enter" type="submit" text="Зарегистрироваться" />
				<span className={styles.transfer}>или</span>
				<Button cls="vk" type="button" text="Воӣти с помощью вконтакте" />
			</div>
		</>
	);
}

export default RegisterWithEmail;
