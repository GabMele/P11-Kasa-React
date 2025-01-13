// src/components/Hero/index.jsx
import PropTypes from "prop-types";
import styles from './Hero.module.scss';
import defaultBgImage from '../../assets/marble-texture.jpg';


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
