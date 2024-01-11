import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({ text, type, preset, additions }) {
	const btnClassName = cn(styles.button, styles[preset], styles[`${preset}_${additions}`]);
	return (
		<button type={type} className={btnClassName}>
			{text}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.oneOf(['submit', 'button']),
	preset: PropTypes.oneOf(['search', 'tag']),
	additions: PropTypes.oneOf(['default', 'active', 'disabled']),
};

Button.defaultProps = {
	type: 'button',
	preset: 'tag',
	additions: 'default',
};

export default Button;
