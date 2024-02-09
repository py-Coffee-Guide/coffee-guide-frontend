import { Link, useLocation } from 'react-router-dom';
import logoPath from '../../assets/images/logo.svg';
import Theme from '../Theme/Theme';
import SearchSection from '../SearchSection/SearchSection';

import styles from './Header.module.scss';

const FullRenderedSection = () => (
	<>
		<SearchSection />
		<nav className={styles.align_container}>
			<div className={styles.favourites}>
				<div className={styles.icon} />
				<p>Избранное</p>
			</div>
			<Theme />
		</nav>
	</>
);

function Header() {
	const location = useLocation();
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link to="/" className={styles.logo}>
					<img className={styles.logo} src={logoPath} alt="Лого" />{' '}
				</Link>

				{!['/signin', '/signup', '/add-coffeeshop'].some(path => location.pathname.match(path)) ? (
					<FullRenderedSection />
				) : (
					<Theme />
				)}
			</div>
		</header>
	);
}

export default Header;
