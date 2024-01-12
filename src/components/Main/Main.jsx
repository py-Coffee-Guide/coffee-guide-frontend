import styles from './Main.module.scss';

import SearchSection from '../SearchSection/SearchSection';
import TagSection from '../TagSection/TagSection';

import MainSection from '../MainSection/MainSection';

function Main() {
	return (
		<main className={styles.main}>
			<SearchSection />
			<TagSection />
			<MainSection />
		</main>
	);
}

export default Main;
