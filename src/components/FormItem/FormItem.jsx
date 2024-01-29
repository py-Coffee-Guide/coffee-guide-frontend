import styles from './FormItem.module.scss';

function FormItem({ placeholder, type }) {
	return (
		<div className={styles.container}>
			<input type={type} placeholder={placeholder} className={styles.input} />
		</div>
	);
}

export default FormItem;
