import { useState } from 'react';

import styles from './Main.module.scss';

import { useGetCardsQuery } from '../../slices/apiSlice/apiSlice';

import TagSection from '../TagSection/TagSection';
import MainSection from '../MainSection/MainSection';

function Main() {
	const [page, setPage] = useState(1);
	const { cards, isLoading } = useGetCardsQuery(
		{ page },
		{
			selectFromResult: ({ data }) => ({
				cards: data?.results,
			}),
		},
	);

	if (isLoading) {
		return <p>LOADING....</p>;
	}

	return (
		<main className={styles.main}>
			<TagSection />
			<MainSection cards={cards} expandList={() => setPage(page + 1)} />
		</main>
	);
}

export default Main;
