import { NavLink } from 'react-router-dom';
import styles from './Register.module.scss';

import Form from '../Form/Form';
import FormItem from '../FormItem/FormItem';
import Button from '../../assets/ui-kit/Button/Button';

function Register() {
	return (
		<section className={styles.container}>
			<div className={styles.aligner}>
				<Form>
					<FormItem placeholder="почта" />
					<FormItem placeholder="инн" />
					<FormItem placeholder="название организации" />
					<Button type="submit" size="large" text="зарегистрироваться" />
				</Form>
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
