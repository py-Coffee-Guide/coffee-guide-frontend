import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';

import { setCards, clearCards, setFiltered } from '../../slices/cardsSlice/cardsSlice';
import { useGetCardsQuery } from '../../slices/apiSlice/apiSlice';

import styles from './MainSection.module.scss';

import Cards from '../Cards/Cards';
import MapComponent from '../Map/MapComponent';
import Preloader from '../Preloader/Preloader';

function MainSection({ cards, expandList }) {
	const [searchSuccess, setSearchSuccess] = useState(true);

	const dispatch = useDispatch();
	const filters = useSelector(state => state.cards.filters);
	const query = useSelector(state => state.cards.query);
	const offsetCounter = useSelector(state => state.offset);

	const { data, isLoading, isSuccess, isFetching, refetch } = useGetCardsQuery(
		{
			name: query,
			address: query,
			page: offsetCounter,
			availables: queryString.stringify({ availables: [...filters] }),
		},
		{ refetchOnMountOrArgChange: false },
	);

	useEffect(() => {
		if (isSuccess && !query) {
			dispatch(setCards(data.results));
		}
		if (query) {
			dispatch(setFiltered(data.results));
			setSearchSuccess(true);
		}
		if (query && data.results.length === 0) {
			setSearchSuccess(false);
		}
	}, [data]);

	if (isLoading) {
		return <Preloader />;
	}

	return (
		<section className={styles.main}>
			{!searchSuccess ? (
				<div className={styles.message_container}>
					<h3 className={styles.heading}>Пo вашему запросу ничего не наӣдено </h3>
					<p className={styles.text}>Попробуӣте изменить параметры или ввести запрос по-другому </p>
				</div>
			) : (
				<>
					<p className={styles.text}>Подобрали для тебя кофейни</p>
					<div className={styles.container}>
						<Cards data={data} cards={cards} expandList={expandList} />
						<MapComponent cards={cards} />
					</div>
				</>
			)}
		</section>
	);
}

export default MainSection;
