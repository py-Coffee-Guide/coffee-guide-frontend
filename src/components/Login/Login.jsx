import { NavLink } from 'react-router-dom';
import styles from './Login.module.scss';

import Form from '../Form/Form';
import FormItem from '../FormItem/FormItem';
import Button from '../../assets/ui-kit/Button/Button';

function Login() {
	return (
		<section className={styles.container}>
			<div className={styles.aligner}>
				<Form>
					<FormItem placeholder="почта / инн" />
					<FormItem placeholder="пароль" />
					<Button type="submit" size="large" text="войти" />
				</Form>
				<div className={styles.links}>
					<p>Впервые у нас?</p>
					<NavLink to="/signup" className={styles.link}>
						Зарегистрироваться
					</NavLink>
				</div>
			</div>
			<p className={styles.text}>
				В случае если вы забыли пароль или у вас возникли вопросы, напишите нам admin@gmail.com
			</p>
		</section>
	);
}

export default Login;
