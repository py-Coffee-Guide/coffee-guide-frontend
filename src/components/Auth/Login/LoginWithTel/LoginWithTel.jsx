import Button from '../../../UI/Button/Button';

import styles from '../../Auth.module.scss';

function LoginWithTel() {
	return (
		<>
			<label className={styles.container} htmlFor="tel">
				Введите ваш номер телефона
				<input placeholder="+7 (900 )000 00 00 " className={styles.input} id="tel" type="tel" />
				<span className={styles.description}>Отправим вам код для подтверждения входа</span>
			</label>

			<div className={styles.btnContainer}>
				<Button cls="enter" type="submit" text="Войти" />
				<span className={styles.transfer}>или</span>
				<Button cls="vk" type="button" text="Воӣти с помощью вконтакте" />
			</div>
		</>
	);
}

export default LoginWithTel;
