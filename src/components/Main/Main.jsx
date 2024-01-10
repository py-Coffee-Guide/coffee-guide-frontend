import AboutProject from '../AboutProject/AboutProject';
import TagSection from '../TagSection/TagSection';
import SpecialOffers from '../SpecialOffers/SpecialOffers';

import styles from './Main.module.scss';

function Main() {
	return (
		<main className={styles.main}>
			<AboutProject />
			<TagSection />
			<SpecialOffers />
		</main>
	);
}

export default Main;
