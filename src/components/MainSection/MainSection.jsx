import { useSelector } from 'react-redux';
import styles from './MainSection.module.scss';

import Cards from '../Cards/Cards';
import MapComponent from '../Map/MapComponent';

function MainSection() {
	const cards = useSelector(state => state.cards);

	return (
		<section className={styles.main}>
			{cards.length > 0 ? (
				<>
					<p className={styles.subheading}>Подобрали для тебя кофейни</p>
					<div className={styles.container}>
						<Cards />
						<MapComponent />
					</div>
				</>
			) : (
				<div className={styles.message_container}>
					<h3 className={styles.heading}>Пo вашему запросу ничего не наӣдено</h3>
					<p className={styles.text}>Попробуӣте изменить параметры или ввести запрос по-другому </p>
				</div>
			)}
		</section>
	);
}

export default MainSection;
