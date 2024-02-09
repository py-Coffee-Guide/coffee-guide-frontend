import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCards, reset } from '../../slices/cardsSlice/cardsSlice';

import { cardsArray } from '../../utils/cardsArray';

// import cn from 'classnames';
import styles from './SearchSection.module.scss';
import Button from '../../assets/ui-kit/Button/Button';
import SearchResult from '../SearchResult/SearchResult';

function SearchSection() {
	const dispatch = useDispatch();

	const [inputValue, setInputVlaue] = useState('');
	const [placeholder, setPlaceholder] = useState('Название кофеӣни / адрес');
	const [isQuery, setIsQuery] = useState(false);

	// функция фильтрации карточек
	const onFilter = (inputValue, cardsArray) => {
		localStorage.setItem('inputValue', JSON.stringify(inputValue));
		localStorage.setItem('cards', JSON.stringify(cardsArray));

		// переменная для сохрарения результата поиска
		let searchResult = [];
		if (inputValue) {
			searchResult = cardsArray.filter(item => {
				const searchText =
					item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
					item.address.toLowerCase().includes(inputValue.toLowerCase());
				return searchText;
			});
		}
		dispatch(setCards(searchResult));
		// console.log('searchResult ==>', searchResult);
	};

	const handleChange = e => {
		// !e.target.value ? setIsQuery(false) : setIsQuery(true);

		setInputVlaue(e.target.value);
		dispatch(reset());
		onFilter(e.target.value, cardsArray);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!isQuery) {
			setPlaceholder('Нужно ввести ключевое слово');
			// console.log('Нужно ввести ключевое слово');
		} else {
			dispatch(reset());

			onFilter(inputValue, cardsArray);
			// console.log('submit 2');
		}
	};

	return (
		<section className={styles.container}>
			<div className={styles.input_container}>
				<input
					className={styles.input}
					placeholder={placeholder}
					defaultValue={inputValue}
					onChange={handleChange}
				/>
				<SearchResult isVisible={inputValue !== ''} />
			</div>
			<Button onClick={handleSubmit} text="найти" size="small" />
		</section>
	);
}

export default SearchSection;
