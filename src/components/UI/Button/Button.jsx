import './Button.scss';

function Button({ text, cls, ...props }) {
	return (
		<button className={`btn btn_${cls}`} {...props}>
			{text}
		</button>
	);
}

export default Button;
