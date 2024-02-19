import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setFiltered, clearFiltered } from '../../slices/cardsSlice/cardsSlice';
// import { useGetFilteredCardsQuery } from '../../slices/apiSlice/apiSlice';

// import cn from 'classnames';

import styles from './SearchSection.module.scss';
import Button from '../../assets/ui-kit/Button/Button';
import SearchResult from '../SearchResult/SearchResult';

function SearchSection() {
	const [inputValue, setInputVlaue] = useState('');
	const [placeholder, setPlaceholder] = useState('Название кофеӣни / адрес');
	const [isQuery, setIsQuery] = useState(false);
	const [isSearchSuccess, setIsSearchSuccess] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	// const { data, isLoading } = useGetFilteredCardsQuery(inputValue);

	// console.log('inputValue ==>', inputValue);
	// console.log('isQuery ==>', isQuery);

	const handleChange = e => {
		setInputVlaue(e.target.value);
		if (inputValue) {
			setIsQuery(true);
		}

		dispatch(clearFiltered());
		// dispatch(setFiltered(data.results));
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!isQuery) {
			setPlaceholder('Нужно ввести ключевое слово');
		} else {
			dispatch(clearFiltered());
			// dispatch(setFiltered(data.results));
			setIsSearchSuccess(false);
			navigate('/');
		}
	};

	return (
		<section className={styles.container}>
			<div className={styles.input_container}>
				<input
					className={styles.input}
					placeholder={placeholder}
					value={inputValue}
					onChange={handleChange}
				/>
				<SearchResult isVisible={isSearchSuccess} />
			</div>
			<Button onClick={handleSubmit} text="найти" size="small" />
		</section>
	);
}

export default SearchSection;
