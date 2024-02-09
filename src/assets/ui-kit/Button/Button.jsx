import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Button.module.scss';

function Button({ type, text, size, onClick }) {
	const btnClassName = cn(styles.button, styles[size]);

	return (
		<button onClick={onClick} type={type} className={btnClassName}>
			<p>{text}</p>
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.oneOf(['submit', 'button']),
	size: PropTypes.oneOf(['large', 'medium', 'small']),
};

Button.defaultProps = {
	type: 'button',
	size: 'large',
};

export default Button;
