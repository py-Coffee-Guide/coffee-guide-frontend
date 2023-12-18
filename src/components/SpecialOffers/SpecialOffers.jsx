import styles from './SpecialOffers.module.scss';
import SpecialOffersCard from '../SpecialOffersCard/SpecialOffersCard';

import { BASE_OFFERS } from '../../utils/constants';

function SpecialOffers() {
	return (
		<section className={styles.offers}>
			<p className={styles.title}>Интересные предложения и статьи </p>
			<ul>
				{BASE_OFFERS.map(offer => (
					<li key={offer.id}>
						<SpecialOffersCard path={offer.path} label={offer.label} />
					</li>
				))}
			</ul>
		</section>
	);
}

export default SpecialOffers;
