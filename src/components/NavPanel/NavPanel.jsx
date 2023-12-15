import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './NavPanel.module.scss';

function NavPanel({ onEnter }) {
	const [firsRender, setFirstRender] = useState(true);
	const [btnActive, setBtnActive] = useState(true);

	useEffect(() => {
		if (!btnActive) {
			setFirstRender(false);
		}
	}, [btnActive]);
	function changeActiveBtn(state) {
		setBtnActive(state);
		onEnter(state);
	}

	return (
		<div className={styles.nav}>
			<div className={styles.content}>
				<button onClick={() => changeActiveBtn(true)} className={styles.btn} type="button">
					Телефон
				</button>
				<button onClick={() => changeActiveBtn(false)} className={styles.btn} type="button">
					E-mail
				</button>
			</div>
			<div className={styles.line}>
				<span
					className={classNames(styles.decor, {
						[styles.decor_email]: !btnActive,
						[styles.decor_tel]: !firsRender && btnActive,
					})}
				/>
			</div>
		</div>
	);
}

export default NavPanel;
