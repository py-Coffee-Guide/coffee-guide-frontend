import styles from './Form.module.scss';

function Form({ children }) {
	return <form className={styles.container}>{children}</form>;
}

export default Form;
