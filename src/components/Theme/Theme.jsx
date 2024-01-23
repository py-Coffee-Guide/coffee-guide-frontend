import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import { set } from '../../slices/themeSlice/themeSlice';
import styles from './Theme.module.scss';

const Theme = ({ className }) => {
	const theme = useSelector(state => state.theme);
	const dispatch = useDispatch();

	React.useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	const handleChange = () => {
		const next = theme === 'dark' ? 'light' : 'dark';
		dispatch(set(next));
	};

	return (
		<div className="checkbox__filter">
			<input
				onChange={handleChange}
				type="checkbox"
				// checked={isChecked}
				className="checkbox__toggler"
			/>
			<span className="checkbox__toggler-slider" />
		</div>
		// <input
		// 	type="checkbox"
		// 	className={cn(className, styles.root, theme === 'dark' ? styles.dark : styles.light)}
		// 	onClick={handleChange}
		// 	aria-label="switch"
		// />
	);
};

export default Theme;
