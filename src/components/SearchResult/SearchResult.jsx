import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { setCard } from '../../slices/cardSlice/cardSlice';

import styles from './SearchResult.module.scss';
import CardMedium from '../CardMedium/CardMedium';

function SearchResult({ isPopupOpened, setIsPopupOpened }) {
	const filteredCards = useSelector(state => state.filteredCards);
	const card = useSelector(state => state.card);
	const dispatch = useDispatch();

	const resultClassName = cn(
		styles.result_container,
		isPopupOpened ? styles.popup_opened : styles.popup,
	);

	function handleClick() {
		setIsPopupOpened(false);
	}

	return (
		<div className={resultClassName}>
			<ul className={styles.result}>
				{filteredCards.slice(0, 4).map(item => (
					<li className={styles.item} key={item.id}>
						<Link onClick={() => handleClick()} to={`/card/${item.id}`} className={styles.link}>
							<p className={styles.title}>{item.name}</p>
							<address className={styles.address}>{item.address}</address>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchResult;
