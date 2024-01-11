import logoPath from '../../assets/images/logo.svg';
import favouriteIcon from '../../assets/images/favourites.svg';
import switcherIcon from '../../assets/images/switcher-icon.svg';

import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<img className={styles.logo} src={logoPath} alt="Лого" />
			<nav className={styles.align_container}>
				<div className={styles.favourites}>
					<img src={favouriteIcon} alt="Избарнное" />
					<p>ИЗБРАННОЕ</p>
				</div>
				<div className={styles.switcher}>
					<img src={switcherIcon} alt="Switcher" />
				</div>
			</nav>
		</header>
	);
}

export default Header;
