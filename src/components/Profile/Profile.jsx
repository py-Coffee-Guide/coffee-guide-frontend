import { useState } from 'react';
import styles from './Profile.module.scss';

import Button from '../../assets/ui-kit/Button/Button';
import CardSmall from '../CardSmall/CardSmall';
import NewCoffeeshop from '../NewCoffeeshop/NewCoffeeshop';

import { cards } from '../../utils/cards';

function Profile() {
	const [isOpen, setIsOpen] = useState(false);
	console.log(isOpen);
	return isOpen ? (
		<NewCoffeeshop onClose={() => setIsOpen(false)} />
	) : (
		<section className={styles.container}>
			<div className={styles.button_container}>
				<Button
					type="button"
					size="medium"
					text="добавить кофейню"
					onClick={() => setIsOpen(true)}
				/>
			</div>
			<div className={styles.content}>
				<ul className={styles.grid}>
					{cards.map(item => (
						<li key={item.id}>
							<CardSmall card={item} />
						</li>
					))}
				</ul>
				<p className={styles.text}>
					В случае если у вас возникли вопросы, напишите нам admin@gmail.com
				</p>
			</div>
		</section>
	);
}

export default Profile;
