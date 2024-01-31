import styles from './NewCoffeeshop.module.scss';

function NewCoffeeshop() {
	return (
		<section className={styles.container}>
			<div className={styles.container_main}>
				<div className={styles.container}>
					<h3 className={styles.title}> Название кофейни</h3>
					<input className={styles.input_name} placeholder="Название" />
				</div>
				<div className={styles.container}>
					<h3 className={styles.title}> Адрес</h3>
					<input className={styles.input_direction} />
				</div>
				<h3 className={styles.schedule}> График работы</h3>
				<div className={styles.container}>
					<h3 className={styles.title}> ПН - ПТ</h3>
					<input className={styles.input_time} placeholder="00:00" />
					<input className={styles.input_time} placeholder="00:00" />
				</div>
				<div className={styles.container}>
					<h3 className={styles.title}> СБ - ВС</h3>
					<input className={styles.input_time} placeholder="00:00" />
					<input className={styles.input_time} placeholder="00:00" />
				</div>
				<div className={styles.container_days}>
					<div className={styles.days}>
						<h3 className={styles.title}> Как в будни </h3>
						<input className={styles.input_checkbox} type="checkbox" />
					</div>
					<div className={styles.days}>
						<h3 className={styles.title}> Круглосуточно </h3>
						<input className={styles.input_checkbox} type="checkbox" />
					</div>
				</div>
				<div className={styles.container}>
					<h3 className={styles.title}> Напитки</h3>
					<input className={styles.input_type} />
					<input className={styles.input_price} />
					<h3 className={styles.title}> руб </h3>
				</div>
				<button className={styles.add_button} type="button">
					{' '}
					+ добавить напиток
				</button>
				<div className={styles.container}>
					<h3 className={styles.title}> Доступные опции </h3>
					<div className={styles.container_options}>
						<div className={styles.container_option}>
							<h3 className={styles.title_option}> Альтернатива </h3>
							<input className={styles.input_checkbox} type="checkbox" />
						</div>
						<div className={styles.container_option}>
							<h3 className={styles.title_option}> Безлактозное молоко </h3>
							<input className={styles.input_checkbox} type="checkbox" />
						</div>
						<div className={styles.container_option}>
							<h3 className={styles.title_option}> Сварщица </h3>
							<input className={styles.input_checkbox} type="checkbox" />
						</div>
						<div className={styles.container_option}>
							<h3 className={styles.title_option}> La Marzocco </h3>
							<input className={styles.input_checkbox} type="checkbox" />
						</div>
						<div className={styles.container_option}>
							<h3 className={styles.title_option}> Submarine </h3>
							<input className={styles.input_checkbox} type="checkbox" />
						</div>
					</div>
				</div>
				<div className={styles.container}>
					<h3 className={styles.title}> Обжарщики </h3>
					<input className={styles.input_roaster} />
				</div>
				<button className={styles.add_button} type="button">
					{' '}
					+ добавить обжарщика
				</button>
				<div className={styles.container}>
					<h3 className={styles.title}> Дополнительные опции </h3>
					<div className={styles.container_options}>
						<div className={styles.container_option}>
							<h3 className={styles.title_option}> Можно с животными </h3>
							<input className={styles.input_checkbox} type="checkbox" />
						</div>
						<div className={styles.container_option}>
							<h3 className={styles.title_option}> Продажа зерна </h3>
							<input className={styles.input_checkbox} type="checkbox" />
						</div>
						<div className={styles.container_option}>
							<h3 className={styles.title_option}> Декаф </h3>
							<input className={styles.input_checkbox} type="checkbox" />
						</div>
					</div>
				</div>
				<div className={styles.container}>
					<h3 className={styles.title}> Описание </h3>
					<input className={styles.description} />
				</div>
				<div className={styles.container}>
					<h3 className={styles.title}> Фото на обложку </h3>
					<input className={styles.photo} placeholder="Выберите файл или перетащите его сюда" />
				</div>
				<button className={styles.button}>Добавить кофейню</button>
			</div>
		</section>
	);
}

export default NewCoffeeshop;
