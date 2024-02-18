import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilteredCards, resetFilteredCards } from '../../slices/filteredCards/filteredCards';
import { setCards, clear } from '../../slices/cardsSlice/cardsSlice';

import { cardsArray } from '../../utils/cardsArray';

// import cn from 'classnames';

import styles from './SearchSection.module.scss';
import Button from '../../assets/ui-kit/Button/Button';
import SearchResult from '../SearchResult/SearchResult';

function SearchSection() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [inputValue, setInputVlaue] = useState('');
	const [placeholder, setPlaceholder] = useState('Название кофеӣни / адрес');
	const [isQuery, setIsQuery] = useState(false);
	const [isPopupOpened, setIsPopupOpened] = useState(false);

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

		searchResult.length > 0 ? setIsPopupOpened(true) : setIsPopupOpened(false);
		return searchResult;
	};

	const handleChange = e => {
		!e.target.value ? setIsQuery(false) : setIsQuery(true);
		setInputVlaue(e.target.value);

		// сбрасываем стейт перед новой фильтрацией
		dispatch(resetFilteredCards());
		const result = onFilter(e.target.value, cardsArray);

		// передаем отфильтрованные карточки в стейт
		dispatch(setFilteredCards(result));
		dispatch(setCards(result));
		console.log('popup', isPopupOpened);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!isQuery) {
			setPlaceholder('Нужно ввести ключевое слово');
		} else {
			const result = onFilter(inputValue, cardsArray);

			dispatch(clear());
			dispatch(setCards(result));
			setIsPopupOpened(false);
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
				<SearchResult isPopupOpened={isPopupOpened} setIsPopupOpened={setIsPopupOpened} />
			</div>
			<Button onClick={handleSubmit} text="найти" size="small" />
		</section>
	);
}

export default SearchSection;
