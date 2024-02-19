import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	setCards,
	clearCards,
	clearFiltered,
	setFiltered,
} from '../../slices/cardsSlice/cardsSlice';
import { useGetFilteredCardsQuery } from '../../slices/apiSlice/apiSlice';

// import cn from 'classnames';

import styles from './SearchSection.module.scss';
import Button from '../../assets/ui-kit/Button/Button';
import SearchResult from '../SearchResult/SearchResult';

function SearchSection() {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			text: '',
		},
	});

	const [inputValue, setInputVlaue] = useState('');
	const [placeholder, setPlaceholder] = useState('Название кофеӣни / адрес');

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { data, isLoading, isSuccess, refetch } = useGetFilteredCardsQuery({
		name: inputValue,
		address: inputValue,
	});

	const handleChange = e => {
		setInputVlaue(e.target.value);
		dispatch(clearFiltered());
		dispatch(setFiltered(data.results));
	};

	useEffect(() => {
		handleChange();
	}, [inputValue]);

	const onSubmit = data => {
		dispatch(setCards(data.results));
		reset();
	};

	console.log(inputValue);

	if (isLoading) {
		return <p>loading....</p>;
	}
	return (
		<form className={styles.container} onSubmit={handleSubmit(onSubmit)} noValidate>
			<div className={styles.input_container}>
				<input
					{...register('text', { required: true })}
					className={styles.input}
					placeholder={placeholder}
					value={inputValue}
					onChange={handleChange}
				/>
				<SearchResult isVisible={inputValue !== ''} />
			</div>
			<Button type="submit" text="найти" size="small" />
		</form>
	);
}

export default SearchSection;
