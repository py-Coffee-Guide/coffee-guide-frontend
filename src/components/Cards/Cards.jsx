import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCards } from '../../slices/cardsSlice/cardsSlice';
import { useGetCardsQuery } from '../../slices/apiSlice/apiSlice';

import { increment } from '../../slices/offsetSlice/offsetSlice';

import CardSmall from '../CardSmall/CardSmall';
import styles from './Cards.module.scss';

function Cards() {
	const dispatch = useDispatch();
	const card = useSelector(state => state.cards.cards);
	const filters = useSelector(state => state.cards.filters);
	const offsetCounter = useSelector(state => state.offset);

	const { cards, isLoading } = useGetCardsQuery(
		{ page: offsetCounter, availables: filters.join('') },
		{
			selectFromResult: ({ data }) => ({
				cards: data?.results,
			}),
		},
		{ refetchOnMountOrArgChange: true },
	);

	if (isLoading) {
		<p>loading....</p>;
	}

	const handleClick = () => {
		dispatch(increment());
	};

	return (
		<div className={styles.container}>
			<ul>
				{card?.map(card => (
					<li key={card.id}>
						<CardSmall card={card} />
					</li>
				))}
			</ul>

			<button type="button" className={styles.more} onClick={handleClick}>
				Показать больше кофеен
			</button>
		</div>
	);
}

export default Cards;
