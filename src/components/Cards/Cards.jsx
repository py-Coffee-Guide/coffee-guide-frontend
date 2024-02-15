import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCards } from '../../slices/cardsSlice/cardsSlice';
import { useGetCardsQuery } from '../../slices/apiSlice/apiSlice';

import { increment } from '../../slices/offsetSlice/offsetSlice';

import CardSmall from '../CardSmall/CardSmall';
import styles from './Cards.module.scss';

function Cards() {
	const dispatch = useDispatch();
	const offsetCounter = useSelector(state => state.offset);
	const { cards, isLoading } = useGetCardsQuery(
		{ offset: offsetCounter },
		{
			selectFromResult: ({ data }) => ({
				cards: data?.results,
			}),
		},
	);
	return (
		<div className={styles.container}>
			<ul>
				{cards?.map(card => (
					<li key={card.id}>
						<CardSmall card={card} />
					</li>
				))}
			</ul>
			<button type="button" className={styles.more} onClick={() => dispatch(increment())}>
				Показать больше кофеен
			</button>
		</div>
	);
}

export default Cards;
