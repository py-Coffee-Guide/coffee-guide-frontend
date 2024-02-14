import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCards } from '../../slices/cardsSlice/cardsSlice';
import { useGetCardsQuery } from '../../slices/apiSlice/apiSlice';

import CardSmall from '../CardSmall/CardSmall';
import styles from './Cards.module.scss';

function Cards() {
	const [page, setPage] = useState(1);

	const { data: cards, isLoading } = useGetCardsQuery(page);

	// useEffect(() => {
	// 	dispatch(setCards(cards));
	// }, [dispatch]);

	if (isLoading) {
		return <p>LOADING....</p>;
	}

	return (
		<div className={styles.container}>
			<ul>
				{cards.results.map(card => (
					<li key={card.id}>
						{/* <Link to={`/card/${item.id}`}> */}
						<CardSmall card={card} />
						{/* </Link> */}
					</li>
				))}
			</ul>
			<button type="button" className={styles.more} onClick={() => setPage(page + 1)}>
				Показать больше кофеен
			</button>
		</div>
	);
}

export default Cards;
