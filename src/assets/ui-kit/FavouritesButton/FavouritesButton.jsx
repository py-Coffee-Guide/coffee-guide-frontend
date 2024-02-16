import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './FavouritesButton.module.scss';

import { addToFavourite } from '../../../slices/favouritesSlice/favouritesSlice';

function FavouritesButton({ type, theme, active, onClick, card }) {
	const { isLiked } = useSelector(state => state.favourites.favourites);
	console.log(isLiked);
	const buttonClassName = cn(styles.default, { [styles.active]: false });
	const dispatch = useDispatch();
	return (
		<button
			type={type}
			className={buttonClassName}
			onClick={() => dispatch(addToFavourite(card))}
			aria-label="FavouritesButton"
		/>
	);
}

FavouritesButton.propTypes = {
	type: PropTypes.oneOf(['submit', 'button']),
	theme: PropTypes.oneOf(['light', 'dark']),
	active: PropTypes.bool,
};

FavouritesButton.defaultProps = {
	type: 'button',
	theme: 'light',
	active: false,
};

export default FavouritesButton;
