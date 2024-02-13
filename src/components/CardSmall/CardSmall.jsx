import styles from './CardSmall.module.scss';
import FavouritesButton from '../../assets/ui-kit/FavouritesButton/FavouritesButton';
import CloseButton from '../../assets/ui-kit/CloseButton/CloseButton'; // Добавил иконку удаления

function CardSmall({ card, onSave, onDelete }) {
	const { address, name, schedules, image } = card; // Поменял с adress на address так как в базе address
	return (
		<div className={styles.card}>
			<div className={styles.photo_container}>
				<img className={styles.photo} src={image} alt="фото кофейни" />
				{/* <div className={styles.favourite}></div> */}
				<div className={styles.favourite}>
					<FavouritesButton />
				</div>
			</div>

			<div className={styles.info}>
				<h3 className={styles.title}>{name}</h3>
				<p className={styles.text}>{address.name}</p>
				<ul className={styles.schedules}>
					{schedules.map(item => (
						<li key={item.id} className={styles.schedules_item}>
							<p> {item.name}</p>
							<p> {item.start}</p>
							<p> {item.end}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default CardSmall;
