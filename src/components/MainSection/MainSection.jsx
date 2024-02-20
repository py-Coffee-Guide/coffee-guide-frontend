import { useSelector } from 'react-redux';
import styles from './MainSection.module.scss';

import Cards from '../Cards/Cards';
import MapComponent from '../Map/MapComponent';

function MainSection({ cards, expandList }) {
	const filteredCards = useSelector(state => state.cards.filtered);
	const query = useSelector(state => state.cards.query);

	console.log('filteredCards:', filteredCards);
	console.log('query:', query);

	return (
		<section className={styles.main}>
			{query && filteredCards.length === 0 ? (
				<div className={styles.message_container}>
					<h3 className={styles.heading}>Пo вашему запросу ничего не наӣдено </h3>
					<p className={styles.text}>Попробуӣте изменить параметры или ввести запрос по-другому </p>
				</div>
			) : (
				<>
					<p className={styles.text}>Подобрали для тебя кофейни</p>
					<div className={styles.container}>
						<Cards cards={cards} expandList={expandList} />
						<MapComponent cards={cards} />
					</div>
				</>
			)}
		</section>
	);
}

export default MainSection;
