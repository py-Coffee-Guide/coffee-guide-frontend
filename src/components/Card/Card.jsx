import styles from './Card.module.scss';

import arrowLeft from '../../assets/images/arrow-left.svg';
import rating from '../../assets/images/rating.svg';
import reviewIcon from '../../assets/images/review-icon.svg';
import saveIcon from '../../assets/images/save-icon.svg';

function Card() {
	return (
		<section className={styles.container}>
			<button type="button" className={styles.button_back}>
				<img src={arrowLeft} alt="кнопка назад" />
				<p className={styles.text}>Назад</p>
			</button>
			<div className={styles.heading}>
				<h2 className={styles.title}>Кофейня 1</h2>
				<img className={styles.rating} src={rating} alt="рейтинг кофейни" />
				<button type="button" className={styles.button_review}>
					<img src={reviewIcon} alt="кнопка отзыв" />
					<p className={styles.text}>Отзыв</p>
				</button>
				<button type="button" className={styles.button_save}>
					<img src={saveIcon} alt="кнопка отзыв" />
					<p className={styles.text}>Сохранить</p>
				</button>
			</div>
		</section>
	);
}

export default Card;
