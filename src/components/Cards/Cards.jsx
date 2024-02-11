import styles from './Cards.module.scss';

import CardSmall from '../CardSmall/CardSmall';

function Cards({ cards }) {
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
