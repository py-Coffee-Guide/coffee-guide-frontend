import Button from '../../../UI/Button/Button';

import styles from '../../Auth.module.scss';

function LoginWithEmail(props) {
	return (
		<>
			<label className={styles.container} htmlFor="email">
				Введите вашe-mail
				<input placeholder="E-mail" className={styles.input} id="email" type="email" />
			</label>
			<label className={styles.container} htmlFor="password">
				Введите ваш пароль
				<input placeholder="E-mail" className={styles.input} id="password" type="password" />
			</label>
			<div className={styles.btnContainer}>
				<Button cls="enter" type="submit" text="Войти" />
			</div>
		</>
	);
}

export default LoginWithEmail;
