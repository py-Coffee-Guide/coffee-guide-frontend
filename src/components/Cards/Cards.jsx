import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CardSmall from '../CardSmall/CardSmall';
import styles from './Cards.module.scss';

function Cards({ fullCard, setFullCard }) {
	const cards = useSelector(state => state.cards);

	function handleClick(item) {
		console.log('click', item.id);
		console.log('fullCard', fullCard);

		setFullCard(item);
	}

	return (
		<div className={styles.container}>
			<ul>
				{cards.map(item => (
					<li key={item.id}>
						<Link
							onClick={() => {
								handleClick(item);
							}}
							to={`/card/${item.id}`}
							className={styles.card}
						>
							<CardSmall card={item} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Cards;
