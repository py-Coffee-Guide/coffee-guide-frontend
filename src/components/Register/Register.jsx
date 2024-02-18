import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import styles from './Register.module.scss';

import { useAddUserMutation, useGetUsersQuery } from '../../slices/apiSlice/apiSlice';

import * as testApi from '../../utils/testApi';

import Button from '../../assets/ui-kit/Button/Button';

function Register() {
	const navigate = useNavigate();
	// const [inputValues, setInputValues] = useState({});

	const inputValues = {
		name: 'user',
		email: 'user@email.com',
		organization_inn: '6320052778',
	};
	console.log('inputValues ==>', inputValues);

	const { data = [], isLoading } = useGetUsersQuery();
	console.log('users ==>', data);

	const [addUser, { isError }] = useAddUserMutation();

	const handleAddUser = async () => {
		if (inputValues) {
			await addUser(inputValues).unwrap();
			// setInputValues({});
		}
	};

	// function handleReg() {
	// 	const inputValues ={
	// 		name: 'user',
	// 		email: 'user@example.com',
	// 		organization_inn: '6320052778',
	// 	}
	// 	console.log('inputValues ==>', inputValues);

	// 	const { name, email, organization_inn } = inputValues;

	// 	testApi
	// 		.register(name, email, organization_inn)
	// 		.then(data => {
	// 			console.log('data reg ==>', data);
	// 		})
	// 		.catch(err => console.log(err));
	// }

	const {
		register,
		getValues,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ defaultValues: { email: '', organization_inn: '', name: '' }, mode: 'onChange' });

	const onSubmit = userData => {
		// метод из апи POST user

		console.log(userData);
		navigate('/signin', { replace: true });
		reset();
	};
	const inputItemClassName = type => cn(styles.input, [errors[type] && styles.input_error]);

	return (
		<section className={styles.container}>
			<div className={styles.aligner}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
					<div className={styles.input_container}>
						<input
							type="email"
							{...register('email', {
								required: 'Необходимо ввести почту',
								pattern: {
									value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g,
									message: 'Введите корректный email',
								},
							})}
							className={inputItemClassName('email')}
							placeholder="почта"
						/>
						{errors.email && <span className={styles.error}>{errors.email?.message}</span>}
					</div>
					<div className={styles.input_container}>
						<input
							type="text"
							{...register('organization_inn', {
								required: 'Необходимо ввести ИНН',
								pattern: {
									value: /\d$/g,
									message: 'Введите корректный ИНН',
								},
							})}
							className={inputItemClassName('organization_inn')}
							placeholder="инн"
						/>
						{errors.organization_inn && (
							<span className={styles.error}>{errors.organization_inn?.message}</span>
						)}
					</div>
					<div className={styles.input_container}>
						<input
							type="text"
							{...register('name', {
								required: 'Необходимо ввести название организации',
								pattern: {
									value: /[\wа-яА-Я\s]+$/g,
									message: 'Название включает только буквы и цифры',
								},
							})}
							className={inputItemClassName('name')}
							placeholder="название организации"
						/>
						{errors.name && <span className={styles.error}>{errors.name?.message}</span>}
					</div>
					<Button
						// onClick={() => handleReg()}
						onClick={() => {
							// setInputValues(JSON.stringify(getValues()));
							handleAddUser();
						}}
						type="submit"
						size="large"
						text="получить пароль"
					/>
				</form>

				<div className={styles.links}>
					<p>Уже зарегистрированы?</p>
					<NavLink to="/signin" className={styles.link}>
						Войти
					</NavLink>
				</div>
			</div>
		</section>
	);
}

export default Register;
