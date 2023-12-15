import Button from '../../../UI/Button/Button';
import styles from '../../Auth.module.scss';

function RegisterWithTel() {
	return (
		<>
			<label className={styles.container} htmlFor="name">
				Введите ваше имя
				<input placeholder="Иванов Иван" className={styles.input} id="name" type="text" />
			</label>
			<label className={styles.container} htmlFor="tel">
				Введите ваш номер телефона
				<input placeholder="+7 (900 )000 00 00" className={styles.input} id="tel" type="text" />
				<span className={styles.description}>Отправим вам код для подтверждения регистрации.</span>
			</label>
			<div className={styles.btnContainer}>
				<Button cls="enter" type="submit" text="Зарегистрироваться" />
				<span className={styles.transfer}>или</span>
				<Button cls="vk" type="button" text="Воӣти с помощью вконтакте" />
			</div>
		</>
	);
}

export default RegisterWithTel;
