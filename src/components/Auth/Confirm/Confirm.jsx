import styles from './Confirm.module.scss';
import Button from '../../UI/Button/Button';

function Confirm() {
	return (
		<>
			<h3 className={styles.subtitle}>Введите код из смс </h3>
			<p className={styles.description}>
				Мы отправили его на номер
				<br /> +7 *** *** - 00- 00
			</p>
			<div className={styles.inputsContainer}>
				<input maxLength="1" placeholder="1" className={styles.input} type="text" />
				<input maxLength="1" placeholder="1" className={styles.input} type="text" />
				<input maxLength="1" placeholder="1" className={styles.input} type="text" />
				<input maxLength="1" placeholder="1" className={styles.input} type="text" />
			</div>
			<span className={styles.text}>Отправить код через 23 секунды </span>
			<Button cls="enter" type="submit" text="Подтвердить" />
		</>
	);
}

export default Confirm;
