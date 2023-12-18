import styles from './SpecialOffersCard.module.scss';

function SpecialOffersCard({ path, label }) {
	return (
		<div className={styles.container}>
			<div className={styles.label}>{label}</div>
			<img src={path} alt="img" />
		</div>
	);
}

export default SpecialOffersCard;
