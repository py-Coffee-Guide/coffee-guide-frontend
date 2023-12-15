import classNames from 'classnames';
import styles from './PopupWithForm.module.scss';

function PopupWithForm({ onClose, isOpen, children, onSubmit }) {
	return (
		<div
			className={classNames(styles.popup, {
				[styles.open]: isOpen,
			})}
		>
			<div className={styles.container}>
				<form onSubmit={onSubmit} action="#" className={styles.form} noValidate name="qwe">
					{children}
				</form>
				<button onClick={onClose} type="button" className={styles.close} />
			</div>
		</div>
	);
}

export default PopupWithForm;
