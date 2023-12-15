import { useNavigate } from 'react-router-dom';
import styles from './Card.module.scss';
import Button from '../../assets/ui-kit/Button/Button';
import CardPhoto from '../CardPhoto/CardPhoto';

import arrowLeft from '../../assets/images/arrow-left.svg';
import rating from '../../assets/images/rating.svg';
import reviewIcon from '../../assets/images/review-icon.svg';
import saveIcon from '../../assets/images/save-icon.svg';

function Card() {
	const navigate = useNavigate();
	return (
		<section className={styles.card}>
			<button onClick={() => navigate(-1)} type="button" className={styles.button_back}>
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
					<div className={styles.container_tags}>
						<Button size="tag" color="gray" text="Oткрыто сейчас" />
						<Button size="tag" color="gray" text="Кофе с собой" />
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
				<CardPhoto />
			</div>
			<div className={styles.container_button}>
				<Button type="button" text="Построить маршрут" />
			</div>
		</section>
	);
}

export default Card;
