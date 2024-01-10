import styles from './AboutProject.module.scss';
import Button from '../../assets/ui-kit/Button/Button';

function AboutProject() {
	return (
		<section className={styles.about}>
			<h1 className={styles.about_title}>Кофейный гид - сервис по подбору ближайших кофеин</h1>
			<h2 className={styles.about_subtitle}>
				У нас есть самый полный список кофеин Москвы, фильтры и красивые карточки заведений. Ну что,
				по чашечке?
			</h2>
			<div className={styles.button_container}>
				<Button text="Найти кофейню" />
			</div>
		</section>
	);
}

export default AboutProject;
