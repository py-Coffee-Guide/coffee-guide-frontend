import styles from './Card.module.scss';
import Button from '../../assets/ui-kit/Button/Button';

import arrowLeft from '../../assets/images/arrow-left.svg';
import rating from '../../assets/images/rating.svg';
import reviewIcon from '../../assets/images/review-icon.svg';
import saveIcon from '../../assets/images/save-icon.svg';

function Card() {
	return (
		<section className={styles.card}>
			<button type="button" className={styles.button_back}>
				<img src={arrowLeft} alt="кнопка назад" />
				<p className={styles.text}>Назад</p>
			</button>
			<div className={styles.heading}>
				<div className={styles.container_heading}>
					<h2 className={styles.title}>Кофейня 1</h2>
					<img className={styles.rating_icon} src={rating} alt="рейтинг кофейни" />
					<img className={styles.rating_icon} src={rating} alt="рейтинг кофейни" />
					<img className={styles.rating_icon} src={rating} alt="рейтинг кофейни" />
				</div>
				<div className={styles.container_heading}>
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
			<div className={styles.content}>
				<div className={styles.caption}>
					<div className={styles.container_button}>
						<Button size="medium" color="gray" />
						{/* <button type="button" className={styles.button_medium}>
							Oткрыто сейчас
						</button>
						<button type="button" className={styles.button_medium}>
							Кофе с собой
						</button> */}
					</div>
					<div className={styles.container_info}>
						<p className={styles.text}>ул. Улица , д. 12</p>
						<p className={styles.text}>Сегодня с 8.00 - 21.00 </p>
						<p className={styles.text}>Телефон +7 495 000 00 00 </p>
						<p className={styles.text}>https://</p>
					</div>
					<p className={styles.text}>
						У нас всегда есть свежеобжаренный кофе, который оценят любители этого напитка. В
						ассортименте вы найдёте разные сорта и смеси со всех концов света.
					</p>
				</div>
				<img className={styles.image_1} src="" alt="" />
				<img className={styles.image_2} src="" alt="" />
				<img className={styles.image_3} src="" alt="" />
			</div>
			<div>
				<Button type="button" />
			</div>
			{/* <button className={styles.button_large} type="button">
				Построить маршрут
			</button> */}
		</section>
	);
}

export default Card;
