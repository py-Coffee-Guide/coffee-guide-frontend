import styles from './Main.module.scss';

import SearchSection from '../SearchSection/SearchSection';
import TagSection from '../TagSection/TagSection';
import CardSmall from '../CardSmall/CardSmall';
import { cards } from '../../utils/cards';

function Main() {
	return (
		<main className={styles.main}>
			<SearchSection />
			<TagSection />
			{/* <section>
				<ul className={styles.cards_list}>
					{cards.map(item => (
						<CardSmall card={item} key={item.id} />
					))}
				</ul>
			</section> */}
		</main>
	);
}

export default Main;
