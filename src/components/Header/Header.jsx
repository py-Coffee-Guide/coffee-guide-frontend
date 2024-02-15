import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../slices/cardsSlice/cardsSlice';

import { api } from '../../slices/apiSlice/apiSlice';

import logoPath from '../../assets/images/logo.svg';
import iconPath from '../../assets/images/profile-icon.svg';
import Theme from '../Theme/Theme';
import SearchSection from '../SearchSection/SearchSection';

import styles from './Header.module.scss';

const FullRenderedSection = () => (
	<>
		<SearchSection />
		<nav className={styles.align_container}>
			<div className={styles.favourites}>
				<div className={styles.icon} />
				<p className={styles.text}>Избранное</p>
			</div>
			<Theme />
		</nav>
	</>
);

function Header() {
	const location = useLocation();
	const dispatch = useDispatch();

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link to="/">
					<button type="button" onClick={() => dispatch(reset())} className={styles.logo}>
						<img className={styles.logo} src={logoPath} alt="Лого" />{' '}
					</button>
				</Link>

				{!['/signin', '/signup', '/profile'].some(path => location.pathname.match(path)) ? (
					<FullRenderedSection />
				) : (
					<nav className={styles.align_container}>
						{location.pathname.match('/profile') && (
							<div className={styles.profile}>
								<img src={iconPath} className={styles.profile_icon} alt="profile" />
								<p className={styles.text}>pochta@email.ru</p>
							</div>
						)}
						<Theme />
					</nav>
				)}
			</div>
		</header>
	);
}

export default Header;
