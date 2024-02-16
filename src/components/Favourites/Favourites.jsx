import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BackButton from '../../assets/ui-kit/BackButton/BackButton';
import CardSmall from '../CardSmall/CardSmall';
import styles from './Favourites.module.scss';

function Favourites() {
	const theme = useSelector(state => state.theme);
	const favourite = JSON.parse(localStorage.getItem('favourite')) || [];

	console.log(favourite);
	return (
		<section className={styles.container}>
			<div className={styles.back_button}>
				<BackButton type="button" theme={theme} text="Назад" />
			</div>
			<div className={styles.cardlist}>
				<ul>
					{favourite.map(item => (
						<li key={item.id}>
							<CardSmall card={item} />
						</li>
					))}
				</ul>
			</div>
			{/* <Cards /> */}
		</section>
	);
}

export default Favourites;
