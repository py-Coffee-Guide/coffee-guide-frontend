import styles from './TagSection.module.scss';
import { BASE_TAGS } from '../../utils/constants';

import Button from '../../assets/ui-kit/Button/Button';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

function TagSection() {
	return (
		<>
			<section className={styles.tags}>
				<ul>
					{BASE_TAGS.map(tag => (
						<li key={tag.id}>
							<Button text={tag.text} icon={tag.icon} />
						</li>
					))}
				</ul>
			</section>
			<HorizontalLine />
		</>
	);
}

export default TagSection;
