import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCards, clearCards } from '../../slices/cardsSlice/cardsSlice';
import { useGetCardsQuery, useLazyGetCardsQuery } from '../../slices/apiSlice/apiSlice';

import { increment } from '../../slices/offsetSlice/offsetSlice';

import CardSmall from '../CardSmall/CardSmall';
import styles from './Cards.module.scss';
import { set } from '../../slices/themeSlice/themeSlice';

function Cards() {
	const dispatch = useDispatch();
	const card = useSelector(state => state.cards.cards);
	const filters = useSelector(state => state.cards.filters);
	const offsetCounter = useSelector(state => state.offset);

	const { data, isLoading, isSuccess, isFetching, refetch } = useGetCardsQuery(
		{ page: offsetCounter, availables: filters.join('') },
		{ refetchOnMountOrArgChange: true },
	);

	useEffect(() => {
		refetch();
		if (isSuccess) {
			dispatch(setCards(data.results));
		}
	}, [data]);

	const handleClick = () => {
		dispatch(increment());
	};

	if (isLoading) {
		return <p>loading....</p>;
	}

	// console.log(card);

	return (
		<div className={styles.container}>
			<ul>
				{card?.map(card => (
					<li key={card.id}>
						<CardSmall card={card} />
					</li>
				))}
			</ul>
			{data.next !== null && (
				<button type="button" className={styles.more} onClick={handleClick}>
					Показать больше кофеен
				</button>
			)}
		</div>
	);
}

export default Cards;
