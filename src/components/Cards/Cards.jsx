import { useSelector, useDispatch } from 'react-redux';
import styles from './Cards.module.scss';

import CardSmall from '../CardSmall/CardSmall';
import { setCards } from '../../slices/cardsSlice/cardsSlice';
import { cardsArray } from '../../utils/cardsArray';

function Cards() {
	const cards = useSelector(state => state.cards);
	const dispatch = useDispatch();

	// dispatch(setCards( ))

	return (
		<div className={styles.container}>
			<ul>
				{cards.map(item => (
					<li key={item.id}>
						<CardSmall card={item} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default Cards;
