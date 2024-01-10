import styles from './TagSection.module.scss';
import Button from '../../assets/ui-kit/Button/Button';
import { BASE_TAGS } from '../../utils/constants';

function TagSection() {
	return (
		<section className={styles.tag_section}>
			<p className={styles.title}>Или подберем из списка</p>
			<ul className={styles.tags_list}>
				{BASE_TAGS.map(tag => (
					<li className={styles.tag_item} key={Math.random()}>
						<Button text={tag} color="gray" size="tag" />
					</li>
				))}
			</ul>
		</section>
	);
}

export default TagSection;
