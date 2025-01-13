import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.errorPage__title}>404</h1>
      <p className={styles.errorPage__message}>Oups ! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/" className={styles.errorPage__link}>Retourner sur la page d&apos;accueil</Link>
    </div>
  );
}

export default ErrorPage;

