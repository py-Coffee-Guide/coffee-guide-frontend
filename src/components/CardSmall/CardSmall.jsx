import styles from './CardSmall.module.scss';
import Button from '../../assets/ui-kit/Button/Button';

function CardSmall({ card, onSave, onDelete }) {
	return (
		<div className={styles.card}>
			<div className={styles.photo_container}>
				<img className={styles.photo} src={card.image} alt="фото кофейни" />
				<div className={styles.favourite}>
					<Button preset="action" additions="active" />
				</div>
				<div className={styles.close}>
					<Button preset="action" additions="close" />
				</div>
				{/* <button
					type="button"
					onClick={onDelete}
					className={styles.delete}
					aria-label="удалить из избранного"
				/> */}
			</div>

			<div className={styles.info}>
				<h3 className={styles.title}>{card.name}</h3>
				<p className={styles.text}>{card.address}</p>
				<p className={styles.text}>{card.schedule[0].text}</p>
				<p className={styles.text}>{card.schedule[1].text}</p>
			</div>
		</div>
	);
}

export default CardSmall;
