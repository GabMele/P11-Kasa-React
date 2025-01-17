import PropTypes from "prop-types";
import styles from './Hero.module.scss';
import defaultBgImage from '../../assets/marble-texture.jpg';

/**
 * A versatile Hero component that implements a full-width background image with optional overlay
 * and content positioning.
 * 
 * @component
 * 
 * Key React Implementation Details:
 * 1. **Performance Considerations**:
 *    - Uses inline styles for dynamic properties only (background-image, opacity)
 *    - Static styles are kept in CSS modules for better caching and performance
 *    - No state management means pure renders without unnecessary re-renders
 * 
 * 2. **Composability Pattern**:
 *    - Implements the children prop pattern for maximum flexibility
 *    - Can be used as both a container (<Hero>content</Hero>) or standalone (<Hero />)
 *    - Allows for nested components while maintaining semantic HTML structure
 * 
 * 3. **CSS Module Integration**:
 *    - Uses CSS Modules for style encapsulation to prevent global namespace pollution
 *    - Maintains clear separation between dynamic and static styles
 *    - Allows for easy theme customization through SCSS variables
 * 
 * 4. **Asset Handling**:
 *    - Supports both external URLs and imported assets for background images
 *    - Provides fallback to default background if image prop is undefined
 * 
 * 
 * @param {Object} props - Component props
 * @param {(string|Object)} [props.image] - Background image URL or imported asset. 
 *        Falls back to defaultBgImage if not provided.
 * @param {number} [props.overlayOpacity=0] - Opacity value for the dark overlay (0-1).
 *        Use 0 for no overlay, 1 for fully opaque.
 * @param {React.ReactNode} [props.children] - Content to render inside the hero.
 *        Wrapped in a centered container div.
 * 
 * @returns {JSX.Element} The rendered Hero component
 * 
 */
const Hero = ({ image, overlayOpacity = 0, children }) => {
  const imageSource = image || defaultBgImage;
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${imageSource})` }}>
        <div
            className={styles.hero__overlay}
            style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        />
      {children && <div className={styles.hero__children}>{children}</div>}
    </div>
  );
};

Hero.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.string,  // image can be a URL (string)
    PropTypes.object   // or a local asset (object)
  ]),
  overlayOpacity: PropTypes.number, 
  children: PropTypes.node, 
};

export default Hero;