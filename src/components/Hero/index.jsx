// src/components/Hero/index.jsx
import PropTypes from "prop-types";
import styles from './Hero.module.scss';
import defaultBgImage from '../../assets/marble-texture.jpg';


const Hero = ({ image, children }) => {
  const imageSource = image || defaultBgImage;

  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${imageSource})` }}>
      {children && <div className={styles.hero__children}>{children}</div>}
    </div>
  );
};

Hero.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.string,  // image can be a URL (string)
    PropTypes.object   // or a local asset (object)
  ]),
  children: PropTypes.node, 
};

export default Hero;
