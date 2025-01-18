// src/components/Header/index.jsx
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logoKasa from '@/assets/logo-kasa.png'; 

/**
 * Navigation component inside the Header.
 *
 * Key points:
 * 1. **Navigation Links**:
 *    - The navigation consists of two links: "Accueil" (Home) and "À propos" (About).
 *    - These links are wrapped in `Link` components from `react-router-dom` for client-side navigation, preventing page reloads.
 *    - Each link is styled using `styles.header__nav__link` for consistent visual appearance and hover effect.
 *
 * @returns {JSX.Element} The rendered navigation component inside the header.
 */
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
