import styles from './MainSection.module.scss';

import Cards from '../Cards/Cards';
import Map from '../Map/Map';

function MainSection() {
	return (
		<section className={styles.mainSectionContainer}>
			<p className={styles.mainSectionText}>ПОДОБРАЛИ ДЛЯ ТЕБЯ КОФЕӢНИ </p>
			<div className={styles.container}>
				<Cards />
				<Map />
			</div>
		</section>
	);
}

export default MainSection;
