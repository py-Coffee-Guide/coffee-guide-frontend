import styles from './Main.module.scss';

import SearchSection from '../SearchSection/SearchSection';
import TagSection from '../TagSection/TagSection';

function Main() {
	return (
		<main className={styles.main}>
			<SearchSection />
			<TagSection />
		</main>
	);
}

export default Main;
