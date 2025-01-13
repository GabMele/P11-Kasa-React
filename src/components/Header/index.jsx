// src/components/Header/index.jsx
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logoKasa from '@/assets/logo-kasa.png';

const Header = () => {
    return (
        <header className={styles.header}>
            {/* Logo */}
            <div className={styles.header__logo}>
                <Link to="/">
                    <img src={logoKasa} alt="Logo Kasa" />
                </Link>
            </div>

            {/* Navigation */}
            <nav className={styles.header__nav}>
                <Link to="/" className={styles.header__nav__link}>Accueil</Link>
                <Link to="/about" className={styles.header__nav__link}>À propos</Link>
            </nav>
        </header>
    );
}

export default Header;
