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
				<div className={styles.heading_container}>
					<h2 className={styles.title}>Кофейня 1</h2>
					<img className={styles.rating_icon} src={rating} alt="рейтинг кофейни" />
					<img className={styles.rating_icon} src={rating} alt="рейтинг кофейни" />
					<img className={styles.rating_icon} src={rating} alt="рейтинг кофейни" />
				</div>
				<div className={styles.heading_container}>
					<button type="button" className={styles.button_review}>
						<img className={styles.review_icon} src={reviewIcon} alt="кнопка отзыв" />
						<p className={styles.text}>Отзыв</p>
					</button>
					<button type="button" className={styles.button_save}>
						<img className={styles.save_icon} src={saveIcon} alt="кнопка отзыв" />
						<p className={styles.text}>Сохранить</p>
					</button>
				</div>
			</div>
		</section>
	);
}

export default Card;
