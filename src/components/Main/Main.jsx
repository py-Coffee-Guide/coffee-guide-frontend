import styles from './Main.module.scss';

import SearchSection from '../SearchSection/SearchSection';
import TagSection from '../TagSection/TagSection';

import MainSection from '../MainSection/MainSection';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

function Main({ cards }) {
	return (
		<main className={styles.main}>
			<TagSection />
			<MainSection cards={cards} />
		</main>
	);
}

export default Main;
