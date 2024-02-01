import { useState } from 'react';

import cn from 'classnames';
import styles from './SearchSection.module.scss';
import Button from '../../assets/ui-kit/Button/Button';
import SearchResult from '../SearchResult/SearchResult';

function SearchSection() {
	const [inputValue, setInputVlaue] = useState('');
	const handleChange = e => {
		setInputVlaue(e.target.value);
	};

	return (
		<section className={styles.container}>
			<div className={styles.input_container}>
				<input
					className={styles.input}
					placeholder="Название кофеӣни / адрес"
					defaultValue={inputValue}
					onChange={e => handleChange(e)}
				/>
				<SearchResult isVisible={inputValue !== ''} />
			</div>
			<Button text="найти" size="small" />
		</section>
	);
}

export default SearchSection;
