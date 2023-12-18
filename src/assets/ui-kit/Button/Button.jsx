import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

/*
Универсалный конструктор кнопок (ваяяя!)
Нужные для дезигна параметры указываем через пропсы кнопки
По примеру: 
<Button
	text = "любой текст"
	type = "button"
	size = "large"
	color: "gray"
	bordered: true
 */

function Button({ text, type, size, color, bordered }) {
	const btnClassName = cn(styles.button, styles[size], styles[color], bordered && styles.bordered);
	return (
		<button type={type} className={btnClassName}>
			{text}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.oneOf(['submit', 'button']),
	size: PropTypes.oneOf(['large', 'medium', 'tag']),
	color: PropTypes.oneOf(['orange', 'gray', 'dark-gray', 'transparent']),
	bordered: PropTypes.bool,
};

Button.defaultProps = {
	type: 'button',
	size: 'large',
	color: 'orange',
	bordered: false,
};

export default Button;
