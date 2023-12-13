import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import locationImg from '../../assets/images/location-icon.svg';
import profileIcon from '../../assets/images/profile-icon.svg';

function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.container}>
				<NavLink to="/">
					<div className={styles.logo} />
				</NavLink>
				<nav className={styles.align_container}>
					<div className={styles.link_container}>
						<NavLink to="/" className={styles.text_link}>
							<p>О нас</p>
						</NavLink>
						<NavLink to="/" className={styles.text_link}>
							<p>Поиск кофейни</p>
						</NavLink>
						<NavLink to="/" className={styles.text_link}>
							<p>Интересные предложения</p>
						</NavLink>
					</div>
					<div className={styles.city_container}>
						<img src={locationImg} alt="location" />
						<p>Москва</p>
					</div>
					<div className={styles.profile}>
						<img src={profileIcon} alt="profile" />
						<p>Иван И.</p>
					</div>
				</nav>
			</nav>
		</header>
	);
}

export default Header;
