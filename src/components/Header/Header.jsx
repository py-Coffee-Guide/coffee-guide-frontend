import logoPath from '../../assets/images/logo.svg';
import Button from '../../assets/ui-kit/Button/Button';
import Theme from '../Theme/Theme';
import SearchSection from '../SearchSection/SearchSection';

import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<img className={styles.logo} src={logoPath} alt="Лого" />
				<SearchSection />
				<nav className={styles.align_container}>
					<div className={styles.favourites}>
						<div className={styles.icon} />
						<p>Избранное</p>
					</div>
					<Theme />
					{/* <div className={styles.switcher}>
					<img src={switcherIcon} alt="Switcher" />
				</div> */}
				</nav>
			</div>
		</header>
	);
}

export default Header;
