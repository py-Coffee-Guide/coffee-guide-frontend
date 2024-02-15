import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCards } from '../../slices/cardsSlice/cardsSlice';
import { useGetCardsQuery } from '../../slices/apiSlice/apiSlice';

import CardSmall from '../CardSmall/CardSmall';
import styles from './Cards.module.scss';

function Cards({ cards, expandList }) {
	return (
		<div className={styles.container}>
			<ul>
				{cards?.map(card => (
					<li key={card.id}>
						<CardSmall card={card} />
					</li>
				))}
			</ul>
			<button type="button" className={styles.more} onClick={expandList}>
				Показать больше кофеен
			</button>
		</div>
	);
}

export default Cards;
