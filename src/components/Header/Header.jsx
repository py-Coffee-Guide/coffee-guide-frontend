import logoPath from '../../assets/images/logo.svg';
import switcherIcon from '../../assets/images/switcher-icon.svg';
import Button from '../../assets/ui-kit/Button/Button';

import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<img className={styles.logo} src={logoPath} alt="Лого" />
			<nav className={styles.align_container}>
				<div className={styles.favourites}>
					<Button preset="action" />
					{/* <div className={styles.icon} /> */}
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
