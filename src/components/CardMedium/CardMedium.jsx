import { useSelector } from 'react-redux';
import cn from 'classnames';
import styles from './CardMedium.module.scss';
import BackButton from '../../assets/ui-kit/BackButton/BackButton';

// import photo from '../../assets/images/photo/66be5a14bddf717c1205b56a1ed80d15.jpg';

function CardMedium({ card, onSave, onDelete }) {
	const theme = useSelector(state => state.theme);
	console.log('card from Medium ==>', card);
	const {
		address,
		alternative,
		description,
		drink,
		filter,
		id,
		image,
		name,
		roaster,
		schedule,
		tag,
	} = card;

	return (
		<section className={styles.container}>
			<BackButton type="button" theme={theme} text="Назад" />

			<div className={styles.heading}>
				<div className={styles.title}>
					<h1>{name}</h1>
					<p>{description}</p>
				</div>
				<div className={styles.map}>
					<div className={styles.map_mini} />
					<button className={styles.button} type="button">
						Построить маршрут
					</button>
				</div>
				<div className={styles.info}>
					<div className={styles.point_icon} />
					<p>{address}</p>
					<div className={styles.schedule_icon} />
					<div>
						{' '}
						<p>{schedule[0].text}</p>
						<p>{schedule[0].text}</p>
					</div>
				</div>
			</div>
			<div className={styles.desription}>
				<div className={styles.photo}>
					<img className={styles.img} src={image} alt="фото кофейни" />
					<div className={styles.favourites}>
						{' '}
						<button type="button" className={styles.save} aria-label="добавить в избранное" />
					</div>
				</div>
				<div className={styles.features}>
					<h3 className={cn(styles.tag1, styles.tag)}>Доступно</h3>
					<ul className={cn(styles.list1, styles.list)}>
						<li>Безлактозное</li>
						<li>Submarine</li>
						<li>Альтернатива</li>
					</ul>

					<h3 className={cn(styles.tag2, styles.tag)}>Напитки</h3>
					<div className={cn(styles.list2)}>
						<ul className={cn(styles.list)}>
							<li>Эспрессо: 200 ₽ </li>
							<li>Капучино: 300 ₽ </li>
							<li>Американо: 300 ₽ </li>
						</ul>
						<ul className={cn(styles.list)}>
							<li>Латте: 200 ₽ </li>
							<li>Флэт-уайт: 400 ₽ </li>
							<li>Фильтр-кофе: 400 ₽ </li>
						</ul>
					</div>

					<h3 className={cn(styles.tag3, styles.tag)}>Обжарщик</h3>
					<ul className={cn(styles.list3, styles.list)}>
						<li>Adept x Common Coffee</li>
					</ul>
					<h3 className={cn(styles.tag4, styles.tag)}>Альтернатива</h3>
					<div className={cn(styles.list4, styles.list)}>
						<ul className={cn(styles.list)}>
							<li>V60</li>
							<li>Кемекс</li>
						</ul>
						<ul className={cn(styles.list)}>
							<li>Френч-пресс</li>
							<li>Аэропресс</li>
						</ul>
					</div>
					<h3 className={cn(styles.tag5, styles.tag)}>Дополнительно</h3>
					<ul className={cn(styles.list5, styles.list)}>
						<li>Можно с животными</li>
						<li>Продажа зерна </li>
						<li>Декаф </li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default CardMedium;
