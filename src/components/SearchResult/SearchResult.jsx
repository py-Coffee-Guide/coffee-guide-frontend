import { useSelector } from 'react-redux';

import cn from 'classnames';
import styles from './SearchResult.module.scss';

function SearchResult({ isVisible }) {
	const cards = useSelector(state => state.cards);
	// console.log('cards ==>', cards[0].name);

	const resultClassName = cn(
		styles.result_container,
		isVisible ? styles.popup_opened : styles.popup,
	);

	return (
		<div className={resultClassName}>
			<ul className={styles.result}>
				{cards.map(item => (
					<li key={item.id}>
						<p className={styles.title}>{item.name}</p>
						<address className={styles.address}>{item.address}</address>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchResult;
