import { useDispatch } from 'react-redux';

import styles from './TagSection.module.scss';
import { BASE_TAGS } from '../../utils/constants';

import { setFilter } from '../../slices/cardsSlice/cardsSlice';

import TagButton from '../../assets/ui-kit/TagButton/TagButton';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

function TagSection() {
	const dispatch = useDispatch();

	const handleClick = item => {
		dispatch(setFilter(item));
	};
	return (
		<>
			<section className={styles.tags}>
				<ul>
					{BASE_TAGS.map(item => (
						<li key={item.id}>
							<TagButton text={item.text} tag={item.tag} onClick={() => handleClick(item.end)} />
						</li>
					))}
				</ul>
			</section>
			<HorizontalLine />
		</>
	);
}

export default TagSection;
