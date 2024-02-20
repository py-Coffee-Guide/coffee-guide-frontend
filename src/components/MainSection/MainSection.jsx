import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './MainSection.module.scss';

import Cards from '../Cards/Cards';
import MapComponent from '../Map/MapComponent';

function MainSection({ cards, expandList }) {
	const filteredCards = useSelector(state => state.cards.filtered);
	const query = useSelector(state => state.cards.query);

	const [searchSuccess, setSearchSuccess] = useState(true);

	console.log('searchSuccess:', searchSuccess);
	console.log('query:', query);

	return (
		<section className={styles.main}>
			{!searchSuccess ? (
				<div className={styles.message_container}>
					<h3 className={styles.heading}>Пo вашему запросу ничего не наӣдено </h3>
					<p className={styles.text}>Попробуӣте изменить параметры или ввести запрос по-другому </p>
				</div>
			) : (
				<>
					<p className={styles.text}>Подобрали для тебя кофейни</p>
					<div className={styles.container}>
						<Cards cards={cards} expandList={expandList} setSearchSuccess={setSearchSuccess} />
						<MapComponent cards={cards} />
					</div>
				</>
			)}
		</section>
	);
}

export default MainSection;
