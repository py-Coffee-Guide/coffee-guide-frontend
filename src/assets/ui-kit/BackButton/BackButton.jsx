import styles from './BackButton.module.scss';
import lightIcon from '../../images/back.svg';
import darkIcon from '../../images/back-dark.svg';

function BackButton({ type, theme, text, func }) {
	return (
		<button className={styles.back} onClick={func} type={type}>
			<img
				src={theme === 'light' ? lightIcon : darkIcon}
				className={styles.back_icon}
				alt="назад"
			/>
			{text}
		</button>
	);
}

export default BackButton;
