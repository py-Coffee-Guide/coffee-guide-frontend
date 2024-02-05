import cn from 'classnames';
import styles from './SearchResult.module.scss';

function SearchResult({ isVisible }) {
	const resultClassName = cn(
		styles.result_container,
		isVisible ? styles.popup_opened : styles.popup,
	);

	return (
		<div className={resultClassName}>
			<ul className={styles.result}>
				<li>
					<p className={styles.title}>lorem ipsum</p>
					<address className={styles.address}> ул. Карла Фридриха, д. 22, к. 2</address>
				</li>
				<li>
					<p className={styles.title}>lorem ipsum</p>
					<address className={styles.address}> ул. Карла Фридриха, д. 22, к. 2</address>
				</li>
				<li>
					<p className={styles.title}>lorem ipsum</p>
					<address className={styles.address}> ул. Карла Фридриха, д. 22, к. 2</address>
				</li>
				<li>
					<p className={styles.title}>lorem ipsum</p>
					<address className={styles.address}> ул. Карла Фридриха, д. 22, к. 2</address>
				</li>
			</ul>
		</div>
	);
}

export default SearchResult;
