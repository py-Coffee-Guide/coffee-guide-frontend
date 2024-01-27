import { useState } from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({ text, icon, type, preset, additions }) {
	const [isHovered, setIsHovered] = useState(false);
	const { black, white } = icon;

	const btnClassName = cn(styles.button, styles[preset], styles[`${preset}_${additions}`]);

	return (
		<button
			type={type}
			className={btnClassName}
			onMouseOver={() => setIsHovered(true)}
			onFocus={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
			onBlur={() => setIsHovered(false)}
		>
			<img src={isHovered ? white : black} alt="icon" className={styles.icon} />
			<p className={styles.text}>{text}</p>
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.oneOf(['submit', 'button']),
	preset: PropTypes.oneOf(['search', 'tag', 'action']),
	additions: PropTypes.oneOf(['default', 'active', 'disabled', 'close']),
};

Button.defaultProps = {
	type: 'button',
	preset: 'tag',
	additions: 'default',
};

export default Button;
