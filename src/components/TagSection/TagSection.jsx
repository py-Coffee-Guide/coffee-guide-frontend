import styles from './TagSection.module.scss';
import { BASE_TAGS } from '../../utils/constants';

import Button from '../../assets/ui-kit/Button/Button';

function TagSection() {
	return (
		<section className={styles.tags}>
			<ul>
				{BASE_TAGS.map(tag => (
					<li key={tag}>
						<Button text={tag} />
					</li>
				))}
			</ul>
		</section>
	);
}

export default TagSection;
