import { NavLink } from 'react-router-dom';

import styles from './CardPhoto.module.scss';

function CardPhoto() {
	return (
		<>
			<img className={styles.image_1} src="" alt="фото кофейни" />
			<img className={styles.image_2} src="" alt="фото кофейни" />
			<img className={styles.image_3} src="" alt="фото кофейни" />
			<NavLink to="/" className={styles.link}>
				<p>ещё фото</p>
			</NavLink>
		</>
	);
}

export default CardPhoto;
