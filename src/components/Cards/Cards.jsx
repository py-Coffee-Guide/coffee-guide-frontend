import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CardSmall from '../CardSmall/CardSmall';
import styles from './Cards.module.scss';

function Cards({ cards }) {
	return (
		<div className={styles.container}>
			<ul>
				{cards.map(item => (
					<li key={item.id}>
						{/* <Link to={`/card/${item.id}`}> */}
						<CardSmall card={item} />
						{/* </Link> */}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Cards;
