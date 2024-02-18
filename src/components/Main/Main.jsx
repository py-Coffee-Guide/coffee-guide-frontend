import styles from './Main.module.scss';

import SearchSection from '../SearchSection/SearchSection';
import TagSection from '../TagSection/TagSection';

import MainSection from '../MainSection/MainSection';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

function Main({ fullCard, setFullCard }) {
	return (
		<main className={styles.main}>
			<TagSection />
			<MainSection fullCard={fullCard} setFullCard={setFullCard} />
		</main>
	);
}

export default Main;
