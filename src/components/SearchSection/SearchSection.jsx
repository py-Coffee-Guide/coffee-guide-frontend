import styles from './SearchSection.module.scss';

function SearchSection() {
	return (
		<section className={styles.container}>
			<input className={styles.input} placeholder="НАЗВАНИЕ КОФЕЙНИ, АДРЕС" />
			<button className={styles.button}>НАЙТИ</button>
		</section>
	);
}

export default SearchSection;
