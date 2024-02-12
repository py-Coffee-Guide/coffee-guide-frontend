import { useState } from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './FavouritesButton.module.scss';

function FavouritesButton({ type, theme, active }) {


	const [isActive, setIsActive] = useState(active);

	const buttonClassName = cn(styles.default);
	const buttonActiveClassName = cn(styles.default, styles.active);

	return (
		<button
			type={type}
			className={isActive ? buttonActiveClassName : buttonClassName}
			onClick={() => {
				setIsActive(!isActive);

			}}
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
