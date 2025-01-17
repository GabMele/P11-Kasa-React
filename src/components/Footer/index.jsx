/**
 * `Footer` component renders the footer of the page with a logo and copyright information.
 * 
 * The component includes a logo wrapped in a `Link` component, directing to the homepage (`/`).
 * 
 * The logo image is sourced from the `logo-kasa.png` file and the background is set using an asset.
 * 
 * @returns {JSX.Element} The JSX structure of the footer with logo and copyright info.
 */
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logoKasa from '@/assets/logo-kasa.png';
import defaultBgImage from '../../assets/marble-texture.jpg';

function Footer() {
    return (
        <footer className={styles.footer}
            style={{ backgroundImage: `url(${defaultBgImage})` }
            }>
            {/* Logo */}
            <div className={styles.footer__logo}>
                <Link to="/">
                    <img src={logoKasa} alt="Logo Kasa" />
                </Link>
            </div>
            <div className={styles.footer__copyright}>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
