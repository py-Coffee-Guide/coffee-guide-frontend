import styles from './Footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				<p>СДЕЛАНО СТУДЕНТАМИ ЯНДЕКС ПРАКТИКУМА</p>
				<p>&copy;COPYRIGHT 2024 COFFEGUIDE</p>
			</div>
		</footer>
	);
}

export default Footer;
