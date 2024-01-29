import styles from './SearchSection.module.scss';

function SearchSection() {
	return (
		<section className={styles.container}>
			<div className={styles.input_container}>
				<input className={styles.input} placeholder="Название кофеӣни / адрес" />
			</div>
			<button className={styles.button}>НАЙТИ</button>
		</section>
	);
}

export default SearchSection;
